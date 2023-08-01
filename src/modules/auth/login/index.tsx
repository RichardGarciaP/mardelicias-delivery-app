import React from 'react';
import { View } from "react-native";
import { styles } from "./styles";
import TitleAuth from "@/shared/components/titleAuth";
import Input from "@/shared/components/input";
import Icon from "@/shared/components/icon";
import { eyeOff, lock, mail } from "@/shared/assets/icons";
import { Button } from "@/shared/components/buttons";
import Typography from "@/shared/components/typography";
import Wrapper from "@/shared/components/wrapper";
import CheckBox from "@/shared/components/checkbox";

export default function Login() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <TitleAuth title={'auth.login.title'} />

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={mail} />}
              label="general.email"
              placeholder="dev@soadtech.io"
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

          <View style={styles.formControl}>
            <View style={styles.containerRemember}>
              <View style={styles.containerCheckbox}>
                <CheckBox onChange={() => {}} value={true} />
                <Typography style={styles.textRemember}>{"general.remember"}</Typography>
              </View>
              <Typography style={styles.forgot}>{"auth.login.forgot_password"}</Typography>
            </View>
          </View>
        </View>

        <View style={styles.formControl}>
          <Button title={"auth.sign_in"} />
        </View>
      </View>
    </Wrapper>
  )
}
