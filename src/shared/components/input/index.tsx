import React, {LegacyRef, useState} from 'react';
import {View, TextInput} from 'react-native';
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import {semantic} from '@/shared/constants/colors';
import {KeyboardTypeOptions} from 'react-native/Libraries/Components/TextInput/TextInput';
import {useTranslation} from 'react-i18next';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native/Libraries/Types/CoreEventTypes';
import useDarkMode from '@/shared/hooks/useDarkMode';

interface InputProps {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  multiline?: boolean | undefined;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  editable?: boolean | undefined;
  placeholder?: string | undefined;
  secureTextEntry?: boolean | undefined;
  leftIcon?: React.ReactNode | undefined;
  rightIcon?: React.ReactNode | undefined;
  label?: string | undefined;
  onPressIn?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
  inputRef?: any;
}

export default function Input({
  value,
  onChangeText,
  multiline,
  maxLength,
  keyboardType,
  editable,
  placeholder = 'test@gmail.com',
  secureTextEntry,
  leftIcon,
  rightIcon,
  label,
  onPressIn,
  inputRef,
}: InputProps) {
  const [isFocus, setFocus] = useState(false);
  const {isDarkMode} = useDarkMode();
  const styles = _styles(isFocus, isDarkMode);
  const {t} = useTranslation();
  return (
    <View>
      {label && <Typography style={styles.label}>{label}</Typography>}
      <View style={styles.container}>
        {leftIcon && leftIcon}
        <TextInput
          ref={inputRef}
          onPressIn={onPressIn}
          multiline={multiline}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          keyboardType={keyboardType}
          editable={editable}
          // @ts-ignore
          placeholder={t(placeholder)}
          secureTextEntry={secureTextEntry}
          onFocus={() => setFocus(true)}
          placeholderTextColor={semantic.text.grey}
          style={styles.input}
        />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
}
