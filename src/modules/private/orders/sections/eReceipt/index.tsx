import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { Image, View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import Order from "@/modules/private/orders/components/order";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import ResumeTransaction from "@/shared/components/resumeTransaction";
import Icon from "@/shared/components/icon";
import { paypal } from "@/shared/assets/icons";
import { normalize } from "@/shared/helpers";

export default function EReceipt() {

  return (
    <Wrapper>
      <View style={{paddingHorizontal: normalize(24)}}>
        <HeaderWithIcon title="E-Receipt" />

        <Order track={false} product={{
          id: '3',
          image: 'https://i.ibb.co/H2HKBWK/Img-3.png',
          name: 'Strelitzia Nicolai',
          category: 'Indoor',
          price: 25.00,
          size: 'Medium',
          cant: 2
        }} />

        <View style={styles.containerSection}>
          <View style={styles.innerSectionMb}>
            <Typography style={styles.innerTitleSection}>Status</Typography>
            <Typography style={styles.status}>Confirmed</Typography>
          </View>
          <View style={styles.innerSection}>
            <Typography style={styles.innerTitleSection}>Payment Methods</Typography>
            <Image style={{width: normalize(80), height: normalize(23)}} source={paypal} />
          </View>
        </View>

        <View style={styles.containerSection}>
          <View style={styles.innerSectionMb}>
            <Typography style={styles.innerTitleSection}>Date</Typography>
            <Typography style={styles.valueInnerSection} translate={false}>25 Mei, 2023 05:00 PM</Typography>
          </View>
          <View style={styles.innerSectionMb}>
            <Typography style={styles.innerTitleSection}>Name</Typography>
            <Typography style={styles.valueInnerSection} translate={false}>Mukhlisin</Typography>
          </View>
          <View style={styles.innerSectionMb}>
            <Typography style={styles.innerTitleSection}>Address</Typography>
            <Typography style={styles.valueInnerSection} translate={false}>Snow Street, San Francisco California </Typography>
          </View>
          <View style={styles.innerSection}>
            <Typography style={styles.innerTitleSection}>Transaction ID</Typography>
            <Typography style={styles.valueInnerSection} translate={false}>#34247434</Typography>
          </View>
        </View>

        <ResumeTransaction />
      </View>
    </Wrapper>
  )
}
