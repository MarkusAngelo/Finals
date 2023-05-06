import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.css'],
})
export class MemberslistComponent implements OnInit {
  Members: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetMembers().subscribe((res) => {
      console.log(res);
      this.Members = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to delete?')) {
      this.crudService.deleteMember(id).subscribe((res) => {
        this.Members.splice(i, 1);
      });
    }
  }
}
