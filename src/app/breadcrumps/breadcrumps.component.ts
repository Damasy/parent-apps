import { UserFormComponent } from './../user/user-form/user-form.component';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.css']
})
export class BreadcrumpsComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    this.modalService.open(UserFormComponent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
