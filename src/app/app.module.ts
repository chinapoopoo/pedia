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
import { AccordionCreateComponent } from './pages/accordion-create/accordion-create.component';
import { TableCreateComponent } from './pages/table-create/table-create.component';
import { MainComponent } from './pages/main/main.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EditorTemplateComponent } from './components/editor/editor-template';
import { AccordionTemplateComponent } from './components/accordion/accordion-template';
import { TableTemplateComponent } from './components/table/table-template';
import { GlobalVariableService } from './services/global.variable';

import { EditorProvider } from './providers/editor-provider';
import { AccordionProvider } from './providers/accordion-provider';
import { TableProvider } from './providers/table-provider';
import { CommonProvider } from './providers/common-provider';
import { UtilService } from './services/util.services';
import { AdminComponent } from './pages/admin/admin.component';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { WriterComponent } from './pages/writer/writer.component';
import { ListComponent } from './pages/list/list.component';
import { SafeHtmlPipe } from './components/safehtml';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditorCreateComponent,
    AccordionCreateComponent,
    TableCreateComponent,
    MainComponent,
    WelcomeComponent,
    EditorTemplateComponent,
    AccordionTemplateComponent,
    TableTemplateComponent,
    AdminComponent,
    MenuSettingComponent,
    WriterComponent,
    ListComponent,
    SafeHtmlPipe,
    LoginComponent,
    MapComponent
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
  providers: [HttpService, GlobalVariableService, EditorProvider, AccordionProvider, TableProvider, CommonProvider, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
