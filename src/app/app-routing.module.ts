import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/blog" },
  { path: "blog", component: BlogComponent },
  { path: "blog/:blogId", component: BlogPostComponent },
  { path: "new", component: FormularioComponent },
  { path: "admin", component: AdminComponent },
  { path: "**", redirectTo: "/blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
