import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import {_styles} from './styles';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

interface ButtonSheetProps {
  dispatch: boolean;
  children: React.ReactNode;
  height?: number;
  bottom?: number;
  onClose?: ((event: GestureResponderEvent) => void) | undefined;
}
export default function ButtonSheet({
  dispatch,
  children,
  height,
  bottom = 0,
  onClose,
}: ButtonSheetProps) {
  const {isDarkMode} = useDarkMode();

  const styles = _styles(isDarkMode, height);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={dispatch}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={onClose}
            style={styles.modalOverlay}
          />
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
    </View>
  );
}
