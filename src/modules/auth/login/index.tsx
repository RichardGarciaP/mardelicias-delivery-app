import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './styles';
import TitleAuth from '@/shared/components/titleAuth';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {eyeFilled, eyeOff, lock, mail} from '@/shared/assets/icons';
import {Button} from '@/shared/components/buttons';
import Typography from '@/shared/components/typography';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import * as Yup from 'yup';
import {Formik, FormikHelpers, FormikProps} from 'formik';
import {UserDTO} from '@/shared/DTO';
import {storage} from '@/shared/helpers';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {signInWithEmail} from '@/shared/services/login/login';
import {USERS_TYPE_DEFINITIONS} from '@/shared/constants/global';

export default function Login() {
  const navigation = useNavigation<NavigationProps>();
  const [isSecureActive, setIsSecureActive] = React.useState(true);

  const validations = Yup.object({
    email: Yup.string()
      .min(5, 'El correo debe tener más de 5 caracteres')
      .required('El email es requerido'),
    password: Yup.string()
      .min(5, 'La contraseña debe tener más de 5 caracteres')
      .required('La contraseña es requerida'),
  });

  const togglePassword = () => {
    setIsSecureActive(!isSecureActive);
  };

  const onSubmit = async (
    values: UserDTO,
    {setErrors, setStatus, setSubmitting}: FormikHelpers<UserDTO>,
  ) => {
    const {data, error} = await signInWithEmail(values);

    if (error) {
      setErrors({submit: error.message});
      setStatus({success: false});
      setSubmitting(false);
      return;
    }

    if (data.user.user_metadata.role !== USERS_TYPE_DEFINITIONS.DRIVER) {
      setErrors({submit: 'Acceso no permitido'});
      setStatus({success: false});
      setSubmitting(false);
      return;
    }

    setStatus({success: true});
    setSubmitting(false);
    await storage.create('user', data.user);
    await storage.create('session', data.session);
    navigation.push('orders');
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.logo}
            source={require('@/shared/assets/icons/mardelicias.png')}
          />
        </View>
        <Formik
          initialValues={{
            email: 'ruben@gmail.com',
            password: 'qwerty00',
            submit: '',
          }}
          validationSchema={validations}
          onSubmit={onSubmit}>
          {({
            errors,
            handleChange,
            isSubmitting,
            submitForm,
            touched,
            values,
          }: FormikProps<UserDTO>) => (
            <View>
              <View style={styles.form}>
                <View style={styles.formControl}>
                  <Input
                    leftIcon={<Icon icon={mail} />}
                    label="general.email"
                    placeholder="test@gmail.com"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && (
                    <Typography style={styles.textError}>
                      {errors.email}
                    </Typography>
                  )}
                </View>
                <View style={styles.formControl}>
                  <Input
                    leftIcon={<Icon icon={lock} />}
                    rightIcon={
                      <TouchableOpacity onPress={togglePassword}>
                        <Icon icon={isSecureActive ? eyeOff : eyeFilled} />
                      </TouchableOpacity>
                    }
                    secureTextEntry={isSecureActive}
                    label="general.password"
                    placeholder="general.typing_password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Typography style={styles.textError}>
                      {errors.password}
                    </Typography>
                  )}
                </View>
              </View>

              {errors.submit && (
                <View style={styles.formControl}>
                  <Typography style={styles.textError}>
                    {errors.submit}
                  </Typography>
                </View>
              )}
              <View>
                <Button
                  title={'auth.sign_in'}
                  onPress={() => submitForm()}
                  loading={isSubmitting}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
