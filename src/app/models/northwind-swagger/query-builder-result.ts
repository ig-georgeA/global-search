import { AddressDto } from './address-dto';
import { CategoryDto } from './category-dto';
import { CustomerDto } from './customer-dto';
import { EmployeeDto } from './employee-dto';
import { OrderDetailDto } from './order-detail-dto';
import { OrderDto } from './order-dto';
import { ProductDto } from './product-dto';
import { RegionDto } from './region-dto';
import { ShipperDto } from './shipper-dto';
import { SupplierDto } from './supplier-dto';
import { TerritoryDto } from './territory-dto';

export interface QueryBuilderResult {
  addresses?: AddressDto[];
  categories?: CategoryDto[];
  products?: ProductDto[];
  regions?: RegionDto[];
  territories?: TerritoryDto[];
  employees?: EmployeeDto[];
  customers?: CustomerDto[];
  orders?: OrderDto[];
  orderDetails?: OrderDetailDto[];
  shippers?: ShipperDto[];
  suppliers?: SupplierDto[];
}
