import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css'],
})
export class PetitionComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetPetition(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        fname: res['fname'],
        lname: res['lname'],
        email: res['email'],
      });
    });

    this.updateForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.crudService
      .updatePetition(this.getId, this.updateForm.value)
      .subscribe(
        () => {
          console.log('Data updated successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/petitions-list'));
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
