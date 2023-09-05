import { Component, OnInit } from '@angular/core';
import { TableListService } from './table-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tasks';

  constructor(private tableListService: TableListService) {

  }

  ngOnInit(): void{
    this.tableListService.getAllData().subscribe(data => {
      console.log(data)
    })
  }
}
