import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  id: number;
  editMode = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.onCancel();
  }

  onAddIngredient() {
  }

  onDeleteIngredient(index: number) {
  }

  onCancel() {
  }

  private initForm() {
  }

  getControls() {
  }

}
