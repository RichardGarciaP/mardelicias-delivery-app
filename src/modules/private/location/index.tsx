import HeaderWithIcon from '@/shared/components/headerBack';
import Wrapper from '@/shared/components/wrapper';
import {normalize} from '@/shared/helpers';
import React from 'react';
import {View} from 'react-native';

const Location = () => {
  return (
    <Wrapper>
      <View style={{paddingHorizontal: normalize(24)}}>
        <HeaderWithIcon title="Ubicación" />
      </View>
    </Wrapper>
  );
};

export default Location;
