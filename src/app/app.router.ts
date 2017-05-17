import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { EditorCreateComponent } from './pages/editor-create/editor-create.component';
import { ExpandCreateComponent } from './pages/expand-create/expand-create.component';
import { TableCreateComponent } from './pages/table-create/table-create.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditorTemplateComponent } from './components/editor/editor-template';
import { ExpandTemplateComponent } from './components/expand/expand-template';
import { TableTemplateComponent } from './components/table/table-template';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'editor/:contentNo',
        component: EditorTemplateComponent
      },
      {
        path: 'expand/:contentNo',
        component: ExpandTemplateComponent
      },
      {
        path: 'table/:contentNo',
        component: TableTemplateComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: MenuSettingComponent
      },
      {
        path: 'editor',
        component: EditorCreateComponent
      },
      {
        path: 'expand',
        component: ExpandCreateComponent
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
