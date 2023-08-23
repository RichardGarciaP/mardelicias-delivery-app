import {View, Text} from 'react-native';
import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import {Button} from '@/shared/components/buttons';
import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import Icon from '@/shared/components/icon';
import {mastercard} from '@/shared/assets/icons';
import {styles} from './styles';

const NewPayment = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderWithIcon title="newPayment.title" />

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Typography style={styles.textBold}>MoCard</Typography>
            <Typography style={styles.textBold}>Visa</Typography>
          </View>

          <View style={styles.dotsContainer}>
            {new Array(9).fill(0).map((_, index) => (
              <View
                key={index}
                style={{
                  width: normalize(12),
                  height: normalize(12),
                  borderRadius: normalize(6),
                  backgroundColor: semantic.fill.f03,
                }}
              />
            ))}
          </View>

          <View style={styles.rowBetween}>
            <View>
              <Typography style={styles.textLight}>
                newPayment.cardHolderName
              </Typography>
              <View
                style={[
                  styles.dotsContainer,
                  {
                    marginTop: normalize(12),
                  },
                ]}>
                {new Array(10).fill(0).map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: normalize(8),
                      height: normalize(8),
                      borderRadius: normalize(6),
                      backgroundColor: semantic.fill.f03,
                    }}
                  />
                ))}
              </View>
            </View>
            <View>
              <Typography style={styles.textLight}>
                newPayment.expiryDate
              </Typography>
              <View
                style={[
                  styles.dotsContainer,
                  {
                    marginTop: normalize(12),
                  },
                ]}>
                {new Array(10).fill(0).map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: normalize(8),
                      height: normalize(8),
                      borderRadius: normalize(6),
                      backgroundColor: semantic.fill.f03,
                    }}
                  />
                ))}
              </View>
            </View>

            <Icon icon={mastercard} />
          </View>
        </View>

        <View
          style={{
            marginTop: normalize(24),
            gap: normalize(24),
          }}>
          <Input label="newPayment.cardNumber" />
          <Input label="newPayment.cardHolderName" />
          <Input label="newPayment.expiryDate" />
          <Input label="newPayment.cvv" />
          <Button title="newPayment.button" />
        </View>
      </View>
    </Wrapper>
  );
};

export default NewPayment;
