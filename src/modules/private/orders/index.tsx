import React, {useState} from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import {shoppingBag} from '@/shared/assets/icons';
import TopNavigation, {
  TopNavigationProps,
} from '@/modules/private/orders/components/topNavigation';
import {View} from 'react-native';
import {styles} from './styles';
import Order from '@/modules/private/orders/components/order';
import Header from '@/shared/components/header';
import OrderList from './sections/orderList';

export default function Orders() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState<TopNavigationProps>();

  const onRefresh = () => {
    setIsRefreshing(true);
    setLoading(true);
    setTimeout(() => {
      console.log('Terminamos');
      setIsRefreshing(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <Wrapper
      isScrollView
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      loading={loading}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.container}>
        <HeaderWithIcon icon={shoppingBag} title={'orders.title'} />
        <TopNavigation setCurrentTab={setCurrentTab} />

        {currentTab && <OrderList currentTab={currentTab} />}
      </View>
    </Wrapper>
  );
}
