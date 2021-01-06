import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabComponent } from './tabs/tab/tab.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from './tabs/tabs.module';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TabComponent, UserLoginComponent]
})
export class AppModule {}
