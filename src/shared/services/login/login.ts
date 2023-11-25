import {UserDTO} from '@/shared/DTO';
import {supabase} from '../client';

export const signInWithEmail = async ({email, password}: UserDTO) => {
  return await supabase.auth.signInWithPassword({email, password});
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};
