import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-level-one',
  templateUrl: './about-level-one.component.html',
  styleUrls: ['./about-level-one.component.scss']
})
export class AboutLevelOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.title = "Level One // About // Name that Color";
  }

}
