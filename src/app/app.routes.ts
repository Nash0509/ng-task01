import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path : 'search' , component : HomeComponent
    },
    {
        path : 'contact', component : ContactComponent
    },
    {
        path : 'about', component : AboutComponent
    },
    {
        path : '', component : SearchComponent
    }
];
