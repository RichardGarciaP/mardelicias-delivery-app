import React from "react";
import Wrapper from "@/shared/components/wrapper";
import HeaderWithIcon from "@/shared/components/headerBack";
import { View } from "react-native";
import TitleAuth from "@/shared/components/titleAuth";
import Typography from "@/shared/components/typography";
import Input from "@/shared/components/input";
import Icon from "@/shared/components/icon";
import { mail } from "@/shared/assets/icons";
import { Button } from "@/shared/components/buttons";
import {styles} from './styles'

export default function ForgotPassword() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderWithIcon />

        <View style={styles.containerTitle}>
          <TitleAuth title={"auth.forgot_password.title"} />
        </View>

        <Typography style={styles.description}>{"auth.forgot_password.description"}</Typography>

        <View style={styles.form}>
          <Input
            leftIcon={<Icon icon={mail} />}
            label="general.email"
            placeholder="dev@soadtech.io"
          />
        </View>
        <Button title={"general.submit"} />
      </View>
    </Wrapper>
  )
}
