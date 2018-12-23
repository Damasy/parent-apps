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

  constructor(private deleteUser: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  delete (event) {
    console.log(event);
    this.deleteUser.deleteUser(this.apiRoot);
    this.modalService.dismissAll();
  }

  dismiss() {
    this.modalService.dismissAll();
  }
}
