import { Component,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService} from '../services/app.service';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})

export class ProfileEditorComponent {

  profileForm:FormGroup;

  constructor( private router: Router,private appService:AppService ) {} 

  ngOnInit(){
    this.profileForm = new FormGroup({
      'firstName': new FormControl('Enter your first Name', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      'lastName': new FormControl('Enter your last Name', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      'street': new FormControl('Enter your Street', [
        Validators.required
      ]),
      'city': new FormControl('Enter your city', [
        Validators.required
      ]),
      'country': new FormControl('Enter your country', [
        Validators.required
      ]),
      'zip': new FormControl('Enter your zip', [
        Validators.required
      ]),
    })
    
  }

  onSubmit() {
    this.appService.formData=this.profileForm.value;
    this.router.navigate(['/name']);
    console.log(this.profileForm.value);
  }

};


