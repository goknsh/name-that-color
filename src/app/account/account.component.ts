import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface response {
  one: number,
  oneCr: number,
  two: number,
  twoCr: number,
  three: number,
  threeCr: number,
  four: number,
  fourCr: number,
  five: number,
  fiveCr: number
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  
  score = []; averageClickRate; resetClickRateLevel; resetClickRateModal = false; user;
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
    ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      this.user = user;
      if (this.user !== null) {
        this.afs.collection('users').doc(this.user.uid).valueChanges().subscribe((data: response) => {
          if (data === null) {
            this.afs.collection('users').doc(this.user.uid).set({ email: this.user.email, name: this.user.displayName, one: 0, oneCr: [0, 0], two: 0, twoCr: [0, 0], three: 0, threeCr: [0, 0], four: 0, fourCr: [0, 0], five: 0, fiveCr: [0, 0], id: this.user.uid });
            this.score = [];
            this.score.push(1); this.score.push(1); this.score.push(1); this.score.push(1); this.score.push(1);
            this.score.push(0); this.score.push(0); this.score.push(0); this.score.push(0); this.score.push(0);
          } else {
            if (data["name"] !== this.user.displayName) {
              this.afs.collection('users').doc(this.user.uid).update({ name: this.user.displayName });
            } if (data["oneCr"] === undefined) {
              this.afs.collection('users').doc(this.user.uid).update({ oneCr: [0, 0], twoCr: [0, 0], threeCr: [0, 0], fourCr: [0, 0], fiveCr: [0, 0] });
            }
            this.score = [];
            this.score.push(data.one); this.score.push(data.two); this.score.push(data.three); this.score.push(data.four); this.score.push(data.five);
            
            if (isNaN(data.oneCr[0]/(data.oneCr[1]/1000))) { this.score.push("0.000"); } else { this.score.push(((data.oneCr[0]/(data.oneCr[1]/1000))).toFixed(3)); }
            if (isNaN(data.twoCr[0]/(data.twoCr[1]/1000))) { this.score.push("0.000"); } else { this.score.push(((data.twoCr[0]/(data.twoCr[1]/1000))).toFixed(3)); }
            if (isNaN(data.threeCr[0]/(data.threeCr[1]/1000))) { this.score.push("0.000"); } else { this.score.push(((data.threeCr[0]/(data.threeCr[1]/1000))).toFixed(3)); }
            if (isNaN(data.fourCr[0]/(data.fourCr[1]/1000))) { this.score.push("0.000"); } else { this.score.push(((data.fourCr[0]/(data.fourCr[1]/1000))).toFixed(3)); }
            if (isNaN(data.fiveCr[0]/(data.fiveCr[1]/1000))) { this.score.push("0.000"); } else { this.score.push(((data.fiveCr[0]/(data.fiveCr[1]/1000))).toFixed(3)); }
            
            this.averageClickRate = ((Number(this.score[5]) + Number(this.score[6]) + Number(this.score[7]) + Number(this.score[8]) + Number(this.score[9])) / 5).toFixed(3);
          }
        });
      }
    });
  }
  
  ngOnInit() {
    document.title = "Account // Name that Color";
  }
  
  askResetClickRate(level) {
    this.resetClickRateModal = true; this.resetClickRateLevel = level;
  }
  
  resetClickRate(level) {
    this.resetClickRateModal = false;
    if (level === 1) {
      this.afs.collection('users').doc(this.user.uid).update({ oneCr: [0, 0] });
    } if (level === 2) {
      this.afs.collection('users').doc(this.user.uid).update({ twoCr: [0, 0] });
    } if (level === 3) {
      this.afs.collection('users').doc(this.user.uid).update({ threeCr: [0, 0] });
    } if (level === 4) {
      this.afs.collection('users').doc(this.user.uid).update({ fourCr: [0, 0] });
    } if (level === 5) {
      this.afs.collection('users').doc(this.user.uid).update({ fiveCr: [0, 0] });
    }
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

}
