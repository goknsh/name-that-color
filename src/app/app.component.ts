import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    home = true; newUser = false;
    
    constructor(
        private router: Router,
        private _location: Location
    ) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects === "/") {
                    this.home = true;
                } else {
                    this.home = false;
                }
            }
        });
    }
    
    
    ngOnInit() {
        if (localStorage.getItem("newUser") === null) {
            this.newUser = true;
            localStorage.setItem("newUser", "false")
        }
    }
}
