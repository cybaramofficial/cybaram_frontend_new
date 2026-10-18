import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  menuOpen = false;
  activeFaq: number | null = null;

  readonly services = [
    { icon: 'shield', tone: 'mint', slug: 'cyber-victim-support', title: 'Cyber Victim Support', description: "Guidance and support if you've been scammed or targeted online." },
    { icon: 'search', tone: 'blue', slug: 'digital-exposure-assessment', title: 'Digital Exposure Assessment', description: 'Find out what personal information about you is exposed online.' },
    { icon: 'report', tone: 'amber', slug: 'osint-reports-investigations', title: 'OSINT Reports & Investigations', description: 'In-depth information gathering for personal and professional needs.' },
    { icon: 'people', tone: 'lilac', slug: 'impersonation-protection', title: 'Brand & Identity Protection', description: 'Protection for individuals, professionals and public personalities.' },
    { icon: 'heart', tone: 'rose', slug: 'mental-wellbeing-support', title: 'Mental Well-Being Support', description: 'Emotional support and guidance after cyber incidents.' }
  ];

  readonly steps = [
    { icon: 'message', title: 'Tell us your concern', description: "Share what happened or what you're worried about." },
    { icon: 'people', title: 'We understand & guide', description: 'Our team analyses your situation and suggests the right support.' },
    { icon: 'settings', title: 'Take action with support', description: 'We help you with the next steps and stay with you during the process.' }
  ];

  readonly testimonials = [
    { quote: 'I was really scared after losing money in an online scam. CybAram guided me clearly and helped me understand what to do next.', name: 'Priya S.', location: 'Chennai', image: 'photo-1534528741775-53994a69daeb' },
    { quote: 'They helped me find out what information about me was exposed online. The process was simple and very professional.', name: 'Arun K.', location: 'Coimbatore', image: 'photo-1500648767791-00dcc994a43e' },
    { quote: 'After a tough experience, their support team was very kind and patient. I felt much more confident and informed.', name: 'Meena R.', location: 'Bangalore', image: 'photo-1531123897727-8f129e1688ce' }
  ];

  readonly faqs = [
    { question: 'Can you help me recover money lost in a scam?', answer: 'We can help you understand your options, document what happened, and take the right next steps. Recovery depends on the situation, but you do not have to navigate it alone.' },
    { question: 'Is my information kept confidential?', answer: 'Yes. Your information is handled with care and only used to understand your concern and provide support.' },
    { question: "Who can use CybAram's services?", answer: 'Our services are for individuals, families, professionals, and organizations seeking practical digital safety support.' },
    { question: 'How do I get started?', answer: 'Reach out through the contact link and tell us a little about your concern. Our team will help you find the right next step.' }
  ];

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }
}