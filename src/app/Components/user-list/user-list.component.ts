import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMember } from 'src/app/Models/IMember';
import { IUser } from 'src/app/Models/IUser';
import { AccountService } from 'src/app/Services/account.service';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  members: Observable<IMember[]>;
  user: IUser;
  constructor(
    private membersService: MemberService,
    private accountService: AccountService
  ) {
    this.accountService.currentUser.subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.getMembersOnDifferentGender();
  }

  getMembersOnDifferentGender() {
    const gender = this.user.gender === 'male' ? 'female' : 'male';
    this.members = this.membersService.getMembersByGender(gender);
  }
}
