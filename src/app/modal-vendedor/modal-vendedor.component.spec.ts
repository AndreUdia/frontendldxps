import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVendedorComponent } from './modal-vendedor.component';

describe('ModalVendedorComponent', () => {
  let component: ModalVendedorComponent;
  let fixture: ComponentFixture<ModalVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
