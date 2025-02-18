import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Data } from '../../../model/data.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-all-data',
  imports: [CommonModule,
    RouterLink,
  ],
  templateUrl: './get-all-data.component.html',
  styleUrl: './get-all-data.component.css'
})
export class GetAllDataComponent implements OnInit {
  dataList: Data[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllData().subscribe({
      next: (data) => {
        this.dataList = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      }
    });
  }
}
