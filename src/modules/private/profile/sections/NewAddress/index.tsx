import {View} from 'react-native';
import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';

const NewAddress = () => {
  return (
    <Wrapper>
      <View>
        <HeaderWithIcon title="Add New Address" />
      </View>
    </Wrapper>
  );
};

export default NewAddress;
