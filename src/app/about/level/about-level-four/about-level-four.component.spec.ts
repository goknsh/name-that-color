import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLevelFourComponent } from './about-level-four.component';

describe('AboutLevelFourComponent', () => {
  let component: AboutLevelFourComponent;
  let fixture: ComponentFixture<AboutLevelFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLevelFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
