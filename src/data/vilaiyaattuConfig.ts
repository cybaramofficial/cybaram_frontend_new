import { assetUrl } from '../utils/assetUrl.ts';

export interface ClickOrSkipScenario {
  id: string;
  category: string;
  title: string;
  senderName: string;
  senderAddress: string;
  senderAvatarText: string;
  timestamp: string;
  notificationTitle: string;
  notificationSnippet: string;
  fullMessageText: string;
  linkText: string;
  linkTargetDisplay: string;
  realDestinationUrl: string;
  isMalicious: boolean;
  contextNote: string;
  inspectionClues: {
    senderNote: string;
    urlAnalysis: string;
    officialVerificationNote: string;
  };
  clickConsequence: {
    title: string;
    description: string;
    technicalImpact: string;
    severity: 'critical' | 'high' | 'moderate';
    mockScreenType: 'fake_apk' | 'phishing_portal' | 'fake_telegram_job' | 'fee_trap';
  };
  skipResolution: {
    title: string;
    description: string;
    officialAction: string;
    rewardPoints: number;
  };
  keyTakeaway: string;
}

export interface SpotTheScamCase {
  id: string;
  caseCode: string;
  type: 'email' | 'sms' | 'invoice';
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  threatCategory: string;
  senderDisplayName: string;
  senderAddress: string;
  subjectOrHeader: string;
  receivedTime: string;
  bodyContent: {
    salutation?: string;
    paragraphs: string[];
    highlightedLink?: {
      displayText: string;
      hoverDestination: string;
      isDeceptive: boolean;
    };
    attachment?: {
      name: string;
      size: string;
      actualExtension: string;
      iconType: 'pdf' | 'doc' | 'archive' | 'warning';
      isDeceptive: boolean;
    };
  };
  hotspots: {
    id: string;
    label: string;
    description: string;
    isSuspicious: boolean;
    explanation: string;
  }[];
  verdict: 'scam' | 'legitimate' | 'inconclusive';
  officialForensicExplanation: string;
  investigatorTips: string[];
  pointsAwarded: number;
}

export const VILAIYAATTU_CONFIG = {
  sectionName: 'CybAram Vilaiyaattu',
  shortName: 'Vilaiyaattu',
  route: '/vilaiyaattu' as const,
  heroEyebrow: 'DIGITAL SAFETY, MADE HUMAN',
  heroHeadline: 'A Little More Awareness. A Lot More Confidence.',
  heroSubtitle:
    'Learn digital safety by playing, exploring, and solving through short, visual, everyday interactive puzzles.',
  heroImage: assetUrl('/src/assets/images/hero_cyber_umbrella_banner_1792984625298.jpg'),
  heroImageAlt:
    'Digital safety umbrella protecting an Indian family and professionals using smartphones and laptops in a modern warm home',
  coverCyberPuzzles: assetUrl('/src/assets/images/cover_cyber_quest_1792993309160.jpg'),
  coverClickOrSkip: assetUrl('/src/assets/images/cover_cyber_quest_1792993309160.jpg'),
  coverSpotTheScam: assetUrl('/src/assets/images/cover_spot_scam_1792993323606.jpg'),
  cyberPuzzlesTitle: 'CybAram Cyber Puzzles',
  cyberPuzzlesTagline: 'Learn digital safety by playing, exploring, and solving.',
  cyberPuzzlesBadge: 'Unified Casual Puzzle Game'
};

export const VILAIYAATTU_ENABLED = false;

export const CLICK_OR_SKIP_SCENARIOS: ClickOrSkipScenario[] = [
  {
    id: 'cos-electricity-cutoff',
    category: 'Urgent Disconnection Scam',
    title: 'Urgent Electricity Disconnection Warning',
    senderName: 'TNEB Power Alert',
    senderAddress: '+91 98412 87631 (10-digit mobile number)',
    senderAvatarText: 'EB',
    timestamp: '9:12 PM Today',
    notificationTitle: '⚠️ POWER CUT TONIGHT 9:30 PM',
    notificationSnippet: 'Dear Consumer, your electricity power will be disconnected at 9:30 PM tonight due to unpaid bill...',
    fullMessageText:
      'Dear Consumer, Your electricity connection will be disconnected tonight at 9:30 PM because previous month bill was not updated. Please immediately update your bill details by clicking here: bit.ly/tneb-bill-update or call Electricity Officer at 9841287631 immediately.',
    linkText: 'bit.ly/tneb-bill-update',
    linkTargetDisplay: 'http://bit.ly/tneb-bill-update',
    realDestinationUrl: 'http://tneb-bill-update-apk.online/download/electricity-support.apk',
    isMalicious: true,
    contextNote: 'You receive this message on a Thursday evening after a busy day at work.',
    inspectionClues: {
      senderNote: 'Government electricity departments send SMS through registered 6-character bulk sender headers (e.g., "VM-TNEBPW", "AD-TNEB"), never from personal 10-digit mobile phone numbers.',
      urlAnalysis: 'The shortened link (bit.ly) disguises an unverified non-governmental domain (.online) hosting an Android package file (.apk), not the official government electricity billing portal.',
      officialVerificationNote: 'Checking the official electricity board app or your bank auto-debit receipts shows your account is active with zero outstanding dues.'
    },
    clickConsequence: {
      title: '🚨 Dangerous Malicious APK Download Initiated',
      description:
        'Clicking the link redirected you to download "electricity-support.apk". Once opened, the fake app immediately requests "Accessibility Services" and "SMS Read" permissions. An attacker now silently reads all your incoming banking OTPs and drains your linked accounts.',
      technicalImpact: 'Malicious Android APK installation, credential theft & SMS OTP interception.',
      severity: 'critical',
      mockScreenType: 'fake_apk'
    },
    skipResolution: {
      title: '🛡️ Threat Neutralized: Safe Verification',
      description:
        'You skipped the panic link and checked your official state electricity board app directly. Your meter shows active with zero dues! You saved your financial credentials and avoided a high-pressure scam.',
      officialAction: 'Reported the 10-digit scammer number to the national cybercrime portal (1930).',
      rewardPoints: 150
    },
    keyTakeaway: 'Electricity boards never dispatch power-cutoff threats from ordinary 10-digit mobile numbers or request payments via shortened bit.ly links.'
  },
  {
    id: 'cos-telegram-job',
    category: 'Work-from-Home Task Scam',
    title: 'Easy Work-From-Home YouTube Rating Offer',
    senderName: 'Ananya — Global Media HR',
    senderAddress: '+1 (415) 890-4421 (WhatsApp / Telegram)',
    senderAvatarText: 'HR',
    timestamp: '11:45 AM Today',
    notificationTitle: '💼 Earn ₹3,500 - ₹8,000 / Day Part-Time',
    notificationSnippet: 'Hello! Your profile matched our part-time freelance opportunity. Earn ₹150 for liking 3 YouTube videos...',
    fullMessageText:
      'Hello! I am Ananya from TalentLink Media. We noticed your profile and have an urgent opening for digital engagement evaluators. You only need to like 3 YouTube videos and screenshot them. We pay ₹150 instantly via UPI! Click to start task on Telegram: t.me/GlobalTaskHR_04',
    linkText: 't.me/GlobalTaskHR_04',
    linkTargetDisplay: 'https://t.me/GlobalTaskHR_04',
    realDestinationUrl: 'https://t.me/GlobalTaskHR_04',
    isMalicious: true,
    contextNote: 'An unsolicited text arrives on your messaging app promising effortless daily income.',
    inspectionClues: {
      senderNote: 'Foreign phone number (+1 USA country code) with a generic stock photo avatar, reaching out out of the blue with no interview or resume request.',
      urlAnalysis: 'Channeling candidates to anonymous Telegram channels is the signature pipeline for task-based advance-fee and investment fraud.',
      officialVerificationNote: 'Legitimate recruitment agencies do not pay people to like YouTube videos, nor do they conduct enterprise payroll over personal Telegram bots.'
    },
    clickConsequence: {
      title: '💸 The Advance-Fee Task Trap Sprung',
      description:
        'You joined the Telegram group and completed 3 video likes. They sent you ₹150 to gain your trust. Next, they asked you to deposit ₹3,000 in an "investor pool" to unlock a ₹15,000 payout. Once deposited, the scammers blocked you and vanished with your funds.',
      technicalImpact: 'Prepaid task fraud & psychological financial escalation trap.',
      severity: 'high',
      mockScreenType: 'fake_telegram_job'
    },
    skipResolution: {
      title: '🛡️ Prudent Restraint: Scam Avoided',
      description:
        'You recognized the classic "paid likes" recruitment trap. You declined the contact, blocked the sender, and did not share personal or UPI details.',
      officialAction: 'Blocked the sender and reported the fraudulent recruitment profile.',
      rewardPoints: 120
    },
    keyTakeaway: 'No legitimate employer pays ₹8,000 per day for liking videos. The initial small payout is just bait for a larger advance-fee trap.'
  },
  {
    id: 'cos-courier-address-fee',
    category: 'Parcel Delivery Scam',
    title: 'Courier Address Incomplete — Nominal ₹5 Fee',
    senderName: 'SpeedPost Logistics',
    senderAddress: '+91 82910 44329 (SMS)',
    senderAvatarText: 'SP',
    timestamp: '2:15 PM Today',
    notificationTitle: '📦 Package Delivery Blocked: Address Issue',
    notificationSnippet: 'Your courier item #IN89218 cannot be delivered due to incomplete street address. Pay ₹5 redelivery fee...',
    fullMessageText:
      'SpeedPost Notice: Your registered package tracking ID #IN8921840 cannot be dispatched due to missing house number. Please update your address and pay a ₹5 re-dispatch administrative fee within 24 hours: https://indiapost-redelivery-portal.info/update',
    linkText: 'indiapost-redelivery-portal.info/update',
    linkTargetDisplay: 'https://indiapost-redelivery-portal.info/update',
    realDestinationUrl: 'https://indiapost-redelivery-portal.info/update?step=card_details',
    isMalicious: true,
    contextNote: 'You frequently order online goods and wonder if this might be an item you ordered last week.',
    inspectionClues: {
      senderNote: 'SMS sent from a random private mobile number rather than postal bulk sender (e.g., "CP-INPOST").',
      urlAnalysis: 'Domain is "indiapost-redelivery-portal.info", a newly registered third-party domain, NOT the official "indiapost.gov.in".',
      officialVerificationNote: 'Entering the tracking number into the genuine postal department website reveals the tracking ID does not even exist.'
    },
    clickConsequence: {
      title: '💳 Financial Card Theft & OTP Interception',
      description:
        'You opened the site to pay ₹5. The fake payment gateway asked for your Debit Card Number, Expiry, CVV, and ATM PIN. Moments later, an unauthorized foreign transaction for ₹48,000 was debited from your account.',
      technicalImpact: 'Card skimming portal mimicking national postal services.',
      severity: 'critical',
      mockScreenType: 'fee_trap'
    },
    skipResolution: {
      title: '🛡️ Cautious Shopper: Account Secured',
      description:
        'You inspected the URL before acting and noticed it was an unverified .info domain. You checked your actual e-commerce apps and verified all recent parcels were already accounted for.',
      officialAction: 'Flagged malicious domain to the postal cybersecurity taskforce.',
      rewardPoints: 140
    },
    keyTakeaway: 'Scammers use nominal amounts like ₹5 or ₹10 to lower your psychological guard. Once you enter card details on their spoofed page, they drain your funds.'
  },
  {
    id: 'cos-bank-pan-kyc',
    category: 'Urgent Banking Phishing',
    title: 'Bank Account Suspension / PAN Expiry Alert',
    senderName: 'HDFC Alert Service',
    senderAddress: '+91 70014 55219 (SMS)',
    senderAvatarText: 'BK',
    timestamp: '8:40 AM Today',
    notificationTitle: '🚨 Bank Account Suspended Today',
    notificationSnippet: 'Dear Customer, your bank account will be blocked today due to outdated PAN card. Update now...',
    fullMessageText:
      'Dear Customer, Your bank account has been placed on temporary hold. Your PAN card validity has expired in our banking records. To prevent complete account deactivation, update your KYC immediately: https://netbanking-kyc-verify.co.in/pan-update',
    linkText: 'netbanking-kyc-verify.co.in/pan-update',
    linkTargetDisplay: 'https://netbanking-kyc-verify.co.in/pan-update',
    realDestinationUrl: 'https://netbanking-kyc-verify.co.in/pan-update?auth=login',
    isMalicious: true,
    contextNote: 'Early morning notification with severe financial urgency.',
    inspectionClues: {
      senderNote: 'Personal 10-digit mobile number pretending to be a premier bank.',
      urlAnalysis: 'Fake domain "netbanking-kyc-verify.co.in" designed to look like official netbanking login.',
      officialVerificationNote: 'Logging into official netbanking through your saved bookmark shows zero compliance warnings.'
    },
    clickConsequence: {
      title: '🔓 Banking Credentials Harvested',
      description:
        'You entered your Customer ID, Net Banking Password, and the OTP received on SMS. The phishing proxy transmitted your credentials directly to a cybercrime syndicate who immediately initiated a NEFT wire transfer.',
      technicalImpact: 'Direct account takeover via credential harvest and OTP relay.',
      severity: 'critical',
      mockScreenType: 'phishing_portal'
    },
    skipResolution: {
      title: '🛡️ Bank Account Protected',
      description:
        'You remembered that banks never send KYC links via ordinary mobile numbers. You logged into the bank app independently and confirmed your account status is active and healthy.',
      officialAction: 'Reported the phishing URL to the bank fraud prevention team.',
      rewardPoints: 160
    },
    keyTakeaway: 'Banks never threaten immediate same-day account suspension via SMS links from 10-digit mobile numbers.'
  },
  {
    id: 'cos-free-recharge-voucher',
    category: 'Viral Social Engineering',
    title: 'Festival 3-Month Free Unlimited Recharge',
    senderName: 'Family Chat Forward',
    senderAddress: 'WhatsApp Group Forward',
    senderAvatarText: 'WA',
    timestamp: '5:30 PM Today',
    notificationTitle: '🎁 Free 3 Months 5G Recharge Offer',
    notificationSnippet: 'Government festival scheme! Get 3 months free 5G recharge for Airtel, Jio & VI. Only 200 slots left...',
    fullMessageText:
      '🎉 FESTIVAL GIFT FOR ALL CITIZENS! On the occasion of the national jubilee, government in partnership with telecom operators is providing FREE 3 Months 5G Unlimited Recharge for all Airtel, Jio, and VI users! Valid only for today. Claim yours before slots end: free-5g-festival-recharge.buzz/claim',
    linkText: 'free-5g-festival-recharge.buzz/claim',
    linkTargetDisplay: 'https://free-5g-festival-recharge.buzz/claim',
    realDestinationUrl: 'https://free-5g-festival-recharge.buzz/claim?survey=true',
    isMalicious: true,
    contextNote: 'Forwarded by a well-meaning relative in a family chat group.',
    inspectionClues: {
      senderNote: 'Marked as "Forwarded many times" on messaging networks; no official press release exists.',
      urlAnalysis: 'Domain is a disposable ".buzz" domain running adware surveys and harvesting user phone contacts.',
      officialVerificationNote: 'Checking official telecom websites (Jio, Airtel) shows no such free jubilee offer exists.'
    },
    clickConsequence: {
      title: '📱 Contact Harvesting & Aggressive Adware Spam',
      description:
        'The webpage asked you to share the link to 5 WhatsApp groups to "unlock" the recharge. It infected your browser with persistent notification push spam, signed you up for premium SMS billing, and exposed your family contacts to spam lists.',
      technicalImpact: 'Viral adware propagation, contacts harvesting & premium rate billing fraud.',
      severity: 'moderate',
      mockScreenType: 'fee_trap'
    },
    skipResolution: {
      title: '🛡️ Chain Broken: Group Protected',
      description:
        'You avoided clicking and gently informed your family group that the offer is a known clickbait phishing scam. You prevented vulnerable elders from exposing their devices.',
      officialAction: 'Shared the official cyber safety advisory with the group chat.',
      rewardPoints: 130
    },
    keyTakeaway: 'Free recharge links with countdown timers and "forward to 5 groups" requirements are always viral scams designed to farm data.'
  }
];

export const SPOT_THE_SCAM_CASES: SpotTheScamCase[] = [
  {
    id: 'sts-case-1',
    caseCode: 'CASE-701A',
    type: 'email',
    title: 'Executive Wire Approval & Vendor Bank Detail Change',
    difficulty: 'Intermediate',
    threatCategory: 'Business Email Compromise (BEC)',
    senderDisplayName: 'Vikram Sethi — Chief Executive Officer',
    senderAddress: 'vikram.sethi@apexcorp-ltd.co (Lookalike spoofed domain)',
    subjectOrHeader: 'URGENT: Outstanding Vendor Invoice Wire Update (Confidential)',
    receivedTime: '4:45 PM (15 mins before bank cutoff)',
    bodyContent: {
      salutation: 'Hi Team,',
      paragraphs: [
        'I am currently boarding an international flight with limited cellular connectivity.',
        'We urgently need to settle the Q4 cloud infrastructure retainer with CloudMatrix Ltd before 5:00 PM today to prevent service disruption to our client portal.',
        'Please find their updated banking details attached. Wire the ₹4,85,000 immediately from our operating current account. Do not call my phone as I will be in flight mode until tomorrow morning.'
      ],
      attachment: {
        name: 'Updated_Vendor_Wire_Instructions_Q4.pdf',
        size: '142 KB',
        actualExtension: '.pdf',
        iconType: 'pdf',
        isDeceptive: true
      }
    },
    hotspots: [
      {
        id: 'hs-sender-domain',
        label: 'Sender Domain Inspection',
        description: 'Check the exact characters in the email address.',
        isSuspicious: true,
        explanation: 'Real company domain is "apexcorp.com", but this email came from "apexcorp-ltd.co". This is a typosquatted domain registered 3 days ago.'
      },
      {
        id: 'hs-urgency-pressure',
        label: 'Timing & Psychological Pressure',
        description: 'Notice the time of arrival and flight excuse.',
        isSuspicious: true,
        explanation: 'Classic Business Email Compromise tactic: sending 15 minutes before bank cutoff, claiming to be boarding a flight to prevent verbal verification.'
      },
      {
        id: 'hs-bank-change-protocol',
        label: 'Payment Detail Modification',
        description: 'Request to send funds to new bank coordinates.',
        isSuspicious: true,
        explanation: 'Any sudden request to change vendor bank coordinates requires mandatory out-of-band phone verification using a known established number.'
      }
    ],
    verdict: 'scam',
    officialForensicExplanation:
      'This is a textbook Business Email Compromise (BEC) attack. The scammer created a spoofed domain ("apexcorp-ltd.co"), impersonated the CEO, introduced false urgency ("boarding a flight, wire before 5 PM"), and attempted to divert company funds to a fraudulent mule account.',
    investigatorTips: [
      'Always inspect the sender domain character by character (e.g., look for extra hyphens, different TLDs).',
      'Never process wire account changes without dual-authorization and a verbal callback to the vendor on a verified pre-existing number.',
      'Treat requests to bypass normal payment verification channels because an executive is "traveling" with extreme skepticism.'
    ],
    pointsAwarded: 200
  },
  {
    id: 'sts-case-2',
    caseCode: 'CASE-702B',
    type: 'sms',
    title: 'Genuine Multi-Factor Transaction Verification Alert',
    difficulty: 'Advanced',
    threatCategory: 'Legitimate Bank Alert (Discernment Test)',
    senderDisplayName: 'HDFCBNK (Registered Bulk Telecom Header)',
    senderAddress: 'VM-HDFCBN (Official 6-Character Bank Sender ID)',
    subjectOrHeader: 'Transaction Alert: Card ending in 4082',
    receivedTime: '3:20 PM',
    bodyContent: {
      paragraphs: [
        'ALERT: Transaction of INR 14,200.00 attempted on your HDFC Bank Credit Card ending in 4082 at CROMA ELECTRONICS on 24-OCT-26 at 15:19 hrs.',
        'If done by you, use OTP 692810 to authorize.',
        'If NOT done by you, immediately SMS NO to 5676712 or call the phone number printed on the back of your card. NEVER share OTP with anyone.'
      ]
    },
    hotspots: [
      {
        id: 'hs-sms-sender-id',
        label: 'Telecom Header Validation',
        description: 'Examine the SMS sender code.',
        isSuspicious: false,
        explanation: 'The header "VM-HDFCBN" follows the mandatory Indian Telecom Regulatory Authority (TRAI) commercial DLT format for verified banking institutions.'
      },
      {
        id: 'hs-link-presence',
        label: 'Link Inspection',
        description: 'Does the alert contain a clickable URL?',
        isSuspicious: false,
        explanation: 'Notice there are NO external web links! Legitimate fraud alerts direct you to standard shortcodes or the physical number on the back of your physical card.'
      },
      {
        id: 'hs-otp-warning',
        label: 'Explicit Security Warning',
        description: 'Notice the safety instruction in the text.',
        isSuspicious: false,
        explanation: 'The message clearly states "NEVER share OTP with anyone" and provides the exact merchant name and masked card ending.'
      }
    ],
    verdict: 'legitimate',
    officialForensicExplanation:
      'This is an authentic banking security alert. Crucially, it does NOT contain clickable links, does not request credentials, originates from an official 6-character TRAI DLT banking header, and instructs the cardholder to verify through the phone number printed on the physical card.',
    investigatorTips: [
      'Genuine banking dispute notifications do not include hyperlinks prompting you to "log in to cancel".',
      'Look for official 6-character telecom headers rather than personal 10-digit mobile numbers.',
      'When in doubt about a card alert, always call the helpline number embossed on your actual plastic card.'
    ],
    pointsAwarded: 220
  },
  {
    id: 'sts-case-3',
    caseCode: 'CASE-703C',
    type: 'email',
    title: 'Income Tax Assessment Refund Notification',
    difficulty: 'Beginner',
    threatCategory: 'Tax Authority Phishing',
    senderDisplayName: 'Income Tax Department — e-Filing Portal',
    senderAddress: 'refund-desk@incometax-efiling-portal.org',
    subjectOrHeader: 'Notice of Tax Assessment: Direct Deposit Refund of ₹18,420 Ready',
    receivedTime: '9:05 AM',
    bodyContent: {
      salutation: 'Dear Taxpayer,',
      paragraphs: [
        'Following our annual recalculation of your fiscal year withholding records, an excess tax payment of ₹18,420 has been verified.',
        'Due to invalid bank account transit details on record, your refund could not be deposited automatically into your account.',
        'Please confirm your bank account credentials and select your primary net banking institution within 48 hours to release the payment:'
      ],
      highlightedLink: {
        displayText: 'https://incometax.gov.in/iec/foportal/refund-confirmation',
        hoverDestination: 'http://incometax-efiling-portal.org/login/secure-netbanking.php',
        isDeceptive: true
      }
    },
    hotspots: [
      {
        id: 'hs-tax-domain',
        label: 'Official Government TLD Check',
        description: 'Review the sender address extension.',
        isSuspicious: true,
        explanation: 'All Indian Central Government portals end in ".gov.in" or ".nic.in". No government ministry operates tax operations from a commercial ".org" address.'
      },
      {
        id: 'hs-link-mismatch',
        label: 'Hyperlink Destination Mismatch',
        description: 'Compare display text with the actual link target.',
        isSuspicious: true,
        explanation: 'Display text shows "incometax.gov.in", but hovering reveals the actual browser destination is "incometax-efiling-portal.org/login/secure-netbanking.php". This is deceptive link masking.'
      },
      {
        id: 'hs-credential-demand',
        label: 'Request for Net Banking Login',
        description: 'Notice what the form requests to release funds.',
        isSuspicious: true,
        explanation: 'Tax refunds are directly credited via ECS/NEFT to validated bank accounts. The tax department never asks taxpayers to enter net banking passwords to receive refunds.'
      }
    ],
    verdict: 'scam',
    officialForensicExplanation:
      'This is a credential-harvesting phishing attack disguised as a tax refund. The attackers used link text spoofing to disguise a malicious phishing server and attempted to extract the taxpayer\'s private net banking login credentials.',
    investigatorTips: [
      'Hover over every hyperlink before clicking to confirm the actual destination matches the displayed address.',
      'Government agencies operate exclusively on .gov.in or .nic.in domains.',
      'No legitimate institution requires your net banking login or password to issue you a credit or refund.'
    ],
    pointsAwarded: 180
  },
  {
    id: 'sts-case-4',
    caseCode: 'CASE-704D',
    type: 'invoice',
    title: 'Freelance Design Retainer: Double Extension Attachment',
    difficulty: 'Advanced',
    threatCategory: 'Trojan / Malware Dropper',
    senderDisplayName: 'Sarah Jenkins — Creative Producer',
    senderAddress: 'sarah.jenkins.design@gmail.com',
    subjectOrHeader: 'Signed Contract & Initial Project Scope PDF',
    receivedTime: 'Yesterday, 6:15 PM',
    bodyContent: {
      salutation: 'Hi there,',
      paragraphs: [
        'It was great speaking with you on the design forum earlier this week!',
        'We reviewed your portfolio and would love to move forward with the branding overhaul. I have attached the signed statement of work and our initial deposit invoice.',
        'Please review the attached PDF and send back the signed page so our accounting team can release the milestone payment.'
      ],
      attachment: {
        name: 'Project_Retainer_Invoice_Q4_Approved.pdf.exe',
        size: '2.4 MB',
        actualExtension: '.exe',
        iconType: 'warning',
        isDeceptive: true
      }
    },
    hotspots: [
      {
        id: 'hs-double-extension',
        label: 'Double File Extension Inspection',
        description: 'Look carefully at the end of the filename.',
        isSuspicious: true,
        explanation: 'The file is named "Invoice_Q4_Approved.pdf.exe". On Windows systems that hide known file extensions, users only see ".pdf", but it is actually an executable (.exe) malware dropper.'
      },
      {
        id: 'hs-filesize-pdf',
        label: 'File Size vs Document Type',
        description: 'Check the file size for a simple document.',
        isSuspicious: true,
        explanation: 'A 1-page PDF document is typically 50 KB – 300 KB. A 2.4 MB file disguised as a simple text invoice strongly indicates embedded binary executable payload.'
      },
      {
        id: 'hs-unsolicited-contract',
        label: 'Free Public Webmail Sender',
        description: 'Examine the sender address for a corporate retainer.',
        isSuspicious: true,
        explanation: 'A supposed corporate producer sending contracts from a free @gmail.com address without any formal corporate website or domain verification.'
      }
    ],
    verdict: 'scam',
    officialForensicExplanation:
      'This is an executable malware attack utilizing the notorious double-extension trick (.pdf.exe). Opening this file would execute malicious code on the workstation, install an infostealer to capture browser passwords, and establish persistent backdoor access.',
    investigatorTips: [
      'Enable "Show file name extensions" in your operating system so dangerous .exe, .scr, or .vbs files cannot disguise themselves as PDFs or images.',
      'Never double-click an executable attachment sent via email.',
      'Use multi-engine cloud file scanners (e.g., VirusTotal) to scan suspicious attachments before opening them.'
    ],
    pointsAwarded: 240
  }
];
