import React, {useState} from 'react';
import useSWR from 'swr';
import {getOrders} from '../services/orders/orders';
import {storage} from '../helpers';
import {User, useUser} from '@supabase/auth-helpers-react';
import {UserDTO} from '../DTO';

interface UserOrderProps {}

const useOrders = (status: string): UserOrderProps => {
  const ENTITY = 'orders';
  const user = useUser();

  const {data, error, isLoading} = useSWR(user?.id ? `/${ENTITY}` : null, () =>
    getOrders(status, user!.id),
  );

  console.log(data);

  //   console.log(data, error, isLoading);

  //   return {data, error, isLoading};
  return {};
};

export default useOrders;
