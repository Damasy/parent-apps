import { UserFormComponent } from './../../user/user-form/user-form.component';
import { Component, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cru-modal',
  templateUrl: './cru-modal.component.html',
  styleUrls: ['./cru-modal.component.css']
})
export class CruModalComponent {

  closeResult: string;
  // tslint:disable-next-line:no-output-rename
  @Output('user') formUser;

  constructor(private modalService: NgbModal) {}

  open(user) {
    this.modalService.open(UserFormComponent, user).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(user);
    this.formUser = user;
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
