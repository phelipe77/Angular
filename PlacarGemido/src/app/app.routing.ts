import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'adicionar', component: AdicionarComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);