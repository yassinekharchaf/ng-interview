import { createAction, props } from '@ngrx/store';
import { TeamMember } from '../../interfaces/team-member.interface';

export const LOAD_TEAM_LIST = createAction('[team] load team');
export const LOAD_TEAM_LIST_SUCCESS = createAction('[team] load team success', props<{teamList: TeamMember[]}>());
export const LOAD_TEAM_LIST_FAILED = createAction('[team] load team failed');

