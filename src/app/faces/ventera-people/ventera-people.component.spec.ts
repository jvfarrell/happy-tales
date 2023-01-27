import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteraPeopleComponent } from './ventera-people.component';

describe('VenteraPeopleComponent', () => {
  let component: VenteraPeopleComponent;
  let fixture: ComponentFixture<VenteraPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteraPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteraPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
