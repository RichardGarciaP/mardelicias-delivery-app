import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {palette} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24),
  },
  form: {
    marginTop: normalize(32),
  },
  formControl: {
    marginBottom: normalize(24),
  },
  containerRemember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRemember: {
    marginLeft: normalize(10),
  },
  forgot: {
    fontWeight: '700',
  },
  textError: {
    color: 'red',
  },
});
