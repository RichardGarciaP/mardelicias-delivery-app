import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Typography from '@/shared/components/typography';
import {_styles} from './styles';

interface PaymentBoxProps {
  image: React.ReactNode;
}

const PaymentBox = ({image}: PaymentBoxProps) => {
  return (
    <View style={_styles.container}>
      <View style={_styles.imageContainer}>{image}</View>
      <TouchableOpacity>
        <Typography style={_styles.changeButton}>Change</Typography>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentBox;
