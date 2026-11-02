import { ServiceItem, FaqItem, ContributionArea } from '../types.ts';

export const SERVICES_DATA: Record<string, ServiceItem> = {
  'cyber-victim-support': {
    id: 'cyber-victim-support',
    slug: 'cyber-victim-support',
    title: 'Cyber Victim Support',
    shortDesc: 'Calm, practical guidance after scams, suspicious messages, or online financial deception.',
    badge: 'CYBER VICTIM SUPPORT',
    heroHeadline: 'You don’t have to figure it out alone.',
    heroSubheadline: 'When something goes wrong online, knowing where to turn can feel overwhelming. We help you slow down, preserve critical evidence safely, and understand your immediate protective and reporting options.',
    image: '/assets/images/cyber_support_man_1792744888948.jpg',
    imageAlt: 'An Indian man sitting at a desk calmly documenting incident details in a notebook beside his phone',
    whoIsItFor: [
      'Individuals who suspect they have transferred money to a fraudulent account or scammer.',
      'Anyone who received deceptive messages, lottery links, or unverified job offer scams.',
      'People targeted by extortion, blackmail, or threatening online communications.',
      'Individuals unsure how to safely document chat logs, transaction IDs, and headers.',
      'Those seeking clear direction on contacting banks and filing reports on official cybercrime portals.'
    ],
    scopeDeliverables: [
      { num: '01', text: 'Incident Triage & Risk Assessment: A structured, calm review of what occurred to identify immediate exposure points.' },
      { num: '02', text: 'Evidence Preservation Guidance: Clear instructions on safely capturing screenshots, message headers, and transaction reference numbers.' },
      { num: '03', text: 'Banking & Financial Safeguards: Guidance on emergency bank contact, card freezing, and reporting unauthorized debit transactions.' },
      { num: '04', text: 'Official Portal Roadmap: Step-by-step preparation for filing reports through national cybercrime reporting portals (such as 1930 / cybercrime.gov.in).' },
      { num: '05', text: 'Credential Hardening: Practical account-security recommendations to prevent further unauthorized access or account takeover.' }
    ],
    processSteps: [
      { step: '01', text: 'Initial Contact: Submit a confidential summary of what happened via our secure form. Never share passwords, PINs, or OTPs.' },
      { step: '02', text: 'Evidence Organization: We guide you through assembling chat logs, transaction IDs, and timeline notes into an orderly record.' },
      { step: '03', text: 'Protective Measures: Execute immediate account containment—freezing cards, changing master passwords, and enabling hardware-backed 2FA.' },
      { step: '04', text: 'Official Escalation: Submit organized documentation directly to your financial institution and official law enforcement portals.' }
    ],
    goodToKnow: [
      'Chronological Timeline: Note down approximate dates, times, and phone numbers or handles used by the suspected party.',
      'Original Files: Keep original screenshots and SMS/WhatsApp messages intact; do not edit or crop them.',
      'Transaction References: Note UTR numbers, UPI reference IDs, or bank dispute numbers.',
      'Absolute Privacy Rule: Never share passwords, UPI PINs, ATM PINs, OTP codes, or remote-desktop access with anyone, including CybAram.'
    ],
    pricingCard: {
      planName: 'Initial Guidance & Support Enquiry',
      headline: 'Contact us for pricing',
      pricingNote: 'Initial assessment and structured next-step roadmap — agreed before engagement',
      scope: 'For individuals, families, and seniors who have encountered online scams, suspicious payment requests, or digital harassment.',
      deliverables: 'One-on-one incident assessment, structured evidence-preservation checklist, official reporting guidance, and follow-up account security recommendations.',
      exclusions: 'No guaranteed recovery of lost funds, no private hacking or counter-attacks, no police authority, and no formal legal representation.'
    },
    limitations: 'CybAram is an independent educational and guidance initiative. We are not a law enforcement agency, bank, or emergency dispatch service. Financial recovery decisions rest entirely with banks and investigating authorities. Do not delay notifying your bank or calling the official 1930 cyber fraud helpline.',
    faqs: [
      {
        question: 'What should I do immediately after falling for an online scam?',
        answer: 'First, stop all contact with the suspected scammer. If banking or payment details were involved, immediately call your bank via their official number on your card to block the card, UPI ID, or netbanking account. Then dial the National Cyber Crime Helpline at 1930 (in India) or visit cybercrime.gov.in to register an incident ticket within the golden hour.'
      },
      {
        question: 'Can CybAram recover my stolen funds?',
        answer: 'No. No legitimate cybersecurity organization can guarantee the recovery of stolen money. Fraudulent funds are rapidly disbursed across multiple mule accounts. Fund retrieval is governed strictly by banking dispute mechanisms and police freezing orders. We help you prepare the precise documentation required by banks and police.'
      },
      {
        question: 'Will CybAram file the police report for me?',
        answer: 'No. Under legal guidelines, official cybercrime complaints must be lodged directly by the victim or their legal guardian. We guide you through the exact information, evidence formatting, and portal steps needed to file effectively.'
      },
      {
        question: 'What kind of evidence is most helpful for investigation?',
        answer: 'Unedited screenshots showing the sender’s phone number or username, bank statements highlighting the transaction reference (UTR) numbers, SMS transaction alerts, and links or APK files shared by the fraudster.'
      },
      {
        question: 'What information should I never share with anyone?',
        answer: 'Never share login passwords, One-Time Passwords (OTPs), UPI PINs, ATM PINs, CVV codes, or grant AnyDesk/TeamViewer remote access. CybAram staff will never ask for your credentials.'
      }
    ]
  },

  'digital-exposure-assessment': {
    id: 'digital-exposure-assessment',
    slug: 'digital-exposure-assessment',
    title: 'Digital Exposure Assessment',
    shortDesc: 'Understand your publicly accessible digital footprint across search engines and platforms to improve personal privacy.',
    badge: 'DIGITAL EXPOSURE ASSESSMENT',
    heroHeadline: 'Understand what information about you is exposed online.',
    heroSubheadline: 'Old profiles, public directories, and overlooked privacy settings can leave your personal phone number, home address, and identity details visible to anyone. We help you audit and reduce that exposure.',
    image: '/assets/images/digital_privacy_review_1792744888804.jpg',
    imageAlt: 'An Indian woman reviewing account privacy settings and data visibility on a laptop in a sunlit room',
    whoIsItFor: [
      'Individuals reviewing personal privacy, home address visibility, or personal phone number exposure.',
      'Professionals, educators, and doctors whose private contact details have appeared in public databases.',
      'People concerned about data broker aggregators, old forums, or exposed email addresses.',
      'Anyone seeking proactive, structured privacy hardening without invasive tools or account access.'
    ],
    scopeDeliverables: [
      { num: '01', text: 'Surface Web Footprint Audit: Comprehensive review of publicly accessible search engine results associated with provided identifiers.' },
      { num: '02', text: 'Public Directory & Profile Review: Inspection of public social media handles, forum registrations, and open business registry listings.' },
      { num: '03', text: 'Contact Information Exposure: Identification of publicly indexed personal mobile numbers, residential addresses, and family references.' },
      { num: '04', text: 'Social Engineering Vulnerability Map: Summary of public personal information that could be leveraged for targeted phishing or impersonation.' },
      { num: '05', text: 'Remediation Roadmap: Actionable, step-by-step instructions for adjusting platform privacy toggles, requesting search removals, and opting out of directories.' }
    ],
    processSteps: [
      { step: '01', text: 'Scope Definition: You supply only the specific public identifiers (e.g. name, public email, business handle) you wish to assess.' },
      { step: '02', text: 'Lawful Open Research: We systematically query open public web indexes, public registries, and platform settings using ethical OSINT methods.' },
      { step: '03', text: 'Findings Compilation: We analyze findings and compile a structured, plain-language digital exposure report.' },
      { step: '04', text: 'Remediation Walkthrough: We walk you through practical de-indexing requests, privacy lockdowns, and habit adjustments.' }
    ],
    goodToKnow: [
      'Lawful Public Sources Only: Research is conducted strictly across publicly accessible web pages. We never access private accounts or buy illegal breach databases.',
      'Authorization Required: We only assess identifiers belonging directly to you or your registered organization.',
      'Ongoing Digital Hygiene: An assessment reflects a moment in time; privacy protection is an ongoing habit.',
      'Realistic Removal Limits: Public web engines can be requested to de-index results, but information hosted on external websites requires direct webmaster requests.'
    ],
    pricingCard: {
      planName: 'Structured Exposure Assessment',
      headline: 'Contact us for pricing',
      pricingNote: 'Custom quote per individual assessment based on agreed identifier scope',
      scope: 'For individuals seeking an objective review of their personal digital footprint, data exposure, and privacy risks.',
      deliverables: 'Written exposure findings report, risk summary, de-indexing request guides, and platform privacy configuration checklists.',
      exclusions: 'No illegal data scraping, no access to password-protected databases, no guarantee of 100% internet erasure, and no ongoing automated background surveillance.'
    },
    limitations: 'We do not access private accounts, bypass security controls, obtain confidential records unlawfully, or conduct stalking or relationship investigations. Total erasure from the entire internet cannot be guaranteed by any legitimate provider.',
    faqs: [
      {
        question: 'What information do I need to provide for an assessment?',
        answer: 'You only provide the public identifiers you want us to review—such as your full name, common usernames, public email addresses, or business URLs. We never ask for passwords or account access.'
      },
      {
        question: 'Do you use hacking techniques or buy leaked database dumps?',
        answer: 'No. CybAram strictly adheres to legal, ethical open-source intelligence (OSINT) standards. We only examine publicly available web pages and search engine indexes.'
      },
      {
        question: 'Can you completely remove my name from Google search results?',
        answer: 'Google provides official removal forms for sensitive personal information (such as personal phone numbers, home addresses, or bank details). We guide you through preparing and submitting these requests, but final de-indexing approval is decided by Google.'
      },
      {
        question: 'How long does a digital exposure assessment take?',
        answer: 'Typically between 3 to 7 business days depending on the agreed scope and number of identifiers examined.'
      },
      {
        question: 'Will this assessment protect me from future scams?',
        answer: 'An assessment minimizes the personal data scammers can gather about you, making targeted social engineering much harder. Combined with strong passwords and 2FA, it significantly reduces your digital risk profile.'
      }
    ]
  },

  'osint-research': {
    id: 'osint-research',
    slug: 'osint-research',
    title: 'OSINT Research for Small Businesses',
    shortDesc: 'Lawful public-source risk evaluation for eligible businesses, domain spoofing analysis, and brand exposure checks.',
    badge: 'BUSINESS-FOCUSED PUBLIC-SOURCE RESEARCH',
    heroHeadline: 'Make better-informed business decisions with responsible digital research.',
    heroSubheadline: 'Small businesses often face spoofed vendor domains, brand impersonation, and unverified digital partners. We help eligible businesses evaluate legitimate online risk indicators using open, public information.',
    image: '/assets/images/osint_small_business_1792741337713.jpg',
    imageAlt: 'An Indian small-business founder reviewing legitimate public documents and research on a laptop in an office',
    whoIsItFor: [
      'Small enterprises and startups verifying public credentials and domain integrity of new vendors.',
      'Boutiques and local businesses concerned about fraudulent lookalike domain registrations.',
      'Founders assessing their public corporate digital attack surface and exposed corporate documents.',
      'Organizations needing legitimate, ethical public-source intelligence before commercial agreements.'
    ],
    scopeDeliverables: [
      { num: '01', text: 'Domain & DNS Security Review: Analysis of lookalike domain registrations (typosquatting) and SPF/DKIM public email authentication records.' },
      { num: '02', text: 'Public Brand Asset Audit: Inspection of public web indexes for unauthorized use of company trademarks, logos, or executive names.' },
      { num: '03', text: 'Exposed Corporate Data Checks: Review of publicly indexed company documents, metadata leaks, and open cloud storage links.' },
      { num: '04', text: 'Counterparty Public Verification: Open-source corroboration of prospective business partners using corporate registries and public regulatory records.' },
      { num: '05', text: 'Executive Risk Assessment: Practical recommendations to safeguard business leadership from targeted whaling and invoice-fraud lures.' }
    ],
    processSteps: [
      { step: '01', text: 'Commercial Requirement Scoping: We establish the legitimate business objective, verify your corporate authority, and confirm scope eligibility.' },
      { step: '02', text: 'Lawful Public Collection: Utilizing ethical OSINT tools, domain databases, and public web archives, we collect relevant open-source information.' },
      { step: '03', text: 'Analysis & Cross-Verification: We filter out noise, verify sources, and evaluate genuine business risk indicators.' },
      { step: '04', text: 'Executive Briefing & Action Plan: Delivery of an actionable, written intelligence report with concrete defensive steps.' }
    ],
    goodToKnow: [
      'Strict Business Eligibility: This service is exclusively available to verified business entities with legitimate commercial, operational, or legal needs.',
      'Zero Private Investigations: We categorically decline any requests to investigate spouses, partners, romantic interests, employees’ private lives, or personal disputes.',
      'Ethical Research Standards: No unauthorized network intrusion, no credential sniffing, and no purchasing illicit data breach records.',
      'Contextual Observations: Findings represent public data observed at a specific time and do not constitute legal advice or formal financial audit guarantees.'
    ],
    pricingCard: {
      planName: 'Commercial OSINT Engagement',
      headline: 'Contact us for pricing',
      pricingNote: 'Custom quote tailored to corporate research requirements and domain count',
      scope: 'For eligible small businesses, startups, and community organizations seeking lawful public-source digital risk evaluation.',
      deliverables: 'Written risk intelligence report, domain spoofing analysis, exposed metadata summary, and actionable mitigation guidance.',
      exclusions: 'No penetration testing, no private database hacking, no commercial surveillance, and no personal or marital investigations.'
    },
    limitations: 'This service is intended exclusively for eligible small businesses and organizations with legitimate business-related research requirements. It is strictly not available for investigating private individuals, spouses, partners, friends, or personal relationships.',
    faqs: [
      {
        question: 'Who qualifies for this service?',
        answer: 'Registered small businesses, startups, retail merchants, professional partnerships, and registered non-profits seeking to protect their commercial reputation or verify digital supply chain risks.'
      },
      {
        question: 'Can you investigate an individual employee’s personal social life?',
        answer: 'No. We strictly refuse any inquiries into employees’ private interpersonal activities, relationships, or off-duty conduct. Our work is confined strictly to public corporate assets, domain integrity, and organizational fraud risks.'
      },
      {
        question: 'How do you detect spoofed lookalike domains?',
        answer: 'We analyze public domain registration feeds, DNS records, and certificate transparency logs to identify domains that imitate your brand with slight character substitutions (e.g. replacing "i" with "l").'
      },
      {
        question: 'What is the outcome of an engagement?',
        answer: 'You receive a confidential, executive-ready written report detailing identified threats, evidentiary screenshots, domain details, and actionable defensive measures.'
      },
      {
        question: 'Do you perform active penetration testing or hacking?',
        answer: 'No. OSINT is passive, non-intrusive public-source analysis. We never scan private networks without authorization or attempt to exploit software vulnerabilities.'
      }
    ]
  },

  'impersonation-monitoring': {
    id: 'impersonation-monitoring',
    slug: 'impersonation-monitoring',
    title: 'Impersonation Monitoring',
    shortDesc: 'Structured guidance on documenting fake profiles, creator clones, and executing platform takedowns.',
    badge: 'IMPERSONATION MONITORING',
    heroHeadline: 'Help protect your digital identity from online impersonation.',
    heroSubheadline: 'Fake social profiles, cloned business pages, and deceptive accounts mislead your followers and harm your reputation. We help creators, professionals, and small businesses identify, document, and report impersonation through official channels.',
    image: '/assets/images/impersonation_check_1792741338258.jpg',
    imageAlt: 'An Indian creator and professional reviewing tablet screens to identify an impersonation clone profile',
    whoIsItFor: [
      'Creators, educators, and writers whose names, photos, or content are being mirrored by fraudulent accounts.',
      'Small business owners discovering fake customer-support numbers or cloned sales pages on social platforms.',
      'Professionals and public figures targeted by unauthorized duplicate profiles soliciting money from followers.',
      'Authorized managers and team members seeking a structured protocol to address impersonator channels.'
    ],
    scopeDeliverables: [
      { num: '01', text: 'Impersonation Audit: Systematic review of reported fake profiles, handles, and associated deceptive content across target platforms.' },
      { num: '02', text: 'Evidentiary Dossier Preparation: Assembly of comparison screenshots, profile URLs, creation timestamps, and proof of authentic identity.' },
      { num: '03', text: 'Platform-Specific Reporting Pathways: Guidance on exact verification and impersonation complaint flows for Meta, Instagram, X, LinkedIn, and YouTube.' },
      { num: '04', text: 'Audience Safety Advisory Template: Clear, calm copy for publishing warnings to your genuine followers without amplifying the scammer.' },
      { num: '05', text: 'Verification Strategy Roadmap: Guidance on establishing verified badges, consistent canonical links, and search indexing signals.' }
    ],
    processSteps: [
      { step: '01', text: 'Intake & Verification: You supply links to your authentic public profiles and the suspected impersonation handles.' },
      { step: '02', text: 'Evidence Documentation: We document the deceptive elements, unmasking differences in handles, bio details, and follower solicitations.' },
      { step: '03', text: 'Report Assembly: We compile a standardized evidence package meeting the specific platform moderation criteria.' },
      { step: '04', text: 'Official Platform Submission: You or your authorized representative submit the evidence package via verified platform reporting forms.' }
    ],
    goodToKnow: [
      'Platform Moderation Authority: Final decisions to delete or suspend accounts rest entirely with the hosting social media platform.',
      'Do Not Engage: Never message the impersonator directly or click links in their bio; direct engagement often triggers defensive profile renaming.',
      'Follower Safety: Inform your community via your genuine channels to never send money or credentials to secondary handles.',
      'Verified Identity: You will need government-issued photo ID (matching the profile name) when submitting official impersonation claims to platforms.'
    ],
    pricingCard: {
      planName: 'Impersonation Support Engagement',
      headline: 'Contact us for pricing',
      pricingNote: 'Engagement fee based on number of platforms and handles under review',
      scope: 'For public figures, influencers, creators, and business owners dealing with active clone profiles or fraudulent accounts.',
      deliverables: 'Evidence compilation package, platform-specific submission guide, audience advisory drafts, and profile verification roadmap.',
      exclusions: 'No guaranteed instant takedown, no unauthorized account deletion, no insider platform moderation access, and no unconfirmed automated bots.'
    },
    limitations: 'Social media platforms maintain autonomous moderation teams. CybAram does not possess administrative deletion rights on third-party platforms. We cannot guarantee takedown speed or moderation decisions, but we ensure your report is structured with maximum evidentiary clarity.',
    faqs: [
      {
        question: 'Can CybAram immediately delete a fake account for me?',
        answer: 'No third party has the authority to directly delete an account on Meta, X, LinkedIn, or Google. Only the platform’s internal moderation staff can remove accounts. We help you assemble undeniable proof so platform moderators can verify your ownership and act quickly.'
      },
      {
        question: 'Why do platforms often reject impersonation reports at first?',
        answer: 'Automated platform filters often fail to distinguish parody from genuine fraud unless clear evidence of commercial solicitation, trademark infringement, or deceptive identity duplication is provided in the required format.'
      },
      {
        question: 'What should I do if the impersonator is messaging my followers for money?',
        answer: 'Immediately post a clear advisory on your verified story or main feed stating that you have only one official account and never solicit funds or investments via DM. Document screenshots of followers receiving those solicitations to include in your platform report.'
      },
      {
        question: 'Do I need a verified blue badge to report impersonation?',
        answer: 'No. Any person or business can report impersonation on major platforms by providing proof of identity, such as a government ID or business registration certificate.'
      },
      {
        question: 'Can you help if the impersonator is using my copyrighted photos?',
        answer: 'Yes. In addition to impersonation claims, we can guide you on filing formal Digital Millennium Copyright Act (DMCA) or Intellectual Property infringement notices, which platforms often process with higher legal priority.'
      }
    ]
  },

  'mental-wellbeing-support': {
    id: 'mental-wellbeing-support',
    slug: 'mental-wellbeing-support',
    title: 'Mental Well-Being Support',
    shortDesc: 'A warm, confidential, non-clinical space to be heard when you feel lonely, overwhelmed, or carry worries you cannot share.',
    badge: 'HUMAN-CENTERED LISTENING SUPPORT',
    heroHeadline: 'Sometimes, you just need someone to listen.',
    heroSubheadline: 'Life can feel heavy sometimes. You might be dealing with loneliness, carrying worries you have not shared, going through a difficult day, or recovering from an online incident. CybAram offers a respectful, non-judgmental space where you can talk and feel heard.',
    image: '/assets/images/wellbeing_listening_1792744888958.jpg',
    imageAlt: 'Two Indian adults having a warm, calm, non-clinical conversation over tea in a serene room',
    whoIsItFor: [
      'Anyone experiencing loneliness, isolation, or feeling disconnected from those around them.',
      'People going through a difficult, anxious day who need a patient, grounded conversational partner.',
      'Individuals carrying personal or family worries they feel hesitant or embarrassed to share with friends.',
      'Victims of online scams, cyberbullying, impersonation, or harassment who feel judged or ashamed.',
      'Anyone who simply needs a respectful, confidential conversation without pressure to find instant answers.'
    ],
    scopeDeliverables: [
      { num: '01', text: 'Empathetic Peer Listening: A patient, dedicated conversation focused on hearing you out without interruption, critique, or advice-giving.' },
      { num: '02', text: 'Emotional Grounding & Relief: A non-judgmental atmosphere that reduces immediate isolation, anxiety, and self-blame.' },
      { num: '03', text: 'Priority Sorting: When you feel ready, calm assistance sorting through messy thoughts and separating urgent needs from background noise.' },
      { num: '04', text: 'Gentle Practical Direction: Plain-language, low-pressure guidance on sensible next steps if you are also navigating a practical online dilemma.' },
      { num: '05', text: 'Professional Signposting: Compassionate connections to verified professional counselors, therapists, or recognized helplines if deeper clinical support is desired.' }
    ],
    processSteps: [
      { step: '01', text: 'Confidential Request: Fill out our simple, quiet contact form indicating you would like someone to listen. Share only what you are comfortable sharing.' },
      { step: '02', text: 'Scheduling a Conversation: We coordinate a calm, agreed time for a phone or audio call with a trained peer listener.' },
      { step: '03', text: 'A Space to Speak: Take your time. Talk about your day, your worries, an online experience, or how you are feeling without any expectation to explain everything.' },
      { step: '04', text: 'Calm Reflection: Conclude the conversation feeling grounded, heard, and with optional signposting if you wish to explore further support.' }
    ],
    goodToKnow: [
      'No Pressure to Disclose: You never have to share specific details, names, or financial numbers if you prefer not to.',
      'Not Just for Cyber Incidents: This listening support is open to anyone feeling lonely, overwhelmed, or burdened by everyday difficulties.',
      'Non-Clinical Peer Support: Our listeners provide genuine human empathy and patient presence. They are not licensed psychotherapists or psychiatrists.',
      'Emergency Safeguards: If you are experiencing thoughts of self-harm, a medical emergency, or an acute mental health crisis, please reach out to emergency helplines immediately.'
    ],
    pricingCard: {
      planName: 'Listening Support Conversation',
      headline: 'Contact us for pricing',
      pricingNote: 'Free community peer conversations and subsidized sessions based on active volunteer availability',
      scope: 'For any individual feeling lonely, unheard, stressed by life circumstances, or shaken by an online incident.',
      deliverables: 'One-on-one attentive audio listening session, zero-judgment space, emotional decompression, and trusted resource signposting.',
      exclusions: 'No psychotherapy, clinical diagnosis, psychiatric medication, crisis intervention, or emergency medical treatment.'
    },
    limitations: 'Mental Well-Being Support is non-clinical listening and emotional grounding support. It is not psychotherapy, clinical counselling, psychiatric diagnosis, medical treatment, or emergency crisis intervention. If you are in immediate emotional crisis or physical danger, please contact Tele-MANAS (14416 / 1800-891-4416 in India), Kiran (1800-599-0019), or local emergency services (112) immediately.',
    faqs: [
      {
        question: 'Do I have to be a victim of a cybercrime to use this service?',
        answer: 'No. While CybAram originated around digital safety, our Mental Well-Being Support is open to anyone who feels lonely, isolated, overwhelmed by life, or simply needs someone to listen without judgment. You do not need to have suffered a cyber incident to talk to us.'
      },
      {
        question: 'Is this therapy or clinical counseling?',
        answer: 'No. This is non-clinical peer listening support. Our listeners offer genuine human presence, patience, and empathetic conversation to help you feel heard and grounded. We do not provide clinical therapy, medical evaluations, or psychiatric treatment.'
      },
      {
        question: 'Is our conversation completely confidential and anonymous?',
        answer: 'We treat all conversations with deep personal respect and confidentiality. However, we cannot legally promise absolute anonymity or exemption from law in rare situations involving immediate threats of harm to life or child safety safeguards.'
      },
      {
        question: 'Why do people feel so much shame after online incidents?',
        answer: 'Online scams and digital harassment are designed to manipulate human psychology—trust, fear, urgency, and hope. Society often unjustly blames victims, creating intense isolation. Speaking to an understanding person who knows how these psychological manipulations work helps dismantle that self-blame.'
      },
      {
        question: 'What should I do if I or someone I know is in immediate crisis?',
        answer: 'If you or someone you know is experiencing acute crisis or thoughts of self-harm, please reach out immediately to Tele-MANAS at 14416 (toll-free, 24/7 in India) or call 112. Do not wait for a non-emergency peer response in a life-threatening crisis.'
      }
    ]
  },

  'digital-safety-net': {
    id: 'digital-safety-net',
    slug: 'digital-safety-net',
    title: 'Digital Safety Net',
    shortDesc: 'Cyber-risk protection awareness, policy clarity, and practical guidance before purchasing cyber insurance.',
    badge: 'DIGITAL RISK AWARENESS & INSURANCE GUIDANCE',
    heroHeadline: 'Prepare for the unexpected digital risk.',
    heroSubheadline: 'Explore digital-risk protection awareness and learn what to check when considering insurance options.',
    image: '/src/assets/images/service_digital_safety_net_1792753239595.jpg',
    imageAlt: 'An Indian small-business founder and family reviewing a structured digital protection and cyber risk checklist on a tablet',
    whoIsItFor: [
      'Individuals and families seeking clarity on personal cyber insurance policies, identity theft protections, and coverage terms.',
      'Small business owners exploring cyber liability insurance to protect against extortion, phishing losses, or business email compromise.',
      'Creators, freelancers, and independent consultants evaluating digital exposure and contractual insurance prerequisites.',
      'Anyone looking for neutral, objective risk education without commercial broker bias, policy sales pressure, or hidden commissions.'
    ],
    scopeDeliverables: [
      { num: '01', text: 'Digital Risk Profile Review: Clear assessment of personal or small-business threat exposure (ransomware, social engineering, funds transfer fraud).' },
      { num: '02', text: 'Policy Clause & Exclusions Decryption: Plain-English explanations of standard cyber insurance terminology (first-party loss, third-party liability, cyber extortion, social engineering endorsements).' },
      { num: '03', text: 'Underwriting Hygiene Preparation: Guidance on essential security controls insurers require (2FA, offline backups, SPF/DKIM/DMARC) before policy approval.' },
      { num: '04', text: 'Claim Readiness Protocol: Checklists for documenting incidents, forensic timelines, and bank communications required by claims adjusters.' },
      { num: '05', text: 'Independent Comparison Checklist: Structured set of objective evaluation criteria to bring to licensed brokers and underwriters.' }
    ],
    processSteps: [
      { step: '01', text: 'Risk Intake: Submit a high-level summary of your digital assets, systems, and concerns without revealing sensitive secrets or passwords.' },
      { step: '02', text: 'Threat & Exposure Review: We analyze your potential vulnerability surfaces and identify high-risk cyber scenarios applicable to your profile.' },
      { step: '03', text: 'Coverage Concepts Walkthrough: We walk through relevant policy types, deductible considerations, and common insurer exclusion traps.' },
      { step: '04', text: 'Preparedness Roadmap: You receive an actionable checklist of technical safeguards and specific questions for licensed insurance providers.' }
    ],
    goodToKnow: [
      'Independent Advisory Only: CybAram is NOT an insurance company, broker, agent, or corporate intermediary.',
      'No Policy Sales or Underwriting: We do not sell insurance, quote binding premiums, underwrite risk, receive sales commissions, or process claims.',
      'No Invented Partners or Endorsements: We do not endorse any specific insurer. We empower you to make informed decisions with any licensed provider.',
      'Pre-requisite Security Controls: Insurance policies rarely pay out if basic security hygiene (like multi-factor authentication) was neglected.'
    ],
    pricingCard: {
      planName: 'Digital Safety Net Guidance Enquiry',
      headline: 'Contact us for pricing',
      pricingNote: 'Independent educational risk assessment and policy guidance — agreed prior to engagement',
      scope: 'For individuals, families, and small businesses seeking unbiased cyber risk awareness and insurance education.',
      deliverables: 'Written risk profile evaluation, policy terminology translation guide, insurer readiness checklist, and tailored broker questioning guide.',
      exclusions: 'No insurance policy issuance, no broker intermediation, no binding premium quotes, and no claims adjustment or settlement.'
    },
    limitations: 'CybAram is strictly an independent educational and cybersecurity advisory initiative. CybAram is not an insurance company, insurance broker, insurance agent, or third-party claims administrator. We do not underwrite risk, issue policies, collect premiums, or guarantee claim payouts. All insurance purchases must be made through licensed brokers or insurance companies.',
    faqs: [
      {
        question: 'Does CybAram sell cyber insurance policies or provide quotes?',
        answer: 'No. CybAram does not sell insurance policies, underwrite risk, issue binders, or receive sales commissions. We are an independent educational and guidance initiative helping you evaluate your digital risks and understand coverage concepts before you talk to licensed insurance brokers.'
      },
      {
        question: 'What does a cyber insurance policy typically cover for an individual or family?',
        answer: 'Personal cyber insurance policies often cover direct financial losses from unauthorized electronic fund transfers (phishing/social engineering), identity theft restoration costs, cyber extortion response expenses, and cyberbullying psychological counseling or legal costs, subject to policy deductibles and caps.'
      },
      {
        question: 'Why do insurance companies reject cyber claims or deny coverage?',
        answer: 'Common reasons include failure to maintain mandated security hygiene (such as lack of multi-factor authentication on administrative accounts or unpatched software), delayed incident notification beyond policy time limits, or relying on unverified verbal payment instructions that violate policy warranties.'
      },
      {
        question: 'How does CybAram help small businesses prepare for cyber insurance underwriting?',
        answer: 'Underwriters require detailed questionnaires regarding email authentication (SPF, DKIM, DMARC), regular immutable backups, endpoint protection, and incident response readiness. We help you audit and implement these baseline safeguards so you qualify for favorable terms and minimize coverage exclusions.'
      },
      {
        question: 'Does having cyber insurance mean I can ignore cybersecurity practices?',
        answer: 'No. Cyber insurance is a financial safety net of last resort, not a substitute for proactive security controls. Policies require insured parties to exercise reasonable care, and many policies stipulate that negligence in basic security voids coverage.'
      }
    ]
  }
};

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'Can you help me recover money lost in a scam?',
    answer: 'No. CybAram cannot guarantee or directly execute financial recovery. Scammers frequently operate through illicit mule networks. Recovery decisions rest solely with financial institutions and law enforcement. We help guide you on how to report swiftly to the proper banking and cybercrime channels.'
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Yes. We treat all conversations and enquiry details with strict confidentiality. We do not sell or share your data with advertisers, and we never ask for passwords, OTPs, or private credentials.'
  },
  {
    question: 'Who can use CybAram’s services?',
    answer: 'Our services are tailored for individuals, families, people affected by online scams, creators, anyone feeling overwhelmed or lonely, and eligible small businesses seeking practical, understandable guidance.'
  },
  {
    question: 'How do I get started?',
    answer: 'Reach out to us through our contact form. Share a brief description of your concern without any passwords or banking codes. We will guide you through relevant options and realistic next steps.'
  }
];

export const SERVICES_PAGE_FAQS: FaqItem[] = [
  {
    question: 'Does CybAram conduct hacking or unauthorized account access?',
    answer: 'No. CybAram strictly adheres to legal and ethical standards. We never engage in hacking, credential harvesting, password cracking, or unauthorized surveillance.'
  },
  {
    question: 'How does Digital Exposure Assessment work?',
    answer: 'We review publicly accessible information across search engines, open registries, and public social profiles to identify data exposure points and advise you on practical ways to tighten privacy.'
  },
  {
    question: 'Is OSINT research available for private personal investigations?',
    answer: 'No. OSINT research is restricted strictly to eligible small businesses with legitimate commercial or risk-assessment purposes. We do not investigate spouses, partners, or private interpersonal relationships.'
  },
  {
    question: 'Can CybAram guarantee removal of impersonation profiles?',
    answer: 'No. Moderation decisions remain entirely under the control of social platforms. We guide you on assembling evidence and submitting formal reports through platform channels.'
  },
  {
    question: 'How do I enquire about pricing?',
    answer: 'All services are listed as "Contact us for pricing". Scope, deliverables, and fees (if applicable) are agreed upon prior to initiating any engagement.'
  }
];

export interface SocialLinkConfig {
  name: string;
  platform: 'instagram' | 'facebook' | 'youtube' | 'x';
  href: string;
  isPendingConfirmation: boolean;
  ariaLabel: string;
}

export const OFFICIAL_SOCIAL_LINKS: SocialLinkConfig[] = [
  {
    name: 'Instagram',
    platform: 'instagram',
    href: '#',
    isPendingConfirmation: true,
    ariaLabel: 'CybAram on Instagram (official profile URL pending confirmation)'
  },
  {
    name: 'Facebook',
    platform: 'facebook',
    href: '#',
    isPendingConfirmation: true,
    ariaLabel: 'CybAram on Facebook (official profile URL pending confirmation)'
  },
  {
    name: 'YouTube',
    platform: 'youtube',
    href: '#',
    isPendingConfirmation: true,
    ariaLabel: 'CybAram on YouTube (official channel URL pending confirmation)'
  },
  {
    name: 'X',
    platform: 'x',
    href: '#',
    isPendingConfirmation: true,
    ariaLabel: 'CybAram on X (official handle URL pending confirmation)'
  }
];

export const CONTRIBUTION_AREAS: ContributionArea[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: 'PenTool',
    image: '/assets/images/contrib_ui_ux_1792749900919.jpg',
    imageAlt: 'UI/UX wireframe sketchbook with color swatches and laptop interface mockups on a clean desk',
    shortDesc: 'Design accessible, calm user journeys and visual layouts for individuals experiencing digital distress.',
    keywords: ['UI/UX', 'Design', 'Figma', 'Wireframes', 'Accessibility', 'Mobile', 'Typography', 'Usability'],
    details: [
      'Website design and user journey mapping for vulnerable users',
      'Visual consistency and accessible component design',
      'Mobile responsiveness and viewport refinement',
      'Accessibility (WCAG AA) and readability reviews',
      'Educational digital safety infographics'
    ],
    statusNote: 'Open for Community Collaboration'
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Code',
    image: '/assets/images/contrib_frontend_1792749902810.jpg',
    imageAlt: 'Laptop displaying clean React and TypeScript code beside a responsive web application preview',
    shortDesc: 'Build performant, accessible React and TypeScript interfaces and privacy tools that load quickly on any device.',
    keywords: ['Frontend', 'React', 'TypeScript', 'Tailwind', 'Web', 'Components', 'Performance', 'Code'],
    details: [
      'Accessible, clean React and TypeScript web components',
      'Fast, lightweight performance without bloated frameworks',
      'Interactive guidance tools and privacy checklists',
      'Cross-browser and mobile responsive testing',
      'Clean component design and maintainable architectures'
    ],
    statusNote: 'Open for Community Collaboration'
  },
  {
    id: 'cyber-research',
    title: 'Cyber Awareness and Research Support',
    icon: 'Search',
    image: '/assets/images/contrib_cyber_research_1792749902179.jpg',
    imageAlt: 'Cybersecurity research papers, scam prevention checklists, and loupe with handwritten analysis notes',
    shortDesc: 'Contribute to ethical open-source research methodologies, scam trend verification, and threat awareness guides.',
    keywords: ['Cyber awareness', 'Research', 'OSINT', 'Threat verification', 'Scams', 'Phishing', 'Investigation', 'Security'],
    details: [
      'Educational digital safety content creation',
      'Responsible public-source research methodology',
      'Scam-awareness guides and checklists',
      'Source checking and threat verification',
      'Beginner-friendly explanations of security risks'
    ],
    statusNote: 'Open for Community Collaboration'
  },
  {
    id: 'content-community',
    title: 'Content and Community Awareness',
    icon: 'BookOpen',
    image: '/assets/images/contrib_content_1792749902164.jpg',
    imageAlt: 'Multilingual scam alert brochures, awareness posters, and drafting materials arranged on a studio table',
    shortDesc: 'Craft plain-language scam alerts, regional-language safety posters, and relatable digital literacy resources.',
    keywords: ['Content', 'Community', 'Writing', 'Education', 'Infographics', 'Posters', 'Regional Languages', 'Awareness'],
    details: [
      'Educational articles, guides, and explainers in plain English and regional languages',
      'Visual awareness posters and scam prevention infographics',
      'Educational campaigns for seniors, parents, and college students',
      'Community learning resources and grassroots workshops'
    ],
    statusNote: 'Open for Community Collaboration'
  },
  {
    id: 'people-support',
    title: 'HR and People Support',
    icon: 'Users',
    image: '/assets/images/contrib_hr_people_1792749903386.jpg',
    imageAlt: 'Indian volunteer coordinators engaged in a warm, welcoming contributor onboarding discussion',
    shortDesc: 'Help coordinate volunteer communications, contributor onboarding, and support an empathetic team culture.',
    keywords: ['HR', 'People', 'Volunteering', 'Onboarding', 'Coordination', 'Culture', 'Operations'],
    details: [
      'Volunteer and contributor communications and support',
      'Contributor onboarding and peer coordination',
      'Community guidelines and culture care',
      'People-centered workflows and feedback'
    ],
    statusNote: 'Open for Community Collaboration'
  },
  {
    id: 'volunteering',
    title: 'Community Volunteering & Peer Listening',
    icon: 'Handshake',
    image: '/assets/images/contrib_peer_listening_1792749902961.jpg',
    imageAlt: 'Warm table setting with tea cups and an open notebook representing supportive community listening',
    shortDesc: 'Offer empathetic, non-judgmental listening support to people experiencing loneliness, life stress, or digital deception.',
    keywords: ['Volunteering', 'Peer listening', 'Community', 'Mental wellbeing', 'Listening', 'Empathy', 'Support'],
    details: [
      'Grassroots cyber awareness and educational outreach',
      'Digital literacy guidance for seniors and families',
      'Supportive peer listening and empathetic conversation',
      'Distributing fraud alerts and prevention checklists'
    ],
    statusNote: 'Open for Community Collaboration'
  }
];
