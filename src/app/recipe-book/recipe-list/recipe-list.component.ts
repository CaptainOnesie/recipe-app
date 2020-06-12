import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes:Recipe[] = [
      new Recipe("Lasagna", "World's Best Lasagna","https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1.00xw:0.752xh;0,0.250xh&resize=1200:*")
    ];

    constructor() { }

    ngOnInit(): void {
  }

  addRecipe(recipe : Recipe) {
    this.recipes.push(recipe);
  }

  removeRecipe(index : number) {
    this.recipes.splice(index,1)
  }
}
