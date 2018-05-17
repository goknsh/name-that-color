import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ROUTING } from "./app.routing";
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
        LeaderboardsComponent
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
