import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopBannerComponent } from './top-banner/top-banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopBannerComponent
  ]
})
export class SharedModule { }
