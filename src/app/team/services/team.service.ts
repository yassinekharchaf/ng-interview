import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamMember } from '../interfaces/team-member.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor() {}

  getTeamList(): Observable<TeamMember[]> {
    return of([
      { firstname: 'Yassine', lastname: 'Kharchaf', level: 3 },
      { firstname: 'Martina', lastname: 'Otcenasova', level: 1 },
      { firstname: 'Lucie', lastname: 'Bursini', level: 2 },
      { firstname: 'Max', lastname: 'Blacher', level: 1 },
    ]);
  }
}
