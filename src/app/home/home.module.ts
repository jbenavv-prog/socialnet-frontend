import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatInputModule],
})
export class HomeModule {}
