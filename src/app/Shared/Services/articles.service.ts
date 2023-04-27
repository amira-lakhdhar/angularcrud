import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly API_URL = "http://localhost:8089"


  constructor(
    private httpClient: HttpClient
  ) { }


  getAllArticles() {
    return this.httpClient.get(this.API_URL + '/article/all')
  }


  saveArticle(data : any , id : any){
    console.log('iam heree')
    return this.httpClient.post(this.API_URL +'/article/addArticle/1' , data)
  }
  deleteArticle(id :any){
    console.log(id)
    return this.httpClient.get(this.API_URL + '/article/deleteArticle/' + id)
  }

  

  EditArticle(data : any ){
    return this.httpClient.put(this.API_URL + '/article/updateArticle' ,data)
  }
}
