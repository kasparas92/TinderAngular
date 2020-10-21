import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IUser } from '../Models/IUser';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.baseUrl;
  private currentUserValue = new ReplaySubject<IUser>(1);
  currentUser = this.currentUserValue.asObservable();
  constructor(private http: HttpClient) {}

  login(model: any) {
    const url = this.baseUrl + 'account/login';
    return this.http.post(url, model).pipe(
      map((response: IUser) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserValue.next(user);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserValue.next(null);
  }

  setCurrentUser(user: IUser) {
    this.currentUserValue.next(user);
  }

  register(model: any) {
    const url = this.baseUrl + 'account/register';
    return this.http.post(url, model).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserValue.next(user);
        }
        return user;
      })
    );
  }
}
