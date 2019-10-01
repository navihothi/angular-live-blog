import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  articles = [
    {
        title: 'Moo, Wee, Animal Sounds',
        date: new Date(2018,1,2),
        author: 'Michael B.',
        body: 'Animals are weird.'
    },
    {
        title: 'Investing with Spongebob',
        date: new Date(2019,1,2),
        author: 'John Doe',
        body: 'Buy burgers.'
    },
    {
        title: 'How to Write Angular',
        date: new Date(2020,1,2),
        author: 'Larry King',
        body: 'Dont. Dont write angular.'
    },
    {
        title: 'Nadal is The Best',
        date: new Date(2021,1,2),
        author: 'Ellen D.',
        body: 'Title says it all.',
    },
    {
        title: 'Sheldon Secrets, Part 1',
        date: new Date(2022,1,2),
        author: 'Mary Poplock',
        body: 'Likes traffic',
    }
];

  constructor() { }

}
