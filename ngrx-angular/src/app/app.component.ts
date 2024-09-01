import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from './store/app-state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  store:Store<AppState> = inject(Store<AppState>)

  
  counter$:Observable<number> = of(1)
  products$ = this.store.select("products")
  product:string="react"
  title = 'ngrx-angular';
id=1;
 // constructor(private store:Store<AppState>){
  constructor(){
    this.counter$ = this.store.select("counter");
    console.warn("couter in constructor",this.counter$)
  }

  ngOnInit(){
    console.warn("counter Observable",this.counter$)
    console.warn("products Observable",this.products$)
  this.counter$.subscribe(data=> console.warn("counter Observable in subscrie",data))

  this.products$.subscribe(data=> console.warn("products Observable in subscrie",data))
  }

  addNewProduct(){
      this.store.dispatch({type:"ADD",payload:{name:this.product,id:++this.id}})
  }

  removeProduct(){
  
    try{
      setTimeout(()=>{ 
        throw new Error("errr")
      },200)

      throw new Error("sakthi")
      throw new Error("saramjikthi")
    }
    catch(err){
      console.warn(err)
      alert()
    }
  }

  
}
