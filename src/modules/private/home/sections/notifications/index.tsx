import React from "react";
import Wrapper from "@/shared/components/wrapper";
import { ScrollView, View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import Typography from "@/shared/components/typography";
import Notification from "@/modules/private/home/sections/notifications/components/notification";
import {styles} from './styles'

export default function Notifications() {
  const sections = [
    {
      id: 1,
      date: 'Today',
      notifications: [
        {
          description: 'Congratulation, you have successfully buy a plants  $25. Enjoy the services',
          title: 'Payment Success',
          state: 'payment'
        },
        {
          description: 'You can buy plants easily and we have a credit simulation to make the buying process easier.',
          title: 'New Service Available',
          state: 'new_service'
        },
      ]
    },
    {
      id: 2,
      date: 'Yesterday',
      notifications: [
        {
          description: 'Your add new payment is successful, you can experience our service',
          title: 'Add Payment Complate',
          state: 'wallet'
        },
        {
          description: 'We a recommend a 5% discount for All Plant. ',
          title: 'Discount Available',
          state: 'promo'
        },
      ]
    },
  ]
  return (
    <Wrapper>
      <ScrollView style={styles.container}>
        <HeaderWithIcon title={"general.notifications"} />

        <View style={styles.body}>
          {sections.map((section) => (
            <View key={section.id}>
              <Typography style={styles.title} translate={false}>{section.date}</Typography>

              <View>
                {section.notifications.map((notification, index) => (
                  <Notification
                    key={index}
                    notification={notification}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Wrapper>
  )
}
