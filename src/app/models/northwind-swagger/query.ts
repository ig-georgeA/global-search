import { QueryFilter } from './query-filter';

export interface Query {
  entity?: string;
  returnFields?: string[];
  operator?: string;
  filteringOperands?: QueryFilter[];
}
