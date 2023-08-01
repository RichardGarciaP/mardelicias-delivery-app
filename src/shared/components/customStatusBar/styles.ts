import {StyleSheet, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

export const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'red',
  },
});
