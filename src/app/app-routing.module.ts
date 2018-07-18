
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component'; 




const routes : Routes = [

{
	path: '',
	component: UsersComponent
}
,{
	path: 'details/:id',
	component: DetailsComponent
}


];

@NgModule({

	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{ }