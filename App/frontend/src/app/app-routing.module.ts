import {NgModule} from "@angular/core";
import {Routes,RouterModule } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes : Routes = [
{path:"",redirectTo:"/Register",pathMatch:"full"},
{path:"Register",component:RegisterComponent},
{path:"Login",component:LoginComponent},
{path:"Login",component:LoginComponent},
{path:"**",component:PagenotfoundComponent}]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [LoginComponent,RegisterComponent,PagenotfoundComponent]