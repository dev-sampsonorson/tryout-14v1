import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./app/about/about.component";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/home/home.component";

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./app/about/about.component').then(x => x.AboutComponent) }
]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
