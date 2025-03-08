import { Injectable } from '@angular/core';
import {Team} from '../models/team';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teamList:Array<Team> = []

  constructor() { }

  createTeam = new FormGroup({
    tname: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    desc: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lead: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,15}$/)]),
    mem1: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem2: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem3: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem4: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),

  })

  save(): void {
    if (this.createTeam.value instanceof Team) {
      this.teamList.push(this.createTeam.value);
    }
    this.createTeam.reset()
  }
}
