import React from 'react';
import {ScrollView, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import { BannerDTO } from "@/shared/DTO";
import Typography from "@/shared/components/typography";

interface SliderProps {
  banners: BannerDTO[]
}
export default function SpecialOffers({banners}: SliderProps) {
  return (
    <View style={styles.container}>
      <Typography style={styles.titleSection}>{"home.special_offers"}</Typography>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {banners.map((banner, index) => (
          <View key={index} style={styles.divider}>
            <TouchableOpacity style={styles.containerBanner}>
              <Image
                style={styles.image}
                source={{uri: banner.image}}
              />
              <View style={styles.overlay} />
              <View style={styles.containerInfo}>
                <Typography style={styles.title} translate={false}>{banner.name}</Typography>
                <Typography style={styles.description} translate={false}>{banner.description}</Typography>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* <View style={styles.pagination}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={[styles.dot, styles.dividerDots]} />
        <View style={styles.dot} />
      </View>*/}
    </View>
  );
}
