import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
})
export class MembershipComponent implements OnInit {
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

    this.crudService.GetMember(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        name: res['name'],
        email2: res['email2'],
        contact: res['contact'],
        country: res['country'],
        date: res['date'],
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      email2: [''],
      contact: [''],
      country: [''],
      date: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.crudService.updateMember(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/members-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
