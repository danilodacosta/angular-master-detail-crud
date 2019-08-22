import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { CategoryService } from './../shared/category.service';
import { Category } from './../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {

  constructor(protected categoryService: CategoryService) {
    super(categoryService);
   }

}
