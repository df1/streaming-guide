import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoPageComponent } from './show-info-page.component';

describe('ShowInfoPageComponent', () => {
  let component: ShowInfoPageComponent;
  let fixture: ComponentFixture<ShowInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
