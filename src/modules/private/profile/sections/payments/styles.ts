import {normalize} from '@/shared/helpers';
import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(20),
    height: height - normalize(100),
  },
  searchContainer: {
    marginVertical: normalize(14),
  },
});
