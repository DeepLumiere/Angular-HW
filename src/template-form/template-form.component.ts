import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  articlelist:any = [];
  save(ArticleBuilder: NgForm) {
    let article= ArticleBuilder.value;
    this.articlelist.push(article.value);
    console.log(ArticleBuilder.value);
    alert("Saved Successfully");


  }
}
