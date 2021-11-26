import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarMoedaComponent } from './adicionar-moeda.component';

describe('AdicionarMoedaComponent', () => {
  let component: AdicionarMoedaComponent;
  let fixture: ComponentFixture<AdicionarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarMoedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
