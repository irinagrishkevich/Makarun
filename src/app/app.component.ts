import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit, AfterViewInit {

    title: string = 'Macaroons';

    showPresent: boolean = true;

    public products: ProductType[] = []

    public advantages:AdvantageType[]  = [{
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
    onPhoneInputChange(event: string) {
        if (!event.startsWith('+375')) {
            this.formValues.phone = '+375';
        } else {
            this.formValues.phone = '+375' + event.slice(4).replace(/\D/g, '').slice(0, 9);
        }
    }

    constructor(private productService: ProductService,public cartService: CartService) {
    }

    ngOnInit(): void {
    this.products = this.productService.getProducts();
    }

    ngAfterViewInit(): void { }

    public scrollTo(target: HTMLElement): void {
        target.scrollIntoView({behavior: 'smooth'});
    }

    public addToCart(product: ProductType, target: HTMLElement): void {
        this.scrollTo(target)
        this.formValues.productTitle += product.name.toUpperCase() + ' ';
        this.cartService.count++;
        this.cartService.total += product.price;
        const countProductElement = document.querySelector('.count-product') as HTMLElement;
        if (countProductElement && this.cartService.count >= 1) {
            countProductElement.style.display = 'flex';
        }
    }
    public createOrder(): void {
        if(!this.formValues.productTitle) {
            alert('Выберите продукт');
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


