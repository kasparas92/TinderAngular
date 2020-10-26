import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/Services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() public cancelRegister = new EventEmitter();
  model: any = {};
  form: FormGroup;
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      knownAs: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      password: [
        '',
        Validators.required,
        Validators.min(4),
        Validators.maxLength(8),
      ],
    });
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('user');
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
