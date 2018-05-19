import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLevelThreeComponent } from './about-level-three.component';

describe('AboutLevelThreeComponent', () => {
  let component: AboutLevelThreeComponent;
  let fixture: ComponentFixture<AboutLevelThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLevelThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
