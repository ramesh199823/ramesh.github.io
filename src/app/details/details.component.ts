import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  detailsForm! :FormGroup;
   constructor( private fb: FormBuilder, private sharingService:SharingService){}
   ngOnInit(){
     this.detailsForm =  this.fb.group({
        userName : ['', Validators.required],
        role: ['', Validators.required],
        phoneNumber:['', Validators.required],
        email: ['', Validators.required],
        address: ['', Validators.required],
     })
   }
   submit(){
      let data = {
        userName: this.detailsForm.value.userName,
        role:this.detailsForm.value.role,
        phoneNumber: this.detailsForm.value.phoneNumber,
        email:this.detailsForm.value.email,
        address: this.detailsForm.value.address
      }
      this.sharingService.userDetails.next(data);
   }
}
