import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';

import { NavbarPmComponent } from './component_pm/navbar-pm/navbar-pm.component';
import { NewProjectComponent } from './component_pm/new-project/new-project.component';
import { NavbarRmComponent } from './component_rm/navbar-rm/navbar-rm.component';
import { RmDashComponent } from './component_rm/rm-dash 11/rm-dash.component';


import { AuthService } from './service/auth.service';
import {CapMangService} from './service/cap-mang.service';
import { validateSignup } from './service/validateSignup';
import { ProjectComponent } from './component_pm/project/project.component';
import { ProjectDetailsComponent } from './component_pm/project-details/project-details.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileNavbarComponent } from './component/profile-navbar/profile-navbar.component';
import { AllocEmpComponent } from './component_pm/alloc-emp/alloc-emp.component';
import { HiringRequestComponent } from './component_rm/hiring-request/hiring-request.component';
import { ReportComponent } from './other/report/report.component';
import { SidebarRmComponent } from './component_rm/sidebar-rm/sidebar-rm.component';
import { HiringRequestListComponent } from './component_rm/hiring-request-list/hiring-request-list.component';
import { ReportDetailsComponent } from './other/report-details/report-details.component';
import {ProjectPipe} from './pipes/project.pipe';
import { AssignEmpComponent } from './component_rm/assign-emp/assign-emp.component';
import { AvailEmployeesComponent } from './other/avail-employees/avail-employees.component';
import { AdminComponent } from './other/admin/admin.component';
import { AdminNavbarComponent } from './other/admin-navbar/admin-navbar.component';
import { EmployeeComponent } from './other/employee/employee.component';
import { TestService } from './service/test.service';
import { EmployeeDetailsComponent } from './other/employee-details/employee-details.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { PmListComponent } from './component_rm/pm-list/pm-list.component';
import { ResetPasswordComponent } from './other/reset-password/reset-password.component';
import { AssignProjectListComponent } from './component_pm/assign-project-list/assign-project-list.component';
import { MyProjectComponent } from './component/my-project/my-project.component';
import { AssignListComponent } from './component_rm/assign-list/assign-list.component';


const applicationRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar-pm', component: NavbarPmComponent },
  { path: 'new-project', component: NewProjectComponent },
  { path: 'navbar-rm', component: NavbarRmComponent },
  { path: 'rm-dash', component: RmDashComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'alloc-emp', component: AllocEmpComponent },
  { path: 'hiring-request', component: HiringRequestComponent },
  { path: 'report', component:ReportComponent },
  { path: 'report-details', component:ReportDetailsComponent },
  { path: 'report-details/:id', component:ReportDetailsComponent },
  { path: 'assign-emp', component:AssignEmpComponent },
  { path: 'avail-emp', component:AvailEmployeesComponent },
  { path: 'admin', component:AdminComponent },
  { path: 'employee', component:EmployeeComponent },
  { path: 'employeeDetails/:id',component:EmployeeDetailsComponent} ,
  { path: 'edit-profile', component:EditProfileComponent },
  { path: 'pm-list', component:PmListComponent },
  {path: 'edit-profile/:id',component:EditProfileComponent} ,
  {path: 'assign-emp/:id',component:AssignEmpComponent} ,
  {path: 'reset-password',component:ResetPasswordComponent} ,
  {path: 'assignProjectList',component:AssignProjectListComponent} ,
  {path: 'myProject',component:MyProjectComponent} ,
  {path: 'assignList',component:AssignListComponent} 

];

@NgModule({
  declarations: [
    AppComponent,
    ProjectPipe,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,

    NavbarPmComponent,
    NewProjectComponent,
    NavbarRmComponent,
    RmDashComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ProfileComponent,
    ProfileNavbarComponent,
    AllocEmpComponent,
    HiringRequestComponent,
    ReportComponent,
    SidebarRmComponent,
    HiringRequestListComponent,
    ReportDetailsComponent,
    AssignEmpComponent,
    AvailEmployeesComponent,
    AdminComponent,
    AdminNavbarComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EditProfileComponent,
    PmListComponent,
    ResetPasswordComponent,
    AssignProjectListComponent,
    MyProjectComponent,
    AssignListComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MyDatePickerModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [AuthService,validateSignup,TestService,CapMangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
