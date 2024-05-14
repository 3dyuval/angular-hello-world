import { Injectable } from '@angular/core';
import { Hero } from "./hero"

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private url: string
  constructor() {
    this.url = 'http://localhost:3000/heroes'
  }

  async sendData(hero: Hero): Promise<Hero[]> {
     return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(hero)
    }).then(() => {
        return this.getData()
     })
  }

  async getData(): Promise<Hero[]> {
    return fetch(this.url)
      .then(data => data.json())
      .catch(e => {
      console.error(e)
      return []
    })
  }

  async getHero(id: string): Promise<Hero | undefined> {
    return this.getData().then(heroes => heroes.find(hero => +hero.id === +id))
  }
}
