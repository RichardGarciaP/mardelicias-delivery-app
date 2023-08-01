
export interface BannerDTO {
  image: string
  name: string
  state: string
  description: string
}
export interface CategoryDTO {
  id: string
  name: string
  state: string
  active?: boolean | undefined
}

export interface DeliveryOption {
  description: string
  name: string
  state: string
}

export interface ProductDTO {
  id: string;
  category: string;
  description: string
  discount: string
  image: string;
  name: string
  price: string;
  state: string
  variantId: VariantDTO[]
  cant?: number
}

export interface VariantDTO {
  name: string
  values: ValuesVariantDTO[]
}

export interface ValuesVariantDTO {
  value: string
  price: string
  active: boolean
}


export interface VariantResponseDTO {
  name: string
  valuesId: string[]
}

export interface ProductResponseDTO {
  category: string;
  description: string
  discount: string
  image: string;
  name: string
  price: string;
  state: string
  variantId: string[]
}

export interface AddressDTO {
  email: string;
  nickname: string;
  address: string;
}

export interface OrderDTO {
  id: string;
  address: AddressDTO
  typeDelivery: string
  deliveryOptions: string
  state: number
  clientName: string
  clientEmail: string
  clientPhone: string
  products: ProductDTO[]
  paymentMethods: string
  order: number
}

export interface NotificationDTO {
  title: string;
  description: string
  state: string
}
