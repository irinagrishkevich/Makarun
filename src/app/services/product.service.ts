import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

    constructor() {
    }

    getProducts(): ProductType[] {
        return [{
                name: 'Макарун с малиной',
                price: 1.70,
                img: 'macaroon1.png'
            },
            {
                name: 'Макарун с манго',
                price: 1.70,
                img: 'macaroon2.png'
            },
            {
                name: 'Пирог с ванилью',
                price: 1.70,
                img: 'macaroon3.png'
            },
            {
                name: 'Пирог с фисташками',
                price: 1.70,
                img: 'macaroon4.png'
            }]
    }

}
