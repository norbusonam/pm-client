import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  TuiDialogModule,
  TuiRootModule,
  iconsPathFactory,
  TUI_ICONS_PATH,
  TuiButtonModule,
  TuiNotificationsModule,
} from '@taiga-ui/core';
import { 
  TuiAccordionModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTabsModule
} from '@taiga-ui/kit';
import {
  TuiSidebarModule
} from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsSidebarComponent } from './components/projects-sidebar/projects-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProjectsSidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TuiRootModule,
    TuiTabsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiAccordionModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiDialogModule,
    TuiNotificationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
