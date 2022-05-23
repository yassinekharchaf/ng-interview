import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { RouterModule } from '@angular/router';
import { teamRoutes } from './team.routing';
import { TeamListComponent } from './components/team-list/team-list.component';
import { StoreModule } from '@ngrx/store';
import { teamReducer } from './store/reducers/team.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from './store/effects/team.effects';



@NgModule({
  declarations: [
    TeamPageComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(teamRoutes),
    StoreModule.forFeature('team', teamReducer),
    EffectsModule.forFeature([TeamEffects])
  ]
})
export class TeamModule { }
