import {Image, View} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import ButtonSheet from '@/shared/components/buttonSheet';
import {Button} from '@/shared/components/buttons';
import {normalize} from '@/shared/helpers';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import {location, map} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import CheckBox from '@/shared/components/checkbox';
import {semantic} from '@/shared/constants/colors';
import useDarkMode from '@/shared/hooks/useDarkMode';
import CustomStatusBar from '@/shared/components/customStatusBar';

const NewAddress = () => {
  const {isDarkMode} = useDarkMode();
  const [check, setCheck] = useState<boolean>(true);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? semantic.background.dark.d500 : 'white',
      }}>
      <CustomStatusBar />
      <View style={{height: normalize(32)}} />
      <View
        style={{
          paddingHorizontal: normalize(24),
          marginBottom: normalize(32),
        }}>
        <HeaderWithIcon title="newAddress.title" />
      </View>
      <Image source={map} />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: semantic.fill.f03,
          borderTopEndRadius: normalize(20),
          borderTopStartRadius: normalize(20),
        }}>
        <View
          style={{
            padding: normalize(24),
            flex: 1,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: normalize(4),
                borderColor: semantic.fill.f01,
                width: normalize(60),
                borderRadius: normalize(100),
              }}
            />
            <Typography
              style={{
                fontSize: normalize(18),
                fontWeight: '700',
                color: semantic.text.black,
                marginVertical: normalize(24),
              }}>
              newAddress.subTitle
            </Typography>
            <View
              style={{
                borderWidth: 1,
                borderColor: semantic.fill.f01,
                width: '100%',
                opacity: 0.05,
                marginBottom: normalize(24),
              }}
            />
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
            <View
              style={{
                marginBottom: normalize(24),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
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
