import { Routes } from '@angular/router';
import { GetAllDataComponent } from './component/data/get-all-data/get-all-data.component';
import { CreateDataComponent } from './component/data/create-data/create-data.component';


export const routes: Routes = [
    { path:'', component: GetAllDataComponent},
    { path:'ajouter', component: CreateDataComponent},
];
