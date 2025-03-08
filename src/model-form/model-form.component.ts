import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.css'
})
export class ModelFormComponent {
  TeamForm = new FormGroup({
    tname: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    desc: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lead: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,15}$/)]),
    mem1: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem2: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem3: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),
    mem4: new FormControl('', Validators.pattern(/^[a-zA-Z\s]{3,15}$/)),

  })
  TeamList:any = []

  save(): void {
    this.TeamList.push(this.TeamForm.value);
    this.TeamForm.reset()
}
}
