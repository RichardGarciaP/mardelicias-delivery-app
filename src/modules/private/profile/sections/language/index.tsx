import React, { useState } from "react";
import Wrapper from "@/shared/components/wrapper";
import { View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import RadioButtons from "@/shared/components/radioButtons";
import Typography from "@/shared/components/typography";
import { normalize, storage } from "@/shared/helpers";
import i18n from "i18next";
import useEffectOnce from "@/shared/hooks/useEffectOnce";

const defaultOptions = [
  {
    CustomLabel: () => {
      return (
        <Typography style={{flex: 1, marginVertical: 10}}>
          English
        </Typography>
      )
    },
    id: 'en',
    active: true,
  },
  {
    CustomLabel: () => {
      return (
        <Typography style={{flex: 1, marginVertical: 10}}>
          Spanish
        </Typography>
      )
    },
    id: 'es',
    active: false,
  },
]
export default function Language() {

  const [languageActive, setLanguageActive] = useState<any>([])
  async function changeLanguage(ing: string) {
    await storage.create('language', ing)
    await i18n.changeLanguage(ing);
  }

  async function getTranslate() {
    const ing = await storage.get('language')
    if (ing) {
      setLanguageActive([
        {
          CustomLabel: () => {
            return (
              <Typography style={{flex: 1, marginVertical: 10}}>
                English
              </Typography>
            )
          },
          id: 'en',
          active: ing === 'en',
        },
        {
          CustomLabel: () => {
            return (
              <Typography style={{flex: 1, marginVertical: 10}}>
                Spanish
              </Typography>
            )
          },
          id: 'es',
          active: ing === 'es',
        },
      ])
      return
    }
    setLanguageActive(defaultOptions)
  }
  useEffectOnce(() => {
    getTranslate().catch()
  }, [])

  if (languageActive.length === 0) {
    return <View />
  }


  return (
    <Wrapper>
      <View style={{paddingHorizontal: normalize(24)}}>
        <HeaderWithIcon title="general.language" />

        <View>
          <RadioButtons
            onChange={(option) => changeLanguage(option.id)}
            columns={1}
            options={languageActive}
          />
        </View>
      </View>
    </Wrapper>
  )
}
