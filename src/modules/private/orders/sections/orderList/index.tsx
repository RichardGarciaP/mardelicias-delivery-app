import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Order from '../../components/order';
import {Order as OrderDTO} from '@/shared/DTO';

interface OrderListProps {
  orders?: OrderDTO[];
}

const OrderList: React.FC<OrderListProps> = ({orders = []}) => {
  if (!orders?.length && !orders) return null;

  return (
    <View style={styles.listContainer}>
      {orders.map(order => (
        <Order order={order} key={`product-${order.id}`} />
      ))}
    </View>
  );
};

export default OrderList;
