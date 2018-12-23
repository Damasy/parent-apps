import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users;
  allUsers = [];
  apiRoot = 'users?page=';
  loading: boolean;
  collapsed: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('user') listItemEvent = new EventEmitter();

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
        }
      );
    }
    this.loading = false;
  }

  viewUser(user) {
    this.collapsed = !this.collapsed;
    console.log(user, this.collapsed);
    this.listItemEvent.emit(user);
  }

}
