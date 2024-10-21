import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {

  @Input() advantages: AdvantageType[] = {} as AdvantageType[];

  constructor() {
    // this.product = {
    //   title: '',
    //   description: '',
    //   image: ''
    // }
  }



}
