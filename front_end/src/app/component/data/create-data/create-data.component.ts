import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importez ReactiveFormsModule
import { DataService } from '../../../services/data.service';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-data',
  standalone: true, // Déclarez ce composant comme standalone
  imports: [ReactiveFormsModule, CommonModule], // Importez ReactiveFormsModule ici
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent {
  dataForm: FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private dataService: DataService,
    private location: Location
  ) {
     this.dataForm = this.fb.group({
      name: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  sendData() {
    if (this.dataForm.valid) {
      const formData = this.dataForm.value;
      console.log('Données envoyées:', formData);

      this.dataService.sendData(formData).subscribe({
        next: (response) => {
          console.log('Réponse du serveur:', response);
          // Vous pouvez rediriger l'utilisateur ou afficher un message de succès ici
        },
        error: (error) => console.error('Erreur:', error)
      });
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  onCancel() {
    this.location.back();
  }
}