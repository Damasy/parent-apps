import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  apiRoot = 'users/';
  currentUser;
  currentUserID;

  constructor(private userList: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.currentUser = this.userList.activeUser;
  }

  delete (user) {
    console.log(user, 'delete user component');
    this.currentUserID = this.userList.activeUser.id;
    this.apiRoot = this.apiRoot + this.currentUserID;
    this.userList.deleteUser(this.apiRoot)
    .toPromise()
    .then(res => {
        console.log(res, 'user delete component');
        this.modalService.dismissAll();
        alert('User deleted successfully and status is : ' + res.status);
      }
    );
    this.modalService.dismissAll();
  }

  dismiss() {
    this.modalService.dismissAll();
  }
}
