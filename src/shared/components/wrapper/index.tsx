import React from 'react';
import {Platform, ScrollView, View} from 'react-native';
import OverlayLoader from '@/shared/components/overlayLoader';
import CustomStatusBar from '@/shared/components/customStatusBar';
import {StatusBarStyle} from 'react-native/Libraries/Components/StatusBar/StatusBar';
import {normalize} from '@/shared/helpers';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {semantic} from '@/shared/constants/colors';

interface WrapperProps {
  children: React.ReactNode;
  backgroundColorStatusBar?: string;
  barStyle?: StatusBarStyle;
  loading?: boolean;
  titleLoader?: string;
}
export default function Wrapper({
  children,
  backgroundColorStatusBar,
  barStyle,
  loading,
  titleLoader,
}: WrapperProps) {
  const {isDarkMode} = useDarkMode();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? semantic.background.dark.d500 : 'white',
      }}>
      <OverlayLoader loading={loading} title={titleLoader} />
      <CustomStatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColorStatusBar}
      />
      <View style={{height: normalize(32)}} />
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      {Platform.OS === 'ios' && <View style={{height: normalize(20)}} />}
    </View>
  );
}
