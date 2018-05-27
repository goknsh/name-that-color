import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from 'ng2-meta';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { AccountComponent } from './account/account.component';
import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
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
    { path: 'home', component: HomeComponent, canActivate: [MetaGuard], data: { meta: { title: 'Home // Name that Color', description: 'Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'about', component: AboutComponent, canActivate: [MetaGuard], data: { meta: { title: 'About // Name that Color', description: 'Learn everything about our multiple levels and become a pro at Name that Color // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'feedback', component: FeedbackComponent, canActivate: [MetaGuard], data: { meta: { title: 'Feedback // Name that Color', description: 'Help us improve Name that Color with feedback and level suggestions // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'changelog', component: ChangelogComponent, canActivate: [MetaGuard], data: { meta: { title: 'Changelog // Name that Color', description: 'View what is new in Name that Color // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'about/level', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about/level/1', component: AboutLevelOneComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level One // About // Name that Color', description: 'Learn everything about level one and begin your journey to get your name on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'about/level/2', component: AboutLevelTwoComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Two // About // Name that Color', description: 'Learn everything about level two and begin your journey to get your name on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'about/level/3', component: AboutLevelThreeComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Three // About // Name that Color', description: 'Learn everything about level three and begin your journey to get your name on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'about/level/4', component: AboutLevelFourComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Four // About // Name that Color', description: 'Learn everything about level four and begin your journey to get your name on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'about/level/5', component: AboutLevelFiveComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Five // About // Name that Color', description: 'Learn everything about level five and begin your journey to get your name on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'login', redirectTo: 'account', pathMatch: 'full' },
    { path: 'signup', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', component: AccountComponent, canActivate: [MetaGuard], data: { meta: { title: 'Account // Name that Color', description: 'Get an account on Name that Color, and see if you can get on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'tos', component: TosComponent, canActivate: [MetaGuard], data: { meta: { title: 'Terms of Service // Name that Color', description: 'View Name that Color\'s terms of service // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'privacy', component: PrivacyComponent, canActivate: [MetaGuard], data: { meta: { title: 'Privacy Policy // Name that Color', description: 'View Name that Color\'s privacy policy // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'setting', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: SettingsComponent, canActivate: [MetaGuard], data: { meta: { title: 'Settings // Name that Color', description: 'Customize Name that Color to suit your needs // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'leaderboard', redirectTo: 'leaderboards', pathMatch: 'full' },
    { path: 'leaderboards', redirectTo: 'leaderboards/scores/1', pathMatch: 'full' },
    { path: 'leaderboards/:type/:id', component: LeaderboardsComponent, canActivate: [MetaGuard], data: { meta: { title: 'Leaderboards // Name that Color', description: 'View the pros in each level of Name that Color, and see if you can beat them // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'level', redirectTo: 'home', pathMatch: 'full' },
    { path: 'level/1', component: OneComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level One // Name that Color', description: '3 seconds to answer, no position changes, options are colored in, and are blocks, play level one, and see if you can get on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'level/2', component: TwoComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Two // Name that Color', description: '3 seconds to answer, no position changes, options are colored in, and are text, play level two, and see if you can get on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'level/3', component: ThreeComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Three // Name that Color', description: '2 seconds to answer, option position changes, are colored in, and are blocks play level three, and see if you can get on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'level/4', component: FourComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Four // Name that Color', description: '3 seconds to answer, option position changes, are not colored in, and are text play level four, and see if you can get on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: 'level/5', component: FiveComponent, canActivate: [MetaGuard], data: { meta: { title: 'Level Five // Name that Color', description: '3 seconds to answer, option position changes, are colored in, and are text play level five, and see if you can get on the leaderboards // Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: '404', component: NotFoundComponent, canActivate: [MetaGuard], data: { meta: { title: 'Page not found // Name that Color', description: 'Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } },
    { path: '**', component: NotFoundComponent, canActivate: [MetaGuard], data: { meta: { title: 'Page not found // Name that Color', description: 'Name that Color is a simple, yet addictive game with multiple levels, custom games and multiplayer modes' } } }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
