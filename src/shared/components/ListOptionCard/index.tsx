import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/typography";
import { _styles } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Icon from "@/shared/components/icon";
import Radio from "@/shared/components/radio";
import { activeOpacity, currencyType } from "@/shared/constants/global";

export interface OptionCardOptions {
  id: string;
  icon: any;
  title: string;
  description: string;
  active: boolean,
  price?: string
}
interface ListOptionCardProps {
  value: OptionCardOptions | undefined;
  options: OptionCardOptions[];
  onChange?: (value: OptionCardOptions) => void
}
export default function ListOptionCard({options, onChange, value}: ListOptionCardProps) {
  const [currentOptions, setCurrentOptions] = useState(options);
  function handleChange(optionSelected: OptionCardOptions) {
    if (onChange) {
      onChange(optionSelected)
    }
    setCurrentOptions(currentOptions.map(option => ({
      ...option,
      active: option.id === optionSelected.id
    })));
  }
  useEffect(() => {
    if (value?.id) {
      setCurrentOptions(currentOptions.map(option => ({
        ...option,
        active: option.id === value.id
      })))
    }
  }, [value?.id])

  return (
    <View>
      {currentOptions.map(option => {
        return (
          <Option callback={handleChange} key={option.id} option={option} />
        )
      })}
    </View>
  )
}

interface OptionProps {
  option: OptionCardOptions;
  callback?: (option: OptionCardOptions) => void
}
export function Option({option, callback}: OptionProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode, option.active)
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={() => callback ? callback(option) : null} style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.containerIcon}>
          <Icon customStyles={styles.icon} icon={option.icon} />
        </View>
        <View style={{flex: 0.9}}>
          <Typography style={styles.title} translate={false}>{option.title}</Typography>
          <Typography style={styles.address} translate={false}>{option.description}</Typography>
        </View>
      </View>
      <View style={styles.row}>
        {option?.price && (
          <Typography style={styles.price} translate={false}>{currencyType}{option?.price || ''}</Typography>
        )}
        <Radio active={option.active} />
      </View>
    </TouchableOpacity>
  )
}
