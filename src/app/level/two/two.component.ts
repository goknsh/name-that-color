import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface response {
  two: number,
  twoCr: any
};

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  question; time; timer; countTime; questionOptions = ["Red", "Yellow", "Blue", "Green"]; colorOptions = ["#f00", "#ff0", "#0af", "#2eed2e"]; previousScore = "waiting to finish"; buttonText; color = "#e9ecef"; loggedIn = false; score = null; buttonDisabled = false; highScore; user; startTime; updateArr; currentCr; showCr;
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
    ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user !== null) {
        this.user = user; this.loggedIn = true;
        this.afs.collection('users').doc(user.uid).valueChanges().subscribe((data: response) => {
          this.highScore = data.two; this.currentCr = data.twoCr; this.showCr = (data.twoCr[0]/(data.twoCr[1]/1000)).toFixed(3); if (this.showCr === "NaN") { this.showCr = "0.000"; }
        });
      } else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
    document.title = "Level Two // Name that Color";
    this.question = "Level Two"; this.buttonText = "Start Game";
  }
  
  play() {
    this.score = 0; this.buttonText = "Score: "; this.buttonDisabled = true; this.startTime = new Date().getTime();
    
    this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
    this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
    
    this.countTime = 3; this.time = ` — ${this.countTime}s`;
    this.timer = setInterval(() => {
      if (this.countTime === 1) {
        this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
        this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
        }
        this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
      } else {
        this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
      }
    }, 1000);
    
    document.getElementById("red").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === "#f00") {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
            this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
        this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    
    document.getElementById("yellow").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === "#ff0") {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
            this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
        this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    
    document.getElementById("blue").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === "#0af") {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
            this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
        this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    
    document.getElementById("green").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === "#2eed2e") {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
            this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        this.updateArr = [this.currentCr[0] + this.score, this.currentCr[1] + new Date().getTime() - this.startTime]; this.startTime = new Date().getTime();
        this.afs.collection('users').doc(this.user.uid).update({ twoCr: this.updateArr });
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ two: this.score });
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
  }

}
