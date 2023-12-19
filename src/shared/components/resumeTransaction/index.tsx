import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {currencyType} from '@/shared/constants/global';
import {Order} from '@/shared/DTO';

interface Props {
  data: Order;
}

const ResumeTransaction = ({data}: Props) => {
  return (
    <View style={styles.resume}>
      {/* <View style={styles.containerResumeText}>
        <Typography>{'checkout.amount'}</Typography>
        <Typography translate={false}>{qty}</Typography>
      </View> */}
      <View style={styles.containerResumeText}>
        <Typography>{'Pendiente'}</Typography>
        <Typography translate={false}>
          {currencyType} {data?.payment_pending?.toFixed(2)}
        </Typography>
      </View>
      <View style={styles.containerResumeText}>
        <Typography>{'checkout.total'}</Typography>
        <Typography translate={false}>
          {currencyType} {data?.total.toFixed(2)}
        </Typography>
      </View>
    </View>
  );
};

export default ResumeTransaction;
