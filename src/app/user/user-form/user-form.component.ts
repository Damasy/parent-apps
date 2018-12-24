import { UsersService } from './../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  newUserBodyData = {
    name: '',
    job: ''
  };
  apiRoot = 'users';
  currentUser;

  constructor(private userList: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      jobTitle: new FormControl('', [
        Validators.required
      ])
    });
    this.currentUser = this.userList.activeUser;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    this.currentUser = this.userList.activeUser;
    console.log(this.currentUser, 'ngAfterContentInit');
  }

  onSubmit(event) {

    event.preventDefault();

    const name = this.userForm.get('name').value;
    const jobTitle = this.userForm.get('jobTitle').value;

    this.newUserBodyData.name = name;
    this.newUserBodyData.job = jobTitle;

    if (this.userList.activeUser) {

      this.userList.createUser(this.apiRoot, this.newUserBodyData)
      .toPromise()
      .then(res => {
          console.log(res, 'user form component add');
          this.modalService.dismissAll();
          alert('User added successfully and status is : ' + res.status);
        }
      );
    } else {
      this.userList.editUser(this.apiRoot, this.newUserBodyData)
      .toPromise()
      .then(res => {
          console.log(res, 'user form component edit');
          this.modalService.dismissAll();
          alert('User edited successfully and status is : ' + res.status);
        }
      );
    }

  }

  dismiss() {
    this.modalService.dismissAll();
  }

}
