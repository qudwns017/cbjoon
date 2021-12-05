import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbjComponent } from './cbj.component';

describe('CbjComponent', () => {
  let component: CbjComponent;
  let fixture: ComponentFixture<CbjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
