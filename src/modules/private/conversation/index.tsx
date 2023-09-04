import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import Header from '@/modules/private/conversation/components/header';
import Input from '@/shared/components/input';
import {styles} from './styles';
import Message from '@/modules/private/conversation/components/message';
import useConversation from '@/modules/private/conversation/hooks/useConversation';
import Icon from '@/shared/components/icon';
import {send} from '@/shared/assets/icons';
import { normalize } from "@/shared/helpers";

export default function Conversation() {
  const {conversations} = useConversation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Ticket - #129129" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ height: '100%', flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : normalize(22)}
      >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        {conversations.map(message => (
          <Message key={message.id} messageInfo={message} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.containerInput}>
          <Input placeholder="Type here..." />
        </View>
        <TouchableOpacity style={styles.containerIcon}>
          <Icon customStyles={styles.icon} icon={send} />
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
