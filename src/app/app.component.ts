import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Gtag } from 'angular-gtag';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    home = true; newUser = false;
    
    constructor(
        private router: Router,
        private _location: Location,
        gtag: Gtag
    ) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects === "/") {
                    this.home = true;
                } else {
                    this.home = false;
                }
                setTimeout( () => {
                    gtag.pageview({ 
                        page_title: document.title,
                        page_path: event.urlAfterRedirects
                    });
                }, 300);
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
