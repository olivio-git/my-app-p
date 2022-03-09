import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*nombre=new FormControl('');*/

  usuario=this.fb.group({
    nombre:new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.email])
  })
  constructor(private fb:FormBuilder) {}
  

  cambiarNombre(){
  this.usuario.controls.nombre.setValue('OrnitoRinco');
  }
  guardarDatos(){
    console.log(this.usuario.value)
  }
}
