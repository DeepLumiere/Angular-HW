import { Component, inject } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-createteam',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css']  // Fixed 'styleUrls'
})
export class CreateteamComponent {
  teamService: TeamService = inject(TeamService);  // Can be replaced with constructor injection

  createTeam = new FormGroup({
    tname: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    desc: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lead: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,15}$/)]),
    mem1: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem2: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem3: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem4: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/))
  });

  save() {
    const formValues = this.createTeam.value;

    let team = new Team(
      formValues.tname!,
      formValues.desc!,
      formValues.lead!,
      formValues.mem1!,
      formValues.mem2!,
      formValues.mem3!,
      formValues.mem4!
    );

    this.teamService.teamList.push(team);
    this.createTeam.reset();
  }
}
