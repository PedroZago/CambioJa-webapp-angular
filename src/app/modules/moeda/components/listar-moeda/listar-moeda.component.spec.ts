import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMoedaComponent } from './listar-moeda.component';

describe('ListarMoedaComponent', () => {
  let component: ListarMoedaComponent;
  let fixture: ComponentFixture<ListarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMoedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
