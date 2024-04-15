import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { ListgroupComponent } from './listgroup/listgroup.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, ButtonComponent, ListgroupComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, ButtonComponent, ListgroupComponent]
})
export class SharedModule { }
