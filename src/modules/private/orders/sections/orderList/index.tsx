import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Order from '../../components/order';
import {TopNavigationProps} from '../../components/topNavigation';
import useOrders from '@/shared/hooks/useOrders';

interface OrderListProps {
  currentTab: TopNavigationProps;
}

const OrderList: React.FC<OrderListProps> = ({currentTab}) => {
  const response = useOrders(currentTab.id);
  return (
    <View style={styles.listContainer}>
      <Order
        product={{
          id: '1',
          image: 'https://i.ibb.co/5Tk0vKM/Img-1.png',
          name: 'Variegated snake',
          category: 'Indoor',
          price: 20.0,
          size: 'Medium',
          cant: 1,
        }}
      />
    </View>
  );
};

export default OrderList;
