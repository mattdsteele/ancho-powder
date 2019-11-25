import btoa from 'btoa';
import fetch from 'node-fetch';
import { PaprikaResponse } from './apis/paprika-response';
import { Recipe } from './apis/recipe';
import { Recipes } from './apis/recipes';
import { Categories } from './apis/categories';

export class Paprika {
  auth: string;
  base = 'https://www.paprikaapp.com/api/v1/sync';

  constructor(credentials: { userid: string; password: string }) {
    this.auth = btoa(`${credentials.userid}:${credentials.password}`);
  }
  async recipes() {
    return await this.invoke<Recipes[]>(`${this.base}/recipes`);
  }
  async recipe(uid: string) {
    return await this.invoke<Recipe>(`${this.base}/recipe/${uid}`);
  }
  async categories() {
    return await this.invoke<Categories[]>(`${this.base}/categories`);
  }
  private async invoke<R>(url: string): Promise<R> {
    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${this.auth}`
      }
    });
    const data: PaprikaResponse<R> = await res.json();
    return data.result;
  }
}
