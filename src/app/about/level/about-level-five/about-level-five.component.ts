import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-level-five',
  templateUrl: './about-level-five.component.html',
  styleUrls: ['./about-level-five.component.scss']
})
export class AboutLevelFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.title = "Level Five // About // Name that Color";
  }

}
