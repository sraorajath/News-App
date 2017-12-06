import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private id: any
          sortBy: any;
  articles: Articles[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.route.params.subscribe(params => {
      this.sortBy = params['sortBy']
    })

    this.dataService.getArticles(this.id).subscribe(data => {
      this.articles = data.articles
    })
  }

}

interface Articles {
  author: string,
  description: string,
  title: string,
  url: string,
  urlToImage: string
}