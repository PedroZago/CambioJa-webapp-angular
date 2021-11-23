import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossoTimeComponent } from './nosso-time.component';

describe('NossoTimeComponent', () => {
  let component: NossoTimeComponent;
  let fixture: ComponentFixture<NossoTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossoTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NossoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
