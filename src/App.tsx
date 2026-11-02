import React, { useState, useEffect } from 'react';
import { PageRoute } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { ServiceTermsPage } from './pages/ServiceTermsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { OpportunitiesPage } from './pages/OpportunitiesPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { LegalPage } from './pages/LegalPage.tsx';
import { VilaiyaattuPage } from './pages/VilaiyaattuPage.tsx';
import { VILAIYAATTU_ENABLED } from './data/vilaiyaattuConfig.ts';

const KNOWN_SERVICE_SLUGS = [
  'cyber-victim-support',
  'digital-exposure-assessment',
  'osint-research',
  'impersonation-monitoring',
  'mental-wellbeing-support',
  'digital-safety-net'
];

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

function normalizePath(pathname: string): PageRoute {
  const appPath = BASE_PATH && (pathname === BASE_PATH || pathname.startsWith(`${BASE_PATH}/`))
    ? pathname.slice(BASE_PATH.length) || '/'
    : pathname;
  // strip trailing slash if length > 1
  const clean = appPath.endsWith('/') && appPath.length > 1 ? appPath.slice(0, -1) : appPath;

  if (clean === '/vilaiyaattu' && !VILAIYAATTU_ENABLED) {
    return '/';
  }

  const validRoutes: PageRoute[] = [
    '/',
    '/services',
    '/services/cyber-victim-support',
    '/services/cyber-victim-support/terms',
    '/services/digital-exposure-assessment',
    '/services/digital-exposure-assessment/terms',
    '/services/osint-research',
    '/services/osint-research/terms',
    '/services/impersonation-monitoring',
    '/services/impersonation-monitoring/terms',
    '/services/mental-wellbeing-support',
    '/services/mental-wellbeing-support/terms',
    '/services/digital-safety-net',
    '/services/digital-safety-net/terms',
    '/vilaiyaattu',
    '/opportunities',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/terms',
    '/disclaimer'
  ];

  if (validRoutes.includes(clean as PageRoute)) {
    return clean as PageRoute;
  }

  // Handle potential prefix or fallback
  if (clean.startsWith('/services/')) {
    if (clean.endsWith('/terms')) {
      const slug = clean.replace('/services/', '').replace('/terms', '');
      if (KNOWN_SERVICE_SLUGS.includes(slug)) {
        return `/services/${slug}/terms` as PageRoute;
      }
    }
    const serviceSlug = clean.replace('/services/', '');
    if (KNOWN_SERVICE_SLUGS.includes(serviceSlug)) {
      return `/services/${serviceSlug}` as PageRoute;
    }
    return '/services';
  }

  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<PageRoute>(() => {
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: PageRoute) => {
    setCurrentPath(path);
    const targetPath = `${BASE_PATH}${path}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderCurrentPage = () => {
    if (currentPath === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/services') {
      return <ServicesPage onNavigate={handleNavigate} />;
    }

    // Check service-specific terms routes: /services/<slug>/terms
    if (currentPath.startsWith('/services/') && currentPath.endsWith('/terms')) {
      const slug = currentPath.replace('/services/', '').replace('/terms', '');
      return <ServiceTermsPage serviceSlug={slug} onNavigate={handleNavigate} />;
    }

    // Check service detail route: /services/<slug>
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServiceDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    if (currentPath === '/about-us') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    if (VILAIYAATTU_ENABLED && currentPath === '/vilaiyaattu') {
      return <VilaiyaattuPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/opportunities') {
      return <OpportunitiesPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/contact-us') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/privacy-policy') {
      return <LegalPage type="privacy-policy" onNavigate={handleNavigate} />;
    }

    if (currentPath === '/terms') {
      return <LegalPage type="terms" onNavigate={handleNavigate} />;
    }

    if (currentPath === '/disclaimer') {
      return <LegalPage type="disclaimer" onNavigate={handleNavigate} />;
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F6] text-[#172B4D] selection:bg-[#DCECE3] selection:text-[#123C35]">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
