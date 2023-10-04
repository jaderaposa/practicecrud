import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostUtility } from 'src/post-utility.service';
import { Post } from 'src/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postUtility: PostUtility, private router: Router, private actRoute: ActivatedRoute){}

  @Input() index: number = 0;
  @Input() post?: Post;

  ngOnInit(): void {
    console.log(this.post);
  }
  delete(){
    this.postUtility.deletePindutan(this.index)
  }
}
