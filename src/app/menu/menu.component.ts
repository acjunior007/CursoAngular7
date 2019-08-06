import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  buscarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit() {
    this.buscarForm = this.formBuilder.group({
    });
  }

}
