import React from 'react';
import { Image, View } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";
import Icon from "@/shared/components/icon";
import { likeReview, star, unlike } from "@/shared/assets/icons";
import { normalize } from "@/shared/helpers";

export default function Review() {

  return (
    <View style={{marginBottom: normalize(24)}}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image style={styles.avatar} source={{uri: 'https://i.ibb.co/hZqwx78/049-girl-25.png'}} />

          <View>
            <Typography style={styles.name} translate={false}>Antony Lukas</Typography>
            <Typography style={styles.date} translate={false}>2 days ago</Typography>
          </View>
        </View>

        <View>
          <View style={styles.valueReview}>
            <Icon icon={star} />
            <Typography style={styles.textReview}>5.0</Typography>
          </View>
        </View>
      </View>

      <View style={{marginTop: normalize(12)}}>
        <Typography style={styles.description} translate={false}>
          Always top notch on there order process. Gives quality plants and always handle shipments pretty well. I do love ordering rare plants with them. Been partner with them for 2 years now and I will always order my collection trough them. Thank you so much!
        </Typography>
      </View>

      <View style={styles.row}>
        <View style={styles.row}>
          <Icon icon={likeReview} />
          <Typography style={styles.valueLike} translate={false}>10k</Typography>
        </View>
        <View style={{width: 10}} />
        <View style={styles.row}>
          <Icon icon={unlike} />
          <Typography style={styles.valueLike} translate={false}>500</Typography>
        </View>
      </View>

    </View>
  )
}
