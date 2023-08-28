import React from 'react';
import { StyleSheet } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    color: semantic.text.grey,
    fontSize: normalize(16),
    fontWeight: '700',
    marginLeft: normalize(10)
  },
  containerOrder: {
    flexDirection: 'row',
    borderRadius: normalize(16),
    borderWidth: 1,
    borderColor: semantic.fill.f04,
    padding: normalize(8),
    marginTop: normalize(24),
    marginBottom: normalize(22)
  },
  containerImage: {
    width: normalize(120),
    height: normalize(120),
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    borderRadius: normalize(16)
  },
  containerInfo: {
    flex: 1,
    marginLeft: normalize(18),
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: normalize(120)
  },
  name: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: isDarkMode ? semantic.text.white : semantic.text.black,
    maxHeight: normalize(50),
  },
  category: {
    fontSize: normalize(16),
    color: semantic.text.grey,
    marginVertical: normalize(8),
  },
  price: {
    fontSize: normalize(20),
    fontWeight: '700'
  },
  containerCant: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
