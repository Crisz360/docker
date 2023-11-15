import { Component, OnInit } from '@angular/core';
import {
  IButtonGroupEventArgs,
  IgxStepperOrientation,
  IgxStepperTitlePosition,
} from 'igniteui-angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public linear = false;

  public user: any = {
    fullName: '',
    email: '',
    city: '',
    street: '',
    city2: '',
    street2: '',
    payment: '',
  };

  public paymentTypes: string[] = [
    'PayPal (n@mail.com; 18/02/2021)',
    'Visa (**** **** **** 1234; 12/23)',
    'MasterCard (**** **** **** 5678; 12/24)',
  ];

  public modes: any[] = [
    {
      label: 'Linear',
      linear: true,
      selected: this.linear === true,
      togglable: true,
    },
    {
      label: 'Non Linear',
      linear: false,
      selected: this.linear === false,
      togglable: true,
    },
  ];

  public toggleModes(event: IButtonGroupEventArgs): void {
    this.linear = this.modes[event.index].linear;
  }

  public orientation: IgxStepperOrientation = 'horizontal';
  public titlePosition: IgxStepperTitlePosition = 'bottom';
  public stepperOrientations: any[] = [
    {
      label: 'Horizontal',
      orientation: 'horizontal',
      selected: this.orientation === 'horizontal',
      togglable: true,
    },
    {
      label: 'Vertical',
      orientation: 'vertical',
      selected: this.orientation === 'vertical',
      togglable: true,
    },
  ];

  public stepperTitlePositions: any[] = [
    {
      label: 'Bottom',
      titlePosition: 'bottom',
      selected: this.titlePosition === 'bottom',
      togglable: true,
    },
    {
      label: 'Top',
      titlePosition: 'top',
      selected: this.titlePosition === 'top',
      togglable: true,
    },
    {
      label: 'End',
      titlePosition: 'end',
      selected: this.titlePosition === 'end',
      togglable: true,
    },
    {
      label: 'Start',
      titlePosition: 'start',
      selected: this.titlePosition === 'start',
      togglable: true,
    },
  ];

  public toggleOrientation(event: IButtonGroupEventArgs): void {
    this.orientation = this.stepperOrientations[event.index].orientation;
  }

  public toggleTitlePosition(event: IButtonGroupEventArgs): void {
    this.titlePosition = this.stepperTitlePositions[event.index].titlePosition;
  }
}
