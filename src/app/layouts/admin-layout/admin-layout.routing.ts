import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {InscriptionsComponent } from '../../inscriptions/inscriptions.component';
import { EtudiantComponent } from '../../etudiant/etudiant.component';
import { CoursComponent } from '../../cours/cours.component';
import { EnseignantComponent } from '../../enseignant/enseignant.component';
import { SpecialiteComponent } from '../../specialite/specialite.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'inscription',    component: InscriptionsComponent },
    { path: 'etudiants',      component: EtudiantComponent  },
    { path: 'enseignants',      component: EnseignantComponent  },
    { path: 'formations',      component: SpecialiteComponent  },
    { path: 'cours',           component: CoursComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
