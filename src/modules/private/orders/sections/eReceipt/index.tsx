import React, {useEffect, useState} from 'react';
import Wrapper from '@/shared/components/wrapper';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
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
import {close, vocher} from '@/shared/assets/icons';
import {semantic} from '@/shared/constants/colors';
import {Text} from 'react-native-elements';
import {PAYMENT_METHODS} from '@/shared/constants/global';

interface Props extends StackScreenProps<RootStackParamList, 'eReceipt'> {}

export default function EReceipt({route}: Props) {
  const {data} = useOrderDetails(route.params.id);
  const {width, height} = useWindowDimensions();
  const [isOpenImage, setIsOpenImage] = useState(false);
  const toggleImageModal = () => {
    setIsOpenImage(!isOpenImage);
  };

  if (!data) return null;
  const order = data[0];
  const isTransfer =
    order.payment_method === PAYMENT_METHODS.TRANSFER && order.voucher_url;

  return (
    <>
      <Wrapper>
        <View style={{paddingHorizontal: normalize(24)}}>
          <HeaderWithIcon title="E-Receipt" />
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
                }>{`${order.users.first_name} ${order.users.last_name}`}</Typography>
            </View>

            <View style={styles.innerSectionMb}>
              <Typography style={styles.innerTitleSection}>
                Dirección
              </Typography>
              <Typography style={styles.valueInnerSection} translate={false}>
                {order.users.direction_detail}
              </Typography>
            </View>
          </View>
          <View style={styles.containerSection}>
            <Text style={styles.paymentMethod}>Productos</Text>
            {order.products.map(product => (
              <View style={styles.productsSection}>
                <Typography style={styles.innerTitleSection}>
                  {product.name}
                </Typography>
                <Typography style={styles.valueInnerSection} translate={false}>
                  {product.qty}
                </Typography>
              </View>
            ))}
          </View>
          <ResumeTransaction
            total={data[0].total}
            qty={data[0].products.length}
          />
        </View>
      </Wrapper>
      {isOpenImage && isTransfer && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={isOpenImage}
          onRequestClose={toggleImageModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
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
                  width: normalize(width - 100),
                  height: normalize(height - 450),
                }}
                source={{uri: order.voucher_url}}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
