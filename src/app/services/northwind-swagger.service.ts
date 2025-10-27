import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Query } from '../models/northwind-swagger/query';
import { QueryBuilderResult } from '../models/northwind-swagger/query-builder-result';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindSwaggerService {
  constructor(
    private http: HttpClient
  ) { }

  public postQueryBuilderResult(data?: Query): Observable<QueryBuilderResult | undefined> {
    const body = data ?? {
      entity: 'string',
      returnFields: [
        'string'
      ],
      operator: 'And',
      filteringOperands: [
        {
          fieldName: 'string',
          ignoreCase: true,
          condition: {
            name: 'string',
            isUnary: true,
            iconName: 'string'
          },
          searchVal: {},
          searchTree: null,
          operator: 'And',
          filteringOperands: [
            null
          ]
        }
      ]
    };
    return this.http.post<QueryBuilderResult | undefined>(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, body)
      .pipe(catchError(ErrorHandlerService.handleError<QueryBuilderResult | undefined>('postQueryBuilderResult', undefined)));
  }
}
