import { Query } from './query';
import { QueryFilterCondition } from './query-filter-condition';

export interface QueryFilter {
  fieldName?: string;
  ignoreCase?: boolean;
  condition?: QueryFilterCondition;
  searchVal?: any;
  searchTree?: Query;
  operator?: string;
  filteringOperands?: QueryFilter[];
}
