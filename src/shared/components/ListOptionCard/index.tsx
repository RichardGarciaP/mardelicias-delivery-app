import React from 'react';
import { View } from "react-native";
import Typography from "@/shared/components/typography";
import { _styles } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Icon from "@/shared/components/icon";
import Radio from "@/shared/components/radio";

interface OptionCardOptions {
  id: string;
  icon: any;
  title: string;
  description: string;
  active: boolean
}
interface ListOptionCardProps {
  options: OptionCardOptions[]
}
export default function ListOptionCard({options}: ListOptionCardProps) {
  return (
    <View>
      {options.map(option => {
        return (
          <Option key={option.id} option={option} />
        )
      })}
    </View>
  )
}

interface OptionProps {
  option: OptionCardOptions
}
export function Option({option}: OptionProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.containerIcon}>
          <Icon customStyles={styles.icon} icon={option.icon} />
        </View>
        <View style={{flex: 0.9}}>
          <Typography style={styles.title} translate={false}>{option.title}</Typography>
          <Typography style={styles.address} translate={false}>{option.description}</Typography>
        </View>
      </View>
      <View>
        <Radio active={option.active} />
      </View>
    </View>
  )
}
