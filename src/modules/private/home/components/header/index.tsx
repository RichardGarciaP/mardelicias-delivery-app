import React from 'react';
import { Image, View } from "react-native";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import Icon from "@/shared/components/icon";
import { location, homeNotifications, homeLike } from "@/shared/assets/icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{uri: 'https://i.ibb.co/hZqwx78/049-girl-25.png'}} />
        <View>
          <Typography style={styles.nameUser} translate={false}>Fernando</Typography>
          <View style={styles.row}>
            <Icon customStyles={styles.iconLocation} icon={location} />
            <Typography style={styles.location} translate={false}>San francisco</Typography>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Icon customStyles={styles.iconSize} icon={homeNotifications} />
        <Icon customStyles={styles.iconSize} icon={homeLike} />
      </View>
    </View>
  )
}
