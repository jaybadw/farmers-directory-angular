import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { farmerDetails } from '../models/farmerDetails';
import { catchError,map,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FarmerDetailsService {

  private REST_API_URL = "https://farmers-directory.vercel.app/api/v1/farmers"

  private HTTP_HEADER = new HttpHeaders({'content-type': 'application/json', "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmE2NDE3MTA1MTFhZGE4ZGY1MjEwYSIsImVtYWlsIjoibmlvbG9zMjExM0BnbWFpbC5jb20iLCJpc1N1cGVyQWRtaW4iOnRydWUsImlhdCI6MTY2ODAwMzA5MCwiZXhwIjoxNjY4MDA2NjkwfQ.I7v6FcQuMvOQ0C0nMB4Vq6O_47hTnG0qcTj48xZGVeg"})
   

  constructor(private http: HttpClient) {
    
   }
  

  getFarmerById(id:string): Observable<farmerDetails | any>{
    const thisUrl = `${this.REST_API_URL}/634d9d74d9d76d19c6bbeb56`;
    return this.http.get<farmerDetails>(thisUrl,{headers:this.HTTP_HEADER}).pipe(
      tap(farmerDetails =>{

        console.log(`this Subscriber = ${JSON.stringify(farmerDetails)}`);        
       }),
       catchError(error => of(new farmerDetails()))
    )
  }
}
