import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog'; 
import { RippleModule } from 'primeng/ripple'; 
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; 
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton'; 
import { RatingModule } from 'primeng/rating'; 
import { InputNumberModule } from 'primeng/inputnumber'; 
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { LbdModule } from '../../lbd/lbd.module';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { InscriptionsComponent } from '../../inscriptions/inscriptions.component';
import { EtudiantComponent } from '../../etudiant/etudiant.component';
import { CoursComponent } from '../../cours/cours.component';
import { EnseignantComponent } from '../../enseignant/enseignant.component';
import { SpecialiteComponent } from '../../specialite/specialite.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    TableModule,
    DialogModule, 
    RippleModule, 
    ButtonModule, 
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule, 
    InputTextModule,
    TextareaModule,
    FileUploadModule, 
    DropdownModule, 
    TagModule, 
    RadioButtonModule, 
    RatingModule, 
    InputNumberModule, 
    IconFieldModule,
    InputIconModule,
    FormsModule,
    ReactiveFormsModule,
    LbdModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    InscriptionsComponent,
    EtudiantComponent,
    CoursComponent,
    EnseignantComponent,
    SpecialiteComponent,
  ],
  providers: [ConfirmationService, MessageService], // Added necessary providers
})
export class AdminLayoutModule {}
