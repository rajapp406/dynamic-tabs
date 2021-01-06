import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.scss']
})
export class TabTitleComponent implements OnInit {
  @Input() tabTitleData: any;
  @Input() isCloseable: boolean = true;
  @Output() closeTab: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(tabData: any) {
    this.closeTab.emit(tabData)
  }
}
