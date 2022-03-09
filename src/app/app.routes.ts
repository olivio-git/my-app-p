import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoguinComponent } from './loguin/loguin.component';

LoguinComponent
const APP_ROUTES:Routes=[
    {path: 'loguin', component: LoguinComponent},
    {path: 'navbar', component: NavbarComponent}
]
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES)