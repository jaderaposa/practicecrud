import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostUtility {

    listOfNames: Post[] = [

    ];
    deletePindutan(index:number){
        this.listOfNames.splice(index, 1);
    }
    addPindutan(post: Post){
        this.listOfNames.push(post);
    }
    updatePindutan(index:number, post: Post){
        this.listOfNames[index] = post
    }

}