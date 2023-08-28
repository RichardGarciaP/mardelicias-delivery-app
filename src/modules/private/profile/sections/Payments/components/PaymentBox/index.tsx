import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Typography from '@/shared/components/typography';
import {styles} from './styles';

interface PaymentBoxProps {
  image: React.ReactNode;
}

const PaymentBox = ({image}: PaymentBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{image}</View>
      <TouchableOpacity>
        <Typography style={styles.changeButton}>
          payments.paymentBox.button
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentBox;
