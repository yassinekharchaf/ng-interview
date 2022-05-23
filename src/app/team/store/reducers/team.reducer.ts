import { createReducer, on } from '@ngrx/store';
import { TeamState } from '../../interfaces/team-state.interface';
import { LOAD_TEAM_LIST_SUCCESS } from '../actions/team.actions';

const initialState: TeamState = {
  teamList: []
};

export const teamReducer = createReducer(
  initialState,
  on(LOAD_TEAM_LIST_SUCCESS, (state, action): TeamState => ({
    ...state,
    teamList: action.teamList
  }))
);
