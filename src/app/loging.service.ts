import { Injectable } from "@angular/core";
import { product } from "./product-list/productss";

@Injectable({
    providedIn:"root"
})


export class logingservice {
     title:string='default';
    log(message: string) {
        alert(message)
    }
}

