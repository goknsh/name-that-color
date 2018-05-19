import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-level-four',
  templateUrl: './about-level-four.component.html',
  styleUrls: ['./about-level-four.component.scss']
})
export class AboutLevelFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.title = "Level Four // About // Name that Color";
  }

}
