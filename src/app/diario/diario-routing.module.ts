import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiarioPage } from './diario.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioPageRoutingModule {}
