import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseurl ='https://api.coingecko.com/api/v3/coins/';
  constructor(private httpClient: HttpClient) { }
  
  get(id:string):Observable<any>{
    return this.httpClient.get( `${this.baseurl}${id}`)
  }
}
