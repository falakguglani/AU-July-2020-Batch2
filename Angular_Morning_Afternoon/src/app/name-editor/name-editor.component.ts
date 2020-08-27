import { Component,Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
})
export class NameEditorComponent {
  
  form;

  
  constructor(
    private appService:AppService
  )
  {
    this.form=this.appService.formData;
  }
}