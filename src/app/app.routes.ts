import { Routes } from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {TemplateFormComponent} from '../template-form/template-form.component';

export const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"tdf", component:TemplateFormComponent}
];
