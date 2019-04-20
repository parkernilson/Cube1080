import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThreeEngineModule } from './three-engine/three-engine.module';
import { Cube1080Module } from './cube1080/cube1080.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	  BrowserModule,
	  HttpClientModule,
	  ThreeEngineModule,
	  Cube1080Module
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
