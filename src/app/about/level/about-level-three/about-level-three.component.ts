import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-level-three',
  templateUrl: './about-level-three.component.html',
  styleUrls: ['./about-level-three.component.scss']
})
export class AboutLevelThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.title = "Level Three // About // Name that Color";
  }

}
