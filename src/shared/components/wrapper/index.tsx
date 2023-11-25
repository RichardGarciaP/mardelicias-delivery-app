import React from 'react';
import {Platform, ScrollView, View} from 'react-native';
import OverlayLoader from '@/shared/components/overlayLoader';
import CustomStatusBar from '@/shared/components/customStatusBar';
import {StatusBarStyle} from 'react-native/Libraries/Components/StatusBar/StatusBar';
import {normalize} from '@/shared/helpers';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {semantic} from '@/shared/constants/colors';
import {RefreshControl} from 'react-native-gesture-handler';

interface WrapperProps {
  children: React.ReactNode;
  backgroundColorStatusBar?: string;
  barStyle?: StatusBarStyle;
  loading?: boolean;
  titleLoader?: string;
  isScrollView?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}
export default function Wrapper({
  children,
  backgroundColorStatusBar,
  barStyle,
  loading,
  titleLoader,
  refreshing,
  onRefresh,
  isScrollView,
}: WrapperProps) {
  const {isDarkMode} = useDarkMode();

  const renderContent = () => {
    return (
      <View style={{flex: 1}}>
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
  };

  return (
    <>
      {isScrollView ? (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: isDarkMode
              ? semantic.background.dark.d500
              : 'white',
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing ?? false}
              onRefresh={onRefresh}
            />
          }>
          {renderContent()}
        </ScrollView>
      ) : (
        renderContent()
      )}
    </>
  );
}
