import {supabase} from '../client';

const ENTITY_NAME = 'orders';

export const getOrders = async (status: string, driver_user: string) =>
  await supabase
    .from(ENTITY_NAME)
    .select('*, users!orders_user_id_fkey (first_name, last_name, direction)')
    .order('created_at', {ascending: false})
    .match({status, driver_user});

export const getOrder = async (id: number) =>
  await supabase
    .from(ENTITY_NAME)
    .select(
      '*, users!orders_user_id_fkey (first_name, last_name, direction, direction_detail)',
    )
    .eq('id', id);
