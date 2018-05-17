import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

export interface response {
  name: any,
  scores: any
}

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {

  level1Scores = []; level1Names = []; level1Display = true;
  level2Scores = []; level2Names = []; level2Display = false;
  level3Scores = []; level3Names = []; level3Display = false;
  level4Scores = []; level4Names = []; level4Display = false;
  level5Scores = []; level5Names = []; level5Display = false;
  score = []; currentLevel = "Level 1 Leaderboards";
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router
  ) {
    afAuth.authState.subscribe((user: firebase.User) => {
      this.afs.collection('leaderboard').doc('one').valueChanges().subscribe((data: response) => {
        this.level1Names = []; this.level1Scores = [];
        for (let name of data.name) {
          this.level1Names.push(name);
        } for (let score of data.scores) {
          this.level1Scores.push(score);
        }
      });
      this.afs.collection('leaderboard').doc('two').valueChanges().subscribe((data: response) => {
        this.level2Names = []; this.level2Scores = [];
        for (let name of data.name) {
          this.level2Names.push(name);
        } for (let score of data.scores) {
          this.level2Scores.push(score);
        }
      });
      this.afs.collection('leaderboard').doc('three').valueChanges().subscribe((data: response) => {
        this.level3Names = []; this.level3Scores = [];
        for (let name of data.name) {
          this.level3Names.push(name);
        } for (let score of data.scores) {
          this.level3Scores.push(score);
        }
      });
      this.afs.collection('leaderboard').doc('four').valueChanges().subscribe((data: response) => {
        this.level4Names = []; this.level4Scores = [];
        for (let name of data.name) {
          this.level4Names.push(name);
        } for (let score of data.scores) {
          this.level4Scores.push(score);
        }
      });
      this.afs.collection('leaderboard').doc('five').valueChanges().subscribe((data: response) => {
        this.level5Names = []; this.level5Scores = [];
        for (let name of data.name) {
          this.level5Names.push(name);
        } for (let score of data.scores) {
          this.level5Scores.push(score);
        }
      });
    });
  }

  ngOnInit() {
    document.title = "Leaderboards // Name that Color";
  }

}
