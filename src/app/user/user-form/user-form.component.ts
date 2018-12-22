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

  constructor(private newUser: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      jobTitle: new FormControl('', [
        Validators.required
      ])
   });
  }

  onSubmit(event) {

    event.preventDefault();

    const name = this.userForm.get('name').value;
    const jobTitle = this.userForm.get('jobTitle').value;

    this.newUserBodyData.name = name;
    this.newUserBodyData.job = jobTitle;

    this.newUser.createUser(this.apiRoot, this.newUserBodyData)
    .toPromise()
    .then(res => {
        console.log(res);
        alert('added successfully');
      }
    );
  }

  dismiss() {
    this.modalService.dismissAll();
  }

}