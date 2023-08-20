import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import Icon from "@/shared/components/icon";
import { check, chevronLeft, packageIcon, truck, truckInTracking } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import { normalize } from "@/shared/helpers";

export default function Tracking() {

  return (
    <Wrapper>
      <View style={{paddingHorizontal: normalize(24)}}>
        <HeaderWithIcon title="tracking.title" />

        <View style={styles.card}>
          <View style={styles.containerCardStatus}>
            <View style={styles.row}>
              <View style={styles.containerIcon}>
                <Icon customStyles={styles.icon} icon={truck} />
              </View>
              <View style={styles.containerInfo}>
                <Typography style={styles.title} translate={false}>#434324US</Typography>
                <Typography style={styles.status} translate={false}>On Progress</Typography>
              </View>
            </View>

            <View>
              <Icon icon={chevronLeft} />
            </View>
          </View>
          <View style={styles.containerInfoDelivery}>
            <View style={{flex: 1}}>
              <Typography style={styles.titleSection}>{"tracking.estimate_delivery"}</Typography>
              <Typography style={styles.valueSection}>20 feb, 2023</Typography>
            </View>
            <View style={{flex: 1}}>
              <Typography style={styles.titleSection}>{"tracking.shipment"}</Typography>
              <Typography style={styles.valueSection}>Kencana Express</Typography>
            </View>
          </View>
        </View>

        <View style={styles.containerTrack}>
          <View style={styles.containerIcons}>
            <Icon customStyles={styles.iconActive} icon={packageIcon} />
            <View style={styles.containerCheckActive}>
              <Icon customStyles={styles.checkIcon} icon={check} />
            </View>
          </View>
          <View style={styles.containerIcons}>
            <Icon customStyles={styles.iconActive} icon={truckInTracking} />
            <View style={styles.containerCheckActive}>
              <Icon customStyles={styles.checkIcon} icon={check} />
            </View>
          </View>
          <View style={styles.containerIcons}>
            <Icon customStyles={styles.iconActive} icon={packageIcon} />
            <View style={styles.containerCheckActive}>
              <Icon customStyles={styles.checkIcon} icon={check} />
            </View>
          </View>
          <View style={styles.containerIcons}>
            <Icon customStyles={styles.iconInActive} icon={packageIcon} />
            <View style={styles.containerCheckInActive}>
              <Icon customStyles={styles.checkIconInactive} icon={check} />
            </View>
          </View>
        </View>

        <View>
          <Typography style={styles.titleHistory}>{"tracking.packet_delivery"}</Typography>
        </View>

      </View>
    </Wrapper>
  )
}
