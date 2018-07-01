import { Component, OnInit, Input } from '@angular/core';

import { Serie } from '../model/serie';
import { Role } from '../model/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @Input() serie: Serie;
  @Input() roles: Role[];

  ngOnInit(): void {
  }

}

