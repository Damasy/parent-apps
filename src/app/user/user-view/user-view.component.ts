import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('user') userInfo;
  userinfo;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    consumeUser($event) {
      this.userinfo = $event;
    }
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  consumeUser($event) {
    this.userinfo = $event;
  }

}
