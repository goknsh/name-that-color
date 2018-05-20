import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ROUTING } from "./app.routing";
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { OneComponent } from './level/one/one.component';
import { TwoComponent } from './level/two/two.component';
import { ThreeComponent } from './level/three/three.component';
import { FourComponent } from './level/four/four.component';
import { FiveComponent } from './level/five/five.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { AboutLevelOneComponent } from './about/level/about-level-one/about-level-one.component';
import { AboutLevelTwoComponent } from './about/level/about-level-two/about-level-two.component';
import { AboutLevelThreeComponent } from './about/level/about-level-three/about-level-three.component';
import { AboutLevelFourComponent } from './about/level/about-level-four/about-level-four.component';
import { AboutLevelFiveComponent } from './about/level/about-level-five/about-level-five.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        SettingsComponent,
        AccountComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent,
        FiveComponent,
        LeaderboardsComponent,
        AboutLevelOneComponent,
        AboutLevelTwoComponent,
        AboutLevelThreeComponent,
        AboutLevelFourComponent,
        AboutLevelFiveComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        AngularFireModule.initializeApp(environment.firebase, 'my-app'),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
