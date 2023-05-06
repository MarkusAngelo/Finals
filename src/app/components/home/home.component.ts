import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  petitionForm: FormGroup;
  memberForm: FormGroup;
  updateForm: any;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.petitionForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
    });
    this.memberForm = this.formBuilder.group({
      name: [''],
      email2: [''],
      contact: [''],
      country: [''],
      date: [''],
    });
  }

  ngOnInit() {}

  onSubmit(): any {
    this.crudService.AddPetition(this.petitionForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        alert('Thank you for participating!');
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit2() {}

  onSubmit2(): any {
    this.crudService.AddMember(this.memberForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        alert('Thank you for joining!');
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
