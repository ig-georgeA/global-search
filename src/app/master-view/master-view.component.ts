import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-swagger/employee-dto';
import { Query } from '../models/northwind-swagger/query';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-master-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, FormsModule],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _searchTerm?: string;
  public get searchTerm(): string | undefined {
    return this._searchTerm;
  }
  public set searchTerm(value: string | undefined) {
    this._searchTerm = value;
    this.queryVarExpression = this.getQueryVarExpression();
  }

  private _queryVarExpression: Query = this.getQueryVarExpression();
  public get queryVarExpression(): Query {
    return this._queryVarExpression;
  }
  public set queryVarExpression(value: Query) {
    this._queryVarExpression = value;
    this.queryVar$.next();
  }
  public queryVar: EmployeeDto[] = [];
  public queryVar$: Subject<void> = new Subject<void>();

  constructor(
    public northwindSwaggerService: NorthwindSwaggerService,
  ) {}


  ngOnInit() {
    this.northwindSwaggerService.postQueryBuilderResult(this.queryVarExpression).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.queryVar = data?.employees ?? []
    );
    this.queryVar$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindSwaggerService.postQueryBuilderResult(this.queryVarExpression).pipe(take(1)).subscribe(
        data => this.queryVar = data?.employees ?? []
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.queryVar$.complete();
  }

  private getQueryVarExpression(): Query {
    return {
      filteringOperands: [
        {
          fieldName: 'lastName',
          condition: {
            name: 'contains',
            isUnary: false,
            iconName: 'filter_contains'
          },
          searchVal: this.searchTerm,
          ignoreCase: true
        },
        {
          fieldName: 'firstName',
          condition: {
            name: 'contains',
            isUnary: false,
            iconName: 'filter_contains'
          },
          ignoreCase: true,
          searchVal: this.searchTerm
        },
        {
          fieldName: 'title',
          condition: {
            name: 'contains',
            isUnary: false,
            iconName: 'filter_contains'
          },
          ignoreCase: true,
          searchVal: this.searchTerm
        }
      ],
      operator: '1',
      entity: 'employees',
      returnFields: [
        'employeeId',
        'lastName',
        'firstName',
        'title',
        'titleOfCourtesy',
        'birthDate',
        'hireDate',
        'addressId',
        'notes',
        'avatarUrl',
        'reportsTo'
      ]
    };
  }
}
