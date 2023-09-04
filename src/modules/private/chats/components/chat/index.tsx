import {TouchableOpacity, View} from 'react-native';
import Typography from '@/shared/components/typography';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';

export default function Chat() {
  const navigation = useNavigation<NavigationProps>();

  function goToConversation() {
    navigation.navigate('conversation');
  }
  return (
    <TouchableOpacity onPress={goToConversation} style={styles.container}>
      <View style={{flex: 1}}>
        <Typography translate={false} style={styles.title}>
          Order - 203923
        </Typography>
        <Typography numberOfLines={1} translate={false} style={styles.message}>
          Quite crowded but I have got your order.
        </Typography>
      </View>
      <View>
        <Typography translate={false}>11:00</Typography>
        <View style={styles.containerCount}>
          <Typography translate={false} style={styles.textCount}>
            2
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
}
