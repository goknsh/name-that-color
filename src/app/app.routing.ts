import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { OneComponent } from './level/one/one.component';
import { TwoComponent } from './level/two/two.component';
import { ThreeComponent } from './level/three/three.component';
import { FourComponent } from './level/four/four.component';
import { FiveComponent } from './level/five/five.component';
import { AboutLevelOneComponent } from './about/level/about-level-one/about-level-one.component';
import { AboutLevelTwoComponent } from './about/level/about-level-two/about-level-two.component';
import { AboutLevelThreeComponent } from './about/level/about-level-three/about-level-three.component';
import { AboutLevelFourComponent } from './about/level/about-level-four/about-level-four.component';
import { AboutLevelFiveComponent } from './about/level/about-level-five/about-level-five.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/level/1', component: AboutLevelOneComponent },
    { path: 'about/level/2', component: AboutLevelTwoComponent },
    { path: 'about/level/3', component: AboutLevelThreeComponent },
    { path: 'about/level/4', component: AboutLevelFourComponent },
    { path: 'about/level/5', component: AboutLevelFiveComponent },
    { path: 'account', component: AccountComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'leaderboards', component: LeaderboardsComponent },
    { path: 'level/1', component: OneComponent },
    { path: 'level/2', component: TwoComponent },
    { path: 'level/3', component: ThreeComponent },
    { path: 'level/4', component: FourComponent },
    { path: 'level/5', component: FiveComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
