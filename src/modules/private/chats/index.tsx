import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Chat from '@/modules/private/chats/components/chat';
import {semantic} from '@/shared/constants/colors';
import Header from "@/modules/private/conversation/components/header";

export default function Chats() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: semantic.background.white.w500}}>
      <Header title="Tickets" />
      <ScrollView>
        <View style={{flex: 1}}>
          <Chat />
          <Chat />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
