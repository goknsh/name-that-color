import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLevelTwoComponent } from './about-level-two.component';

describe('AboutLevelTwoComponent', () => {
  let component: AboutLevelTwoComponent;
  let fixture: ComponentFixture<AboutLevelTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLevelTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
