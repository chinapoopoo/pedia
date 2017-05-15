import 'hammerjs';

import { routing } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/nav/nav';
import { HttpService } from './services/http.services';
import { EditorCreateComponent } from './pages/editor-create/editor-create.component';
import { ExpandCreateComponent } from './pages/expand-create/expand-create.component';
import { GridCreateComponent } from './pages/grid-create/grid-create.component';
import { ListCreateComponent } from './pages/list-create/list-create.component';
import { TableCreateComponent } from './pages/table-create/table-create.component';
import { MainComponent } from './pages/main/main.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContainerComponent } from './pages/container/container.component';
import { EditorTemplateComponent } from './components/editor/editor-template';
import { ExpandTemplateComponent } from './components/expand/expand-template';
import { GridTemplateComponent } from './components/grid/grid-template';
import { ListTemplateComponent } from './components/list/list-template';
import { TableTemplateComponent } from './components/table/table-template';
import { GlobalVariableService } from './services/global.variable';

import { EditorProvider } from './providers/editor-provider';
import { ExpandProvider } from './providers/expand-provider';
import { GridProvider } from './providers/grid-provider';
import { ListProvider } from './providers/list-provider';
import { TableProvider } from './providers/table-provider';
import { CommonProvider } from './providers/common-provider';
import { UtilService } from './services/util.services';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditorCreateComponent,
    ExpandCreateComponent,
    GridCreateComponent,
    ListCreateComponent,
    TableCreateComponent,
    MainComponent,
    WelcomeComponent,
    ContainerComponent,
    EditorTemplateComponent,
    ExpandTemplateComponent,
    GridTemplateComponent,
    ListTemplateComponent,
    TableTemplateComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing
  ],
  providers: [HttpService, GlobalVariableService, EditorProvider, ExpandProvider, GridProvider, ListProvider, TableProvider, CommonProvider, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
