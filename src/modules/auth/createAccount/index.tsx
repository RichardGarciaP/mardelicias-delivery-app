import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import Typography from "@/shared/components/typography";
import Input from "@/shared/components/input";
import { View } from "react-native";
import { Button } from "@/shared/components/buttons";
import { styles } from "./styles";
import TitleAuth from "@/shared/components/titleAuth";
import Icon from "@/shared/components/icon";
import { eyeOff, lock, mail, user } from "@/shared/assets/icons";

export default function CreateAccount() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <TitleAuth title={'auth.create_account.title'} />

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={user} />}
              label="general.full_name"
              placeholder="general.typing_name"
            />
          </View>
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
        </View>

        <View style={styles.formControl}>
          <Button title={"auth.sign_up"} />
        </View>
        <View style={styles.containerLink}>
          <Typography style={styles.alreadyAccount}>{"auth.create_account.already_account"}</Typography>
          <Typography style={styles.link}>{"auth.sign_in"}</Typography>
        </View>
      </View>
    </Wrapper>
  )
}
