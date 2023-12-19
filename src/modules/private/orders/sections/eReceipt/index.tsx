import React, {useState} from 'react';
import Wrapper from '@/shared/components/wrapper';
import {
  Image,
  Linking,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import HeaderWithIcon from '@/shared/components/headerBack';
import Order from '@/modules/private/orders/components/order';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import ResumeTransaction from '@/shared/components/resumeTransaction';
import Icon from '@/shared/components/icon';

import {normalize} from '@/shared/helpers';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@/shared/routes/stack';
import useOrderDetails from '@/shared/hooks/useOrderDetails';
import {format} from 'date-fns';
import {close, phone, vocher} from '@/shared/assets/icons';
import {palette, semantic} from '@/shared/constants/colors';
import {Text} from 'react-native-elements';
import {PAYMENT_METHODS} from '@/shared/constants/global';

interface Props extends StackScreenProps<RootStackParamList, 'eReceipt'> {}

export default function EReceipt({route}: Props) {
  const {data, isLoading} = useOrderDetails(route.params.id);
  const {width, height} = useWindowDimensions();
  const modalWidth = width - 40;
  const modalHeight = height - 250;
  const [isOpenImage, setIsOpenImage] = useState(false);

  const toggleImageModal = () => {
    setIsOpenImage(!isOpenImage);
  };

  if (!data) return null;

  const order = data[0];
  const isTransfer =
    order.payment_method === PAYMENT_METHODS.TRANSFER && order.voucher_url;

  const makeCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <>
      <Wrapper loading={isLoading}>
        <View
          style={{
            paddingHorizontal: normalize(24),
            marginBottom: normalize(20),
          }}>
          <HeaderWithIcon title="E-Receipt" enablePressable />
          <Order track={false} map={true} order={order} />
          <View style={styles.containerSection}>
            <View style={styles.innerSectionMb}>
              <Typography style={styles.innerTitleSection}>Estado</Typography>
              <Typography style={styles.status}>{order?.status}</Typography>
            </View>

            <View style={styles.innerSection}>
              <Typography style={styles.innerTitleSection}>
                Metodo de Pago
              </Typography>

              <Pressable
                style={{
                  ...styles.vocherContainer,
                  borderBottomWidth: isTransfer ? 3 : 0,
                }}
                onPress={toggleImageModal}>
                <Text style={styles.paymentMethod}>
                  {order?.payment_method}
                </Text>
                {isTransfer && (
                  <Icon
                    customStyles={{
                      tintColor: semantic.text.black,
                      height: normalize(30),
                      width: normalize(30),
                      marginLeft: normalize(10),
                    }}
                    icon={vocher}
                  />
                )}
              </Pressable>
            </View>
          </View>
          <View style={styles.containerSection}>
            <View style={styles.innerSectionMb}>
              <Typography style={styles.innerTitleSection}>
                Fecha de Creación
              </Typography>
              <Typography style={styles.valueInnerSection} translate={false}>
                {format(new Date(order.created_at), 'd-M-yyyy')}
              </Typography>
            </View>
            <View style={styles.innerSectionMb}>
              <Typography style={styles.innerTitleSection}>Cliente</Typography>
              <Typography
                style={styles.valueInnerSection}
                translate={
                  false
                }>{`${order?.users?.first_name} ${order?.users?.last_name}`}</Typography>
            </View>

            <View style={styles.innerSectionMb}>
              <Typography style={styles.innerTitleSection}>
                Dirección
              </Typography>
              <Typography style={styles.valueInnerSection} translate={false}>
                {order?.users?.direction_detail}
              </Typography>
            </View>
            <View style={styles.innerSectionMb}>
              <Typography style={styles.innerTitleSection}>Celular</Typography>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Typography style={styles.valueInnerSection} translate={false}>
                  +593 {order?.users?.phone}
                </Typography>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: palette.main.p500,
                    width: 40,
                    height: 30,
                    marginLeft: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}
                  onPress={() => makeCall(`+593${order?.users?.phone}`)}>
                  <Icon
                    icon={phone}
                    customStyles={{tintColor: semantic.text.white}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSection}>
            <View style={styles.innerSectionMb}>
              <Text style={styles.paymentMethod}>Productos</Text>
              <Typography style={styles.valueInnerSection} translate={false}>
                Precio
              </Typography>
            </View>
            {order.products.map(product => (
              <View
                style={styles.productsSection}
                key={`product-${product.id}`}>
                <Typography style={styles.innerTitleSection}>
                  {product.name}
                </Typography>
                <Typography style={styles.valueInnerSection} translate={false}>
                  {`${product.price} (x${product.qty})`}
                </Typography>
              </View>
            ))}
          </View>
          <ResumeTransaction data={data[0]} />
        </View>
      </Wrapper>
      {isOpenImage && isTransfer && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={isOpenImage}
          onRequestClose={toggleImageModal}>
          <View style={styles.centeredView}>
            <View
              style={{
                ...styles.modalView,
                width: normalize(modalWidth),
                height: normalize(modalHeight),
              }}>
              <Pressable style={styles.closeIcon} onPress={toggleImageModal}>
                <Icon
                  customStyles={{
                    tintColor: semantic.text.black,
                    height: normalize(30),
                    width: normalize(30),
                  }}
                  icon={close}
                />
              </Pressable>
              <Image
                style={{
                  width: normalize(modalWidth - 20),
                  height: normalize(modalHeight - 60),
                }}
                source={{
                  uri: `https://nmswwbindwiwxgeravfq.supabase.co/storage/v1/object/public/vouchers/${order.voucher_url}`,
                }}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
