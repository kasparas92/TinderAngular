import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMember } from '../Models/IMember';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getMembers() {
    return this.http.get<IMember[]>(this.baseUrl + 'user');
  }
  getMemberById(id: number) {
    return this.http.get<IMember>(this.baseUrl + 'user/' + id);
  }
}
