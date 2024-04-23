import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CardComponent } from '../../components/card/card.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRoutingModule, CardComponent],
})
export class HomepageModule {}
