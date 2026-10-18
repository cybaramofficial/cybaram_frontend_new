import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

interface ServiceDetail {
  slug: string;
  title: string;
  lineOne: string;
  lineTwo: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
  icon: string;
  highlights: string[];
  commonCases: string[];
  helps: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  audience: string[];
  price: string;
  priceUnit: string;
  inclusions: string[];
}

@Component({
  selector: 'app-content-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './content-page.component.html',
})
export class ContentPageComponent {
  pageKind = 'about';
  menuOpen = false;
  submitted = false;
  activeFaq: number | null = null;
  service!: ServiceDetail;

  readonly servicePages: Record<string, ServiceDetail> = {
    'cyber-victim-support': {
      slug: 'cyber-victim-support', title: 'Cyber Victim Support', lineOne: 'Cyber Victim', lineTwo: 'Support', label: 'Our Service',
      description: "Practical guidance and support if you've been scammed, harassed or targeted online.",
      image: 'photo-1517841905240-472988babdf9', imageAlt: 'Woman getting support after a difficult online experience',
      badge: "Lost money?\nReceived a suspicious message?\nWe're here to help.", icon: '◉',
      highlights: ['Confidential support', 'Step-by-step guidance', 'People-first approach'],
      commonCases: ['Online scams (investment, job, shopping)', 'Blackmail and extortion', 'Fake profiles and impersonation', 'Misuse of personal photos or videos', 'Harassment and threatening messages', 'Other online fraud or cyber incidents'],
      helps: [{ title: 'Understand your situation', description: 'We listen to your concern and help you understand what has happened.' }, { title: 'Guide you on next steps', description: 'Explore your options and the right authorities to approach.' }, { title: 'Help with the complaint process', description: 'Prepare the information and evidence needed for reporting.' }, { title: 'Ongoing support', description: 'Get guidance until you feel more confident and informed.' }],
      steps: [{ title: 'Share your concern', description: 'Tell us what happened and what support you need.' }, { title: 'We review and guide', description: 'Our team understands your situation and suggests next steps.' }, { title: 'You take action', description: 'We help you prepare and stay with you through the process.' }],
      audience: ['People who have lost money in an online scam', 'People facing blackmail or misuse of personal photos', 'Victims of fake profiles or impersonation', 'Anyone facing online harassment or threats', 'Families seeking guidance for a loved one'],
      price: '₹199', priceUnit: 'per case', inclusions: ['Initial review of your concern', 'Practical guidance and next steps', 'Support with the complaint process', 'Follow-up guidance within a reasonable period']
    },
    'digital-exposure-assessment': {
      slug: 'digital-exposure-assessment', title: 'Digital Exposure Assessment', lineOne: 'Digital Exposure', lineTwo: 'Assessment', label: 'Our Service',
      description: 'Find out what personal information about you is available online and understand the risks.',
      image: 'photo-1500648767791-00dcc994a43e', imageAlt: 'Person reviewing their digital information on a laptop',
      badge: 'Understand your online footprint. Take control of your digital privacy.', icon: '⌕',
      highlights: ['Know your exposure', 'Clear and simple report', 'Actionable guidance'],
      commonCases: ['Email addresses and phone numbers', 'Social media profiles', 'Personal photos or documents', 'Data leaks and breaches', 'Fake profiles and impersonation', 'Publicly available information'],
      helps: [{ title: 'Find exposed information', description: 'Identify what personal data about you is publicly available.' }, { title: 'Understand the risks', description: 'Learn how exposed information could be misused.' }, { title: 'Get a clear report', description: 'Receive findings and explanations in plain language.' }, { title: 'Guidance on next steps', description: 'Take practical steps to reduce risks and improve privacy.' }],
      steps: [{ title: 'Share your details', description: 'Tell us what information you would like us to check.' }, { title: 'We analyse', description: 'We review public sources and relevant platforms.' }, { title: 'Get your report', description: 'Receive findings, risks and clear recommendations.' }, { title: 'Take action', description: 'Follow practical steps to reduce your exposure.' }],
      audience: ['Individuals concerned about their online footprint', 'Families helping protect a young person', 'Professionals with a public profile', 'People affected by a data breach', 'Anyone looking to improve digital privacy'],
      price: '₹199', priceUnit: 'per report', inclusions: ['Complete exposure check', 'Easy-to-understand report', 'Actionable recommendations', 'Confidential process']
    },
    'osint-reports-investigations': {
      slug: 'osint-reports-investigations', title: 'OSINT Reports & Investigations', lineOne: 'OSINT Reports &', lineTwo: 'Investigations', label: 'Our Service',
      description: 'In-depth information gathering and research using legally available open sources.',
      image: 'photo-1460925895917-afdab827c52f', imageAlt: 'Open-source research and analysis on a computer',
      badge: 'Data-driven insights.\nFor safer decisions.\nLegally sourced. Ethically analysed.', icon: '▤',
      highlights: ['Open-source research', 'Reliable insights', 'Ethical and compliant'],
      commonCases: ['Brand misuse and impersonation', 'Fake profiles and fraudulent entities', 'Domain, website and social presence', 'Background research for organisations', 'Online reputation and risk reviews', 'Other legally available public information'],
      helps: [{ title: 'Identify risks', description: 'Find potential threats, fraud and misuse of your brand or identity.' }, { title: 'Verify information', description: 'Cross-check publicly available information and sources.' }, { title: 'Actionable insights', description: 'Receive organised findings with practical recommendations.' }],
      steps: [{ title: 'Share your requirement', description: 'Tell us what you need researched and why.' }, { title: 'We plan and research', description: 'Our team analyses relevant public sources ethically.' }, { title: 'Get your report', description: 'Receive a clear report with findings and references.' }, { title: 'Take action', description: 'Use the insights to make informed decisions.' }],
      audience: ['Small and medium businesses', 'Startups and entrepreneurs', 'Brands and public figures', 'Organisations and institutions', 'Legal, compliance and risk teams'],
      price: 'Custom', priceUnit: 'quote', inclusions: ['Research plan tailored to your request', 'Verified links and source references', 'Clear risk analysis', 'Optional consultation on findings']
    },
    'impersonation-protection': {
      slug: 'impersonation-protection', title: 'Impersonation Protection', lineOne: 'Impersonation', lineTwo: 'Protection', label: 'Our Service',
      description: 'Identify and address fake profiles and misuse of your name or content across social platforms.',
      image: 'photo-1534528741775-53994a69daeb', imageAlt: 'Creator reviewing social profiles and account activity',
      badge: 'Your identity matters.\nWe help you spot fakes and report them.', icon: '♧',
      highlights: ['Find fake profiles', 'Support for takedowns', 'Protect your reputation'],
      commonCases: ['Fake profiles using your name or photos', 'Impersonation accounts on social media', 'Misuse of your content or videos', 'Fake fan pages or misleading accounts', 'Fraudulent requests sent to your audience'],
      helps: [{ title: 'Share your details', description: 'Tell us about your name, platforms and known fake accounts.' }, { title: 'We research', description: 'We search relevant platforms for potential impersonation.' }, { title: 'We report and guide', description: 'Get help documenting accounts and using platform reporting.' }, { title: 'Ongoing support', description: 'Receive updates and advice on protecting your identity.' }],
      steps: [{ title: 'Share your details', description: 'Tell us your name, accounts and known concerns.' }, { title: 'We research', description: 'We look for likely fake accounts across platforms.' }, { title: 'We report and guide', description: 'Get clear reporting steps and support with documentation.' }, { title: 'Ongoing support', description: 'We keep you informed through the agreed support period.' }],
      audience: ['Public figures and influencers', 'Creators and small businesses', 'Professionals with a public profile', 'People targeted by fake accounts'],
      price: '₹299', priceUnit: 'per month', inclusions: ['Impersonation check across major platforms', 'Reporting support for identified accounts', 'Guidance on takedown requests', 'Monthly updates during the plan period']
    },
    'mental-wellbeing-support': {
      slug: 'mental-wellbeing-support', title: 'Mental Well-Being Support', lineOne: 'Mental', lineTwo: 'Well-Being Support', label: 'Our Service',
      description: 'A safe space to talk, share and feel heard after a difficult online experience.',
      image: 'photo-1517841905240-472988babdf9', imageAlt: 'Woman taking a quiet moment and finding support',
      badge: "A supportive conversation today can help you feel stronger tomorrow.", icon: '♡',
      highlights: ['Listen without judgement', 'Emotional support', 'Practical guidance'],
      commonCases: ['Stress after an online scam', 'Anxiety due to online harassment', 'Feeling overwhelmed after data exposure', 'Worry about online reputation', 'Emotional impact from fake profiles'],
      helps: [{ title: 'A safe, private conversation', description: 'Share what is on your mind in a comfortable space.' }, { title: 'Clarity and perspective', description: 'Talk through your concerns and understand your situation.' }, { title: 'Guidance on next steps', description: 'Explore practical suggestions and move forward at your pace.' }],
      steps: [{ title: 'Book your session', description: 'Choose a convenient time for an online conversation.' }, { title: 'Join the session', description: 'Talk to a support person in a safe, secure setting.' }, { title: 'Share and get support', description: 'Discuss your concerns and receive guidance.' }, { title: 'Take positive steps', description: 'Leave with practical ideas for moving forward.' }],
      audience: ['People feeling distressed after an online incident', 'Individuals dealing with online harassment', 'Families supporting someone affected', 'Anyone who needs a non-judgmental conversation'],
      price: '₹599', priceUnit: 'for 5 sessions', inclusions: ['One-on-one online support sessions', 'A safe and non-judgmental space', 'Practical guidance and emotional support', 'Confidential conversations']
    }
  };

  readonly catalog = Object.values(this.servicePages);
  readonly values = [
    { icon: '♧', title: 'People First', text: 'We focus on real people and real problems.' },
    { icon: '⬡', title: 'Integrity', text: 'We follow ethical and legal practices in everything we do.' },
    { icon: '▤', title: 'Awareness', text: 'We believe knowledge helps people stay safe and make better decisions.' },
    { icon: '♡', title: 'Support', text: 'We stand with individuals and communities when they need guidance.' }
  ];
  readonly roles = [
    { icon: '♧', title: 'HR & Community Support', type: 'Volunteer', text: 'Help with community coordination, volunteer onboarding and event support.', skills: 'Communication and people skills', experience: '1–3 years or career-gap candidates', mode: 'Remote / Hybrid (Chennai)' },
    { icon: '</>', title: 'Frontend Developer', type: 'Volunteer', text: 'Support our website and digital initiatives with UI development.', skills: 'HTML, CSS, JavaScript, React or similar', experience: '1–3 years or motivated learners', mode: 'Remote' },
    { icon: '✎', title: 'Content Creator & Awareness Support', type: 'Volunteer', text: 'Create social media content, designs and digital safety resources.', skills: 'Writing, design or video editing', experience: 'Open to all passionate individuals', mode: 'Remote / On-ground' }
  ];
  readonly faqs = [
    { question: 'How long will it take to get a response?', answer: 'We usually reply within one to two working days.' },
    { question: 'What details should I include in my message?', answer: 'A short description of your concern and a safe way to contact you is enough to get started.' },
    { question: 'Is my information kept confidential?', answer: 'Yes. We use your details only to respond to your enquiry and provide support.' },
    { question: 'Can I get guidance for a personal issue?', answer: 'Yes. Our services are designed for individuals and families as well as organisations.' },
    { question: 'Do you provide support outside India?', answer: 'We can provide remote support depending on the service and local requirements.' },
    { question: 'Can businesses or organisations work with you?', answer: 'Yes. Contact us to discuss awareness programs, research and digital safety support.' }
  ];

  constructor(private readonly route: ActivatedRoute) {
    this.service = this.servicePages['cyber-victim-support'];
    this.route.data.subscribe(data => this.setPage(data['page']));
    this.route.paramMap.subscribe(params => this.setService(params.get('service')));
  }

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  sendMessage(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const values = new FormData(form);
    const subject = encodeURIComponent(String(values.get('subject')));
    const body = encodeURIComponent(`Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`);
    window.location.href = `mailto:support@cybaram.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }

  private setPage(page: string): void {
    this.pageKind = page;
  }

  private setService(slug: string | null): void {
    if (slug && this.servicePages[slug]) {
      this.service = this.servicePages[slug];
    }
  }
}