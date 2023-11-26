import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  containerSection: {
    borderRadius: normalize(16),
    borderWidth: 2,
    borderColor: semantic.fill.f04,
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(12),
    marginVertical: normalize(12),
  },
  status: {
    fontWeight: '700',
    color: semantic.alert.success.s500,
    textTransform: 'capitalize',
  },
  paymentMethod: {
    fontWeight: '700',
    color: semantic.text.black,
    textTransform: 'capitalize',
  },
  innerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerSectionMb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(12),
  },
  innerTitleSection: {
    color: semantic.text.grey,
    fontWeight: '500',
  },
  valueInnerSection: {
    fontWeight: '700',
  },
  vocherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: semantic.text.grey,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  modalView: {
    margin: 20,
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(40),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: normalize(10),
    right: normalize(20),
  },
  icon: {marginLeft: normalize(10)},

  productsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  sectionTitle: {
    fontWeight: '700',
    color: semantic.text.black,
    textTransform: 'capitalize',
    marginBottom: 4,
  },
});
