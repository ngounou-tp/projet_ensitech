import { Component, OnInit } from '@angular/core';

// The 'declare var window' should be placed inside the class or above the component decorator.
declare var window: any;

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  etudiantList = [
    { id: 1, nom: "Sow", prenom: "Abdoulaye", email: "sow.abdoulaye@example.com", telephone: "123456789" },
    { id: 2, nom: "Diallo", prenom: "Aminata", email: "diallo.aminata@example.com", telephone: "987654321" },
    { id: 3, nom: "Ndour", prenom: "Fatou", email: "ndour.fatou@example.com", telephone: "456123789" },
  ];

  selectedEtudiant: any = null;

  constructor() {}

  ngOnInit(): void {}

  // Create a new student
  createEtudiant(etudiant: any): void {
    const newEtudiant = { ...etudiant, id: this.etudiantList.length + 1 };
    this.etudiantList.push(newEtudiant);
    this.resetSelectedEtudiant(); // Clear the form after creation
    this.closeModal(); // Close modal after creating a student
  }

  // Edit an existing student
  editEtudiant(etudiant: any): void {
    this.selectedEtudiant = { ...etudiant }; // Clone the object to avoid binding issues
    this.openModal(); // Open modal to edit student details
  }

  // Update an existing student
  updateEtudiant(): void {
    if (this.selectedEtudiant) {
      const index = this.etudiantList.findIndex((e) => e.id === this.selectedEtudiant.id);
      if (index !== -1) {
        this.etudiantList[index] = { ...this.selectedEtudiant };
      }
      this.resetSelectedEtudiant(); // Clear the form after updating
    }
    this.closeModal(); // Close modal after updating
  }

  // Delete a student by ID
  deleteEtudiant(id: number): void {
    this.etudiantList = this.etudiantList.filter((etudiant) => etudiant.id !== id);
  }

  // Reset the selected student
  resetSelectedEtudiant(): void {
    this.selectedEtudiant = { nom: "", prenom: "", email: "", telephone: "" }; // Default empty object
  }

  // Open the modal
  openModal(): void {
    const modalElement = document.getElementById("etudiantModal");
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement, { backdrop: false });
      modal.show();
    }
  }

  // Close the modal
  closeModal(): void {
    const modalElement = document.getElementById("etudiantModal");
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.hide();
    }
  }

}
