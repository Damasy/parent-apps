import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users;
  allUsers = [];
  apiRoot = 'users?page=';
  loading = true;
  collapsed: boolean;
  @ViewChild('inputRef') userRef;

  constructor(private usersList: UsersService) {
    this.loading = true;
  }

  ngOnInit() {
    for (let i = 1; i <= 4; i++) {
      this.usersList.getUsers(this.apiRoot + i)
      .subscribe(
        items => {
          this.users = items.json();
          for (let x = 0; x < this.users.data.length; x++) {
            this.allUsers.push(this.users.data[x]);
          }
          this.loading = false;
        }
      );
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log(this.userRef);
  }

  viewUser(user) {
    this.collapsed = !this.collapsed;
    this.usersList.setActiveUser(user);
  }

}
