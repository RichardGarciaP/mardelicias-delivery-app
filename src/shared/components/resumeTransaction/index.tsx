import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {currencyType} from '@/shared/constants/global';

interface Props {
  total: number;
  qty: number;
}

const ResumeTransaction = ({total, qty}: Props) => {
  return (
    <View style={styles.resume}>
      {/* <View style={styles.containerResumeText}>
        <Typography>{'checkout.amount'}</Typography>
        <Typography translate={false}>{qty}</Typography>
      </View> */}
      <View style={styles.containerResumeText}>
        <Typography>{'checkout.total'}</Typography>
        <Typography translate={false}>
          {currencyType} {total}
        </Typography>
      </View>
    </View>
  );
};

export default ResumeTransaction;
