import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface response {
  one: number,
  two: number,
  three: number,
  four: number,
  five: number
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  
  score = [];
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
    ) {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user !== null) {
        this.afs.collection('users').doc(user.uid).valueChanges().subscribe((data: response) => {
          if (data === null) {
            this.afs.collection('users').doc(user.uid).set({ email: user.email, one: 0, two: 0, three: 0, four: 0, five: 0, id: user.uid });
            this.score.push(0); this.score.push(0); this.score.push(0); this.score.push(0); this.score.push(0);
          } else {
            this.score.push(data.one); this.score.push(data.two); this.score.push(data.three); this.score.push(data.four); this.score.push(data.five);
          }
        });
      }
    });
  }
  
  ngOnInit() {
    document.title = "Account // Name that Color";
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

}
