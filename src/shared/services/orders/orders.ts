import {Order} from '@/shared/DTO';
import {supabase} from '../client';
import {PostgrestSingleResponse} from '@supabase/supabase-js';

const ENTITY_NAME = 'orders';

export const getOrders = async (
  status: string,
  driver_user: string,
): Promise<PostgrestSingleResponse<Order[]>> =>
  await supabase
    .from(ENTITY_NAME)
    .select('*, users!orders_user_id_fkey (first_name, last_name, direction)')
    .order('created_at', {ascending: false})
    .match({status, driver_user});

export const getOrder = async (
  id: number,
): Promise<PostgrestSingleResponse<Order[]>> =>
  await supabase
    .from(ENTITY_NAME)
    .select(
      '*, users!orders_user_id_fkey (first_name, last_name, direction, direction_detail, phone)',
    )
    .eq('id', id);

export const updateOrder = async (data: Order) => {
  delete data.users;
  return await supabase.from(ENTITY_NAME).update(data).eq('id', data?.id);
};
