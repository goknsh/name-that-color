import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLevelOneComponent } from './about-level-one.component';

describe('AboutLevelOneComponent', () => {
  let component: AboutLevelOneComponent;
  let fixture: ComponentFixture<AboutLevelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLevelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
