import { CommonModule } from "@angular/common";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

declare var window: any; // Déclare l'objet window pour utiliser Bootstrap Modal

@Component({
  selector: "app-cours",
  standalone: false,
  templateUrl: "./cours.component.html",
  styleUrls: ["./cours.component.scss"],
})
export class CoursComponent implements OnInit {
  coursList = [
    { id: 1, code: 'CS101', intitule: 'Introduction à la programmation', enseignant: 'Mme. DIOP', duree: 30 },
    { id: 2, code: 'MA102', intitule: 'FLUTTER', enseignant: 'M. Martin', duree: 40 },
    { id: 3, code: 'PH103', intitule: 'PYTHON', enseignant: 'Mme. SARR', duree: 35 },
  ];

  selectedCours: any = null;

  constructor() { }

  ngOnInit(): void {}

  createCours(cours: any): void {
    const newCours = { ...cours, id: this.coursList.length + 1 }; // Assignation d'un nouvel ID
    this.coursList.push(newCours);
    this.resetSelectedCours(); // Réinitialisation après création
  }

  editCours(cours: any): void {
    this.selectedCours = { ...cours }; // Crée une copie de l'objet cours pour modification
    this.openModal(); // Ouvre la modale pour modifier le cours
  }

  updateCours(): void {
    if (this.selectedCours) {
      const index = this.coursList.findIndex(c => c.id === this.selectedCours.id);
      if (index !== -1) {
        this.coursList[index] = { ...this.selectedCours }; // Mise à jour du cours
      }
      this.resetSelectedCours(); // Réinitialisation après mise à jour
    }
    this.closeModal(); // Ferme la modale après la mise à jour
  }

  deleteCours(id: number): void {
    this.coursList = this.coursList.filter(cours => cours.id !== id);
  }

  resetSelectedCours(): void {
    this.selectedCours = { code: '', intitule: '', enseignant: '', duree: null };  // Initialisation des champs
  }
  

  openModal(): void {
    const modalElement = document.getElementById('coursModal');
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement, {
        backdrop: false,
      });
  
      modal.show();
    }
  }
  
  closeModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('coursModal'));
    modal.hide();
  }
}