import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {styles} from './styles';
import { arrowBack } from "@/shared/assets/icons";
import {useNavigation} from '@react-navigation/native';
import Typography from '@/shared/components/typography';

export default function Header({title}: {title: string}) {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon customStyles={styles.btnIcon} icon={arrowBack} />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Typography style={styles.title} translate={false}>
          {title}
        </Typography>
      </View>
    </View>
  );
}
