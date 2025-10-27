import { AddressDto } from './address-dto';

export interface EmployeeDto {
  employeeId: number;
  lastName: string;
  firstName?: string;
  title?: string;
  titleOfCourtesy?: string;
  birthDate?: Date;
  hireDate?: Date;
  addressId?: string;
  address?: AddressDto;
  notes?: string;
  avatarUrl?: string;
  reportsTo: number;
}
