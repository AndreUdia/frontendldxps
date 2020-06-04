import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVendedorComponent } from './formulario-vendedor.component';

describe('FormularioVendedorComponent', () => {
  let component: FormularioVendedorComponent;
  let fixture: ComponentFixture<FormularioVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
