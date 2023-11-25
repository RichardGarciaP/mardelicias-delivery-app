import React from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {arrowBack} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {semantic} from '@/shared/constants/colors';

interface HeaderBackProps {
  title?: string;
  icon?: React.ReactNode | undefined;
}
export default function HeaderWithIcon({title, icon}: HeaderBackProps) {
  const {goBack} = useNavigation();
  const {isDarkMode} = useDarkMode();
  const stylesIcon = {
    tintColor: isDarkMode ? semantic.background.white.w500 : semantic.text.grey,
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Icon customStyles={stylesIcon} icon={icon ? icon : arrowBack} />
      </Pressable>

      {title && <Typography style={styles.title}>{title}</Typography>}
    </View>
  );
}
