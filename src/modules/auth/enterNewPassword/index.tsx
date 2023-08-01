import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { View } from "react-native";
import TitleAuth from "@/shared/components/titleAuth";
import { styles } from "./styles";
import Input from "@/shared/components/input";
import Icon from "@/shared/components/icon";
import { eyeOff, lock } from "@/shared/assets/icons";
import { Button } from "@/shared/components/buttons";

export default function EnterNewPassword() {

  return (
    <Wrapper>
      <View style={styles.container}>
        <TitleAuth title="Enter New Password" />

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={lock} />}
              rightIcon={<Icon icon={eyeOff} />}
              secureTextEntry={true}
              label="general.password"
              placeholder="general.typing_password"
            />
          </View>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={lock} />}
              rightIcon={<Icon icon={eyeOff} />}
              secureTextEntry={true}
              label="general.password"
              placeholder="general.typing_password"
            />
          </View>
        </View>

        <View>
          <Button title="general.continue" />
        </View>
      </View>
    </Wrapper>
  )
}
