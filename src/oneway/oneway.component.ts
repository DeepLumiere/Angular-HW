import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-oneway',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './oneway.component.html',
  styleUrl: './oneway.component.css'
})
export class OnewayComponent {
  standard:number = 0;
  slot:string = "";
  status: string = "Pass";

  save(std: HTMLInputElement, slots: HTMLInputElement) {
    this.standard = parseInt(std.value);
    this.slot = slots.value;

  }
}
