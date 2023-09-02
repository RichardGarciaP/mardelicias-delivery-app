import {View} from 'react-native';
import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import {Button} from '@/shared/components/buttons';
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
              <View key={index} style={styles.bigDot} />
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
                  <View key={index} style={styles.smallDot} />
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
                {new Array(4).fill(0).map((_, index) => (
                  <View key={index} style={styles.smallDot} />
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
          <Input placeholder="1234 5678 9101 1123" label="newPayment.cardNumber" />
          <Input placeholder="Soadtech" label="newPayment.cardHolderName" />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flex: 0.94}}>
              <Input placeholder="1226" label="newPayment.expiryDate" />
            </View>
            <View style={{width: 50}} />
            <View style={{flex: 0.95}}>
              <Input placeholder="000" label="newPayment.cvv" />
            </View>
          </View>
          <Button title="newPayment.button" />
        </View>
      </View>
    </Wrapper>
  );
};

export default NewPayment;
