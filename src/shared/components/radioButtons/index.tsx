import {View} from 'react-native';
import React from 'react';
import {createRows} from '@/shared/helpers';
import {styles} from './styles';
import RadioButton, {RadioButtonOption} from '@/shared/components/radioButton';
import useRadioButtons, {
  RadioButtonResponse,
} from '@/shared/components/radioButtons/hooks';

interface RadioButtonsProps {
  options: RadioButtonOption[];
  columns?: number | undefined;
  onChange?: (optionSelected: RadioButtonResponse) => void;
  CustomLabel?: React.JSXElementConstructor<any>;
}

export default function RadioButtons({
  options,
  columns = 2,
  onChange,
  CustomLabel,
}: RadioButtonsProps) {
  const {myOptions, onHandleSelect} = useRadioButtons({options, onChange});
  return (
    <View>
      {createRows<RadioButtonOption>(myOptions, columns).map((chunk, index) => (
        <View key={index} style={styles.containerItems}>
          {chunk.map((item, index) => (
            <View key={index} style={styles.item}>
              <RadioButton
                CustomLabel={CustomLabel}
                onChange={onHandleSelect}
                option={item}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
