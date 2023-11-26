import React, {useEffect, useState} from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import {shoppingBag} from '@/shared/assets/icons';
import TopNavigation, {
  TopNavigationProps,
} from '@/modules/private/orders/components/topNavigation';
import {View} from 'react-native';
import {styles} from './styles';
import Header from '@/shared/components/header';
import OrderList from './sections/orderList';
import useOrders from '@/shared/hooks/useOrders';
import {TAB_LIST} from '@/shared/constants/global';
import {mutate} from 'swr';

export default function Orders() {
  const [currentTab, setCurrentTab] = useState<string>(TAB_LIST[0].id);
  const {data, error, isLoading, isValidating} = useOrders(
    currentTab ? currentTab : TAB_LIST[0].id,
  );

  useEffect(() => {
    mutate('/orders');
  }, [currentTab]);

  return (
    <Wrapper
      isScrollView
      refreshing={isValidating}
      loading={isLoading || isValidating}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.container}>
        <HeaderWithIcon icon={shoppingBag} title={'orders.title'} />
        <TopNavigation setCurrentTab={setCurrentTab} />

        {currentTab && data && <OrderList orders={data} />}
      </View>
    </Wrapper>
  );
}
