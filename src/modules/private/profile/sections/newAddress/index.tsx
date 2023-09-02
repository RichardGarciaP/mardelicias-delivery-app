import {Image, View} from 'react-native';
import React, {useState} from 'react';

import HeaderWithIcon from '@/shared/components/headerBack';

import {Button} from '@/shared/components/buttons';
import {normalize} from '@/shared/helpers';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import {location, map} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import CheckBox from '@/shared/components/checkbox';
import useDarkMode from '@/shared/hooks/useDarkMode';
import CustomStatusBar from '@/shared/components/customStatusBar';
import {_styles} from './styles';

const NewAddress = () => {
  const {isDarkMode} = useDarkMode();
  const [check, setCheck] = useState<boolean>(true);
  const styles = _styles(isDarkMode);

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.topSpace} />
      <View style={styles.headerBack}>
        <HeaderWithIcon title="newAddress.title" />
      </View>
      <Image source={map} />
      <View style={styles.formContainer}>
        <View
          style={{
            padding: normalize(24),
            flex: 1,
          }}>
          <View style={styles.alignCenter}>
            <View style={styles.divider} />
            <Typography style={styles.fontBold}>newAddress.subTitle</Typography>
            <View style={styles.dividerLight} />
          </View>

          <View>
            <View style={{marginBottom: normalize(24)}}>
              <Input
                label="newAddress.name"
                placeholder="newAddress.namePlaceholder"
              />
            </View>
            <View style={{marginBottom: normalize(24)}}>
              <Input
                label="newAddress.address"
                placeholder="newAddress.addressPlaceholder"
                rightIcon={<Icon icon={location} />}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox value={check} onChange={setCheck} />
              <Typography style={{marginLeft: normalize(10)}}>
                newAddress.checkboxText
              </Typography>
            </View>
          </View>

          <Button title="newAddress.button" />
        </View>
      </View>
    </View>
  );
};

export default NewAddress;
