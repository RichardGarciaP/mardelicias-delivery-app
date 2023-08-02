import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {Minus, Plus} from '@/shared/assets/icons';

export enum TypeChange {
  minus = 0,
  plus = 1,
}

interface CounterProps {
  onChange: (value: number, typeOperation: number) => void
  cant?: number
}

export default function Counter({onChange, cant = 1}: CounterProps) {
  const [count, setCounter] = useState(cant);
  function handleChange(type: number) {
    if (type === TypeChange.minus) {
      if (count > 1) {
        onChange(count - 1, TypeChange.minus)
        setCounter(prevState => prevState - 1);
      }
      return;
    }
    onChange(count + 1, TypeChange.plus)
    setCounter(prevState => prevState + 1);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleChange(TypeChange.minus)}
        style={styles.btnReduce}>
        <Icon customStyles={styles.minus} icon={Minus} />
      </TouchableOpacity>
      <Typography style={styles.value}>{String(count)}</Typography>
      <TouchableOpacity
        onPress={() => handleChange(TypeChange.plus)}
        style={styles.btnAument}>
        <Icon customStyles={styles.plus} icon={Plus} />
      </TouchableOpacity>
    </View>
  );
}
