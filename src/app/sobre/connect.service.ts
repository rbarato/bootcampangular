import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConnectService {

  private _restURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { 
    
  }

  public getUsers(): Observable<Object> {
      return this._http.get(this._restURL);
  }

}
