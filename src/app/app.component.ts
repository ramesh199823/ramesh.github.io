import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharingService } from './sharing.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('template')
  template!: ElementRef;
  userName:any;
  role:any;
  phoneNumber:any;
  email:any;
  address:any;
  title = 'signature';
  constructor(private sharingService: SharingService){
    this.sharingService.userDetails.subscribe((res:any)=>{
      this.userName = res.userName;
      this.role = res.role;
      this.phoneNumber = res.phoneNumber;
      this.email = res.email;
      this.address = res.address;
    })
  }
  download(){
    const template = this.template.nativeElement;
    console.log(template)
    html2canvas(template).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const random = Math.random();
      link.download = `${this.userName}.png`;
      link.href = image;
      link.click();
    });
  }
}
