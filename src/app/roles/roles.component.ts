import { Component, OnInit, Input } from '@angular/core';

import { VSerie } from '../model/vserie';
import { Role } from '../model/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @Input() serie: VSerie;
  @Input() roles: Role[];

  ngOnInit(): void {
  }

}

