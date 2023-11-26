import useSWR from 'swr';
import {getOrders} from '../services/orders/orders';
import {useUser} from '@supabase/auth-helpers-react';
import {Order} from '../DTO';
import {useEffect} from 'react';

interface UserOrderProps {
  data: Order[] | null | undefined;
  isLoading: boolean;
  error: any;
}

const useOrders = (status: string): UserOrderProps => {
  const ENTITY = 'orders';
  const user = useUser();

  const response = useSWR(user?.id ? `/${ENTITY}` : null, () =>
    getOrders(status, user!.id),
  );

  useEffect(() => {}, []);

  return {
    ...response,
    data: response.data?.data,
  };
};

export default useOrders;
