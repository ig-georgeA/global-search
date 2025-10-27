import { AddressDto } from './address-dto';

export interface CustomerDto {
  customerId?: string;
  companyName: string;
  contactName?: string;
  contactTitle?: string;
  address?: AddressDto;
}
