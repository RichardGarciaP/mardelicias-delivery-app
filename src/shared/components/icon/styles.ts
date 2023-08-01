import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

interface Sizes {
  width?: number | undefined;
  height?: number | undefined;
}
export const _styles = ({width, height}: Sizes) =>
  StyleSheet.create({
    icon: {
      width: width || normalize(24),
      height: height || normalize(24),
    },
  });
