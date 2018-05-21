import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface response {
  three: number
};

export interface leaderboard {
  name: any,
  scores: any,
  id: any
};

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  question; time; timer; countTime; questionOptions = ["Red", "Yellow", "Blue", "Green"]; colorOptions = ["#f00", "#ff0", "#0af", "#2eed2e"]; answerColors = ["#f00", "#ff0", "#0af", "#2eed2e"]; previousScore = "waiting to finish"; buttonText; color = "#e9ecef"; loggedIn = false; score = null; buttonDisabled = false; highScore; user; leaderboardScores = [ Infinity ]; leaderboardNames; leaderboardIds; leaderboardModal = false; leaderboardPosition;
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
    ) {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user !== null) {
        this.user = user; this.loggedIn = true;
        this.afs.collection('users').doc(user.uid).valueChanges().subscribe((data: response) => {
          this.highScore = data.three;
          this.afs.collection('leaderboard').doc('three').valueChanges().subscribe((data: leaderboard) => {
            console.log(data);
            this.leaderboardNames = data.name;
            this.leaderboardScores = data.scores;
            this.leaderboardIds = data.id;
          });
        });
      } else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
    document.title = "Level Three // Name that Color";
    this.question = "Level Three"; this.buttonText = "Start Game";
  }
  
  play() {
    this.score = 0; this.buttonText = "Score: "; this.buttonDisabled = true;
    
    this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
    this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
    for (let i = this.answerColors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
    }
    
    this.countTime = 2; this.time = ` — ${this.countTime}s`;
    this.timer = setInterval(() => {
      if (this.countTime === 1) {
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
            this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
            this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
      } else {
        this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
      }
    }, 1000);
    
    document.getElementById("red").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === this.answerColors[0]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        }
        
        this.countTime = 2; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
                this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
                this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
              }
              i++;
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
            this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
            this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    
    document.getElementById("yellow").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === this.answerColors[1]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        }
        
        this.countTime = 2; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
                this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
                this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
              }
              i++;
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
            this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
            this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    
    document.getElementById("blue").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === this.answerColors[2]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        }
        
        this.countTime = 2; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
                this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
                this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
              }
              i++;
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
            this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
            this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    
    document.getElementById("green").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.color === this.answerColors[3]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        }
        
        this.countTime = 2; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
                this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
                this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
              }
              i++;
            }
            this.previousScore = Object.assign(this.score); this.question = "Out of Time"; this.time = null; this.buttonText = `Click an answer to restart`; this.score = null; clearInterval(this.timer);
          } else {
            this.countTime = this.countTime - 1; this.time = ` — ${this.countTime}s`;
          }
        }, 1000);
      } else {
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ three: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.leaderboardIds.splice(i, 0, this.user.uid); this.leaderboardIds.pop();
            this.afs.collection('leaderboard').doc('three').set({ name: this.leaderboardNames, scores: this.leaderboardScores, id: this.leaderboardIds });
            this.leaderboardModal = true; this.leaderboardPosition = i + 1; break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
  }

}
