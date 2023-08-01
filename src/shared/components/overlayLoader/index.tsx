import React from 'react';
import {ActivityIndicator, useWindowDimensions, View} from 'react-native';
import Typography from '../typography';
import {_styles} from './styles';
import { palette } from "@/shared/constants/colors";

interface OverlayLoaderProps {
  loading?: boolean
  title?: string
}
export default function OverlayLoader({
  loading,
  title = 'Loading...',
}: OverlayLoaderProps) {
  const {height} = useWindowDimensions();
  const styles = _styles(height, loading);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={palette.main.p500} />
      <Typography style={styles.text}>{title}</Typography>
    </View>
  );
}
