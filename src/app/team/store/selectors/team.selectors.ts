import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamState } from '../../interfaces/team-state.interface';

export const selectTeamState = createFeatureSelector<TeamState>('team');

export const selectTeamList = createSelector(
  selectTeamState,
  (state) => state.teamList
);
