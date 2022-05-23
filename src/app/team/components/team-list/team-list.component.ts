import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeamMember } from '../../interfaces/team-member.interface';
import { LOAD_TEAM_LIST } from '../../store/actions/team.actions';
import { selectTeamList } from '../../store/selectors/team.selectors';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teamList$: Observable<TeamMember[]>;

  constructor(private store: Store) {
    this.teamList$ = this.store.select(selectTeamList);
   }

  ngOnInit(): void {
    this.store.dispatch(LOAD_TEAM_LIST());
  }

}
