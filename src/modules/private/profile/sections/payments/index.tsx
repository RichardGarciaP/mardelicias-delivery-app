import {Image, View} from 'react-native';
import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {applePay, filter, paypal, search} from '@/shared/assets/icons';
import PaymentBox from './components/paymentBox';
import {ButtonOutline} from '@/shared/components/buttons';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationProps} from '@/shared/routes/stack';
import {useNavigation} from '@react-navigation/native';
import { normalize } from "@/shared/helpers";

const PAYMENTS_EXAMPLE = [
  {
    id: '1',
    image: <Image style={{width: 77.2, height: normalize(19.9)}} resizeMode="contain" source={applePay} />,
  },
  {
    id: '2',
    image: <Image resizeMode="contain" style={{width: 77.2, height: normalize(19.9)}} source={paypal} />,
  },
];

const Payments = () => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderWithIcon title="payments.title" />
        <View style={styles.searchContainer}>
          <Input
            leftIcon={<Icon icon={search} />}
            rightIcon={<Icon icon={filter} />}
            placeholder="general.search"
          />
        </View>

        <View style={{flex: 1}}>
          <ScrollView>
            {PAYMENTS_EXAMPLE.map(payment => (
              <PaymentBox key={payment.id} image={payment.image} />
            ))}
          </ScrollView>
        </View>

        <ButtonOutline
          title="payments.button"
          onPress={() => navigate('newPayment')}
        />
      </View>
    </Wrapper>
  );
};

export default Payments;
