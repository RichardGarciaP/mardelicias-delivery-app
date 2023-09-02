import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const _styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: normalize(30),
    flexDirection: 'column',
  },
  imageContainer: {
    marginTop: normalize(30),
    alignSelf: 'center',
    width: normalize(180),
    height: normalize(180),
    marginRight: normalize(12),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  editImage: {
    position: 'absolute',
    bottom: 0,
    right: normalize(30),
    backgroundColor: '#FFF',
    borderRadius: normalize(8),
  },
  formContainer: {
    marginVertical: normalize(30),
    gap: normalize(20),
  },
});
