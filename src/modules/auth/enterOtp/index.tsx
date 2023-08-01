import React from "react";
import Wrapper from "@/shared/components/wrapper";
import { View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import Typography from "@/shared/components/typography";
import OtpForm from "@/shared/components/otpForm";
import { Button, ButtonOutline } from "@/shared/components/buttons";
import {styles} from './styles'

export default function EnterOtp() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderWithIcon title={"auth.otp_code.title"} />

        <View style={styles.containerEmail}>
          <Typography>{"auth.otp_code.description"}</Typography>
          <Typography style={styles.textEmail} translate={false}>dev@soadtech.io</Typography>
        </View>

        <View style={styles.form}>
          <OtpForm valueOtp={{}} changeOtpField={() => {}} />
        </View>
        <View style={styles.containerBtns}>
          <View style={{flex: 1}}>
            <ButtonOutline title={"general.reset"} />
          </View>
          <View style={styles.divider} />
          <View style={{flex: 1}}>
            <Button title={"general.continue"} />
          </View>
        </View>
      </View>
    </Wrapper>
  )
}
