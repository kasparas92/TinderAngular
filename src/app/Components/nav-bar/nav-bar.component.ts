import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  model: any = {};
  constructor(public accountService: AccountService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.accountService.login(this.model).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/user');
    }, (error) => {
      console.log(error);
      this.toastrService.error(error.error);
    });
  }
  logout(){
    this.accountService.logout();
  }

}
