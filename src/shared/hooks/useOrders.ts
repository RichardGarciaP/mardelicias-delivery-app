import useSWR, {mutate} from 'swr';
import {getOrders} from '../services/orders/orders';
import {useUser} from '@supabase/auth-helpers-react';
import {Order} from '../DTO';
import {useEffect, useState} from 'react';
import {PostgrestError, User} from '@supabase/supabase-js';

interface UserOrderProps {
  data: Order[] | null | undefined;
  isLoading: boolean;
  isValidating: boolean;
  error: PostgrestError | null;
}

const useOrders = (status: string, user: User): UserOrderProps => {
  const ENTITY = 'orders';

  const response = useSWR(user?.id ? `/${ENTITY}` : null, () =>
    getOrders(status, user!.id),
  );

  return {
    ...response,
    data: response.data?.data?.filter(order => order.status === status),
  };
};

export default useOrders;
