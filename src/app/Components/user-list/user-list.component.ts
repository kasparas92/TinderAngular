import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMember } from 'src/app/Models/IMember';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  members: Observable<IMember[]>;
  constructor(private membersService: MemberService) {}

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }
}
