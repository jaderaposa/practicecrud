import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostUtility } from '../post-utility.service';


@Component({
  selector: 'app-post-area',
  templateUrl: './post-area.component.html',
  styleUrls: ['./post-area.component.css']
})
export class PostAreaComponent implements OnInit {

  n=0;
  listOfShoes: Post[]=[];
  constructor(
    private postUtility: PostUtility
  ){}


  ngOnInit(): void{
    this.listOfShoes=this.postUtility.getProduct();
  }
}
