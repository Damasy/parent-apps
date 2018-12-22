import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruModalComponent } from './cru-modal.component';

describe('CruModalComponent', () => {
  let component: CruModalComponent;
  let fixture: ComponentFixture<CruModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
