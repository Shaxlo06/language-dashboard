import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LangTypesDataService {

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post<any>("http://localhost:3000/languages", data)
  }

  // get() {
  //   return this.http.get<any>("http://localhost:3000/languages")
  // }

  get() {
    return this.http.get<any>("http://localhost:3000/languageTypes")
  }

  update(data: any) {  
    console.log(data);
      
    return this.http.put<any>("http://localhost:3000/languages/"+ data.id, data)
  }

  delete(id: number) {
    return this.http.delete<any>("http://localhost:3000/languages/"+id)
  }


}