import useSWR from 'swr';
import {getOrder} from '../services/orders/orders';
import {Order} from '../DTO';

interface Props {
  data: Order[] | null | undefined;
  isLoading: boolean;
}

const useOrderDetails = (id: number): Props => {
  const ENTITY = 'orders';

  const response = useSWR(id ? `/${ENTITY}/${id}` : null, () => getOrder(id));

  return {
    ...response,
    data: response.data?.data,
  };
};

export default useOrderDetails;
