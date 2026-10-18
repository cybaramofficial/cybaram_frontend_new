import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { ContentPageComponent } from './features/content/content-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent, title: 'CybAram | Safer People, Safer Digital Life' },
	{ path: 'about', component: ContentPageComponent, data: { page: 'about' }, title: 'About Us | CybAram' },
	{ path: 'contact', component: ContentPageComponent, data: { page: 'contact' }, title: 'Contact Us | CybAram' },
	{ path: 'opportunities', component: ContentPageComponent, data: { page: 'opportunities' }, title: 'Opportunities | CybAram' },
	{ path: 'services', component: ContentPageComponent, data: { page: 'services' }, title: 'Our Services | CybAram' },
	{ path: 'services/:service', component: ContentPageComponent, data: { page: 'service' } },
	{ path: '**', redirectTo: '' }
];
