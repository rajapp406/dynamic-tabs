import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  @ViewChild('logonFormTemplate') logonFormTemplate: any;
  @ViewChild('tab2') tab2Template: any;
  @ViewChild(TabsComponent) tabsComponent: TabsComponent = <any>{};


  onAddTab() {
    let currenttabNumber = this.tabsComponent.dynamicTabs.length + 1;
    console.log(this.logonFormTemplate);
    let template = '';
    switch(currenttabNumber){
      case 1:
        template = this.logonFormTemplate;
        break;
        case 2: 
        template = this.tab2Template;
        break;
    }
    this.tabsComponent.openTab(`New Tab ${currenttabNumber}`, template, {}, true);
  }
}
