import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  constructor() { }//private http: Http

   // getChatByRoom(room) {
   //   return new Promise((resolve, reject) => {
   //     this.http.get('/chat/' + room)
   //       .map(res => res.json())
   //       .subscribe(res => {
   //         resolve(res);
   //       }, (err) => {
   //         reject(err);
   //       });
   //   });
   // }

   // saveChat(data) {
   //   return new Promise((resolve, reject) => {
   //       this.http.post('/test', data)
   //         .map(res => res.json())
   //         .subscribe(res => {
   //           resolve(res);
   //         }, (err) => {
   //           reject(err);
   //         });
   //   });
   // }

}
