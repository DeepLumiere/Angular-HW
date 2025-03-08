import {Component, inject} from '@angular/core';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-viewteams',
  imports: [],
  templateUrl: './viewteams.component.html',
  styleUrl: './viewteams.component.css'
})
export class ViewteamsComponent {
  teamService:TeamService = inject(TeamService);
}
