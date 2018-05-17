import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { OneComponent } from './level/one/one.component';
import { TwoComponent } from './level/two/two.component';
import { ThreeComponent } from './level/three/three.component';
import { FourComponent } from './level/four/four.component';
import { FiveComponent } from './level/five/five.component';


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'account', component: AccountComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'leaderboards', component: LeaderboardsComponent },
    { path: 'level/1', component: OneComponent },
    { path: 'level/2', component: TwoComponent },
    { path: 'level/3', component: ThreeComponent },
    { path: 'level/4', component: FourComponent },
    { path: 'level/5', component: FiveComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
