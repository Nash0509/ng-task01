import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {
        path : 'about' , component : HomeComponent
    },
    {
        path : 'contact', component : ContactComponent
    },
    {
        path : '', component : MapComponent
    },
    {
        path : 'search', component : SearchComponent
    },
];
