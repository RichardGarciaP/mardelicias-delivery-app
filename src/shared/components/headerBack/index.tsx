import React from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {arrowBack} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {palette, semantic} from '@/shared/constants/colors';

interface HeaderBackProps {
  title?: string;
  icon?: React.ReactNode | undefined;
  enablePressable?: boolean;
}
export default function HeaderWithIcon({
  title,
  icon,
  enablePressable = false,
}: HeaderBackProps) {
  const {goBack} = useNavigation();
  const {isDarkMode} = useDarkMode();
  const stylesIcon = {
    tintColor: isDarkMode ? semantic.background.white.w500 : semantic.text.grey,
  };
  return (
    <View style={styles.container}>
      {enablePressable ? (
        <Pressable
          onPress={goBack}
          android_ripple={{color: palette.main.p200, borderless: true}}
          style={styles.arrowBack}>
          <Icon customStyles={stylesIcon} icon={icon ? icon : arrowBack} />
        </Pressable>
      ) : (
        <Icon customStyles={stylesIcon} icon={icon ? icon : arrowBack} />
      )}

      {title && <Typography style={styles.title}>{title}</Typography>}
    </View>
  );
}
