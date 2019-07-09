import { Component } from '@angular/core';
import { registrationService } from './registration.Service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular';
  constructor(private regService: registrationService){}
   onClickSubmit(formData) {
//      var object = {};
//     formData.forEach(function(value, key){
//     object[key] = value;
// });
     this.regService.saveToDb(JSON.stringify( formData));
     console.log(JSON.stringify( formData));
      // alert('Your Email is : ' +formData.emailId);
   }

}
