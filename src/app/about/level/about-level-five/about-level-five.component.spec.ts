import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLevelFiveComponent } from './about-level-five.component';

describe('AboutLevelFiveComponent', () => {
  let component: AboutLevelFiveComponent;
  let fixture: ComponentFixture<AboutLevelFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLevelFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLevelFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
