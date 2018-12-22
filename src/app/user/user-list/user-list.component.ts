import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<any>;
  allUsers = [];
  apiRoot = 'users?page=';
  loading: boolean;

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
          console.log(this.allUsers, 'allUsers');
        }
      );
    }
    this.loading = false;

  }

}
