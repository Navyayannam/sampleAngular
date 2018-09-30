import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavyaComponent } from './navya.component';

describe('NavyaComponent', () => {
  let component: NavyaComponent;
  let fixture: ComponentFixture<NavyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
