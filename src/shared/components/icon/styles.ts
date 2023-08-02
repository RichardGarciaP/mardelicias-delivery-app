import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import { semantic } from "@/shared/constants/colors";

interface Sizes {
  width?: number | undefined;
  height?: number | undefined;
  isDarkMode: boolean
}
export const _styles = ({width, height, isDarkMode}: Sizes) =>
  StyleSheet.create({
    icon: {
      width: width || normalize(24),
      height: height || normalize(24),
    },
  });
