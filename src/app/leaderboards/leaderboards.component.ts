import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

export interface response {
  name: any,
  scores: any,
  rate: any,
  id: any
}

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {

  level1Scores = []; level1Names = []; level1Ids = []; level1Rate = []; level1RateNames = []; level1RateIds = []; level1Display = true;
  level2Scores = []; level2Names = []; level2Ids = []; level2Rate = []; level2RateNames = []; level2RateIds = []; level2Display = false;
  level3Scores = []; level3Names = []; level3Ids = []; level3Rate = []; level3RateNames = []; level3RateIds = []; level3Display = false;
  level4Scores = []; level4Names = []; level4Ids = []; level4Rate = []; level4RateNames = []; level4RateIds = []; level4Display = false;
  level5Scores = []; level5Names = []; level5Ids = []; level5Rate = []; level5RateNames = []; level5RateIds = []; level5Display = false;
  score = []; currentLevel = 1; clickRate = false; type;
  
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      this.afs.collection('users', ref => ref.limit(30).orderBy('oneCr', 'desc')).valueChanges().subscribe((data) => {
        this.level1Rate = []; this.level1RateIds = []; this.level1RateNames = [];
        data.forEach((data) => {
          if (isNaN(data["oneCr"][0]/(data["oneCr"][1]/1000))) { this.level1Rate.push("0.000"); } else { this.level1Rate.push(((data["oneCr"][0]/(data["oneCr"][1]/1000))).toFixed(3)); }
          this.level1RateNames.push(data["name"]);
          if (user === null) { this.level1RateIds.push(false) } else { if (data["id"] === user.uid) { this.level1RateIds.push(true); } else { this.level1RateIds.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('twoCr', 'desc')).valueChanges().subscribe((data) => {
        this.level2Rate = []; this.level2RateIds = []; this.level2RateNames = [];
        data.forEach((data) => {
          if (isNaN(data["twoCr"][0]/(data["twoCr"][1]/1000))) { this.level2Rate.push("0.000"); } else { this.level2Rate.push(((data["twoCr"][0]/(data["twoCr"][1]/1000))).toFixed(3)); }
          this.level2RateNames.push(data["name"]);
          if (user === null) { this.level2RateIds.push(false) } else { if (data["id"] === user.uid) { this.level2RateIds.push(true); } else { this.level2RateIds.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('threeCr', 'desc')).valueChanges().subscribe((data) => {
        this.level3Rate = []; this.level3RateIds = []; this.level3RateNames = [];
        data.forEach((data) => {
          if (isNaN(data["threeCr"][0]/(data["threeCr"][1]/1000))) { this.level3Rate.push("0.000"); } else { this.level3Rate.push(((data["threeCr"][0]/(data["threeCr"][1]/1000))).toFixed(3)); }
          this.level3RateNames.push(data["name"]);
          if (user === null) { this.level3RateIds.push(false) } else { if (data["id"] === user.uid) { this.level3RateIds.push(true); } else { this.level3RateIds.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('fourCr', 'desc')).valueChanges().subscribe((data) => {
        this.level4Rate = []; this.level4RateIds = []; this.level4RateNames = [];
        data.forEach((data) => {
          if (isNaN(data["fourCr"][0]/(data["fourCr"][1]/1000))) { this.level4Rate.push("0.000"); } else { this.level4Rate.push(((data["fourCr"][0]/(data["fourCr"][1]/1000))).toFixed(3)); }
          this.level4RateNames.push(data["name"]);
          if (user === null) { this.level4RateIds.push(false) } else { if (data["id"] === user.uid) { this.level4RateIds.push(true); } else { this.level4RateIds.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('fiveCr', 'desc')).valueChanges().subscribe((data) => {
        this.level5Rate = []; this.level5RateIds = []; this.level5RateNames = [];
        data.forEach((data) => {
          if (isNaN(data["fiveCr"][0]/(data["fiveCr"][1]/1000))) { this.level5Rate.push("0.000"); } else { this.level5Rate.push(((data["fiveCr"][0]/(data["fiveCr"][1]/1000))).toFixed(3)); }
          this.level5RateNames.push(data["name"]);
          if (user === null) { this.level5RateIds.push(false) } else { if (data["id"] === user.uid) { this.level5RateIds.push(true); } else { this.level5RateIds.push(false); } }
        });
      });
      
      this.afs.collection('users', ref => ref.limit(30).orderBy('one', 'desc')).valueChanges().subscribe((data) => {
        this.level1Names = []; this.level1Scores = []; this.level1Ids = [];
        data.forEach((data) => {
          this.level1Scores.push(data["one"]);
          this.level1Names.push(data["name"]);
          if (user === null) { this.level1Ids.push(false) } else { if (data["id"] === user.uid) { this.level1Ids.push(true); } else { this.level1Ids.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('two', 'desc')).valueChanges().subscribe((data) => {
        this.level2Names = []; this.level2Scores = []; this.level2Ids = [];
        data.forEach((data) => {
          this.level2Scores.push(data["two"]);
          this.level2Names.push(data["name"]);
          if (user === null) { this.level2Ids.push(false) } else { if (data["id"] === user.uid) { this.level2Ids.push(true); } else { this.level2Ids.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('three', 'desc')).valueChanges().subscribe((data) => {
        this.level3Names = []; this.level3Scores = []; this.level3Ids = [];
        data.forEach((data) => {
          this.level3Scores.push(data["three"]);
          this.level3Names.push(data["name"]);
          if (user === null) { this.level3Ids.push(false) } else { if (data["id"] === user.uid) { this.level3Ids.push(true); } else { this.level3Ids.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('four', 'desc')).valueChanges().subscribe((data) => {
        this.level4Names = []; this.level4Scores = []; this.level4Ids = [];
        data.forEach((data) => {
          this.level4Scores.push(data["four"]);
          this.level4Names.push(data["name"]);
          if (user === null) { this.level4Ids.push(false) } else { if (data["id"] === user.uid) { this.level4Ids.push(true); } else { this.level4Ids.push(false); } }
        });
      });
      this.afs.collection('users', ref => ref.limit(30).orderBy('five', 'desc')).valueChanges().subscribe((data) => {
        this.level5Names = []; this.level5Scores = []; this.level5Ids = [];
        data.forEach((data) => {
          this.level5Scores.push(data["five"]);
          this.level5Names.push(data["name"]);
          if (user === null) { this.level5Ids.push(false) } else { if (data["id"] === user.uid) { this.level5Ids.push(true); } else { this.level5Ids.push(false); } }
        });
      });
    });
  }

  ngOnInit() {
    document.title = "Leaderboards // Name that Color";
    this.route.params.subscribe(params => {
      if (params.type === "scores") {
        this.clickRate = false; this.type = "Score";
      } if (params.type === "rate") {
        this.clickRate = true; this.type = "Click Rate";
      }
      if (params.id === "1") {
        this.level1Display = true;
        this.level2Display = false;
        this.level3Display = false;
        this.level4Display = false;
        this.level5Display = false;
        this.currentLevel = 1;
        document.title = "Level One // " + this.type + " Leaderboards // Name that Color";
      } if (params.id === "2") {
        this.level1Display = false;
        this.level2Display = true;
        this.level3Display = false;
        this.level4Display = false;
        this.level5Display = false;
        this.currentLevel = 2;
        document.title = "Level Two // " + this.type + " Leaderboards // Name that Color";
      } if (params.id === "3") {
        this.level1Display = false;
        this.level2Display = false;
        this.level3Display = true;
        this.level4Display = false;
        this.level5Display = false;
        this.currentLevel = 3;
        document.title = "Level Three // " + this.type + " Leaderboards // Name that Color";
      } if (params.id === "4") {
        this.level1Display = false;
        this.level2Display = false;
        this.level3Display = false;
        this.level4Display = true;
        this.level5Display = false;
        this.currentLevel = 4;
        document.title = "Level Four // " + this.type + " Leaderboards // Name that Color";
      } if (params.id === "5") {
        this.level1Display = false;
        this.level2Display = false;
        this.level3Display = false;
        this.level4Display = false;
        this.level5Display = true;
        this.currentLevel = 5;
        document.title = "Level Five // " + this.type + " Leaderboards // Name that Color";
      }
    });
  }

}
