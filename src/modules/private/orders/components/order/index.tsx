import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {calendarDate, location, trash} from '@/shared/assets/icons';
import {_styles} from './styles';
import {activeOpacity, currencyType} from '@/shared/constants/global';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {Order as OrderDTOP} from '@/shared/DTO';
import {Button} from '@/shared/components/buttons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import {format} from 'date-fns';

interface OrderProps {
  order: OrderDTOP;
  track?: boolean | undefined;
  map?: boolean;
}
export default function Order({order, track = true, map = false}: OrderProps) {
  const {navigate} = useNavigation<NavigationProps>();
  const {isDarkMode} = useDarkMode();
  const styles = _styles(isDarkMode);

  const [qty, setQty] = useState(0);

  useEffect(() => {
    setQty(order.products.reduce((total, product) => total + product.qty, 0));
  }, [order]);

  return (
    <View>
      {track && (
        <View style={styles.containerDate}>
          <Icon icon={calendarDate} />
          <Typography style={styles.date} translate={false}>
            {format(new Date(order.created_at), 'd-M-yyyy')}
          </Typography>
        </View>
      )}

      <TouchableOpacity
        onPress={() => navigate('eReceipt', {id: order.id})}
        activeOpacity={activeOpacity}
        style={styles.containerOrder}>
        <View style={styles.containerInfo}>
          <View>
            <Typography style={styles.name} translate={false}>
              Orden #{order.id}
            </Typography>
          </View>
          <Typography style={styles.category} translate={false}>
            Cliente: {`${order.users.first_name} ${order.users.last_name}`}
          </Typography>
          <Typography style={styles.category} translate={false}>
            Cantidad de Productos: {qty}
          </Typography>

          <View style={styles.containerCant}>
            <Typography style={styles.price} translate={false}>
              {currencyType} {order.total.toFixed(2)}
            </Typography>
            <View style={{width: 20}} />
            {track && (
              <View style={{flex: 1, maxWidth: 180}}>
                <Button
                  onPress={() => Alert.alert('La orden ha sido entregada')}
                  sm
                  title="orders.completed"
                />
              </View>
            )}
            {location && !track && (
              <View style={{flex: 1, maxWidth: 180}}>
                <Button
                  onPress={() => navigate('location')}
                  sm
                  title="orders.locate"
                />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
