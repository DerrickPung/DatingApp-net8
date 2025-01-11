import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  //Add code 
  currentUser = signal<User | null>(null)

  login(model: any)
  {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(user => { // persist user login status and store into local storage (can view from web browser inspection application which store key and value)
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  }
  register(model: any)
  {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => { // persist user login status and store into local storage (can view from web browser inspection application which store key and value)
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    )
  }


  // remove from local storage
  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
