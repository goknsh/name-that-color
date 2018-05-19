import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface response {
  five: number
};

export interface leaderboard {
  name: any,
  scores: any
};

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements OnInit {

  question; time; timer; countTime; checkAnswers; questionOptions = ["Red", "Yellow", "Blue", "Green"]; colorOptions = ["#f00", "#ff0", "#0af", "#2eed2e"]; answerColors = ["#f00", "#ff0", "#0af", "#2eed2e"]; answerOptions = ["Red", "Yellow", "Blue", "Green"]; previousScore = "waiting to finish"; buttonText; color = "#e9ecef"; loggedIn = false; score = null; buttonDisabled = false; highScore; user; leaderboardNames; leaderboardScores;
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
    ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user !== null) {
        this.user = user; this.loggedIn = true;
        this.afs.collection('users').doc(user.uid).valueChanges().subscribe((data: response) => {
          this.highScore = data.five;
          this.afs.collection('leaderboard').doc('five').valueChanges().subscribe((data: leaderboard) => {
            this.leaderboardNames = data.name;
            this.leaderboardScores = data.scores;
          });
        });
      } else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
    document.title = "Level Five // Name that Color";
    this.question = "Level Five"; this.buttonText = "Start Game";
  }
  
  play() {
    this.score = 0; this.buttonText = "Score: "; this.buttonDisabled = true;
    
    this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
    this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
    for (let i = this.answerColors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
    } for (let i = this.answerOptions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.answerOptions[i], this.answerOptions[j]] = [this.answerOptions[j], this.answerOptions[i]];
    }
    if (this.color === "#f00") { this.checkAnswers = "Red" } if (this.color === "#ff0") { this.checkAnswers = "Yellow" } if (this.color === "#0af") { this.checkAnswers = "Blue" } if (this.color === "#2eed2e") { this.checkAnswers = "Green" }
    
    this.countTime = 3; this.time = ` — ${this.countTime}s`;
    this.timer = setInterval(() => {
      if (this.countTime === 1) {
        if (this.score > this.highScore) {
          this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
            break;
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
      if (this.checkAnswers === this.answerOptions[0]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        } for (let i = this.answerOptions.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerOptions[i], this.answerOptions[j]] = [this.answerOptions[j], this.answerOptions[i]];
        }
        if (this.color === "#f00") { this.checkAnswers = "Red" } if (this.color === "#ff0") { this.checkAnswers = "Yellow" } if (this.color === "#0af") { this.checkAnswers = "Blue" } if (this.color === "#2eed2e") { this.checkAnswers = "Green" }
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
                break;
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
          this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
            break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    document.getElementById("yellow").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.checkAnswers === this.answerOptions[1]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        } for (let i = this.answerOptions.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerOptions[i], this.answerOptions[j]] = [this.answerOptions[j], this.answerOptions[i]];
        }
        if (this.color === "#f00") { this.checkAnswers = "Red" } if (this.color === "#ff0") { this.checkAnswers = "Yellow" } if (this.color === "#0af") { this.checkAnswers = "Blue" } if (this.color === "#2eed2e") { this.checkAnswers = "Green" }
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
                break;
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
          this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
            break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    document.getElementById("blue").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.checkAnswers === this.answerOptions[2]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        } for (let i = this.answerOptions.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerOptions[i], this.answerOptions[j]] = [this.answerOptions[j], this.answerOptions[i]];
        }
        if (this.color === "#f00") { this.checkAnswers = "Red" } if (this.color === "#ff0") { this.checkAnswers = "Yellow" } if (this.color === "#0af") { this.checkAnswers = "Blue" } if (this.color === "#2eed2e") { this.checkAnswers = "Green" }
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
                break;
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
          this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
            break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
    document.getElementById("green").addEventListener("click", () => {
      clearInterval(this.timer);
      if (this.checkAnswers === this.answerOptions[3]) {
        this.score++; this.buttonText = `Score: `;
        this.question = this.questionOptions[Math.floor(Math.random() * Math.floor(4))];
        this.color = this.colorOptions[Math.floor(Math.random() * Math.floor(4))];
        
        for (let i = this.answerColors.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerColors[i], this.answerColors[j]] = [this.answerColors[j], this.answerColors[i]];
        } for (let i = this.answerOptions.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this.answerOptions[i], this.answerOptions[j]] = [this.answerOptions[j], this.answerOptions[i]];
        }
        if (this.color === "#f00") { this.checkAnswers = "Red" } if (this.color === "#ff0") { this.checkAnswers = "Yellow" } if (this.color === "#0af") { this.checkAnswers = "Blue" } if (this.color === "#2eed2e") { this.checkAnswers = "Green" }
        
        this.countTime = 3; this.time = ` — ${this.countTime}s`;
        this.timer = setInterval(() => {
          if (this.countTime === 1) {
            if (this.score > this.highScore) {
              this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
            }
            let i = 0;
            for (let score of this.leaderboardScores) {
              if (this.score > score) {
                this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
                this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
                this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
                break;
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
          this.afs.collection('users').doc(this.user.uid).update({ five: this.score });
        }
        let i = 0;
        for (let score of this.leaderboardScores) {
          if (this.score > score) {
            this.leaderboardScores.splice(i, 0, this.score); this.leaderboardScores.pop();
            this.leaderboardNames.splice(i, 0, this.user.displayName); this.leaderboardNames.pop();
            this.afs.collection('leaderboard').doc('five').set({ name: this.leaderboardNames, scores: this.leaderboardScores });
            break;
          }
          i++;
        }
        this.previousScore = Object.assign(this.score); this.score = null; this.question = "Wrong"; this.time = null; this.buttonText = `Click an answer to restart`; clearInterval(this.timer);
      }
    });
  }

}
