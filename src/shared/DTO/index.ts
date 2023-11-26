export interface BannerDTO {
  image: string;
  name: string;
  state: string;
  description: string;
}
export interface CategoryDTO {
  id: string;
  name: string;
  state: string;
  active?: boolean | undefined;
}

export interface DeliveryOption {
  description: string;
  name: string;
  state: string;
}

export interface ProductDTO {
  id: string;
  category: string;
  description?: string;
  discount?: string;
  name: string;
  price: number;
  state?: string;
  // variantId: VariantDTO[]
  cant?: number;
  size?: string;
}

export interface VariantDTO {
  name: string;
  values: ValuesVariantDTO[];
}

export interface ValuesVariantDTO {
  value: string;
  price: string;
  active: boolean;
}

export interface VariantResponseDTO {
  name: string;
  valuesId: string[];
}

export interface ProductResponseDTO {
  category: string;
  description: string;
  discount: string;
  image: string;
  name: string;
  price: string;
  state: string;
  variantId: string[];
}

export interface AddressDTO {
  email: string;
  nickname: string;
  address: string;
}

export interface NotificationDTO {
  title: string;
  description: string;
  state: string;
}

export interface UserDTO {
  email: string;
  password: string;
  submit: string;
}

export interface SignInResponse {
  user: User;
  session: Session;
}

export interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;
  user: User;
}

export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: Date;
  phone: string;
  confirmed_at: Date;
  last_sign_in_at: Date;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: Identity[];
  created_at: Date;
  updated_at: Date;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface Identity {
  id: string;
  user_id: string;
  identity_data: IdentityData;
  provider: string;
  last_sign_in_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IdentityData {
  email?: string;
  sub: string;
  phone?: string;
}

export interface UserMetadata {
  city: string;
  direction: string;
  direction_detail: string;
  dni: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface Order {
  id: number;
  created_at: Date;
  products: Product[];
  user_id: string;
  payment_method: string;
  total: number;
  voucher_url: string;
  status: string;
  driver_user: string;
  users?: Client;
}

export interface Product {
  id: number;
  qty: number;
  name: string;
  price: string;
  stock: number;
  imageUrl: string;
  created_at: Date;
  description: string;
}

export interface Client {
  first_name: string;
  last_name: string;
  direction: string;
  direction_detail: string;
}
