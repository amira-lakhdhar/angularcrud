import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Shared/Services/articles.service';
import { Article } from 'src/app/Shared/Models/article';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:any 
  article = new Article()

  modifi : boolean =false

  dateNow = new Date()
  idToDelete: any;

  constructor(
    private articleService : ArticlesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getArticles()
  }

  hideME(){
    this.modifi = false 
    this.article = new Article()
  }

  getArticles(){
    this.articleService.getAllArticles().subscribe(res=>{
      this.articles = res
      this.articles.reverse()
      console.log('all-articles',this.articles)
    })
  }
  editArticle(data : any){
    this.article = data
    this.modifi = true
  }

  deleteDialog(id :any){
    this.idToDelete = id
  }

  deleteME(){
    this.articleService.deleteArticle(this.idToDelete).subscribe(res=>{
      this.toastr.success('Article updated successfuly', 'Success');
      this.getArticles()
      this.idToDelete = null
    } , err =>{
      this.toastr.error('You cannot delete this article', 'Error 400');

    })
  }
  
  addArticle(){
    if(this.modifi){
      console.log('here update article')
      this.articleService.EditArticle(this.article).subscribe(ress=>{
        console.log(ress)
        this.toastr.success('Article updated successfuly', 'Success');
        this.getArticles()
        this.modifi = false
        this.article = new Article()
      })
    }else{
      this.article.creationDate = this.dateNow
      console.log('new article' , this.article)
      this.articleService.saveArticle(this.article , '').subscribe(res=>{
        console.log(res)
        this.toastr.success('Article addes successfuly', 'Success');
        this.getArticles()
        this.modifi = false
        this.article = new Article()

      })
    }
  }

}
