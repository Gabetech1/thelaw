import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://clientapi.gabeshub.com/lawyer';
  //url = 'http://localhost/nulbulk/lawyer';

  constructor(private http: HttpClient) {}

  sendMail(data){
    //console.log(data)
    return  this.http.post(this.url+'/sendmail.php',data)
  }


  sendForm(email){
    //console.log(email,email.email)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post('https://formspree.io/f/xdopzrvg',
      { name: email.name, replyto: email.email, message: email.message },
      { 'headers': headers })
  }
}
