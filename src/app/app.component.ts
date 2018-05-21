import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

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
        public afAuth: AngularFireAuth
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
        afAuth.authState.subscribe((user: firebase.User) => {
            
        });
    }
    
    
    ngOnInit() {
        if (localStorage.getItem("newUser") === null) {
            this.newUser = true;
            localStorage.setItem("newUser", "false")
        }
    }
}
