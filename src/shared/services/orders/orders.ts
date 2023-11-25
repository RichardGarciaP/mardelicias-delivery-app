import {supabase} from '../client';

const ENTITY_NAME = 'orders';

export const getOrders = async (status: string, user_id: string) =>
  await supabase
    .from(ENTITY_NAME)
    .select(
      'id, total, created_at, users!orders_user_id_fkey (first_name, last_name, direction)',
    )
    .order('created_at', {ascending: false})
    .match({status, user_id});
