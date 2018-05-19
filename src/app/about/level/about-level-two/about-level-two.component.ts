import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-level-two',
  templateUrl: './about-level-two.component.html',
  styleUrls: ['./about-level-two.component.scss']
})
export class AboutLevelTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.title = "Level Two // About // Name that Color";
  }

}
