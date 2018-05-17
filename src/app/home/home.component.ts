import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    
    constructor(private router: Router) {
    }
    
    
    ngOnInit() {
        document.title = "Home // Name that Color";
        if (window.localStorage.getItem("currentUser")) {
            document.getElementById(`level${window.localStorage.getItem("currentUser")}-input`).setAttribute("checked", "true");
        }
    }
    
    play() {
        if ((<HTMLInputElement>document.getElementById("level1-input")).checked === true) {
            window.localStorage.setItem("currentUser", "1");
            this.router.navigate(["/level", "1"]);
        } if ((<HTMLInputElement>document.getElementById("level2-input")).checked === true) {
            window.localStorage.setItem("currentUser", "2");
            this.router.navigate(["/level", "2"]);
        } if ((<HTMLInputElement>document.getElementById("level3-input")).checked === true) {
            window.localStorage.setItem("currentUser", "3");
            this.router.navigate(["/level", "3"]);
        } if ((<HTMLInputElement>document.getElementById("level4-input")).checked === true) {
            window.localStorage.setItem("currentUser", "4");
            this.router.navigate(["/level", "4"]);
        } if ((<HTMLInputElement>document.getElementById("level5-input")).checked === true) {
            window.localStorage.setItem("currentUser", "5");
            this.router.navigate(["/level", "5"]);
        }
    }
}
