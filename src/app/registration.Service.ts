import { Injectable } from '@angular/core';
//Import HTTP, Response and Headers
import { HttpHeaders,HttpClient } from '@angular/common/http';
//Import Obserables
import { Observable } from 'rxjs';
import 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json',
        'odata':'verbose',
        'Accept':'application/json'
    })
};
@Injectable()
export class registrationService{
constructor(private http: HttpClient){}

saveToDb(toDoList){
    console.log("in save")
 return this.http.post('http://localhost:8084/regForm/addUsers', toDoList,httpOptions).subscribe(res=> console.log(res));
}

// getDb() {
// const headers = new Headers();
// headers.append('Access-Control-Allow-Origin', '*');
// return this.http.get('https://ng-todo-d052e.firebaseio.com/list.json', {headers: headers});
// }
}