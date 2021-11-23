import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosModulosComponent } from './nossos-modulos.component';

describe('NossosModulosComponent', () => {
  let component: NossosModulosComponent;
  let fixture: ComponentFixture<NossosModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossosModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NossosModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
