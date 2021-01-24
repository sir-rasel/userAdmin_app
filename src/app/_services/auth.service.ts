import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../_models/User';
import { LoginState } from '../_models/LoginStatus';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'api/users';
  loginState:LoginState | undefined;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getLoginState(): any {
    return this.loginState;
  }

  setLoginState(loginState:any): any {
    this.loginState = loginState;
  }


  searchUserByEmailAndPassword(email: string, password: string): Observable<User[]> {
    email = encodeURIComponent(email);
    password = encodeURIComponent(password);

    return this.http.get<User[]>(`${this.usersUrl}/?Email=${email}&Password=${password}`).pipe(
      catchError(err => 
        {
          return of([]);
        })
    );
  }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** GET user by id. Return `undefined` when id not found */
  getUser<Data>(id: number): Observable<User> {
    const url = `${this.usersUrl}/?id=${id}`;
    return this.http.get<User[]>(url)
      .pipe(
        map(users => users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} user id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  /* GET Useres whose name contains search term */
  searchUsers(field:string , term: string): Observable<User[]> {
    term = encodeURIComponent(term);
    field = encodeURIComponent(field);

    if (!term.trim()) {
      // if not search term, return empty User array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?${field}=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found users matching "${term}"`) :
         console.log(`no users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

  /** POST: add a new User to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the User from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /** PUT: update the User on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => console.log(`updated User id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** Handle Http operation that failed.
   * Let the app continue. */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
