import { ServiceTermsConfig } from '../types.ts';

export const SERVICE_TERMS_MAP: Record<string, ServiceTermsConfig> = {
  'cyber-victim-support': {
    serviceSlug: 'cyber-victim-support',
    serviceTitle: 'Cyber Victim Support',
    consentCheckboxText: 'I understand that CybAram provides independent guidance and education, not financial recovery, law enforcement authority, or legal counsel. I agree to the Cyber Victim Support Terms & Conditions.',
    termsRoute: '/services/cyber-victim-support/terms',
    serviceRoute: '/services/cyber-victim-support',
    summary: 'These Terms & Conditions apply to all inquiries and guidance engagements relating to Cyber Victim Support provided by CybAram.',
    sections: [
      {
        id: 'scope-and-nature',
        title: '1. Scope and Educational Nature of Guidance',
        content: [
          'CybAram provides independent, educational, and procedural guidance to individuals and families who have experienced online fraud, phishing, scams, or extortion.',
          'CybAram does not possess investigative police powers, judicial authority, or emergency dispatch capabilities. Our advisors help you organize evidence, understand banking reporting processes, and prepare submissions for official cybercrime authorities.'
        ]
      },
      {
        id: 'no-recovery-guarantee',
        title: '2. Express Disclaimer on Financial Recovery',
        content: [
          'CybAram makes NO warranty, representation, or guarantee that any lost or stolen funds, cryptocurrency, or digital assets can or will be recovered.',
          'Decisions regarding banking chargebacks, transaction freezes, and fund restitution rest solely with the relevant financial institutions, payment gateways, and investigating law enforcement bodies.',
          'CybAram will never engage in illegal "counter-hacking", retaliatory network intrusion, or fraudulent recovery schemes. Users are warned that any third party guaranteeing recovery of lost funds is likely operating a secondary recovery scam.'
        ]
      },
      {
        id: 'immediate-actions',
        title: '3. Responsibility for Immediate Reporting',
        content: [
          'Engaging CybAram does not replace or postpone your duty to notify your financial institution and statutory authorities immediately.',
          'Victims of financial cyber fraud in India must report the incident immediately to their bank to freeze compromised accounts and dial 1930 (National Cyber Crime Helpline) or lodge an official report at cybercrime.gov.in without delay.'
        ]
      },
      {
        id: 'evidence-and-confidentiality',
        title: '4. Evidence Handling and Sensitive Data Safeguards',
        content: [
          'You agree to provide accurate, unedited copies of messages, headers, and transaction receipts.',
          'You must NEVER share account passwords, OTPs, UPI PINs, ATM PINs, CVV codes, or full credit card numbers with CybAram. CybAram will never request remote access (e.g., AnyDesk, TeamViewer) to your private banking devices.'
        ]
      },
      {
        id: 'liability-limits',
        title: '5. Limitation of Liability',
        content: [
          'To the fullest extent permitted by law, CybAram and its volunteers will not be liable for any losses, statutory deadlines missed, or financial damages arising from reliance on educational guidance or third-party banking outcomes.'
        ]
      }
    ]
  },

  'digital-exposure-assessment': {
    serviceSlug: 'digital-exposure-assessment',
    serviceTitle: 'Digital Exposure Assessment',
    consentCheckboxText: 'I confirm that I am requesting an assessment of my own public digital footprint or that of an entity I am legally authorized to represent. I agree to the Digital Exposure Assessment Terms & Conditions.',
    termsRoute: '/services/digital-exposure-assessment/terms',
    serviceRoute: '/services/digital-exposure-assessment',
    summary: 'These Terms & Conditions govern Digital Exposure Assessment reviews conducted by CybAram.',
    sections: [
      {
        id: 'authorization-representation',
        title: '1. Authorization and Proof of Identity',
        content: [
          'Digital Exposure Assessments are performed strictly upon public identifiers (names, handles, phone numbers, or corporate domains) that you own or are legally authorized to represent.',
          'By submitting an inquiry, you explicitly represent and warrant that you are not seeking information regarding any third party without explicit written consent. CybAram strictly refuses inquiries intended for surveillance, stalking, background checks on prospective dates, or harassment.'
        ]
      },
      {
        id: 'lawful-public-sources',
        title: '2. Lawful Public Sources & Ethical OSINT',
        content: [
          'All research is performed strictly across publicly indexed internet sources, open social media settings, public directories, and ethical open-source intelligence (OSINT) tools.',
          'CybAram never purchases illicit data dumps, breaches private password-protected networks, intercepts electronic communications, or utilizes unauthorized credential stuffing.'
        ]
      },
      {
        id: 'removal-limitations',
        title: '3. Realistic Limits of Digital De-indexing',
        content: [
          'Findings represent an observation of publicly accessible data at a specific moment in time. CybAram does not guarantee 100% removal or complete erasure of personal information from the internet.',
          'Search engines (e.g., Google, Bing) and third-party hosting webmasters maintain independent editorial authority over de-indexing and removal requests. We provide guidance on submitting official removal requests, but outcomes depend on platform policies.'
        ]
      },
      {
        id: 'deliverables-and-confidentiality',
        title: '4. Findings Report & Confidentiality',
        content: [
          'Assessment reports are confidential and delivered solely to the authorized requestor. Reports are intended for personal privacy hardening and may not be redistributed to harm or defame third parties.'
        ]
      }
    ]
  },

  'osint-research': {
    serviceSlug: 'osint-research',
    serviceTitle: 'OSINT Research for Small Businesses',
    consentCheckboxText: 'I confirm that this inquiry is for an eligible business entity and legitimate commercial risk assessment, not for personal surveillance or interpersonal disputes. I agree to the Business OSINT Terms & Conditions.',
    termsRoute: '/services/osint-research/terms',
    serviceRoute: '/services/osint-research',
    summary: 'These Terms & Conditions govern open-source intelligence risk evaluation services provided to eligible commercial entities.',
    sections: [
      {
        id: 'business-eligibility',
        title: '1. Strict Business Eligibility & Commercial Scope',
        content: [
          'This service is available exclusively to registered small businesses, sole proprietorships, startups, and non-profit organizations with a verified commercial, operational, or brand protection need.',
          'Inquiries must relate to corporate attack surfaces, vendor domain typosquatting, brand impersonation, or public supply-chain verification.'
        ]
      },
      {
        id: 'categorical-prohibition',
        title: '2. Absolute Prohibition on Private Individual Investigations',
        content: [
          'CybAram categorically refuses and rejects any request to investigate spouses, partners, romantic interests, friends, family members, or employees’ private off-duty lives.',
          'Any attempt to misrepresent personal surveillance as a commercial inquiry will result in immediate termination of the engagement without refund, and potential notification to relevant regulatory authorities if unlawful activity is suspected.'
        ]
      },
      {
        id: 'ethical-methods',
        title: '3. Passive, Non-Intrusive Public Collection',
        content: [
          'All research utilizes passive open-source methods (DNS analysis, WHOIS historical records, certificate transparency logs, corporate registry filings, and public search engine queries).',
          'We do not perform active network penetration testing, social engineering of personnel, credential harvesting, or physical surveillance.'
        ]
      },
      {
        id: 'advisory-nature',
        title: '4. Informational Risk Advisory Only',
        content: [
          'Our written reports provide contextual observations of public risk indicators. They do not constitute formal legal counsel, statutory financial audits, or absolute guarantees against security breaches.'
        ]
      }
    ]
  },

  'impersonation-monitoring': {
    serviceSlug: 'impersonation-monitoring',
    serviceTitle: 'Impersonation Monitoring',
    consentCheckboxText: 'I understand that CybAram provides evidence assembly and reporting guidance, and does not have administrative takedown authority on third-party platforms. I agree to the Impersonation Monitoring Terms & Conditions.',
    termsRoute: '/services/impersonation-monitoring/terms',
    serviceRoute: '/services/impersonation-monitoring',
    summary: 'These Terms & Conditions govern impersonation documentation and platform escalation guidance provided by CybAram.',
    sections: [
      {
        id: 'ownership-and-authority',
        title: '1. Verified Ownership and Authority',
        content: [
          'You represent that you are the authentic individual, creator, or authorized corporate representative whose identity, name, trademark, or likeness is being deceptively mirrored.',
          'You agree to provide valid identification (such as government photo ID or company registration documents) when required by platforms to authenticate your claim.'
        ]
      },
      {
        id: 'platform-moderation-autonomy',
        title: '2. Autonomous Platform Moderation Authority',
        content: [
          'Third-party platforms (including Meta/Instagram, X, LinkedIn, YouTube, TikTok, Telegram) maintain sole and independent authority over account suspension, removal, or verification.',
          'CybAram does not possess internal moderator access, backdoor deletion tools, or guaranteed takedown turnaround times. CybAram’s role is to construct an airtight evidentiary dossier that maximizes platform compliance compliance.'
        ]
      },
      {
        id: 'no-unauthorized-action',
        title: '3. Lawful Platform Escalation Only',
        content: [
          'We do not use mass reporting bots, automated brigade reporting, or fraudulent intellectual property notices. All takedown submissions comply with platform terms of service and applicable trademark/copyright laws.'
        ]
      },
      {
        id: 'audience-safety',
        title: '4. Public Advisories & Risk Mitigation',
        content: [
          'CybAram provides advisory templates to inform your audience of fraudulent accounts. You remain responsible for publishing official warnings across your verified channels.'
        ]
      }
    ]
  },

  'mental-wellbeing-support': {
    serviceSlug: 'mental-wellbeing-support',
    serviceTitle: 'Mental Well-Being Support',
    consentCheckboxText: 'I understand that CybAram provides non-clinical listening support. I agree to communicate respectfully, respect listener boundaries, and abide by the Mental Well-Being Support Terms & Conditions.',
    termsRoute: '/services/mental-wellbeing-support/terms',
    serviceRoute: '/services/mental-wellbeing-support',
    summary: 'These Terms & Conditions define the non-clinical, empathetic listening nature and mandatory conduct rules for CybAram Mental Well-Being Support.',
    sections: [
      {
        id: 'non-clinical-nature',
        title: '1. Non-Clinical Peer Listening Support Only',
        content: [
          'CybAram Mental Well-Being Support is a non-clinical, empathetic listening service intended to offer a calm, respectful sounding board for everyday distress, loneliness, or anxiety following an online incident.',
          'This service is NOT psychotherapy, psychiatry, clinical psychological counseling, psychiatric evaluation, or medical care. Our listeners are trained peer volunteers and community listeners, not licensed mental health practitioners.'
        ]
      },
      {
        id: 'respectful-communication',
        title: '2. Respectful Communication and Strict Personal Boundaries',
        content: [
          'All conversations must remain respectful, courteous, and relevant to emotional well-being and life stress.',
          'Sexual harassment, sexually explicit conversation, unsolicited sexual innuendo, and unwanted romantic advances toward listeners or staff are strictly prohibited.',
          'This is NOT a dating, matchmaking, romantic, or companionship service. Users must never ask listeners for personal telephone numbers, home addresses, private social media handles, or offline meetings.',
          'Any violation of these boundaries will result in immediate termination of the session, logging of the incident, and permanent barring from all CybAram services.'
        ]
      },
      {
        id: 'emergency-crisis-protocol',
        title: '3. Emergency & Acute Crisis Protocol',
        content: [
          'CybAram is NOT an emergency crisis hotline. If you or someone you know is experiencing acute psychiatric distress, suicidal thoughts, or intentions of self-harm, please contact professional emergency hotlines immediately:',
          '• Tele-MANAS (Government of India): 14416 or 1800-891-4416 (Toll-Free, 24/7)',
          '• Kiran Mental Health Helpline: 1800-599-0019',
          '• National Emergency Number: 112'
        ]
      },
      {
        id: 'confidentiality-limits',
        title: '4. Confidentiality and Mandatory Safeguarding Exceptions',
        content: [
          'Conversations are held in strict confidence within the coordination team. However, absolute legal confidentiality cannot be maintained in scenarios involving imminent threats to human life, self-harm, or child abuse safeguarding disclosures required by law.'
        ]
      }
    ]
  },

  'digital-safety-net': {
    serviceSlug: 'digital-safety-net',
    serviceTitle: 'Digital Safety Net',
    consentCheckboxText: 'I understand that CybAram provides educational risk guidance and is not an insurance broker, agent, or underwriter. I agree to the Digital Safety Net Terms & Conditions.',
    termsRoute: '/services/digital-safety-net/terms',
    serviceRoute: '/services/digital-safety-net',
    summary: 'These Terms & Conditions govern the Digital Safety Net cyber-risk awareness and insurance-guidance service offered by CybAram.',
    sections: [
      {
        id: 'not-an-insurer',
        title: '1. CybAram is NOT an Insurance Company, Broker, or Agent',
        content: [
          'CybAram is an independent cybersecurity educational and advisory initiative. CybAram is NOT an insurance company, insurance broker, corporate agent, or insurance intermediary under the Insurance Regulatory and Development Authority of India (IRDAI) or any other financial regulatory regime.',
          'CybAram does NOT sell, solicit, negotiate, underwrite, or bind insurance policies. CybAram does NOT collect insurance premiums, issue certificates of insurance, or receive sales commissions or referral kickbacks from insurance carriers.'
        ]
      },
      {
        id: 'educational-scope',
        title: '2. Educational Risk Guidance and Terminology Clarity',
        content: [
          'The Digital Safety Net service provides objective, educational explanations of cyber risk categories (ransomware, social engineering, funds transfer fraud, identity theft) and standard insurance terminology (first-party loss, third-party liability, cyber extortion clauses, deductibles, and common exclusion triggers).',
          'Guidance is designed to help individuals, families, and small business owners understand their exposure, identify prerequisite cybersecurity hygiene measures (such as multi-factor authentication and regular backups), and ask informed questions when speaking directly with licensed insurance brokers.'
        ]
      },
      {
        id: 'no-guarantee-claims',
        title: '3. No Guarantee of Underwriting Approval or Claim Settlement',
        content: [
          'CybAram cannot guarantee that any insurance underwriter will accept an application, offer specific premium rates, or approve any claim.',
          'Insurance policy coverage, conditions, exclusions, and claim determinations remain entirely subject to the specific policy wording issued by the licensed insurer and the factual circumstances of any claimed incident.'
        ]
      },
      {
        id: 'no-fictitious-partners',
        title: '4. Transparent Independence — No Fictitious Partners or Endorsements',
        content: [
          'CybAram does not endorse, recommend, or favor any particular insurance provider. We do not invent fake partner insurance companies, false pricing tiers, or fictitious regulatory certifications.',
          'Any reference to insurance concepts is purely educational. Users must conduct their own independent due diligence with licensed insurance providers before purchasing any policy.'
        ]
      },
      {
        id: 'limitation-of-liability',
        title: '5. Limitation of Liability for Financial & Policy Decisions',
        content: [
          'CybAram accepts no liability for insurance purchasing decisions, coverage gaps, denied claims, underinsured losses, or policy disputes between you and any third-party insurance carrier.'
        ]
      }
    ]
  }
};
