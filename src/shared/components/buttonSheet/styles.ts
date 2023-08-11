import {Dimensions, StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import { palette, semantic } from "@/shared/constants/colors";

const modal = (isDarkMode: boolean, height: number) => {
  const objectModal = {
    backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500,
    borderTopRightRadius: normalize(16),
    borderTopLeftRadius: normalize(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  };
  if (height) {
    // @ts-ignore
    objectModal.height = height;
  }
  return objectModal;
};

export const _styles = (isDarkMode: boolean, height: any) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
    },
    modalOverlay: {
      backgroundColor: 'black',
      opacity: 0.5,
      height: Dimensions.get('window').height,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
    // @ts-ignore
    modalView: {
      ...modal(isDarkMode, height),
      maxHeight: Dimensions.get('window').height * 0.9,
      // height: height || Dimensions.get('window').height * 0.9
    },
  });
