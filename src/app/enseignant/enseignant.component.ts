import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

declare var window: any; // Declares the `window` object for Bootstrap Modal

@Component({
  selector: "app-enseignant",
  standalone: false,
  templateUrl: "./enseignant.component.html",
  styleUrls: ["./enseignant.component.scss"],
})
export class EnseignantComponent implements OnInit {
  enseignantList = [
    { id: 1, nom: "Diop", prenom: "Amina", email: "amina.diop@example.com", telephone: "0123456789", specialite: "Mathématiques" },
    { id: 2, nom: "Martin", prenom: "Jean", email: "jean.martin@example.com", telephone: "0987654321", specialite: "Physique" },
    { id: 3, nom: "Sarr", prenom: "Fatou", email: "fatou.sarr@example.com", telephone: "1234567890", specialite: "Informatique" },
  ];

  selectedEnseignant: any = null;

  coursList = [
  { id: 1, code: 'CS101', intitule: 'Introduction à la programmation', enseignant: 'Mme. DIOP', duree: 30 },
  { id: 2, code: 'MA102', intitule: 'FLUTTER', enseignant: 'M. Martin', duree: 40 },
  { id: 3, code: 'PH103', intitule: 'PYTHON', enseignant: 'Mme. SARR', duree: 35 },
];
  constructor() {}

  ngOnInit(): void {}

  createEnseignant(enseignant: any): void {
    const newEnseignant = { ...enseignant, id: this.enseignantList.length + 1 }; // Assign a new ID
    this.enseignantList.push(newEnseignant);
    this.resetSelectedEnseignant(); // Reset the form after creation
  }

  editEnseignant(enseignant: any): void {
    this.selectedEnseignant = { ...enseignant }; // Clone the enseignant object for editing
    this.openModal(); // Open the modal for editing
  }

  updateEnseignant(): void {
    if (this.selectedEnseignant) {
      const index = this.enseignantList.findIndex((e) => e.id === this.selectedEnseignant.id);
      if (index !== -1) {
        this.enseignantList[index] = { ...this.selectedEnseignant }; // Update the enseignant
      }
      this.resetSelectedEnseignant(); // Reset the form after updating
    }
    this.closeModal(); // Close the modal after updating
  }

  deleteEnseignant(id: number): void {
    this.enseignantList = this.enseignantList.filter((enseignant) => enseignant.id !== id);
  }

  resetSelectedEnseignant(): void {
    this.selectedEnseignant = { nom: "", prenom: "", email: "", telephone: "", specialite: "" }; // Initialize the fields
  }

  openModal(): void {
    const modalElement = document.getElementById("enseignantModal");
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement, {
        backdrop: false,
      });
      modal.show();
    }
  }

  closeModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById("enseignantModal"));
    modal.hide();
  }
}
