import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostUtility {

    listOfShoes: Post[] = [
        new Post("https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg","Jordan 200",450),
        ];
        getProduct(){
            return this.listOfShoes;
        }
        deletePindutan(index:number){
            this.listOfShoes.splice(index, 1);
        }
        addPindutan(post: Post){
            this.listOfShoes.push(post);
        }
        updatePindutan(index:number, post: Post){
            this.listOfShoes[index] = post
        }

}