import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { categories } from 'src/app/models/categories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  category!:  categories[]

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }


  getAllCategories():void{
    this.CategoryService.getAllCategories().subscribe(getCategories=>{
      this.category = getCategories.data
    })
  }

}
