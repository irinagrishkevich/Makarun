import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    title: string = 'Macaroons';

    showPresent: boolean = false;

    public products: ProductType[] = [{
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
    public advantages = [{
        title: 'Лучшие продукты',
        text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
        {
            title: 'Много вкусов',
            text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
        },
        {
            title: 'Бисквитное тесто',
            text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
        },
        {
            title: 'Честный продукт',
            text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
        }
    ]
    public formValues = {
        productTitle: '',
        name: '',
        phone: ''
    }

    ngOnInit(): void { }

    ngAfterViewInit(): void { }

    public scrollTo(target: HTMLElement): void {
        target.scrollIntoView({behavior: 'smooth'});
    }

    public addToCart(product: ProductType, target: HTMLElement): void {
        this.scrollTo(target)
        this.formValues.productTitle = product.name.toUpperCase();
    }
    public createOrder(): void {
        if(!this.formValues.productTitle) {
            alert('Введите название пиццы');
            return
        }
        if (!this.formValues.name) {
            alert('Введите имя');
            return
        }
        if (!this.formValues.phone) {
            alert('Введите телефон');
            return
        }
        alert('Заказ создан');

        this.formValues = {
            productTitle: '',
            name: '',
            phone: ''
        }
    }

}


