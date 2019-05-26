import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

  { path: 'about',
   loadChildren: './about/about.module#AboutPageModule' },

  { path: 'cause',
   loadChildren: './cause/cause.module#CausePageModule' },
   
  { path: 'symptoms',
   loadChildren: './symptoms/symptoms.module#SymptomsPageModule' },
  { path: 'treatment', 
  loadChildren: './treatment/treatment.module#TreatmentPageModule' },
  { path: 'prevention', 
  loadChildren: './prevention/prevention.module#PreventionPageModule' },
  { path: 'statistics',
   loadChildren: './statistics/statistics.module#StatisticsPageModule' },  { path: 'faq', loadChildren: './faq/faq.module#FAQPageModule' },
  { path: 'publication', loadChildren: './publication/publication.module#PublicationPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'risk', loadChildren: './risk/risk.module#RiskPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
