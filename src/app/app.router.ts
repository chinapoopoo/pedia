import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { EditorCreateComponent } from './pages/editor-create/editor-create.component';
import { ExpandCreateComponent } from './pages/expand-create/expand-create.component';
import { GridCreateComponent } from './pages/grid-create/grid-create.component';
import { ListCreateComponent } from './pages/list-create/list-create.component';
import { TableCreateComponent } from './pages/table-create/table-create.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminComponent } from './pages/admin/admin.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'editor',
        component: EditorCreateComponent
      },
      {
        path: 'expand',
        component: ExpandCreateComponent
      },
      {
        path: 'grid',
        component: GridCreateComponent
      },
      {
        path: 'list',
        component: ListCreateComponent
      },
      {
        path: 'table',
        component: TableCreateComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
