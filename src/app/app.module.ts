import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from "@angular/material/menu";
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatRippleModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatSliderModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class matToolbar { }

