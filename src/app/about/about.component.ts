import { Component, OnInit } from '@angular/core';

@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
    
    constructor() {
    }
    
    ngOnInit() {
        document.title = "About // Name that Color";
    }
    
}
