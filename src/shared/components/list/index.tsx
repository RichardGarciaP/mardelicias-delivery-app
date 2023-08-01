import {createRows} from '@/shared/helpers';
import {View} from 'react-native';
import React from 'react';
import {_styles} from './styles';

interface AnyListProps {
  data: any;
  rows: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  between?: boolean | undefined;
}

export default function List({data, rows, renderItem, between}: AnyListProps) {
  const styles = _styles(between);
  return (
    <>
      {createRows(data, rows).map((chunk, index) => (
        <View key={index} style={styles.containerList}>
          {chunk.map((item, innerIndex) => renderItem(item, innerIndex))}
        </View>
      ))}
    </>
  );
}
