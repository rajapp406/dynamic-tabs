import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabComponent } from './tab/tab.component';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TabsComponent,
    TabTitleComponent,
    TabComponent,
    DynamicTabsDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports:[
    TabsComponent,
    TabTitleComponent,
    TabComponent,
    DynamicTabsDirective
  ]
})
export class TabsModule { }
