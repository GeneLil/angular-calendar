import { Routes } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";
import { AreasComponent } from "./areas/areas.component";
import { ExhibitionsComponent } from "./exhibitions/exhibitions.component";

export const routeConfig: Routes = [
    {
        path: '',
        component: CalendarComponent,
        title: 'Calendar'
    },
    {
        path: 'areas',
        component: AreasComponent,
        title: 'Areas'
    },
    {
        path: 'exhibitions',
        component: ExhibitionsComponent,
        title: 'Exhibition'
    }
];