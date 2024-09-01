import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import {counterReducer} from "./store/counter.reducer"
import {productReducer} from "./store/product.reducer"
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({
        counter:counterReducer,
        products:productReducer
      }))]
};
