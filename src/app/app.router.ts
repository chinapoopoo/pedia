import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditorTemplateComponent } from './components/editor/editor-template';
import { AccordionTemplateComponent } from './components/accordion/accordion-template';
import { TableTemplateComponent } from './components/table/table-template';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { WriterComponent } from './pages/writer/writer.component';
import { ListComponent } from './pages/list/list.component';

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
        path: 'accordion/:contentNo',
        component: AccordionTemplateComponent
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
        path: 'write',
        component: WriterComponent
      },
      {
        path: 'list',
        component: ListComponent
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
