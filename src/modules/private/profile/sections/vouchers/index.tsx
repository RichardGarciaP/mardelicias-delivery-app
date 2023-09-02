import {View, ScrollView} from 'react-native';
import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {filter, search} from '@/shared/assets/icons';
import CouponBox from './components/couponBox';
import {normalize} from '@/shared/helpers';

const Vouchers = () => {
  return (
    <Wrapper>
      <View
        style={{
          paddingHorizontal: normalize(20),
        }}>
        <HeaderWithIcon title="Vouchers" />
        <View style={{marginVertical: normalize(10)}}>
          <Input
            leftIcon={<Icon icon={search} />}
            placeholder="Search"
            rightIcon={<Icon icon={filter} />}
          />
        </View>
        <View style={{flex: 1}}>
          <ScrollView>
            <CouponBox
              title="#Summer Sale"
              description="Save up to $5.00 on your next purchase"
              code="Plant777"
              validDate="May 31, 2023"
              minTransaction="10.00"
            />
            <CouponBox
              title="#Winter Sale"
              description="Save up to $5.00 on your next purchase"
              code="Plant777"
              validDate="Dec 31, 2023"
              minTransaction="10.00"
              borderColor="#0090E0"
              backgroundColor="#0090E0"
            />
          </ScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default Vouchers;
