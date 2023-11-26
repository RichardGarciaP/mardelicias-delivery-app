import useSWR, {mutate} from 'swr';
import {getOrders} from '../services/orders/orders';
import {useUser} from '@supabase/auth-helpers-react';
import {Order} from '../DTO';
import {useEffect, useState} from 'react';
import {PostgrestError} from '@supabase/supabase-js';

interface UserOrderProps {
  isLoading: boolean;
  data?: Order[];
  error: PostgrestError | null;
}

const useOrders = (status: string): UserOrderProps => {
  const ENTITY = 'orders';
  const user = useUser();
  const [state, setState] = useState<UserOrderProps>({
    isLoading: true,
    data: undefined,
    error: null,
  });

  const fetchOrders = async () => {
    const ordersPromise = getOrders(status, user!.id);

    const [ordersResult] = await Promise.all([ordersPromise]);
    setState({
      isLoading: false,
      data: ordersResult?.data ?? [],
      error: ordersResult.error,
    });
  };

  useEffect(() => {
    setState({...state, isLoading: true});
    fetchOrders();
    mutate(`/${ENTITY}`);
  }, [status]);

  return {...state};
};

export default useOrders;
