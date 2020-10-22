import { Component, Input, OnInit } from '@angular/core';
import { IMember } from 'src/app/Models/IMember';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() member: IMember;
  constructor() { }

  ngOnInit(): void {
  }

}
