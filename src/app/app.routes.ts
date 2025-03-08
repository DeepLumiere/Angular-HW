import { Routes } from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {TemplateFormComponent} from '../template-form/template-form.component';
import {TwowayComponent} from '../twoway/twoway.component';
import {OnewayComponent} from '../oneway/oneway.component';
import {ModelFormComponent} from '../model-form/model-form.component';
import {CreateteamComponent} from '../createteam/createteam.component';
import {ViewteamsComponent} from '../viewteams/viewteams.component';

export const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"tdf", component:TemplateFormComponent},
  {path:"mdf", component:ModelFormComponent},
  {path:"twoway", component:TwowayComponent},
  {path:"oneway", component:OnewayComponent},
  {path:"createteam", component:CreateteamComponent},
  {path:"viewteam", component: ViewteamsComponent}
];
