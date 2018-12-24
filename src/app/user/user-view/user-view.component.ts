import { UsersService } from './../users.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  currentUser;
  constructor(private modalService: NgbModal, private userList: UsersService) { }

  ngOnInit() {
    this.currentUser = this.userList.activeUser;
  }

  dismiss() {
    this.modalService.dismissAll();
  }

}
