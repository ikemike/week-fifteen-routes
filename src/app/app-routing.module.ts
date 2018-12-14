import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CatComponent } from './cat/cat.component';

const routes: Routes = [
  // Let's add some junk
  { path: '', component: FooComponent}
  , { path: 'foo', component: FooComponent}
  , { path: 'bar', component: BarComponent}
  , { path: 'cat', component: CatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
