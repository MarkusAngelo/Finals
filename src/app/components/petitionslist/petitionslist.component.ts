import { Component } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-petitionslist',
  templateUrl: './petitionslist.component.html',
  styleUrls: ['./petitionslist.component.css'],
})
export class PetitionslistComponent {
  Petitions: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetPetitions().subscribe((res) => {
      console.log(res);
      this.Petitions = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to delete?')) {
      this.crudService.deletePetition(id).subscribe((res) => {
        this.Petitions.splice(i, 1);
      });
    }
  }
}
