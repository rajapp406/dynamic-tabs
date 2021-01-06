import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  styleUrls: ["tab.component.scss"],
  templateUrl: `./tab.component.html`
})
export class TabComponent {
  @Input('tabTitle') title: string = '';
  @Input() active: boolean = false;
  @Input() isCloseable: boolean = false;
  @Input() template: any;
  @Input() dataContext: any
  
  constructor(){}
}
