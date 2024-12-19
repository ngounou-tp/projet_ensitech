import { Component, OnInit } from '@angular/core';

// Declare for using Bootstrap's modal
declare var window: any;

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {
  etudiantList = [
    { id: 1, nom: "Sow", prenom: "Abdoulaye", email: "sow.abdoulaye@example.com", telephone: "123456789" },
    { id: 2, nom: "Diallo", prenom: "Aminata", email: "diallo.aminata@example.com", telephone: "987654321" },
    { id: 3, nom: "Ndour", prenom: "Fatou", email: "ndour.fatou@example.com", telephone: "456123789" },
  ];

  formations = [
    { id: 1, title: "Web Development" },
    { id: 2, title: "Data Science" },
    { id: 3, title: "Machine Learning" },
    { id: 4, title: "UI/UX Design" },
    { id: 5, title: "Cloud Computing" },
  ];

  inscriptionList = [
    { id: 1, etudiantId: 1, formationId: 3, dateInscription: '2024-12-15', amountPaid: 300 },
    { id: 2, etudiantId: 2, formationId: 1, dateInscription: '2024-12-10', amountPaid: 500 },
  ];

  selectedInscription: any = null;

  constructor() {}

  ngOnInit(): void {
    this.resetSelectedInscription();
  }

  createInscription(inscription: any): void {
    const newInscription = { ...inscription, id: this.inscriptionList.length + 1 };
    this.inscriptionList.push(newInscription);
    this.resetSelectedInscription();
    this.closeModal();
  }

  editInscription(inscription: any): void {
    this.selectedInscription = { ...inscription };
    this.openModal();
  }

  updateInscription(): void {
    if (this.selectedInscription) {
      const index = this.inscriptionList.findIndex((i) => i.id === this.selectedInscription.id);
      if (index !== -1) {
        this.inscriptionList[index] = { ...this.selectedInscription };
      }
      this.resetSelectedInscription();
    }
    this.closeModal();
  }

  deleteInscription(id: number): void {
    this.inscriptionList = this.inscriptionList.filter((inscription) => inscription.id !== id);
  }

  resetSelectedInscription(): void {
    this.selectedInscription = {
      etudiantId: null,
      formationId: null,
      dateInscription: '',
      amountPaid: null,
    };
  }

  openModal(): void {
    const modalElement = document.getElementById("inscriptionModal");
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement, { backdrop: false });
      modal.show();
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById("inscriptionModal");
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.hide();
    }
  }

  getEtudiantName(id: number): string {
    const etudiant = this.etudiantList.find((e) => e.id === id);
    return etudiant ? `${etudiant.nom} ${etudiant.prenom}` : 'Unknown';
  }

  getFormationTitle(id: number): string {
    const formation = this.formations.find((f) => f.id === id);
    return formation ? formation.title : 'Unknown';
  }
}
