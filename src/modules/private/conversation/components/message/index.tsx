import React from 'react';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {_styles} from './styles';

export interface Message {
  id: string;
  message: string;
  userSent: string;
  date: string;
}
export interface MessageProps {
  messageInfo: Message;
}
export default function Message({messageInfo}: MessageProps) {
  const currenSessionId = '1';
  const styles = _styles(currenSessionId === messageInfo.userSent);
  return (
    <View style={styles.container}>
      <Typography style={styles.message}>{messageInfo.message}</Typography>
    </View>
  );
}
