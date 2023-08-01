import React, {useRef} from 'react';
import { TextInput, View } from "react-native";
import {_styles} from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";

interface OtpFormProps {
  valueOtp: any;
  changeOtpField: (x: any) => void
}
export default function OtpForm({valueOtp, changeOtpField}: OtpFormProps) {
  const {isDarkMode} = useDarkMode();
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  const handleOTPChange = (inputName: string, inputValue: string) => {
    changeOtpField({...valueOtp, [inputName]: inputValue});
    if (inputValue && inputName !== 'digit6') {
      switch (inputName) {
        case 'digit1':
          // @ts-ignore
          digit2Ref.current.focus();
          break;
        case 'digit2':
          // @ts-ignore
          digit3Ref.current.focus();
          break;
        case 'digit3':
          // @ts-ignore
          digit4Ref.current.focus();
          break;
        case 'digit4':
          // @ts-ignore
          digit5Ref.current.focus();
          break;
        case 'digit5':
          // @ts-ignore
          digit6Ref.current.focus();
          break;
        default:
          break;
      }
    }
  };
  const styles = _styles(isDarkMode);
  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => handleOTPChange('digit1', value)}
          value={valueOtp.digit1}
          ref={digit1Ref}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => handleOTPChange('digit2', value)}
          value={valueOtp.digit2}
          ref={digit2Ref}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => handleOTPChange('digit3', value)}
          value={valueOtp.digit3}
          ref={digit3Ref}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => handleOTPChange('digit4', value)}
          value={valueOtp.digit4}
          ref={digit4Ref}
          style={styles.input}
        />
        {/*<TextInput
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => handleOTPChange('digit5', value)}
          value={valueOtp.digit5}
          ref={digit5Ref}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => handleOTPChange('digit6', value)}
          value={valueOtp.digit6}
          ref={digit6Ref}
          style={styles.input}
        />*/}
      </View>
    </View>
  );
}
