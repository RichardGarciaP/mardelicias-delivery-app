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

const NewPayment = () => {
  return (
    <Wrapper>
      <View
        style={{
          paddingHorizontal: normalize(24),
        }}>
        <HeaderWithIcon title="newPayment.title" />

        <View
          style={{
            backgroundColor: semantic.fill.f01,
            height: normalize(222),
            borderRadius: normalize(20),
            paddingHorizontal: normalize(12),
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: normalize(32),
            marginBottom: normalize(8),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Typography
              style={{
                fontWeight: '700',
                color: semantic.text.white,
                fontSize: normalize(16),
              }}>
              MoCard
            </Typography>
            <Typography
              style={{
                fontWeight: '700',
                color: semantic.text.white,
                fontSize: normalize(16),
              }}>
              Visa
            </Typography>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: normalize(8),
              alignItems: 'flex-start',
              width: '100%',
            }}>
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View>
              <Typography
                style={{
                  fontWeight: '400',
                  color: semantic.text.white,
                  fontSize: normalize(12),
                }}>
                newPayment.cardHolderName
              </Typography>
              <View
                style={{
                  flexDirection: 'row',
                  gap: normalize(8),
                  alignItems: 'flex-start',
                  width: '100%',
                  marginTop: normalize(12),
                }}>
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
              <Typography
                style={{
                  fontWeight: '400',
                  color: semantic.text.white,
                  fontSize: normalize(12),
                }}>
                newPayment.expiryDate
              </Typography>
              <View
                style={{
                  flexDirection: 'row',
                  gap: normalize(8),
                  alignItems: 'flex-start',
                  width: '100%',
                  marginTop: normalize(12),
                }}>
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
