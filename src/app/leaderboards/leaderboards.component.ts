import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

export interface response {
  name: any,
  scores: any,
  id: any
}

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {

  level1Scores = []; level1Names = []; level1Ids = []; level1Display = true;
  level2Scores = []; level2Names = []; level2Ids = []; level2Display = false;
  level3Scores = []; level3Names = []; level3Ids = []; level3Display = false;
  level4Scores = []; level4Names = []; level4Ids = []; level4Display = false;
  level5Scores = []; level5Names = []; level5Ids = []; level5Display = false;
  score = []; currentLevel = "Level 1 Leaderboards";
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      this.afs.collection('leaderboard').doc('one').valueChanges().subscribe((data: response) => {
        this.level1Names = []; this.level1Scores = []; this.level1Ids = [];
        for (let name of data.name) {
          this.level1Names.push(name);
        } for (let score of data.scores) {
          this.level1Scores.push(score);
        } for (let id of data.id) {
          if (user === null) { this.level1Ids.push(false); } else { if (id === user.uid) { this.level1Ids.push(true); } else { this.level1Ids.push(false); } }
        }
      });
      this.afs.collection('leaderboard').doc('two').valueChanges().subscribe((data: response) => {
        this.level2Names = []; this.level2Scores = []; this.level2Ids = [];
        for (let name of data.name) {
          this.level2Names.push(name);
        } for (let score of data.scores) {
          this.level2Scores.push(score);
        } for (let id of data.id) {
          if (user === null) { this.level2Ids.push(false); } else { if (id === user.uid) { this.level2Ids.push(true); } else { this.level2Ids.push(false); } }
        }
      });
      this.afs.collection('leaderboard').doc('three').valueChanges().subscribe((data: response) => {
        this.level3Names = []; this.level3Scores = []; this.level3Ids = [];
        for (let name of data.name) {
          this.level3Names.push(name);
        } for (let score of data.scores) {
          this.level3Scores.push(score);
        } for (let id of data.id) {
          if (user === null) { this.level3Ids.push(false); } else { if (id === user.uid) { this.level3Ids.push(true); } else { this.level3Ids.push(false); } }
        }
      });
      this.afs.collection('leaderboard').doc('four').valueChanges().subscribe((data: response) => {
        this.level4Names = []; this.level4Scores = []; this.level4Ids = [];
        for (let name of data.name) {
          this.level4Names.push(name);
        } for (let score of data.scores) {
          this.level4Scores.push(score);
        } for (let id of data.id) {
          if (user === null) { this.level4Ids.push(false); } else { if (id === user.uid) { this.level4Ids.push(true); } else { this.level4Ids.push(false); } }
        }
      });
      this.afs.collection('leaderboard').doc('five').valueChanges().subscribe((data: response) => {
        this.level5Names = []; this.level5Scores = []; this.level5Ids = [];
        for (let name of data.name) {
          this.level5Names.push(name);
        } for (let score of data.scores) {
          this.level5Scores.push(score);
        } for (let id of data.id) {
          if (user === null) { this.level5Ids.push(false); } else { if (id === user.uid) { this.level5Ids.push(true); } else { this.level5Ids.push(false); } }
        }
      });
    });
  }

  ngOnInit() {
    document.title = "Leaderboards // Name that Color";
    this.route.params.subscribe(params => {
      if (params.id === "1") {
        this.level1Display = true;
        this.level2Display = false;
        this.level3Display = false;
        this.level4Display = false;
        this.level5Display = false;
        this.currentLevel = "Level 1 Leaderboards";
        document.title = "Level One // Leaderboards // Name that Color";
      } if (params.id === "2") {
        this.level1Display = false;
        this.level2Display = true;
        this.level3Display = false;
        this.level4Display = false;
        this.level5Display = false;
        this.currentLevel = "Level 2 Leaderboards";
        document.title = "Level Two // Leaderboards // Name that Color";
      } if (params.id === "3") {
        this.level1Display = false;
        this.level2Display = false;
        this.level3Display = true;
        this.level4Display = false;
        this.level5Display = false;
        this.currentLevel = "Level 3 Leaderboards";
        document.title = "Level Three // Leaderboards // Name that Color";
      } if (params.id === "4") {
        this.level1Display = false;
        this.level2Display = false;
        this.level3Display = false;
        this.level4Display = true;
        this.level5Display = false;
        this.currentLevel = "Level 4 Leaderboards";
        document.title = "Level Four // Leaderboards // Name that Color";
      } if (params.id === "5") {
        this.level1Display = false;
        this.level2Display = false;
        this.level3Display = false;
        this.level4Display = false;
        this.level5Display = true;
        this.currentLevel = "Level 5 Leaderboards";
        document.title = "Level Five // Leaderboards // Name that Color";
      }
    });
  }

}
