import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  sources: Sources[]
  search: any
  results: any
  items: any

  constructor(private dataService: DataService, private router: Router,) { }

  ngOnInit() {
    this.dataService.getSources().subscribe((data) => {
      sessionStorage.setItem('news', JSON.stringify(data.sources))
      this.sources = data.sources
    })
  }

  public gotoArticle(id, sortBy) {
    this.router.navigate(['/article/' + id])
  }

}

interface Sources {
  id: string,
  name: string,
}
