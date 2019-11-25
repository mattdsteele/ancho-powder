import { Paprika } from '../src/index';
import * as creds from './auth';

const paprika = new Paprika(creds);
(async () => {
  const recipes = await paprika.recipes();
  console.log(recipes.length);
  const categories = await paprika.categories();
  const randomRecipe = Math.floor(Math.random() * recipes.length);
  const recipe = await paprika.recipe(recipes[randomRecipe].uid);
  const recipeCategories = recipe.categories
    .map(cat => {
      return categories.find(r => r.uid === cat)!;
    })
    .map(c => c.name);
  console.log(recipe);
  console.log(`Categories: ${recipeCategories.join(',')}`);
})();
