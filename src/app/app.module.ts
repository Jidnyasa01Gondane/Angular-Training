import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ProductComponent } from './product/product.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { EgdirectiveComponent } from './egdirective/egdirective.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { Democomponent2Component } from './democomponent2/democomponent2.component';
import { Trim2lengthPipe } from './trim2length.pipe';
import { UsepipeComponent } from './usepipe/usepipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    ProductComponent,
    SwitchcaseComponent,
    CustomdirectiveDirective,
    EgdirectiveComponent,
    DemocomponentComponent,
    Democomponent2Component,
    Trim2lengthPipe,
    UsepipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
