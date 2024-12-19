import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  formationList: any[] = [];
  coursList: any[] = [];
  selectedFormation: any = null;

  constructor() {}

  ngOnInit(): void {
    // Initialize the courses list
    this.coursList = [
      { id: 1, code: 'CS101', intitule: 'Introduction à la programmation', enseignant: 'Mme. DIOP', duree: 30 },
      { id: 2, code: 'MA102', intitule: 'FLUTTER', enseignant: 'M. Martin', duree: 40 },
      { id: 3, code: 'PH103', intitule: 'PYTHON', enseignant: 'Mme. SARR', duree: 35 },
    ];

    // Initialize the formations list
    this.formationList = [
      {
        id: 1,
        nom: 'Formation Informatique',
        description: 'Formation complète sur le développement logiciel.',
        frais: 500,
        duree: '2 ans',
        sanction: 'Diplôme de Licence',
        cours: [this.coursList[0], this.coursList[2]], // Updated to use valid indices
      },
    ];
  }

  // Reset the selected formation
  resetSelectedFormation(): void {
    this.selectedFormation = {
      id: null,
      nom: '',
      description: '',
      frais: 0,
      duree: '',
      sanction: '',
      cours: [],
    };
  }

  // Open the modal
  openModal(): void {
    const modalElement = document.getElementById('formationModal');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }

  // Close the modal
  closeModal(): void {
    const modalElement = document.getElementById('formationModal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }

  // Create a new formation
  createFormation(): void {
    if (this.selectedFormation) {
      this.selectedFormation.id = this.formationList.length + 1; // Assign a new ID
      this.formationList.push(this.selectedFormation);
      this.closeModal();
      this.resetSelectedFormation(); // Reset after creation
    }
  }

  // Update an existing formation
  updateFormation(): void {
    if (this.selectedFormation) {
      const index = this.formationList.findIndex(f => f.id === this.selectedFormation.id);
      if (index !== -1) {
        this.formationList[index] = { ...this.selectedFormation }; // Update the formation
      }
      this.closeModal();
      this.resetSelectedFormation(); // Reset after updating
    }
  }

  // Edit an existing formation
  editFormation(formation: any): void {
    this.selectedFormation = { ...formation };
    this.openModal(); // Open the modal for editing
  }

  // Delete a formation
  deleteFormation(id: number): void {
    this.formationList = this.formationList.filter(f => f.id !== id);
  }
}
