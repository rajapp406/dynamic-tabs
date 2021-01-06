import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  EventEmitter
} from '@angular/core';

import { TabComponent } from './tab/tab.component';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  dynamicTabs: TabComponent[] = [];
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = <any>[];
  @ViewChild(DynamicTabsDirective) dynamicTabPlaceholder: DynamicTabsDirective = <any>{};
  @Output() addTab = new EventEmitter<any>();

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  openNewTab(e: any) {
    this.addTab.emit(e)
    console.log(e)
  }
  openTab(title: string, template: any, data: any, isCloseable = false) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
      TabComponent
    );
    const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.title = title;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;
    this.dynamicTabs.push(componentRef.instance as TabComponent);
    this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
  }

  closeLastTab() {
    this.closeTab(this.dynamicTabs[this.dynamicTabs.length - 1])
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    this.dynamicTabs.forEach(tab => (tab.active = false));
    if (tab) {
      tab.active = true;
    }
  }

  closeTab(tab: TabComponent) {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
        this.dynamicTabs.splice(i, 1);
        let viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
        viewContainerRef.remove(i);
        this.selectTab(this.dynamicTabs[i - 1]);
        break;
      }
    }
  }

  closeActiveTab() {
    const activeTabs = this.dynamicTabs.filter(tab => tab.active);
    if (activeTabs.length > 0) {
      this.closeTab(activeTabs[0]);
    }
  }
}
