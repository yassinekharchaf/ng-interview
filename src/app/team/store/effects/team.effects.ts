import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TeamService } from '../../services/team.service';
import {
  LOAD_TEAM_LIST,
  LOAD_TEAM_LIST_FAILED,
  LOAD_TEAM_LIST_SUCCESS,
} from '../actions/team.actions';

@Injectable()
export class TeamEffects {
  loadTeamList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_TEAM_LIST),
      switchMap(() =>
        this.teamService.getTeamList().pipe(
          map((teamList) => LOAD_TEAM_LIST_SUCCESS({ teamList })),
          catchError(() => {
            alert('something went wrong');
            return of(LOAD_TEAM_LIST_FAILED());
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private teamService: TeamService) {}
}
