import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IMember } from '../Models/IMember';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = environment.baseUrl;
  members: IMember[] = [];
  constructor(private http: HttpClient) {}
  getMembers() {
    if (this.members.length > 0) {
      return of(this.members);
    }
    return this.http.get<IMember[]>(this.baseUrl + 'user').pipe(
      map((members) => {
        this.members = members;
        return members;
      })
    );
  }
  getMembersByGender(gender: string) {
    if (this.members.length > 0) {
      return of(this.members);
    }
    const url = this.baseUrl + 'user/GetByGender/' + gender;
    return this.http.get<IMember[]>(url).pipe(
      map((members) => {
        this.members = members;
        return members;
      })
    );
  }
  getMemberById(id: number) {
    const member = this.members.find((x) => x.id === id);
    if (member !== undefined) {
      return of(member);
    }
    return this.http.get<IMember>(this.baseUrl + 'user/' + id);
  }

  updateUser(member: IMember) {
    const url = this.baseUrl + 'user/edit';
    return this.http.put(url, member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }

  setMainPhoto(id: number) {
    const url = this.baseUrl + 'user/set-main-photo/' + id;
    return this.http.put(url, {});
  }

  deletePhoto(id: number) {
    const url = this.baseUrl + 'user/delete-photos/' + id;
    return this.http.delete(url);
  }
}
