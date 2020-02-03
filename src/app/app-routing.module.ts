import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'year-planner',
    loadChildren: () => import('./year-planner/year-planner.module').then( m => m.YearPlannerPageModule)
  },
  {
    path: 'notice-board',
    loadChildren: () => import('./notice-board/notice-board.module').then( m => m.NoticeBoardPageModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then( m => m.DepartmentPageModule)
  },
  {
    path: 'add-client',
    loadChildren: () => import('./add-client/add-client.module').then( m => m.AddClientPageModule)
  },
  {
    path: 'view-client',
    loadChildren: () => import('./view-client/view-client.module').then( m => m.ViewClientPageModule)
  },
  {
    path: 'adminlogin',
    loadChildren: () => import('./adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'studentlogin',
    loadChildren: () => import('./studentlogin/studentlogin.module').then( m => m.StudentloginPageModule)
  },
  {
    path: 'lecturerlogin',
    loadChildren: () => import('./lecturerlogin/lecturerlogin.module').then( m => m.LecturerloginPageModule)
  },
  {
    path: 'studentsmenu',
    loadChildren: () => import('./studentsmenu/studentsmenu.module').then( m => m.StudentsmenuPageModule)
  },
  {
    path: 'guest-menupage',
    loadChildren: () => import('./guest-menupage/guest-menupage.module').then( m => m.GuestMenupagePageModule)
  },
  {
    path: 'lecturer-menupage',
    loadChildren: () => import('./lecturer-menupage/lecturer-menupage.module').then( m => m.LecturerMenupagePageModule)
  },
  {
    path: 'student-noticeboard',
    loadChildren: () => import('./student-noticeboard/student-noticeboard.module').then( m => m.StudentNoticeboardPageModule)
  },
  {
    path: 'lecturer-notice-board',
    loadChildren: () => import('./lecturer-notice-board/lecturer-notice-board.module').then( m => m.LecturerNoticeBoardPageModule)
  },
  {
    path: 'studentregister',
    loadChildren: () => import('./studentregister/studentregister.module').then( m => m.StudentregisterPageModule)
  },
  {
    path: 'lecturerregister',
    loadChildren: () => import('./lecturerregister/lecturerregister.module').then( m => m.LecturerregisterPageModule)
  },
  {
    path: 'adminregister',
    loadChildren: () => import('./adminregister/adminregister.module').then( m => m.ADMINregisterPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
