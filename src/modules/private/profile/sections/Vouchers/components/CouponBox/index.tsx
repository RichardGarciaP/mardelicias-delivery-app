import {View, TouchableOpacity, ColorValue} from 'react-native';
import React from 'react';
import Typography from '@/shared/components/typography';
import {_styles} from './styles';
import {palette} from '@/shared/constants/colors';
import Icon from '@/shared/components/icon';
import {calendar, dolar, plant} from '@/shared/assets/icons';

interface CouponBoxProps {
  title: string;
  description: string;
  code: string;
  validDate: string;
  minTransaction: string;
  upperIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
}

const CouponBox = ({
  title,
  description,
  code,
  validDate,
  minTransaction,
  upperIcon = <Icon icon={plant} />,
  leftIcon = <Icon icon={calendar} />,
  rightIcon = <Icon icon={dolar} />,
  backgroundColor = palette.main.p500,
  borderColor = palette.main.p500,
}: CouponBoxProps) => {
  return (
    <TouchableOpacity style={[_styles.container, {borderColor}]}>
      <View style={[_styles.upperPart, {backgroundColor}]}>
        <View style={[_styles.vocherInfo, {flex: 0.8}]}>
          {upperIcon}
          <View
            style={{
              marginLeft: 10,
            }}>
            <Typography
              style={{color: '#FFF', fontWeight: '500', fontSize: 14}}>
              {title}
            </Typography>
            <Typography
              style={{
                color: '#FFF',
                fontWeight: '700',
                fontSize: 14,
                marginTop: 10,
              }}>
              {description}
            </Typography>
          </View>
        </View>
        <View style={_styles.divider} />
        <View style={[_styles.vocherInfo, {justifyContent: 'space-between'}]}>
          <Typography style={{color: '#FFF', fontWeight: '500', fontSize: 12}}>
            Your coupon code:
          </Typography>
          <Typography style={{color: '#FFF', fontWeight: '700', fontSize: 16}}>
            {code}
          </Typography>
        </View>
      </View>

      {/* row */}
      <View style={_styles.bottomPart}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftIcon}
          <View
            style={{
              marginLeft: 10,
            }}>
            <Typography style={_styles.lightText}>Valid Until</Typography>
            <Typography style={_styles.boldText}>{validDate}</Typography>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {rightIcon}
          <View
            style={{
              marginLeft: 10,
            }}>
            <Typography style={_styles.lightText}>Min Transaction</Typography>
            <Typography style={_styles.boldText}>${minTransaction}</Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CouponBox;
