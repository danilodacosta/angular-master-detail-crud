import { DB_API } from './../directives/api.app';
import { BaseResourceModel } from '../models/base-resource.model';

import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
      this.http = injector.get(HttpClient);
}

  getAll(): Observable<T[]> {
    return this.http.get(`${DB_API}${this.apiPath}`).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handlerError)
    );
  }

  getById(id: number): Observable<T> {
    const url = `${DB_API}${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handlerError)
    );
  }

  create(resource: T): Observable<T> {

    const url = `${DB_API}${this.apiPath}`;

    return this.http.post(url, resource).pipe(
     map(this.jsonDataToResource.bind(this)),
     catchError(this.handlerError)
    );
  }

  update(resource: T): Observable<T> {
    const url = `${DB_API}${this.apiPath}/${resource.id}`;

    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handlerError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${DB_API}${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handlerError)
    );
  }


  // PROTECTED METHODS

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
        element => resources.push( this.jsonDataToResourceFn(element) )
      );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handlerError(error: any): Observable<any> {
    console.log('ERROR NA REQUISIÇÃO => ', error);
    return throwError(error);
  }


}
