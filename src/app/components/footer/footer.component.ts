import { Component, OnInit } from '@angular/core';
import {ScrollService} from "../../scroll.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }


  ngOnInit(): void {
  }
  public footerInfo = {
    instagram: 'https://www.instagram.com/',
    phone: '+375 (29) 368-98-68',
  }

  public scrollToMain(): void {
    this.scrollService.scrollToElement('mainElement');
  }

}
