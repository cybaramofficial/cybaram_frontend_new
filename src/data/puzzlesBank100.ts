// CybAram Cyber Puzzles — 100 Genuinely Distinct, Fully Defined Puzzles Bank
// Categorized into 10 categories with 10 authored puzzles per category (Puzzles 001 - 100).
// Each puzzle contains:
// - Permanent unique ID ('puz-001' to 'puz-100')
// - Specific realistic scenario context
// - Distinct interaction type (single-select, multi-select, tap-to-discover, drag-and-drop, matching, ordering, text-entry, simulated-settings)
// - Set-based validation rules with no single-select shortcuts on multi-select puzzles
// - Concise explanation & practical safety tip

export type PuzzleInteractionType =
  | 'single-select'
  | 'multi-select'
  | 'tap-to-discover'
  | 'drag-and-drop'
  | 'matching'
  | 'ordering'
  | 'text-entry'
  | 'simulated-settings';

export type CharacterId = 'arun' | 'priya' | 'thatha' | 'rohan' | 'maya' | 'sam';

export type DifficultyLevel = 'Casual' | 'Standard' | 'Balanced' | 'Challenging' | 'Advanced';

export interface PuzzleOption {
  id: string;
  label: string;
  sublabel?: string;
  isSign?: boolean; // For multi-select symptoms/red-flags
  category?: 'safe' | 'unsafe' | 'private' | 'public'; // For drag/sort
  iconName?: string;
}

export interface MatchingPair {
  leftId: string;
  leftText: string;
  rightId: string;
  rightText: string;
}

export interface OrderingStep {
  id: string;
  text: string;
  correctOrder: number;
}

export interface DetailedPuzzleData {
  id: string;
  puzzleNumber?: number;
  totalInRound?: number;
  category: string;
  categoryLabel: string;
  iconType: 'magnifier' | 'shield' | 'list';
  title: string;
  instruction: string;
  hintText: string;
  scenario: string;
  interactionType: PuzzleInteractionType;
  characterId: CharacterId;
  sceneType:
    | 'scam_message_inspect'
    | 'romance_scam_chat'
    | 'video_call_inspect'
    | 'symptoms_checklist'
    | 'info_sorting_privacy'
    | 'work_from_home_banner'
    | 'bank_transaction_link'
    | 'shopping_offer_compare'
    | 'account_security_settings'
    | 'upi_payment_review'
    | 'software_update_choice'
    | 'incident_steps_order'
    | 'otp_drag_vault'
    | 'app_permissions_review'
    | 'sticky_note_spot'
    | 'interactive_matching'
    | 'text_refusal_entry';
  options?: PuzzleOption[];
  correctTargetId?: string;
  correctTargetIds?: string[];
  matchingPairs?: MatchingPair[];
  orderingSteps?: OrderingStep[];
  acceptedAnswers?: string[];
  scenePayload?: {
    senderPhone?: string;
    messageText?: string;
    suspiciousUrl?: string;
    otpCode?: string;
    appName?: string;
    stickyNoteText?: string;
    speechBubbleText?: string;
    contactName?: string;
    chatBubble1?: string;
    chatBubble2?: string;
    chatBubble3?: string;
    jobTitle?: string;
    jobFee?: string;
    websiteAPrice?: string;
    websiteBPrice?: string;
    websiteAUrl?: string;
    websiteBUrl?: string;
    upiRecipient?: string;
    upiAmount?: string;
    softwareVersion?: string;
  };
  successFeedback: string;
  correctionFeedback: string;
  learningTip: string;
  difficulty: DifficultyLevel;
  points: number;
}

export const PUZZLES_BANK_100: DetailedPuzzleData[] = [
  // =========================================================================
  // CATEGORY 1: ROMANCE & EMOTIONAL MANIPULATION (001–010)
  // =========================================================================
  {
    id: 'puz-001',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'magnifier',
    title: 'Find the sudden money demand.',
    instruction: 'Tap the part of the chat that feels risky.',
    hintText: 'Scammers often build emotional intimacy before manufacturing a crisis.',
    scenario: 'Priya has been chatting with an online acquaintance named Alex for two weeks. Today, Alex suddenly sends an urgent request.',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'romance_scam_chat',
    correctTargetId: 'chat_money',
    correctTargetIds: ['chat_money'],
    scenePayload: {
      contactName: 'Alex',
      chatBubble1: 'You are so special ❤️ I really care about you.',
      chatBubble2: "I'm in a difficult emergency right now. Can you send ₹50,000 to help me? I'll pay you back soon.",
      chatBubble3: 'I love you ❤️'
    },
    successFeedback: 'Red flag spotted! Sudden emergency financial requests are a classic hallmark of romance fraud.',
    correctionFeedback: 'Be watchful: Attackers feign deep affection quickly, then manufacture sudden money emergencies.',
    learningTip: 'Never send money to an online contact you haven\'t verified in person, regardless of romantic promises.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-002',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'list',
    title: 'Match flattering tactics.',
    instruction: 'Match each manipulation message to its underlying tactic.',
    hintText: 'Love bombing creates artificial urgency and emotional dependence.',
    scenario: 'A contact showers you with intense affection in the first 48 hours to bypass rational caution.',
    interactionType: 'matching',
    characterId: 'priya',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'm1', leftText: '"You are my soulmate after just 2 days"', rightId: 'r1', rightText: 'Love Bombing' },
      { leftId: 'm2', leftText: '"Do not tell your family about our special bond"', rightId: 'r2', rightText: 'Isolation Tactic' },
      { leftId: 'm3', leftText: '"If you truly cared, you would send this fee"', rightId: 'r3', rightText: 'Guilt Tripping' }
    ],
    correctTargetIds: ['m1-r1', 'm2-r2', 'm3-r3'],
    successFeedback: 'Sharp matching! Recognizing manipulative psychological tactics helps you stay grounded.',
    correctionFeedback: 'Emotional manipulators use fast compliments, secrecy, and guilt to bypass critical thinking.',
    learningTip: 'Healthy relationships respect healthy boundaries and never demand secrecy or financial bailouts.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-003',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'shield',
    title: 'Spot secrecy pressure signs.',
    instruction: 'Select all messages that pressure the victim into unhealthy secrecy.',
    hintText: 'Scammers fear friends and family will point out the obvious scam.',
    scenario: 'An online suitor asks Priya to keep their communication completely secret from her roommates and parents.',
    interactionType: 'multi-select',
    characterId: 'priya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'opt_secret_1', label: '"Keep our chats between only us, no one understands us"', isSign: true },
      { id: 'opt_normal_1', label: '"Let\'s meet for coffee at the public cafe downtown"', isSign: false },
      { id: 'opt_secret_2', label: '"Delete our payment messages so your bank does not ask"', isSign: true },
      { id: 'opt_normal_2', label: '"I\'d love to introduce you to my mutual friends"', isSign: false }
    ],
    correctTargetIds: ['opt_secret_1', 'opt_secret_2'],
    successFeedback: 'Both secrecy warning signs identified! Isolation is a proven predator strategy.',
    correctionFeedback: 'When an online connection insists you hide their existence from family, it is an extreme red flag.',
    learningTip: 'Always talk to a trusted friend or family member if someone asks you to keep financial or romantic chats secret.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-004',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'shield',
    title: 'Set a firm boundary.',
    instruction: 'Tap the safer, boundary-respecting response to an urgent loan request.',
    hintText: 'Polite refusal of financial requests tests whether the person is genuine.',
    scenario: 'An online contact asks for an urgent ₹15,000 UPI transfer for "customs clearance" fees.',
    interactionType: 'single-select',
    characterId: 'maya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Send ₹15,000',
      websiteAUrl: '"I will send it right now to save you!"',
      websiteBPrice: 'Decline Politely',
      websiteBUrl: '"I never transfer money to online acquaintances."'
    },
    options: [
      { id: 'site_fake', label: 'Reply A: Transfer funds immediately out of pity' },
      { id: 'site_real', label: 'Reply B: "I do not send money to online contacts. Let\'s keep finances separate."' }
    ],
    successFeedback: 'Safe boundary maintained! Genuine partners respect financial boundaries without anger.',
    correctionFeedback: 'Never compromise personal financial safety out of fear of offending an unverified online contact.',
    learningTip: 'A legitimate romantic interest will never condition their affection on money transfers.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-005',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'magnifier',
    title: 'Spot the video verification excuse.',
    instruction: 'Tap the suspicious excuse repeatedly used to avoid video calling.',
    hintText: 'Romance scammers steal photos of models and avoid live camera verification.',
    scenario: 'For 3 weeks, Priya suggests a simple 1-minute video greeting. The caller always deflects.',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'video_call_inspect',
    correctTargetId: 'unknown_person',
    options: [
      { id: 'unknown_person', label: '"My camera is broken and military rules forbid video calls"' },
      { id: 'screen_sharing', label: 'Offer an in-person meeting in a public park' },
      { id: 'video_on', label: 'Schedule an official verified video chat' },
      { id: 'end_call', label: 'End chat' }
    ],
    successFeedback: 'Excuse exposed! Perpetual broken cameras and military/rig excuses conceal stolen identities.',
    correctionFeedback: 'Anyone who can chat for hours but can never turn on video for 10 seconds is hiding their true identity.',
    learningTip: 'Insist on real-time live video verification early. If they continually refuse, cease communication.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-006',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'shield',
    title: 'Evaluate travel money request.',
    instruction: 'Tap the unsafe choice when asked for flight ticket advance.',
    hintText: 'Scammers promise to visit, then claim their funds are tied up in foreign transit.',
    scenario: 'An online contact says: "I booked my flight to Mumbai to see you, but customs seized my card. Send ₹30,000 for clearance."',
    interactionType: 'single-select',
    characterId: 'priya',
    sceneType: 'upi_payment_review',
    correctTargetId: 'recipient',
    scenePayload: {
      upiRecipient: 'Unknown Travel Agent (Non-verified)',
      upiAmount: '₹30,000'
    },
    successFeedback: 'Trap avoided! Customs clearance fees for personal visits are a fictional scam construct.',
    correctionFeedback: 'Do not pay travel, visa, or customs fees on behalf of an online acquaintance.',
    learningTip: 'Real international travelers carry their own funds and do not rely on stranger transfers for immigration.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-007',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'shield',
    title: 'Respond to guilt-tripping.',
    instruction: 'Type or confirm a firm refusal when guilt-tripped for declining to send money.',
    hintText: 'When scammers hear "No", they switch from sweet words to emotional blackmail.',
    scenario: 'The contact writes: "If you really loved me, you wouldn\'t leave me to suffer. You are cold-hearted."',
    interactionType: 'text-entry',
    characterId: 'priya',
    sceneType: 'text_refusal_entry',
    acceptedAnswers: ['no', 'i cannot send money', 'i do not send money', 'stop asking for money', 'no money'],
    successFeedback: 'Firm refusal delivered! Emotional blackmail should always be met with clear, unwavering boundaries.',
    correctionFeedback: 'Do not apologize or capitulate when guilt-tripped. It is an intentional coercive manipulation technique.',
    learningTip: 'Emotional manipulation indicates a scammer trying to overcome your rational resistance.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-008',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'shield',
    title: 'Sort relationship behaviours.',
    instruction: 'Sort the highlighted behaviour into Healthy Boundary vs Scam Manipulation.',
    hintText: 'Healthy boundaries encourage open communication and independent verification.',
    scenario: 'Priya is reviewing how an online acquaintance behaves when questioned about their work credentials.',
    interactionType: 'drag-and-drop',
    characterId: 'priya',
    sceneType: 'info_sorting_privacy',
    correctTargetId: 'keep_private',
    options: [
      { id: 'safe_share', label: 'Healthy Boundary' },
      { id: 'keep_private', label: 'Scam Manipulation' }
    ],
    successFeedback: 'Accurately sorted! Demanding financial proof of love is manipulative exploitation.',
    correctionFeedback: 'Pressuring for money while refusing basic accountability is manipulative, not romantic.',
    learningTip: 'Healthy partners respect your autonomy and never pressure you to compromise your financial safety.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-009',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'magnifier',
    title: 'Spot untraceable payment demands.',
    instruction: 'Tap the payment method that offers zero buyer protection or reversal.',
    hintText: 'Scammers prefer gift cards and crypto because transactions cannot be reversed.',
    scenario: 'The online acquaintance asks: "Can you send the money via Google Play gift card codes or USDT crypto?"',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'Payment Method Review',
      jobFee: 'Gift Cards / Cryptocurrency Codes'
    },
    successFeedback: 'Irreversible payment method spotted! Gift cards and crypto are the top tools of anonymous scammers.',
    correctionFeedback: 'No genuine personal or institutional contact ever legitimately requests payment via retail gift cards.',
    learningTip: 'Gift cards are for store gifts only—never for settling fees, emergencies, or personal transfers.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-010',
    category: 'Romance & Emotional Manipulation',
    categoryLabel: 'Romance Scams & Emotional Manipulation',
    iconType: 'list',
    title: 'Order safe response steps.',
    instruction: 'Put the safe actions in the correct sequence after finding a fake profile.',
    hintText: 'First preserve evidence, then cut contact, report the profile, and check your privacy.',
    scenario: 'You reverse-search their profile picture and discover it belongs to a foreign fashion model.',
    interactionType: 'ordering',
    characterId: 'priya',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'step_1', text: 'Screenshot the chat history and profile details for evidence', correctOrder: 1 },
      { id: 'step_2', text: 'Cease all money transfers and refuse further conversation', correctOrder: 2 },
      { id: 'step_3', text: 'Report the impersonating account to the dating app administrators', correctOrder: 3 },
      { id: 'step_4', text: 'Block the user across phone, messaging, and social accounts', correctOrder: 4 }
    ],
    correctTargetIds: ['step_1', 'step_2', 'step_3', 'step_4'],
    successFeedback: 'Proper sequence arranged! Documenting evidence before blocking prevents scammers from erasing traces.',
    correctionFeedback: 'Always screenshot chat history first, then block and report to platform moderation.',
    learningTip: 'Reverse image searches are an effective tool to detect stolen photos used in impersonation scams.',
    difficulty: 'Balanced',
    points: 100
  },

  // =========================================================================
  // CATEGORY 2: VIDEO-CALL SCAMS & IMPERSONATION (011–020)
  // =========================================================================
  {
    id: 'puz-011',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'magnifier',
    title: 'Spot police impersonation threats.',
    instruction: 'Tap the suspicious threat in this video call from a fake police officer.',
    hintText: 'Police officers never conduct interrogations and fine collections over Skype or WhatsApp video.',
    scenario: 'A man dressed in a uniform claims to be from Delhi Police Cyber Cell, demanding immediate bail payment via UPI.',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'video_call_inspect',
    correctTargetId: 'screen_sharing',
    scenePayload: {
      contactName: 'Fake Police Officer',
      chatBubble2: 'You are under digital arrest! Transfer ₹1,00,000 immediately or police will arrive in 10 minutes.'
    },
    successFeedback: 'Coercion spotted! Indian police and legal authorities do NOT conduct "digital arrests" over video calls.',
    correctionFeedback: '"Digital arrest" is a completely fabricated scam term used to intimidate victims into sending money.',
    learningTip: 'No law enforcement agency in India conducts arrests, interrogations, or fine payments over video calls.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-012',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'shield',
    title: 'Identify urgent call isolation.',
    instruction: 'Tap the directive that isolates the victim from seeking outside help.',
    hintText: 'Scammers demand you stay on the call continuously so you cannot consult friends or verify independently.',
    scenario: 'The caller threatens: "Do not disconnect this call, do not speak to family, keep your phone line open while paying."',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'urgent_deadline', label: '"Stay on call without hanging up until the payment is cleared"', isSign: true },
      { id: 'friendly_greeting', label: '"You may verify this dispatch number at the local station"', isSign: false },
      { id: 'company_name', label: '"Official legal notices are sent by registered post"', isSign: false },
      { id: 'unrealistic_offer', label: '"Disconnect and consult your lawyer first"', isSign: false }
    ],
    correctTargetId: 'urgent_deadline',
    correctTargetIds: ['urgent_deadline'],
    successFeedback: 'Isolation tactic recognized! Keeping victims on the phone prevents them from asking for second opinions.',
    correctionFeedback: 'Demanding that you stay on the line without disconnecting is designed to induce panic.',
    learningTip: 'If a caller orders you not to disconnect or talk to anyone, immediately hang up and call official helplines.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-013',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'list',
    title: 'Match impersonator claims.',
    instruction: 'Match each fake authority to their fraudulent demand.',
    hintText: 'Government officials never ask for personal OTPs or direct UPI payments to personal accounts.',
    scenario: 'Various cybercriminals impersonate different institutions to trick people.',
    interactionType: 'matching',
    characterId: 'rohan',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'c1', leftText: 'Fake CBI Officer', rightId: 'a1', rightText: '"Clear your name via instant money transfer"' },
      { leftId: 'c2', leftText: 'Fake Telecom Dept', rightId: 'a2', rightText: '"Your SIM will be blocked in 2 hours for illegal texts"' },
      { leftId: 'c3', leftText: 'Fake Courier Customs', rightId: 'a3', rightText: '"Your parcel contains contraband narcotics"' }
    ],
    correctTargetIds: ['c1-a1', 'c2-a2', 'c3-a3'],
    successFeedback: 'All impersonation tactics matched! Knowing these common scripts protects you when surprise calls arrive.',
    correctionFeedback: 'These three scripts (CBI, Telecom SIM block, Narcotic parcel) account for the vast majority of imposter calls.',
    learningTip: 'Real government agencies communicate official matters through postal summons, not WhatsApp video threats.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-014',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'shield',
    title: 'Handle unexpected video call.',
    instruction: 'Tap the safest action when receiving an unknown video call.',
    hintText: 'Never answer video calls from unknown numbers—they can capture your likeness for deepfake blackmail.',
    scenario: 'Arun\'s phone rings with an international video call from a random unverified mobile number.',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'video_call_inspect',
    correctTargetId: 'end_call',
    options: [
      { id: 'video_on', label: 'Answer with video enabled to see who it is' },
      { id: 'screen_sharing', label: 'Accept and share screen' },
      { id: 'end_call', label: 'Decline the call and block the unknown number' },
      { id: 'unknown_person', label: 'Call them back immediately' }
    ],
    successFeedback: 'Call declined safely! Declining unknown video calls prevents face-capture for morphing scams.',
    correctionFeedback: 'Answering unknown video calls exposes your face and environment to extortionists who record live feeds.',
    learningTip: 'Do not answer video calls from unknown numbers. Scammers use recorded faces for synthetic blackmail.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-015',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'shield',
    title: 'Identify fake KYC demands.',
    instruction: 'Select all details that an official bank or authority will NEVER ask on a call.',
    hintText: 'Banks will never ask for secret PINs, passwords, or OTPs.',
    scenario: 'A caller claiming to represent your bank asks for sensitive credentials to "complete mandatory Aadhaar KYC".',
    interactionType: 'multi-select',
    characterId: 'thatha',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'symp_otp', label: 'Your 6-digit SMS OTP verification code', isSign: true },
      { id: 'symp_pin', label: 'Your ATM or UPI security PIN', isSign: true },
      { id: 'symp_public', label: 'Confirming your home city location', isSign: false },
      { id: 'symp_branch', label: 'Asking which local branch you opened your account at', isSign: false }
    ],
    correctTargetIds: ['symp_otp', 'symp_pin'],
    successFeedback: 'Both critical credentials identified! OTPs and PINs should never be disclosed under any circumstance.',
    correctionFeedback: 'No genuine bank employee needs your OTP or PIN to verify your account or complete KYC.',
    learningTip: 'Your OTP is like the key to your bank vault. Sharing it grants full unauthorized access to your funds.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-016',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'magnifier',
    title: 'Spot remote access traps.',
    instruction: 'Tap the dangerous instruction asking for remote device control.',
    hintText: 'Apps like AnyDesk, TeamViewer, and RustDesk give attackers full control over your smartphone.',
    scenario: 'A caller claiming to fix a banking error tells Arun: "Download AnyDesk or QuickSupport so our technician can inspect your screen."',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'video_call_inspect',
    correctTargetId: 'screen_sharing',
    successFeedback: 'Remote control trap stopped! Screen sharing or remote-access apps let scammers view passwords as you type them.',
    correctionFeedback: 'Installing remote desktop software allows fraudsters to bypass all two-factor authentication silently.',
    learningTip: 'Never install remote-support tools (AnyDesk, TeamViewer) at the request of an incoming phone caller.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-017',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'shield',
    title: 'Distinguish verified contact.',
    instruction: 'Tap the verified channel to confirm a purported banking issue.',
    hintText: 'Always call back using the verified number printed on your physical debit card.',
    scenario: 'You received a call claiming your debit card was flagged for suspicious overseas transactions.',
    interactionType: 'single-select',
    characterId: 'priya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Callback Caller',
      websiteAUrl: 'Call the mobile number that just called you',
      websiteBPrice: 'Card Helpline',
      websiteBUrl: 'Call the toll-free number on back of debit card'
    },
    successFeedback: 'Verified route chosen! The phone number printed on the back of your bank card is always safe.',
    correctionFeedback: 'Never call back an incoming caller or search random numbers online; use the official number on your card.',
    learningTip: 'For any banking doubt, look at the back of your physical card or visit the official bank website domain.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-018',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'list',
    title: 'Order threat response steps.',
    instruction: 'Put the response actions in order after receiving an extortion threat.',
    hintText: 'Disengage immediately, verify with official authorities, and file an official complaint.',
    scenario: 'A caller threatens that your Aadhaar card is linked to a money-laundering case in another state.',
    interactionType: 'ordering',
    characterId: 'arun',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'ord_1', text: 'Disconnect the suspicious call immediately without transferring funds', correctOrder: 1 },
      { id: 'ord_2', text: 'Contact your local police station or national cybercrime portal (1930)', correctOrder: 2 },
      { id: 'ord_3', text: 'Inform your bank if you inadvertently shared any card or account numbers', correctOrder: 3 },
      { id: 'ord_4', text: 'Block the caller number and report it on the Chakshu citizen portal', correctOrder: 4 }
    ],
    correctTargetIds: ['ord_1', 'ord_2', 'ord_3', 'ord_4'],
    successFeedback: 'Proper incident response order! Immediate disconnection stops panic from dictating your decisions.',
    correctionFeedback: 'Do not stay on the line to argue. Hang up and dial the official National Cyber Crime helpline: 1930.',
    learningTip: 'Dial 1930 immediately or visit cybercrime.gov.in if you experience financial or cyber impersonation fraud.',
    difficulty: 'Challenging',
    points: 100
  },
  {
    id: 'puz-019',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'shield',
    title: 'Type an assertive refusal.',
    instruction: 'Enter a clear refusal to an unverified caller demanding remote access.',
    hintText: 'State firmly that you will visit your local branch in person.',
    scenario: 'The caller insists: "I am Senior Inspector Sharma. You must install our verification software now."',
    interactionType: 'text-entry',
    characterId: 'arun',
    sceneType: 'text_refusal_entry',
    acceptedAnswers: ['i will visit the police station', 'i will visit the branch', 'i do not install apps', 'no', 'i refuse'],
    successFeedback: 'Assertive refusal confirmed! Stating you will visit in person completely dismantles scam scripts.',
    correctionFeedback: 'Do not comply with demands. Telling the caller you will visit the nearest station or branch ends the call.',
    learningTip: 'Saying "I will visit the local branch in person" immediately makes fraudsters give up because they have no physical presence.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-020',
    category: 'Video-Call Scams & Impersonation',
    categoryLabel: 'Video-Call Scams & Impersonation',
    iconType: 'shield',
    title: 'Spot video call warning signs.',
    instruction: 'Select all visual red flags on this simulated video call screen.',
    hintText: 'Look for looping background footage, unnatural lip sync, and pressure to share screens.',
    scenario: 'Arun looks closely at the caller\'s video feed and notices strange graphical glitches.',
    interactionType: 'multi-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'vid_glitch', label: 'Unnatural eye blink glitches and blurry facial edges', isSign: true },
      { id: 'vid_remote', label: 'Screen sharing toggle highlighted as mandatory requirement', isSign: true },
      { id: 'vid_clear', label: 'High definition stable camera in an open public office', isSign: false },
      { id: 'vid_badge', label: 'Verified organization watermark matching true certificate', isSign: false }
    ],
    correctTargetIds: ['vid_glitch', 'vid_remote'],
    successFeedback: 'Visual artifacts detected! Deepfake face-swaps often produce odd ear/mouth artifacts and unnatural blinking.',
    correctionFeedback: 'Deepfake filters and screen-sharing demands are decisive indicators of high-tech impersonators.',
    learningTip: 'Deepfakes struggle with side profiles and blinking. Ask callers to wave their hand across their face to test for filter distortion.',
    difficulty: 'Advanced',
    points: 100
  },

  // =========================================================================
  // CATEGORY 3: UPI, OTP & BANKING (021–030)
  // =========================================================================
  {
    id: 'puz-021',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'magnifier',
    title: 'Identify fake payment screenshot.',
    instruction: 'Tap the clue that indicates this payment confirmation screenshot is fabricated.',
    hintText: 'Scammers use fake payment generator apps where transaction IDs and fonts do not match bank standards.',
    scenario: 'A buyer on OLX sends a screenshot claiming they transferred ₹8,500 to you, demanding you release the item immediately.',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'Ref: UTR9999999999 (Generated via PrankPay.apk)'
    },
    successFeedback: 'Fake screenshot caught! Never rely on a buyer\'s screenshot—always check your own bank app balance.',
    correctionFeedback: 'Screenshots can be fabricated in seconds using spoofing apps. Only trust your official bank app notification.',
    learningTip: 'Never hand over goods or services based on a buyer\'s screenshot. Check your actual bank statement directly.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-022',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'shield',
    title: 'Receiving money vs Collect request.',
    instruction: 'Tap the truth about entering your UPI PIN.',
    hintText: 'YOU NEVER NEED TO ENTER A UPI PIN TO RECEIVE MONEY.',
    scenario: 'A seller online tells Thatha: "To receive ₹2,000 in your account, open Google Pay and enter your 6-digit PIN."',
    interactionType: 'single-select',
    characterId: 'thatha',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Enter PIN to Receive',
      websiteAUrl: '"Enter UPI PIN to receive money in your account"',
      websiteBPrice: 'PIN Only to Send',
      websiteBUrl: '"UPI PIN is only ever used to debit/send money"'
    },
    successFeedback: 'Core rule remembered! Entering your UPI PIN always DEDUCTS money from your bank account.',
    correctionFeedback: 'Crucial rule: You NEVER enter your UPI PIN to receive money. PIN is solely for approving payments OUT.',
    learningTip: 'Golden Rule of UPI: Entering your UPI PIN ALWAYS transfers money OUT. Receiving money requires NO PIN.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-023',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'magnifier',
    title: 'Spot the phishing link in bank alert.',
    instruction: 'Tap the part of the link that looks suspicious.',
    hintText: 'Official bank links end in their exact domain name, not random words or hyphens.',
    scenario: 'An SMS arrives: "Dear customer, your SBI account is locked. Update PAN immediately to avoid block."',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'https://sbi-kyc-update.online/pan-verify'
    },
    successFeedback: 'Phishing domain detected! Look closely: "sbi-kyc-update.online" is an unverified scam website.',
    correctionFeedback: 'Banks own verified domains like onlinesbi.sbi. Any domain ending in .online or random hyphens is a trap.',
    learningTip: 'Inspect web addresses carefully. Scammers put the bank name at the front to disguise a fraudulent domain.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-024',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'shield',
    title: 'Keep the secret OTP safe.',
    instruction: 'Drag or tap to store your OTP code in the private vault.',
    hintText: 'Never tell an OTP to any human caller, bank employee, or delivery person.',
    scenario: 'A caller claiming to be from customer care says: "Read me the 6 digits you just received to verify your card."',
    interactionType: 'drag-and-drop',
    characterId: 'thatha',
    sceneType: 'otp_drag_vault',
    correctTargetId: 'vault',
    scenePayload: {
      otpCode: '8 2 1 9 4 5',
      speechBubbleText: '"Please tell me your OTP to verify your account."'
    },
    successFeedback: 'OTP kept private! Genuine banking staff will never ask you to speak or type an OTP over a phone call.',
    correctionFeedback: 'The moment you disclose your OTP to a caller, your account is debited immediately.',
    learningTip: 'SMS messages clearly state: "Do not share OTP with anyone, including bank staff." Always follow that instruction.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-025',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'list',
    title: 'Match QR-code scenarios.',
    instruction: 'Match each QR code action to its security outcome.',
    hintText: 'Scanning a QR code means you are paying, never receiving.',
    scenario: 'A scammer on a classifieds site asks you to scan a QR code to "receive advance token money".',
    interactionType: 'matching',
    characterId: 'arun',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'qr1', leftText: 'Scanning a QR code sent on WhatsApp', rightId: 'qo1', rightText: 'Debits your own account immediately' },
      { leftId: 'qr2', leftText: 'Sharing your static UPI ID (VPA) with sender', rightId: 'qo2', rightText: 'Safe way to receive money' },
      { leftId: 'qr3', leftText: 'Scanning sticker pasted over shop merchant QR', rightId: 'qo3', rightText: 'Diverts merchant payment to scammer' }
    ],
    correctTargetIds: ['qr1-qo1', 'qr2-qo2', 'qr3-qo3'],
    successFeedback: 'All QR scenarios matched! QR codes are for PAYING. You never scan a QR code to receive funds.',
    correctionFeedback: 'If someone sends you a QR code claiming it will send money to your account, it is a guaranteed fraud.',
    learningTip: 'To receive money, share your UPI ID (VPA) or mobile number. Never scan a QR code or enter your PIN to receive.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-026',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'shield',
    title: 'Identify fake KYC SMS.',
    instruction: 'Tap the telltale sign of a fraudulent KYC warning.',
    hintText: 'Official bank communications come from approved alpha sender headers, not personal 10-digit mobile numbers.',
    scenario: 'A message arrives on Thatha\'s phone from "+91 98451 23456" warning that his account will be suspended today.',
    interactionType: 'single-select',
    characterId: 'thatha',
    sceneType: 'scam_message_inspect',
    correctTargetId: 'sender',
    scenePayload: {
      senderPhone: '+91 98451 23456 (Personal 10-digit number)'
    },
    successFeedback: 'Sender header analyzed! Genuine banks send transactional SMS via verified sender headers like VK-HDFCBK or AX-SBIINB.',
    correctionFeedback: 'Banks never send official KYC suspension notices from personal 10-digit mobile numbers.',
    learningTip: 'Look at the sender ID. Personal 10-digit numbers sending urgent bank notices are unverified scammers.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-027',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'shield',
    title: 'Verify unexpected debit.',
    instruction: 'Select all safe ways to verify an unexpected bank debit alert.',
    hintText: 'Check your official bank mobile app or physical statement, never the link inside the SMS.',
    scenario: 'You receive an SMS saying ₹12,000 was debited for an unknown e-commerce transaction.',
    interactionType: 'multi-select',
    characterId: 'priya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'v_app', label: 'Open your official banking app and check transaction history', isSign: true },
      { id: 'v_card', label: 'Call the customer care number printed on back of your debit card', isSign: true },
      { id: 'v_smslink', label: 'Click the urgent link included inside the alert message', isSign: false },
      { id: 'v_reply', label: 'Reply with your card PIN to reverse the charge', isSign: false }
    ],
    correctTargetIds: ['v_app', 'v_card'],
    successFeedback: 'Safe verification methods selected! Bypassing the SMS link protects you from spoofed alert scams.',
    correctionFeedback: 'Phishing scammers often send fake "debited" alerts hoping panicked victims click their malicious link.',
    learningTip: 'When you get a shocking debit alert, open your bank app directly to see if any money actually left your account.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-028',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'shield',
    title: 'Evaluate UPI PIN requests.',
    instruction: 'Tap the scam scenario where entering a PIN will cause immediate financial loss.',
    hintText: 'Any time you enter your PIN, money leaves your bank account.',
    scenario: 'Various situations where an online party requests you to enter your secret PIN.',
    interactionType: 'single-select',
    characterId: 'maya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_fake',
    scenePayload: {
      websiteAPrice: 'Lottery Claim',
      websiteAUrl: '"Enter PIN to verify and claim ₹25,000 cashback"',
      websiteBPrice: 'Paying at Grocery',
      websiteBUrl: '"Enter PIN to pay ₹450 for groceries at counter"'
    },
    successFeedback: 'Cashback trap identified! Entering your PIN on a "cashback reward" link will transfer money to the scammer.',
    correctionFeedback: 'Cashback from Google Pay or PhonePe credits automatically to your account; it never requires entering a PIN.',
    learningTip: 'Legitimate cashback and prize winnings credit automatically. Any prompt asking for your PIN to "receive" cashback is theft.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-029',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'shield',
    title: 'Sort payment scenarios.',
    instruction: 'Sort the highlighted action into Safe Practice vs Danger Zone.',
    hintText: 'Never approve collect requests from unverified users.',
    scenario: 'Sorting everyday payment actions into secure vs risky habits.',
    interactionType: 'drag-and-drop',
    characterId: 'arun',
    sceneType: 'info_sorting_privacy',
    correctTargetId: 'keep_private',
    options: [
      { id: 'safe_share', label: 'Safe Practice' },
      { id: 'keep_private', label: 'Danger Zone' }
    ],
    successFeedback: 'Correctly sorted! Approving unknown collect requests debits your account immediately.',
    correctionFeedback: 'Declining unknown UPI collect requests is essential digital hygiene.',
    learningTip: 'If an unknown UPI collect request appears on your phone screen, immediately decline and block it.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-030',
    category: 'UPI, OTP & Banking',
    categoryLabel: 'UPI, OTP & Banking',
    iconType: 'list',
    title: 'Order banking incident steps.',
    instruction: 'Put the immediate emergency actions in order after losing money to a fraudulent transfer.',
    hintText: 'Call the National Cyber Helpline 1930 and freeze the bank account immediately.',
    scenario: 'You realize ₹20,000 was transferred after sharing details on an unverified portal.',
    interactionType: 'ordering',
    characterId: 'priya',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'b_step1', text: 'Call 1930 (National Cyber Crime Helpline) within the golden hour', correctOrder: 1 },
      { id: 'b_step2', text: 'Contact your bank immediately to block netbanking and card access', correctOrder: 2 },
      { id: 'b_step3', text: 'Preserve transaction ID, SMS alerts, and beneficiary UPI handle', correctOrder: 3 },
      { id: 'b_step4', text: 'File a formal online complaint at cybercrime.gov.in', correctOrder: 4 }
    ],
    correctTargetIds: ['b_step1', 'b_step2', 'b_step3', 'b_step4'],
    successFeedback: 'Critical golden-hour response ordered! Calling 1930 within the first 2 hours allows banks to freeze funds in transit.',
    correctionFeedback: 'Speed is essential. Dial 1930 immediately to freeze the money in the fraudster\'s receiving account.',
    learningTip: 'The "Golden Hour" is the first 2 hours after a fraudulent transaction. Quick reporting to 1930 maximizes recovery.',
    difficulty: 'Advanced',
    points: 100
  },

  // =========================================================================
  // CATEGORY 4: SHOPPING & FAKE OFFERS (031–040)
  // =========================================================================
  {
    id: 'puz-031',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Compare two smartphone stores.',
    instruction: 'Tap the safer, verified store selling the smartphone.',
    hintText: 'Brand new flagship phones cannot legitimately be discounted by 85% on unknown domains.',
    scenario: 'Maya is looking to purchase a new smartphone and compares an unverified flash sale with an official retailer.',
    interactionType: 'simulated-settings',
    characterId: 'maya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: '₹9,999',
      websiteBPrice: '₹54,999',
      websiteAUrl: 'discount-hub.in',
      websiteBUrl: 'samsung.com'
    },
    successFeedback: 'Official store chosen! Unrealistic discounts of 80%+ on electronics are advance-fee delivery scams.',
    correctionFeedback: 'Website A lists a ₹55,000 phone for ₹9,999 on an unverified domain—the phone will never be delivered.',
    learningTip: 'If a deal appears impossibly good compared to official retail prices, it is almost certainly a scam store.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-032',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Evaluate suspiciously cheap product.',
    instruction: 'Tap the warning sign on an online gadget listing.',
    hintText: 'Unknown sellers demanding full advance UPI payment without Cash on Delivery or return policies.',
    scenario: 'An Instagram profile lists designer headphones for ₹999 (original ₹14,000) with no physical address.',
    interactionType: 'single-select',
    characterId: 'maya',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'Instagram Flash Deal',
      jobFee: 'Prepay ₹999 (No COD available)'
    },
    successFeedback: 'Unverified prepay demand spotted! Social media storefronts without COD often vanish once paid.',
    correctionFeedback: 'Never transfer advance money to social media pages that have no physical address or verified reviews.',
    learningTip: 'When shopping from new or unfamiliar social media sellers, always choose Cash on Delivery (COD).',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-033',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'magnifier',
    title: 'Spot advance payment demands.',
    instruction: 'Tap the high-risk payment requirement on an unfamiliar storefront.',
    hintText: 'Legitimate stores offer escrow, card protection, or COD.',
    scenario: 'A seller on a chat group says: "Pay full amount via personal UPI scanner first, then I will courier the jacket."',
    interactionType: 'tap-to-discover',
    characterId: 'maya',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'upi://pay?pa=randomperson99@okaxis (Advance transfer only)'
    },
    successFeedback: 'Advance transfer trap spotted! Paying unknown individuals via personal UPI provides zero buyer protection.',
    correctionFeedback: 'Once you transfer money via direct UPI to a personal handle, there is no dispute mechanism if goods never arrive.',
    learningTip: 'Use established e-commerce platforms with verified return guarantees rather than peer-to-peer UPI.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-034',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'list',
    title: 'Match fake shipping messages.',
    instruction: 'Match each shipping claim to its warning sign.',
    hintText: 'Look for sudden customs demands and urgent links on parcels you never ordered.',
    scenario: 'Reviewing typical fake delivery notices that arrive via SMS.',
    interactionType: 'matching',
    characterId: 'rohan',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 's1', leftText: '"Your address is incomplete, pay ₹25 to re-route"', rightId: 'w1', rightText: 'Card credential phishing link' },
      { leftId: 's2', leftText: '"Parcel held by customs for high-value gift"', rightId: 'w2', rightText: 'Advance fee extortion trick' },
      { leftId: 's3', leftText: '"Delivery agent waiting, click to share live location"', rightId: 'w3', rightText: 'Malware installer APK trigger' }
    ],
    correctTargetIds: ['s1-w1', 's2-w2', 's3-w3'],
    successFeedback: 'All shipping traps matched! Nominal ₹25 fees are actually designed to capture complete debit card details.',
    correctionFeedback: 'Postal and courier services do not ask you to enter card CVVs to fix minor address typos.',
    learningTip: 'Track parcels exclusively by entering the tracking number on the official courier website (India Post, Blue Dart, etc.).',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-035',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Identify fake store clues.',
    instruction: 'Select all red flags that show this e-commerce website is fraudulent.',
    hintText: 'Check for missing return policies, generic contact emails, and missing company registry numbers.',
    scenario: 'Maya inspects the footer of a newly advertised shoe store offering 90% clearance discounts.',
    interactionType: 'multi-select',
    characterId: 'maya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'clue_email', label: 'Contact email is a free "@gmail.com" address instead of custom company domain', isSign: true },
      { id: 'clue_policy', label: 'Return policy page is blank or copied lorem-ipsum placeholder text', isSign: true },
      { id: 'clue_gstin', label: 'Verified 15-digit GSTIN number that matches public portal search', isSign: false },
      { id: 'clue_track', label: 'Integration with standard courier tracking portal', isSign: false }
    ],
    correctTargetIds: ['clue_email', 'clue_policy'],
    successFeedback: 'Red flags spotted! Fake storefronts typically use free Gmail addresses and dummy policy pages.',
    correctionFeedback: 'Legitimate corporate retailers maintain dedicated domain emails and legally compliant return policies.',
    learningTip: 'Always check the Contact Us and Return Policy pages before buying from a newly discovered website.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-036',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Choose secure payment choice.',
    instruction: 'Tap the safest payment method when ordering from an unfamiliar website for the first time.',
    hintText: 'Cash on Delivery or credit cards with chargeback protection are the safest options.',
    scenario: 'Arun wants to buy an artisanal ceramic pot from an independent craft shop he found online.',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Direct UPI Transfer',
      websiteAUrl: 'Transfer money directly to personal bank QR',
      websiteBPrice: 'Cash on Delivery (COD)',
      websiteBUrl: 'Pay only upon physical receipt and inspection'
    },
    successFeedback: 'Safe option chosen! COD ensures you do not lose funds if the item is never dispatched.',
    correctionFeedback: 'For new and untested merchants, always select Cash on Delivery or use payment gateways with dispute resolution.',
    learningTip: 'Use Cash on Delivery (COD) whenever testing an unfamiliar online vendor for the first time.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-037',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Evaluate free giveaway scam.',
    instruction: 'Tap the detail that proves this "free" festival gift is a scam.',
    hintText: 'If you have to pay a "shipping and handling fee" for a prize you won, you are the customer, not a winner.',
    scenario: 'An alert congratulates you: "You won a free iPhone 15 in Diwali lucky draw! Pay ₹499 shipping to claim."',
    interactionType: 'single-select',
    characterId: 'maya',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'Diwali Lucky Draw Winner',
      jobFee: 'Pay ₹499 Shipping Fee'
    },
    successFeedback: 'Advance-fee trick caught! You cannot win a contest or lottery you never entered.',
    correctionFeedback: 'Legitimate prize drawings never require winners to pay handling or courier fees in advance.',
    learningTip: 'If a "free prize" requires paying money to claim it, it is not a gift—it is an advance-fee fraud.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-038',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Spot counterfeit store signs.',
    instruction: 'Select all indicators that this website is a lookalike clone of an established brand.',
    hintText: 'Look for misspelled domain names and excessive countdown urgency timers.',
    scenario: 'You click an ad for a sneaker sale and land on a website that looks identical to a major brand.',
    interactionType: 'multi-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'f_url', label: 'Domain is "nikke-india-sale.shop" instead of official brand domain', isSign: true },
      { id: 'f_timer', label: 'Aggressive flashing countdown timer: "Offer ends in 02:45 minutes"', isSign: true },
      { id: 'f_reviews', label: 'Verified reviews from independent platforms with diverse dates', isSign: false },
      { id: 'f_ssl', label: 'Official corporate copyright and authorized distributor certification', isSign: false }
    ],
    correctTargetIds: ['f_url', 'f_timer'],
    successFeedback: 'Clone clues caught! Lookalike domains like "nikke-sale.shop" are set up by scammers to harvest card data.',
    correctionFeedback: 'Counterfeit sites rely on typos in domain names and artificial urgency timers to rush your judgment.',
    learningTip: 'Double check the spelling of the website domain in your browser\'s address bar before checking out.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-039',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'list',
    title: 'Order action after ghost order.',
    instruction: 'Put the safe steps in order after paying on a site that never provides a tracking number.',
    hintText: 'Contact bank for dispute, document proof, report the merchant, and monitor statements.',
    scenario: 'Five days after paying ₹3,000 for apparel, the seller deleted their Instagram page and disconnected their phone.',
    interactionType: 'ordering',
    characterId: 'maya',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'sh_1', text: 'Gather payment receipts, order emails, and seller chat screenshots', correctOrder: 1 },
      { id: 'sh_2', text: 'File a transaction dispute / chargeback request with your card issuer or bank', correctOrder: 2 },
      { id: 'sh_3', text: 'Lodge a complaint on the National Consumer Helpline (consumerhelpline.gov.in)', correctOrder: 3 },
      { id: 'sh_4', text: 'Report the scammer\'s UPI VPA on the Cyber Crime portal (1930)', correctOrder: 4 }
    ],
    correctTargetIds: ['sh_1', 'sh_2', 'sh_3', 'sh_4'],
    successFeedback: 'Dispute steps arranged! Quick chargeback filing with your card provider offers the best chance of refund.',
    correctionFeedback: 'Report fraudulent online merchants promptly to the National Consumer Helpline and your card issuer.',
    learningTip: 'Credit cards offer stronger statutory chargeback protection than direct bank account debit transfers.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-040',
    category: 'Shopping & Fake Offers',
    categoryLabel: 'Shopping & Fake Offers',
    iconType: 'shield',
    title: 'Sort store credibility clues.',
    instruction: 'Sort the highlighted store signal into Trustworthy Indicator vs Suspicious Red Flag.',
    hintText: 'Physical business registration and verified customer reviews are genuine trust signals.',
    scenario: 'Auditing a new seller offering handmade wooden furniture online.',
    interactionType: 'drag-and-drop',
    characterId: 'priya',
    sceneType: 'info_sorting_privacy',
    correctTargetId: 'keep_private',
    options: [
      { id: 'safe_share', label: 'Trustworthy Indicator' },
      { id: 'keep_private', label: 'Suspicious Red Flag' }
    ],
    successFeedback: 'Properly sorted! Absence of physical registration or GST details is a high-risk red flag.',
    correctionFeedback: 'Genuine commercial businesses display their GSTIN and verifiable customer support channels.',
    learningTip: 'You can verify any Indian business\'s 15-digit GSTIN for free on the official government portal (services.gst.gov.in).',
    difficulty: 'Casual',
    points: 100
  },

  // =========================================================================
  // CATEGORY 5: FAKE JOBS & TASK SCAMS (041–050)
  // =========================================================================
  {
    id: 'puz-041',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'magnifier',
    title: 'Spot upfront job registration fee.',
    instruction: 'Tap the detail that proves this work-from-home job is fraudulent.',
    hintText: 'Legitimate employers pay you for your work—they never ask you to pay them to start.',
    scenario: 'Arun sees an ad: "Simple data entry work. Earn ₹5,000 daily. Pay ₹2,000 refundable kit fee to receive files."',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'Data Entry Assistant',
      jobFee: '₹2,000 Registration Fee'
    },
    successFeedback: 'Job fee trap exposed! No genuine employer or recruiting company demands upfront registration fees.',
    correctionFeedback: 'Any job asking for a "registration fee", "training deposit", or "laptop security fee" is an advance-fee scam.',
    learningTip: 'Legitimate companies pay you. If you have to pay money to get a job, you are being scammed.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-042',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'shield',
    title: 'Identify task-deposit scam.',
    instruction: 'Tap the suspicious mechanic in a YouTube "like and subscribe" task job.',
    hintText: 'Task scams give small initial payouts to build trust, then demand thousands in "recharge deposits".',
    scenario: 'A Telegram group offers ₹150 for liking 3 videos, but says task #4 requires depositing ₹5,000 for "VIP commission."',
    interactionType: 'single-select',
    characterId: 'rohan',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_fake',
    scenePayload: {
      websiteAPrice: 'Deposit ₹5,000',
      websiteAUrl: '"Recharge ₹5,000 to unlock ₹7,500 commission payout"',
      websiteBPrice: 'Regular Job',
      websiteBUrl: '"No personal money deposit required at any time"'
    },
    successFeedback: 'Prepaid task trap recognized! Scammers pay ₹200 initially to lure victims into depositing lakhs.',
    correctionFeedback: 'The moment a "job" asks you to deposit your own money to unlock earnings, it is a high-loss task scam.',
    learningTip: 'Never deposit your own money to complete "tasks" or unlock "commissions." You will never get that money back.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-043',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'shield',
    title: 'Spot fake recruiter credentials demand.',
    instruction: 'Tap the sensitive information a recruiter should never demand during an interview.',
    hintText: 'Netbanking passwords and OTPs have zero role in legitimate employee background checks.',
    scenario: 'A self-proclaimed HR recruiter on WhatsApp asks for your netbanking username and password to "process salary account setup."',
    interactionType: 'single-select',
    characterId: 'priya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'rec_pwd', label: 'Netbanking login password and OTP verification code', isSign: true },
      { id: 'rec_cv', label: 'Resume detailing work experience and education', isSign: false },
      { id: 'rec_ref', label: 'Professional references from former managers', isSign: false },
      { id: 'rec_port', label: 'Portfolio samples of previous projects', isSign: false }
    ],
    correctTargetId: 'rec_pwd',
    correctTargetIds: ['rec_pwd'],
    successFeedback: 'Password demand caught! Salary accounts are created through authorized corporate bank forms, never passwords.',
    correctionFeedback: 'Employers only need your bank account number and IFSC code to deposit salary—never your password or OTP.',
    learningTip: 'To receive a salary, only provide your Account Number and IFSC. Never share netbanking credentials or login OTPs.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-044',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'shield',
    title: 'Compare job offer credibility.',
    instruction: 'Tap the legitimate recruitment process.',
    hintText: 'Real hiring involves formal interviews, verified company domains, and zero upfront fees.',
    scenario: 'Comparing an unsolicited WhatsApp job offer against a standard corporate hiring process.',
    interactionType: 'simulated-settings',
    characterId: 'arun',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'WhatsApp Offer',
      websiteAUrl: 'Hired in 5 mins on chat; ₹50,000/week without interview',
      websiteBPrice: 'Formal Recruitment',
      websiteBUrl: 'Formal interview rounds, official email domain, zero fees'
    },
    successFeedback: 'Legitimate recruitment identified! Professional companies never hire candidates within 5 minutes on WhatsApp without interviews.',
    correctionFeedback: 'Unsolicited WhatsApp messages offering astronomical salaries for basic work are phishing and task scams.',
    learningTip: 'Check the sender\'s email domain. Legitimate corporate recruiters reach out from official corporate domain addresses.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-045',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'shield',
    title: 'Spot task recharge trap.',
    instruction: 'Select all signs that this task website is designed to steal your savings.',
    hintText: 'Virtual wallets displaying fake balances and frozen funds requiring extra "taxes" to withdraw.',
    scenario: 'Rohan is on a website that shows a virtual balance of ₹35,000, but says he must pay ₹10,000 "tax" to withdraw it.',
    interactionType: 'multi-select',
    characterId: 'rohan',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 't_freeze', label: 'Account "frozen" unless you deposit more money to fix a negative score', isSign: true },
      { id: 't_tax', label: 'Demanding advance payment of 20% "TDS tax" before release of funds', isSign: true },
      { id: 't_contract', label: 'Written employment contract signed by registered corporate entity', isSign: false },
      { id: 't_prov', label: 'Provident Fund (PF) and official tax deduction compliance', isSign: false }
    ],
    correctTargetIds: ['t_freeze', 't_tax'],
    successFeedback: 'Task fraud mechanisms detected! The "balance" on the website is completely fake and controlled by scammers.',
    correctionFeedback: 'Scammers invent arbitrary "taxes", "system errors", and "recharge fees" to keep extracting money.',
    learningTip: 'A balance on an unverified website is just numbers on a screen. If you have to pay money to withdraw, it is a scam.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-046',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'list',
    title: 'Match job scam messages.',
    instruction: 'Match each job scam lure to the attacker\'s actual objective.',
    hintText: 'Attackers lure with high salaries, ease of work, and immediate start.',
    scenario: 'Analyzing incoming messages offering part-time remote employment.',
    interactionType: 'matching',
    characterId: 'maya',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'j1', leftText: '"Review hotels on Google Maps for ₹500/review"', rightId: 'jo1', rightText: 'Task scam leading to large deposit demands' },
      { leftId: 'j2', leftText: '"Fill out this APK form to receive your job kit"', rightId: 'jo2', rightText: 'Malware infection that reads bank OTPs' },
      { leftId: 'j3', leftText: '"Pay ₹1,500 security deposit for company laptop"', rightId: 'jo3', rightText: 'Advance fee fraud (laptop never arrives)' }
    ],
    correctTargetIds: ['j1-jo1', 'j2-jo2', 'j3-jo3'],
    successFeedback: 'All job lures matched! Attackers use enticing promises to install malware or extract advance payments.',
    correctionFeedback: 'Never install unknown APKs or send security deposits for unverified remote job positions.',
    learningTip: 'No reputable international brand conducts hiring via bulk WhatsApp messages from unknown international numbers.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-047',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'shield',
    title: 'Refuse guaranteed income promise.',
    instruction: 'Enter a firm refusal to an unsolicited job scammer on messaging.',
    hintText: 'Tell them to remove your number and that you do not accept unsolicited work offers.',
    scenario: 'A message from an unknown number says: "Hello dear, I am recruiting manager. Earn ₹8,000 daily from home."',
    interactionType: 'text-entry',
    characterId: 'arun',
    sceneType: 'text_refusal_entry',
    acceptedAnswers: ['stop', 'remove my number', 'not interested', 'do not message me', 'no', 'report spam'],
    successFeedback: 'Firm refusal logged! Blocking and reporting these spam numbers protects you and the community.',
    correctionFeedback: 'Do not engage in conversation with unknown job spammers. Block and report the sender immediately.',
    learningTip: 'Report scam messaging numbers using WhatsApp\'s built-in "Report and Block" button.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-048',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'magnifier',
    title: 'Spot premature identity demands.',
    instruction: 'Tap the document requested dangerously early in an unverified chat.',
    hintText: 'Never send copies of your Aadhaar and PAN before receiving a formal verifiable job offer letter.',
    scenario: 'Before any interview or company verification, a recruiter demands: "Send clear front and back photo of Aadhaar and PAN card."',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'Send photos of Aadhaar Card, PAN Card, and Cancelled Cheque'
    },
    successFeedback: 'Identity theft trap spotted! Fraudsters use stolen Aadhaar and PAN copies to open mule accounts and take micro-loans.',
    correctionFeedback: 'Identity documents should only be shared through secure official HR onboarding portals after accepting an official offer.',
    learningTip: 'Never send photos of your national ID or PAN card on WhatsApp to unverified recruiters.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-049',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'shield',
    title: 'Sort hiring steps.',
    instruction: 'Sort the highlighted hiring practice into Legitimate Practice vs Fraudulent Practice.',
    hintText: 'Background checks are paid by employers, never charged back to the candidate.',
    scenario: 'Priya evaluates whether a hiring requirement is industry standard or fraudulent.',
    interactionType: 'drag-and-drop',
    characterId: 'priya',
    sceneType: 'info_sorting_privacy',
    correctTargetId: 'keep_private',
    options: [
      { id: 'safe_share', label: 'Legitimate Practice' },
      { id: 'keep_private', label: 'Fraudulent Practice' }
    ],
    successFeedback: 'Accurately sorted! Charging candidates for background verification is an unethical scam practice.',
    correctionFeedback: 'Legitimate corporate background checks are funded 100% by the hiring enterprise.',
    learningTip: 'Legitimate employers cover all screening and background check costs. Candidates never pay.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-050',
    category: 'Fake Jobs & Task Scams',
    categoryLabel: 'Fake Jobs & Task Scams',
    iconType: 'list',
    title: 'Order recovery after paying recruiter.',
    instruction: 'Put the immediate steps in order after realizing you paid a fraudulent recruiter.',
    hintText: 'Halt all payments, report the transaction immediately, and preserve communication records.',
    scenario: 'You transferred ₹2,000 for a "registration fee" and the recruiter immediately asks for ₹8,000 more.',
    interactionType: 'ordering',
    characterId: 'arun',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'j_rec1', text: 'Stop all further transfers immediately—do NOT pay the second demand', correctOrder: 1 },
      { id: 'j_rec2', text: 'Call your bank / UPI provider to report fraud on the beneficiary account', correctOrder: 2 },
      { id: 'j_rec3', text: 'Call 1930 and register the complaint on cybercrime.gov.in', correctOrder: 3 },
      { id: 'j_rec4', text: 'Save screenshots of the recruitment ad, chat logs, and payment UTRs', correctOrder: 4 }
    ],
    correctTargetIds: ['j_rec1', 'j_rec2', 'j_rec3', 'j_rec4'],
    successFeedback: 'Proper escalation sequence! Refusing the second payment is crucial—scammers escalate demands endlessly.',
    correctionFeedback: 'Never pay extra fees hoping to recover the initial amount. Once you realize it is a scam, halt immediately.',
    learningTip: 'Never throw good money after bad. Scammers promise refunds only to steal even larger sums.',
    difficulty: 'Challenging',
    points: 100
  },

  // =========================================================================
  // CATEGORY 6: INVESTMENT & TRADING SCAMS (051–060)
  // =========================================================================
  {
    id: 'puz-051',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'shield',
    title: 'Spot guaranteed return claim.',
    instruction: 'Tap the claim that violates basic financial realities.',
    hintText: 'All legitimate investments carry risk. High returns with "zero risk" are mathematically impossible.',
    scenario: 'An ad on social media promises: "Double your money in 7 days! 100% guaranteed returns with institutional algorithms."',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'inv_guar', label: '"100% guaranteed 50% profit every week with zero capital risk"', isSign: true },
      { id: 'inv_sebi', label: '"Mutual fund investments are subject to market risks, read all scheme documents"', isSign: false },
      { id: 'inv_fd', label: '"Bank Fixed Deposit offering 7.1% annual interest insured up to ₹5 lakh"', isSign: false },
      { id: 'inv_gold', label: '"Sovereign Gold Bonds tied to physical gold price movements"', isSign: false }
    ],
    correctTargetId: 'inv_guar',
    correctTargetIds: ['inv_guar'],
    successFeedback: 'Impossible promise caught! Any claim of "guaranteed double returns in days" is a Ponzi or fake trading scam.',
    correctionFeedback: 'SEBI regulations strictly forbid promising guaranteed returns in securities markets.',
    learningTip: 'High returns always mean high risk. Promises of "guaranteed high returns with zero risk" are always fraudulent.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-052',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'magnifier',
    title: 'Spot fake stock-market guru.',
    instruction: 'Tap the suspicious element in this social media stock tip channel.',
    hintText: 'SEBI-registered research analysts have verified registration numbers and do not trade via anonymous Telegram channels.',
    scenario: 'A Telegram channel named "VIP Institutional Stock Tips" shares screenshots of luxury sports cars and ₹50 lakh daily gains.',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'VIP Stock Tips Club',
      jobFee: 'Join VIP Tip Group for ₹10,000/month'
    },
    successFeedback: 'Unregistered tip service spotted! Authentic financial advisors never sell "sure-shot jackpot tips" in anonymous chats.',
    correctionFeedback: 'Operating unregistered investment advisory services is illegal under SEBI regulations.',
    learningTip: 'Verify any stock advisor\'s SEBI registration number directly on the official SEBI portal (sebi.gov.in).',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-053',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'list',
    title: 'Match investment claims.',
    instruction: 'Match each deceptive investment pitch to its true risk.',
    hintText: 'Learn the real mechanics behind algorithmic trading and crypto cloud mining claims.',
    scenario: 'Reviewing typical pitches used to lure retail investors into unregulated schemes.',
    interactionType: 'matching',
    characterId: 'priya',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'i1', leftText: '"AI Robot trades forex automatically for 10% daily"', rightId: 'io1', rightText: 'Unregulated offshore platform (funds cannot be withdrawn)' },
      { leftId: 'i2', leftText: '"Exclusive pre-IPO shares at 90% discount"', rightId: 'io2', rightText: 'Fabricated share certificates with zero legal validity' },
      { leftId: 'i3', leftText: '"Crypto cloud mining with daily compounding interest"', rightId: 'io3', rightText: 'Classic Ponzi scheme using new deposits to pay old users' }
    ],
    correctTargetIds: ['i1-io1', 'i2-io2', 'i3-io3'],
    successFeedback: 'All deceptive pitches matched! These schemes use tech buzzwords (AI, Forex, Cloud) to mask simple theft.',
    correctionFeedback: 'Trading forex on unauthorized electronic platforms is illegal under the Foreign Exchange Management Act (FEMA).',
    learningTip: 'RBI publishes an "Alert List" of unauthorized forex trading platforms. Check rbi.org.in before signing up.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-054',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'shield',
    title: 'Identify fake trading group clues.',
    instruction: 'Select all signs of fabrication in this trading screenshot.',
    hintText: 'Look for fabricated P&L screenshots and group members who are all bots praising the admin.',
    scenario: 'Arun is added to a WhatsApp trading group where 50 members post screenshots thanking "Professor Rajiv" for ₹2 lakh gains.',
    interactionType: 'multi-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'tg_bots', label: 'All group members post identical praising messages within seconds of each other', isSign: true },
      { id: 'tg_admin', label: 'Admin uses an unverified foreign number (+44 or +234) while claiming to be in Mumbai', isSign: true },
      { id: 'tg_audit', label: 'Audited statutory annual balance sheet filed with Registrar of Companies', isSign: false },
      { id: 'tg_dep', label: 'Regulated depository account (NSDL or CDSL) holding actual shares', isSign: false }
    ],
    correctTargetIds: ['tg_bots', 'tg_admin'],
    successFeedback: 'Group theater exposed! Fraudulent trading groups populate the room with accomplice accounts to create social proof.',
    correctionFeedback: 'The "happy investors" in these groups are coordinated bots or accomplices designed to make you feel left out.',
    learningTip: 'Never trust screenshots of profits in private chat groups. They are easily created using demo accounts or Photoshop.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-055',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'shield',
    title: 'Conduct independent checks.',
    instruction: 'Select all legitimate government registries to verify an investment platform before transferring funds.',
    hintText: 'Verify banks with RBI, securities with SEBI, and companies with MCA.',
    scenario: 'Before investing ₹50,000 in a new finance company, Priya conducts independent regulatory checks.',
    interactionType: 'multi-select',
    characterId: 'priya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'reg_sebi', label: 'SEBI Registered Intermediaries database (sebi.gov.in)', isSign: true },
      { id: 'reg_rbi', label: 'RBI List of Approved NBFCs and Banking Institutions (rbi.org.in)', isSign: true },
      { id: 'reg_insta', label: 'Number of followers and likes on their Instagram profile', isSign: false },
      { id: 'reg_tg', label: 'Number of members in their public Telegram broadcast channel', isSign: false }
    ],
    correctTargetIds: ['reg_sebi', 'reg_rbi'],
    successFeedback: 'Official regulatory portals selected! SEBI and RBI registries are the only legal sources of verification.',
    correctionFeedback: 'Social media follower counts can be purchased for a few hundred rupees and mean nothing regarding legitimacy.',
    learningTip: 'Always verify financial intermediaries on sebi.gov.in or rbi.org.in before depositing any investment capital.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-056',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'shield',
    title: 'Spot borrowing pressure.',
    instruction: 'Tap the predatory advice urging the victim to take debt to invest.',
    hintText: 'Scammers urge you to take personal loans or pawn jewelry to invest because they want maximum extraction before disappearing.',
    scenario: 'The investment "mentor" writes: "You only have ₹20,000? Take an instant digital loan for ₹2 lakh—you will repay it in 3 days!"',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_fake',
    scenePayload: {
      websiteAPrice: 'Borrow to Invest',
      websiteAUrl: '"Take instant micro-loan to capitalize on today\'s trade"',
      websiteBPrice: 'Disciplined Investing',
      websiteBUrl: '"Never invest borrowed money or funds needed for emergencies"'
    },
    successFeedback: 'Predatory borrowing trap avoided! Never borrow money to invest in speculative schemes.',
    correctionFeedback: 'Legitimate financial planners advise investing only surplus savings, never borrowed funds.',
    learningTip: 'Never borrow money, pawn gold, or take personal loans to participate in an online investment scheme.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-057',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'magnifier',
    title: 'Spot personal account transfer demand.',
    instruction: 'Tap the suspicious beneficiary account in this investment deposit instruction.',
    hintText: 'SEBI-registered brokers require funds to be deposited only into official corporate clearing accounts in your own name.',
    scenario: 'An app claiming to be an institutional trading platform tells you to send ₹50,000 to "Ramesh Kumar (Current Account)".',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'upi_payment_review',
    correctTargetId: 'recipient',
    scenePayload: {
      upiRecipient: 'Ramesh Kumar (Personal Savings Account)'
    },
    successFeedback: 'Mule account spotted! Legitimate brokers never ask you to transfer funds to random individual accounts.',
    correctionFeedback: 'Depositing money into personal accounts means your funds are going straight into a money mule\'s pocket.',
    learningTip: 'Regulated brokers only accept funds from your own linked bank account into their verified corporate clearing account.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-058',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'shield',
    title: 'Compare official vs fake source.',
    instruction: 'Tap the authentic, regulated investment channel.',
    hintText: 'Official portals have verified domains and direct depository connectivity.',
    scenario: 'Comparing an approved mutual fund distributor portal against an unverified WhatsApp trading link.',
    interactionType: 'simulated-settings',
    characterId: 'priya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'WhatsApp Trading',
      websiteAUrl: 'Transfer via chat to VIP mentor app link',
      websiteBPrice: 'AMFI / SEBI Platform',
      websiteBUrl: 'Direct investment via registered AMC portal or broker'
    },
    successFeedback: 'Regulated channel chosen! Investing through official AMFI/SEBI channels protects your ownership of units.',
    correctionFeedback: 'Unregulated chat platforms provide zero legal recourse if the operators shut down their servers.',
    learningTip: 'Ensure your investments appear in your official Consolidated Account Statement (CAS) from NSDL/CDSL.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-059',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'list',
    title: 'Order safe investment steps.',
    instruction: 'Put the due-diligence steps in order before parting with your hard-earned money.',
    hintText: 'Check registration first, understand the product, verify risks, and only transfer through banking channels.',
    scenario: 'Priya considers opening an account with a newly launched boutique investment firm.',
    interactionType: 'ordering',
    characterId: 'priya',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'inv_step1', text: 'Verify the firm\'s SEBI registration number on sebi.gov.in', correctOrder: 1 },
      { id: 'inv_step2', text: 'Read the official Scheme Information Document and risk disclosure', correctOrder: 2 },
      { id: 'inv_step3', text: 'Ensure the deposit goes to an official corporate account, not an individual', correctOrder: 3 },
      { id: 'inv_step4', text: 'Confirm the holdings reflect in your independent NSDL/CDSL Demat statement', correctOrder: 4 }
    ],
    correctTargetIds: ['inv_step1', 'inv_step2', 'inv_step3', 'inv_step4'],
    successFeedback: 'Sound investment process ordered! Independent Demat verification ensures actual shares are held.',
    correctionFeedback: 'Never skip regulatory verification before investing. It takes only 2 minutes on sebi.gov.in.',
    learningTip: 'If your investment does not show up in your official monthly NSDL/CDSL statement, you do not own the asset.',
    difficulty: 'Advanced',
    points: 100
  },
  {
    id: 'puz-060',
    category: 'Investment & Trading Scams',
    categoryLabel: 'Investment & Trading Scams',
    iconType: 'shield',
    title: 'Refuse profit-release fee.',
    instruction: 'Enter a firm refusal when a fake trading platform demands ₹25,000 to "release" your supposed profits.',
    hintText: 'Real brokers deduct taxes and commissions automatically—they never demand advance fees to release money.',
    scenario: 'The app shows you made ₹2,00,000, but says: "Pay ₹25,000 withdrawal handling fee to unlock your payout."',
    interactionType: 'text-entry',
    characterId: 'arun',
    sceneType: 'text_refusal_entry',
    acceptedAnswers: ['no', 'i will not pay', 'deduct from balance', 'scam', 'no more money', 'i report you'],
    successFeedback: 'Withdrawal fee refusal registered! Demanding advance fees to release profits is the final extraction stage of trading fraud.',
    correctionFeedback: 'Legitimate brokers deduct taxes and brokerage fees directly from the balance. Demanding separate advance payments is a fraud.',
    learningTip: 'Never pay money to withdraw your own money. Any platform demanding fees to release profits is 100% fraudulent.',
    difficulty: 'Standard',
    points: 100
  },

  // =========================================================================
  // CATEGORY 7: MALICIOUS LINKS, APKS & DEVICE SECURITY (061–070)
  // =========================================================================
  {
    id: 'puz-061',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'magnifier',
    title: 'Spot parcel tracking link.',
    instruction: 'Tap the suspicious link in this courier notification.',
    hintText: 'Courier services do not host tracking links on random dynamic DNS domains.',
    scenario: 'An SMS arrives: "Your parcel #IN88921 is delayed. Update delivery location immediately at: https://indiapost-update.top/track"',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'scam_message_inspect',
    correctTargetId: 'link',
    scenePayload: {
      suspiciousUrl: 'https://indiapost-update.top/track'
    },
    successFeedback: 'Fake tracking domain caught! Official India Post uses indiapost.gov.in, never ".top" or ".xyz" extensions.',
    correctionFeedback: 'Look closely at domain endings. Government and national couriers end in .gov.in or .com, not .top.',
    learningTip: 'Copy the tracking number and visit the courier\'s official website directly instead of tapping links in SMS.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-062',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'shield',
    title: 'Identify fake e-challan APK.',
    instruction: 'Tap the dangerous file format attached to an alleged traffic fine notification.',
    hintText: 'Traffic police send informational texts or official portal links—never downloadable Android .apk installer files.',
    scenario: 'A message says: "Traffic fine unpaid: ₹1,000. Install Parivahan_eChallan.apk to view violation photo and pay."',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'software_update_choice',
    correctTargetId: 'remind_later',
    scenePayload: {
      softwareVersion: 'Parivahan_eChallan.apk (Unknown Developer)'
    },
    options: [
      { id: 'update_now', label: 'Download and install Parivahan_eChallan.apk' },
      { id: 'remind_later', label: 'Refuse APK; verify on official echallan.parivahan.gov.in' }
    ],
    successFeedback: 'Dangerous APK rejected! Fake e-challan APKs contain banking Trojans that forward all your incoming SMS to hackers.',
    correctionFeedback: 'Government traffic portals never distribute APK files via WhatsApp or SMS to settle traffic fines.',
    learningTip: 'Never install an APK file received via SMS or WhatsApp. Legitimate apps are installed via Google Play or official gov.in sites.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-063',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'shield',
    title: 'Handle unknown APK offer.',
    instruction: 'Select all safe actions when prompted to install an app from outside the official store.',
    hintText: 'Keep "Install unknown apps" disabled on your Android phone.',
    scenario: 'A website prompts: "To view this video / receive your cashback, enable Install Unknown Sources and download app.apk."',
    interactionType: 'multi-select',
    characterId: 'rohan',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'apk_block', label: 'Keep Android "Install from Unknown Sources" setting strictly disabled', isSign: true },
      { id: 'apk_scan', label: 'Reject the download and close the unverified browser tab immediately', isSign: true },
      { id: 'apk_allow', label: 'Grant all permissions to see if the video works', isSign: false },
      { id: 'apk_share', label: 'Forward the APK to friends to test if it is safe', isSign: false }
    ],
    correctTargetIds: ['apk_block', 'apk_scan'],
    successFeedback: 'Device security preserved! Sideloading unknown APKs bypasses Android\'s security protections.',
    correctionFeedback: 'Sideloaded APKs can quietly capture keystrokes, read SMS OTPs, and hijack your bank accounts.',
    learningTip: 'Keep "Install from Unknown Sources" disabled in your Android settings to prevent accidental malware installs.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-064',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'shield',
    title: 'Spot excessive app permissions.',
    instruction: 'Tap the permission that a simple calculator app should NEVER request.',
    hintText: 'A calculator only needs math logic—it never needs your SMS or contacts.',
    scenario: 'A "Smart Calculator" app from an unverified website requests permissions upon opening.',
    interactionType: 'single-select',
    characterId: 'thatha',
    sceneType: 'app_permissions_review',
    correctTargetId: 'contacts',
    scenePayload: {
      appName: 'Smart Calculator Plus'
    },
    successFeedback: 'Excessive permission spotted! A calculator requesting Contacts or SMS is spyware designed to harvest private data.',
    correctionFeedback: 'Always ask: "Does this app genuinely need this permission to function?" If not, deny it immediately.',
    learningTip: 'Review app permissions critically. Deny SMS, Contact, and Location access if the app does not fundamentally need them.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-065',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'shield',
    title: 'Simulate permission audit.',
    instruction: 'Tap the risky permission toggle to turn it off on this photo editing app.',
    hintText: 'A photo editor needs photos, but does not need access to your contacts or SMS.',
    scenario: 'Priya audits the permissions of a newly downloaded photo filter app.',
    interactionType: 'simulated-settings',
    characterId: 'priya',
    sceneType: 'app_permissions_review',
    correctTargetId: 'contacts',
    successFeedback: 'Unnecessary permission disabled! Restricting contacts access prevents photo apps from harvesting your address book.',
    correctionFeedback: 'Photo editors only need storage/photos access—never contacts, microphone, or call logs.',
    learningTip: 'Regularly audit app permissions in Android Settings > Apps > Permission Manager.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-066',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'magnifier',
    title: 'Spot fake customer care search result.',
    instruction: 'Tap the suspicious element in this Google search result for "Airline Customer Care".',
    hintText: 'Scammers buy search ads or edit Google Maps listings with their personal mobile numbers.',
    scenario: 'Searching for airline helpline to reschedule a flight, the top sponsored result displays a personal mobile number.',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'Air Helpline: +91 81234 99887 (Sponsored Ad Result)'
    },
    successFeedback: 'Fake helpline caught! Fraudsters place sponsored ads with personal mobile numbers pretending to be customer care.',
    correctionFeedback: 'Never call numbers shown directly in Google search ad snippets. Visit the official airline website to get contact numbers.',
    learningTip: 'Never trust helpline numbers from search engine snippets or map edits. Get them exclusively from the official website.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-067',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'list',
    title: 'Match suspicious attachments.',
    instruction: 'Match each email attachment format to its safety handling rule.',
    hintText: 'Be wary of executable extensions like .exe, .scr, and .apk hidden behind double extensions.',
    scenario: 'Reviewing file attachments sent by an unknown sender claiming to be an invoice.',
    interactionType: 'matching',
    characterId: 'priya',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'f1', leftText: 'Invoice_Payment.pdf.exe', rightId: 'fo1', rightText: 'Dangerous executable disguised as document (delete immediately)' },
      { leftId: 'f2', leftText: 'Receipt_December.zip', rightId: 'fo2', rightText: 'Compressed archive potentially containing macro malware' },
      { leftId: 'f3', leftText: 'Statement verified on portal', rightId: 'fo3', rightText: 'Safest method: download directly from authenticated portal' }
    ],
    correctTargetIds: ['f1-fo1', 'f2-fo2', 'f3-fo3'],
    successFeedback: 'Double extension trick unmasked! Windows hides extensions by default, making "Invoice.pdf.exe" look like a harmless PDF.',
    correctionFeedback: 'Never double-click unknown attachments ending in .exe, .scr, or .vbs.',
    learningTip: 'Enable "Show File Extensions" on your computer to easily spot deceptive files like "Invoice.pdf.exe".',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-068',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'shield',
    title: 'Identify fake update popup.',
    instruction: 'Tap the safer choice when encountering an update prompt on a random website.',
    hintText: 'Official operating system updates come through phone Settings, never from browser popups.',
    scenario: 'While browsing news, a loud popup claims: "Your Chrome browser is infected with 13 viruses! Update immediately to fix."',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'software_update_choice',
    correctTargetId: 'remind_later',
    scenePayload: {
      softwareVersion: 'Urgent_Browser_Cleaner.apk'
    },
    options: [
      { id: 'update_now', label: 'Click "Update Clean Now" in browser popup' },
      { id: 'remind_later', label: 'Close tab; check official Google Play updates instead' }
    ],
    successFeedback: 'Fake virus alert dismissed! Websites cannot scan your phone for viruses; they use scare tactics to trick you into downloading malware.',
    correctionFeedback: 'Web browser popups claiming your phone has "13 viruses" are universally deceptive ads (scareware).',
    learningTip: 'Close tabs that show flashy "Virus Alert" warnings. Only update apps via the official Google Play Store or Apple App Store.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-069',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'list',
    title: 'Order device recovery steps.',
    instruction: 'Put the remediation steps in order after realizing you accidentally installed a suspicious APK.',
    hintText: 'Disconnect networking immediately (Airplane mode), uninstall the app, check bank accounts, and reset credentials.',
    scenario: 'Arun realizes an app he sideloaded is requesting accessibility and overlay permissions.',
    interactionType: 'ordering',
    characterId: 'arun',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'dev_1', text: 'Turn on Airplane Mode immediately to sever the attacker\'s remote connection', correctOrder: 1 },
      { id: 'dev_2', text: 'Uninstall the suspicious app from Android Settings > Apps', correctOrder: 2 },
      { id: 'dev_3', text: 'From another clean device, change critical banking and email passwords', correctOrder: 3 },
      { id: 'dev_4', text: 'Run Google Play Protect scan and review recent bank transactions', correctOrder: 4 }
    ],
    correctTargetIds: ['dev_1', 'dev_2', 'dev_3', 'dev_4'],
    successFeedback: 'Emergency device containment executed! Enabling Airplane mode instantly stops malware from transmitting your OTPs.',
    correctionFeedback: 'Cutting data connection halts real-time data theft while you safely remove the offending application.',
    learningTip: 'If your phone behaves erratically after installing an app, immediately enable Airplane mode to stop data leakage.',
    difficulty: 'Advanced',
    points: 100
  },
  {
    id: 'puz-070',
    category: 'Malicious Links, APKs & Device Security',
    categoryLabel: 'Malicious Links, APKs & Device Security',
    iconType: 'magnifier',
    title: 'Spot suspicious login page.',
    instruction: 'Tap the domain detail that reveals this login screen is a fake phishing page.',
    hintText: 'Look at the address bar URL, not the familiar logos on the screen.',
    scenario: 'Priya is prompted to log in to her email, but notices the URL bar in her mobile browser.',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'https://accounts.google.com.security-verify.top/signin'
    },
    successFeedback: 'Phishing domain detected! The real domain is "security-verify.top", not google.com. The google.com text is just a subdomain trick.',
    correctionFeedback: 'The true domain is the text immediately before the last slash. "google.com.something.top" belongs to something.top.',
    learningTip: 'Read URLs backwards from the first single slash to find the true domain: example.com/page.',
    difficulty: 'Standard',
    points: 100
  },

  // =========================================================================
  // CATEGORY 8: ACCOUNT SECURITY & PRIVACY (071–080)
  // =========================================================================
  {
    id: 'puz-071',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'shield',
    title: 'Choose the strongest password.',
    instruction: 'Tap the password that provides the strongest resistance against brute-force attacks.',
    hintText: 'Long passphrases of 4+ unrelated words are significantly stronger than short predictable substitutions like P@ssw0rd1.',
    scenario: 'Arun is updating his primary email master password.',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'pwd_strong', label: 'Mango-Bicycle-Thunder-Cloud#42 (Long memorable passphrase)', isSign: true },
      { id: 'pwd_weak1', label: 'Arun@123 (Easily guessed personal name + common symbol)', isSign: false },
      { id: 'pwd_weak2', label: 'Password2024 (Dictionary word + current year)', isSign: false },
      { id: 'pwd_weak3', label: '12345678 (Top leaked password globally)', isSign: false }
    ],
    correctTargetId: 'pwd_strong',
    correctTargetIds: ['pwd_strong'],
    successFeedback: 'Strong passphrase selected! Length is the #1 factor in password strength against automated cracking.',
    correctionFeedback: 'Short substitutions like Arun@123 are cracked in seconds by automated dictionary attack tools.',
    learningTip: 'Use a passphrase: 3–4 random memorable words strung together with numbers and symbols.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-072',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'list',
    title: 'Match password reuse risks.',
    instruction: 'Match each password habit to its security vulnerability.',
    hintText: 'When you reuse one password everywhere, a breach of one small website compromises all your accounts.',
    scenario: 'Understanding why credential stuffing attacks succeed.',
    interactionType: 'matching',
    characterId: 'arun',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'pr1', leftText: 'Same password on gaming forum and netbanking', rightId: 'pro1', rightText: 'Gaming site leak allows attackers to drain bank account' },
      { leftId: 'pr2', leftText: 'Writing passwords on sticky notes on monitor', rightId: 'pro2', rightText: 'Physical exposure to visitors and office cleaners' },
      { leftId: 'pr3', leftText: 'Using a dedicated password manager app', rightId: 'pro3', rightText: 'Generates unique 20-character passwords for every site safely' }
    ],
    correctTargetIds: ['pr1-pro1', 'pr2-pro2', 'pr3-pro3'],
    successFeedback: 'Password hygiene risks matched! Credential stuffing exploits people who reuse the same password on multiple sites.',
    correctionFeedback: 'Never reuse your primary email or banking password on entertainment or shopping websites.',
    learningTip: 'Use a trusted password manager (Bitwarden, 1Password, Google Password Manager) to generate unique passwords.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-073',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'shield',
    title: 'Simulate enabling 2FA.',
    instruction: 'Tap the setting that adds an extra layer of defense beyond just a password.',
    hintText: 'Two-Factor Authentication keeps accounts safe even if someone discovers your password.',
    scenario: 'Priya is reviewing her social media account settings to prevent unauthorized takeovers.',
    interactionType: 'simulated-settings',
    characterId: 'priya',
    sceneType: 'account_security_settings',
    correctTargetId: 'set_2fa',
    successFeedback: 'Two-Factor Authentication enabled! 2FA stops 99% of automated account takeover attempts.',
    correctionFeedback: 'A password alone is not enough. Turn on Two-Factor Authentication (2FA) across all email and banking accounts.',
    learningTip: 'Enable Two-Factor Authentication (2FA) everywhere. An authenticator app is even safer than SMS codes.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-074',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'shield',
    title: 'Identify suspicious login alert.',
    instruction: 'Tap the correct response to an unexpected login alert from a foreign location.',
    hintText: 'Log out of all unknown sessions immediately and change your password.',
    scenario: 'You receive an alert: "New login to your Google Account from Windows 11 device in Frankfurt, Germany."',
    interactionType: 'single-select',
    characterId: 'priya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Ignore Alert',
      websiteAUrl: '"Probably just a temporary network glitch, ignore it"',
      websiteBPrice: 'Secure Account Now',
      websiteBUrl: '"No, it was not me. Terminate all devices & change password."'
    },
    successFeedback: 'Immediate containment chosen! Terminating active sessions ejects unauthorized intruders.',
    correctionFeedback: 'Never ignore login alerts from unknown cities or devices. Treat them as an active compromise.',
    learningTip: 'Go to your account security settings, select "Manage all devices", and click "Sign out" on unrecognized sessions.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-075',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'shield',
    title: 'Sort personal data privacy.',
    instruction: 'Sort the highlighted detail into Safe to Share Publicly vs Keep Strictly Confidential.',
    hintText: 'Mother\'s maiden name and Aadhaar details are used for identity verification questions.',
    scenario: 'Priya reviews what personal details should never be posted on social media profiles.',
    interactionType: 'drag-and-drop',
    characterId: 'priya',
    sceneType: 'info_sorting_privacy',
    correctTargetId: 'keep_private',
    options: [
      { id: 'safe_share', label: 'Safe to Share Publicly' },
      { id: 'keep_private', label: 'Keep Strictly Confidential' }
    ],
    successFeedback: 'Correctly classified! Mother\'s maiden name, date of birth, and Aadhaar numbers must remain private.',
    correctionFeedback: 'Attackers harvest public birthdays and family names to answer account security recovery questions.',
    learningTip: 'Do not post full date of birth, home address, or ID documents on public social media profiles.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-076',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'magnifier',
    title: 'Spot recovery code request.',
    instruction: 'Tap the code in this incoming message that an attacker is trying to trick you into forwarding.',
    hintText: 'Scammers trigger a password reset on your account, then message you pretending they sent a code by accident.',
    scenario: 'An acquaintance on WhatsApp messages: "Hey, I entered my phone wrong and sent a verification code to your SMS. What is it?"',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'WhatsApp Verification Code: 492-108 (Do not share)'
    },
    successFeedback: 'Account takeover thwarted! The attacker triggered password reset on YOUR account and asked you for the code.',
    correctionFeedback: 'Never forward verification codes to anyone—even if a friend\'s account asks. Their account is already hacked.',
    learningTip: 'If anyone messages asking for a code sent to your phone, it is an attempt to hack YOUR account.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-077',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'shield',
    title: 'Unexpected password reset email.',
    instruction: 'Tap the safest action upon receiving an unexpected password reset link.',
    hintText: 'Do not click links inside unsolicited reset emails. Check your account settings directly.',
    scenario: 'An email states: "Your Instagram password reset request. Click here to change password now."',
    interactionType: 'single-select',
    characterId: 'maya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Click Link in Email',
      websiteAUrl: 'Tap link to see who requested the reset',
      websiteBPrice: 'Verify in App Directly',
      websiteBUrl: 'Delete email; check login activity inside official app'
    },
    successFeedback: 'Safe action chosen! Deleting the unsolicited email and checking the app directly prevents phishing traps.',
    correctionFeedback: 'Unsolicited reset emails may either be phishing links or someone testing your username. Never tap the link.',
    learningTip: 'If you did not request a password reset, do not click the link. Open the official app to ensure 2FA is active.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-078',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'list',
    title: 'Match privacy settings.',
    instruction: 'Match each privacy setting to its protective benefit.',
    hintText: 'Privacy settings prevent strangers from scraping your profile or adding you to spam groups.',
    scenario: 'Configuring social messaging privacy controls.',
    interactionType: 'matching',
    characterId: 'priya',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'ps1', leftText: 'Group Add Permission: "My Contacts Only"', rightId: 'pso1', rightText: 'Prevents strangers from adding you to crypto/task scam groups' },
      { leftId: 'ps2', leftText: 'Profile Photo: "Contacts Only"', rightId: 'pso2', rightText: 'Prevents impersonators from downloading your picture for fake profiles' },
      { leftId: 'ps3', leftText: 'Disappearing Messages: "Enabled"', rightId: 'pso3', rightText: 'Reduces permanent digital footprint for sensitive conversations' }
    ],
    correctTargetIds: ['ps1-pso1', 'ps2-pso2', 'ps3-pso3'],
    successFeedback: 'Privacy settings matched! Restricting "Who can add me to groups" prevents 90% of automated spam group adds.',
    correctionFeedback: 'Configuring messaging privacy settings limits exposure to organized scam networks.',
    learningTip: 'In WhatsApp Settings > Privacy > Groups, change "Who can add me to groups" from "Everyone" to "My Contacts".',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-079',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'list',
    title: 'Order account recovery steps.',
    instruction: 'Put the account recovery steps in order after realizing your social media account was compromised.',
    hintText: 'Recover primary email first, reset password, revoke unknown devices, and warn friends.',
    scenario: 'Your Instagram account is posting cryptocurrency stories that you never created.',
    interactionType: 'ordering',
    characterId: 'maya',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'rec_s1', text: 'Secure and change the password of your linked primary email account first', correctOrder: 1 },
      { id: 'rec_s2', text: 'Use official platform account recovery to reset your password and enable 2FA', correctOrder: 2 },
      { id: 'rec_s3', text: 'Go to Settings > Devices and log out of all active unknown sessions', correctOrder: 3 },
      { id: 'rec_s4', text: 'Warn friends via another channel that your account was temporarily hijacked', correctOrder: 4 }
    ],
    correctTargetIds: ['rec_s1', 'rec_s2', 'rec_s3', 'rec_s4'],
    successFeedback: 'Proper account recovery ordered! Securing your primary email first prevents hackers from resetting passwords back.',
    correctionFeedback: 'Always secure your primary email account first; it is the master key to all other accounts.',
    learningTip: 'If your social account is hacked, secure your recovery email first, otherwise the hacker will reset it again.',
    difficulty: 'Advanced',
    points: 100
  },
  {
    id: 'puz-080',
    category: 'Account Security & Privacy',
    categoryLabel: 'Account Security & Privacy',
    iconType: 'shield',
    title: 'Spot social media impersonation.',
    instruction: 'Select all clues that show a profile is an imposter copying a friend\'s real account.',
    hintText: 'Look for slightly modified handles (extra underscores or letters) and very recent creation dates.',
    scenario: 'You receive a new follow request and message from a profile using your friend Rohan\'s photo.',
    interactionType: 'multi-select',
    characterId: 'rohan',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'imp_handle', label: 'Handle has extra characters: "@rohan_sharma_official_2"', isSign: true },
      { id: 'imp_fresh', label: 'Account created yesterday with only 3 posts and 12 followers', isSign: true },
      { id: 'imp_mutual', label: 'Account with 4 years of history and 150 mutual friends', isSign: false },
      { id: 'imp_tag', label: 'Tagged in mutual family photos dating back several years', isSign: false }
    ],
    correctTargetIds: ['imp_handle', 'imp_fresh'],
    successFeedback: 'Clone profile detected! Fraudsters copy profile pictures and send friend requests to the victim\'s entire follower list.',
    correctionFeedback: 'Cloned accounts usually ask for emergency money within hours of connecting.',
    learningTip: 'If a friend sends a new friend request out of the blue, call them on the phone to check if their account was cloned.',
    difficulty: 'Standard',
    points: 100
  },

  // =========================================================================
  // CATEGORY 9: AI VOICE CLONING, DEEPFAKES & FAMILY IMPERSONATION (081–090)
  // =========================================================================
  {
    id: 'puz-081',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Urgent family emergency call.',
    instruction: 'Tap the safest verification action when a caller sounds like your relative in an emergency.',
    hintText: 'Hang up and call your family member back on their known personal phone number.',
    scenario: 'A distressed voice sounding just like your nephew calls: "Chacha, I had a car accident and need ₹20,000 for hospital bail immediately!"',
    interactionType: 'single-select',
    characterId: 'thatha',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Transfer Panic Funds',
      websiteAUrl: '"Send ₹20,000 immediately to hospital UPI handle"',
      websiteBPrice: 'Call Known Number',
      websiteBUrl: '"Hang up and call nephew on his saved personal number"'
    },
    successFeedback: 'Panic bypassed safely! AI voice cloning allows scammers to mimic voices using just 3 seconds of audio from social media.',
    correctionFeedback: 'Always hang up and dial your family member on their saved phone number to verify their safety.',
    learningTip: 'Establish a private "family safety codeword" that only real family members know to confirm emergencies.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-082',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Why voice is not proof.',
    instruction: 'Select all reasons why hearing a familiar voice is no longer sufficient proof of identity.',
    hintText: 'Generative AI voice synthesis can clone tone, pitch, accent, and emotional distress convincingly.',
    scenario: 'Understanding the capabilities of modern audio deepfake technologies.',
    interactionType: 'multi-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'v_clone', label: 'AI can clone vocal cadence and tone from short public video clips', isSign: true },
      { id: 'v_spoof', label: 'Caller ID display numbers can be spoofed to look like real contacts', isSign: true },
      { id: 'v_dna', label: 'Voice transmission carries cryptographic government identity certification', isSign: false },
      { id: 'v_law', label: 'Telecom operators automatically block all synthetic audio transmissions', isSign: false }
    ],
    correctTargetIds: ['v_clone', 'v_spoof'],
    successFeedback: 'Technological realities recognized! Modern generative AI can replicate familiar voices with alarming accuracy.',
    correctionFeedback: 'Hearing a loved one\'s voice over an unknown number cannot be relied upon as absolute proof of identity.',
    learningTip: 'Never send money based solely on voice messages or calls from unknown numbers without independent verification.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-083',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Safe callback method.',
    instruction: 'Tap the proper callback procedure to verify a distressed relative.',
    hintText: 'Never press redial on the incoming call—dial the saved contact directly from your address book.',
    scenario: 'You receive an urgent audio call from "+91 99000 11223" claiming to be your sister in distress.',
    interactionType: 'single-select',
    characterId: 'priya',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Redial Incoming Number',
      websiteAUrl: 'Press redial on the strange number that just called',
      websiteBPrice: 'Saved Address Book',
      websiteBUrl: 'Open phone contacts and call sister\'s verified saved number'
    },
    successFeedback: 'Proper callback executed! Redialing the incoming number merely connects you right back to the fraudster.',
    correctionFeedback: 'Always open your address book and dial the contact\'s established number directly.',
    learningTip: 'Always initiate a fresh call using your saved address book to reach the genuine person.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-084',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'magnifier',
    title: 'Spot unusual video message request.',
    instruction: 'Tap the bizarre financial request in this simulated celebrity video greeting.',
    hintText: 'Deepfaked celebrities often promise cryptocurrency giveaways or investment schemes.',
    scenario: 'A video shows a famous cricketer or actor telling fans to deposit ₹1,000 to receive ₹5,000 back for charity.',
    interactionType: 'tap-to-discover',
    characterId: 'arun',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'Send ₹1,000 to UPI: celebrity-foundation@fakeupi to receive 5x return'
    },
    successFeedback: 'Celebrity deepfake scam spotted! Scammers use lip-sync AI models to make public figures appear to endorse fraudulent schemes.',
    correctionFeedback: 'Celebrities do not run "deposit ₹1,000 get ₹5,000" schemes on social media.',
    learningTip: 'Treat all videos of famous personalities endorsing get-rich-quick schemes as synthetic deepfakes.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-085',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'list',
    title: 'Match deepfake verification steps.',
    instruction: 'Match each synthetic media sign to its verification action.',
    hintText: 'Learn specific challenges that trip up real-time generative face-swaps.',
    scenario: 'Verifying suspicious video and audio messages before trusting them.',
    interactionType: 'matching',
    characterId: 'priya',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'd1', leftText: 'Ask the caller to turn their head sideways', rightId: 'do1', rightText: 'Deepfake face-swaps distort and fail at extreme angles' },
      { leftId: 'd2', leftText: 'Ask a private personal question only they know', rightId: 'do2', rightText: 'Exposes imposter who lacks intimate family knowledge' },
      { leftId: 'd3', leftText: 'Ask for their pre-arranged family safety code', rightId: 'do3', rightText: 'Instant verification method agreed beforehand' }
    ],
    correctTargetIds: ['d1-do1', 'd2-do2', 'd3-do3'],
    successFeedback: 'Verification tests matched! Deepfake models struggle with turning profiles, rapid hand movements, and private family questions.',
    correctionFeedback: 'A simple question like "What is our pet dog\'s name?" immediately defeats an AI voice clone.',
    learningTip: 'Ask an unexpected personal question (e.g. "What did we eat at lunch last Sunday?") to test an unverified voice caller.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-086',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Fake executive CEO fraud.',
    instruction: 'Tap the correct protocol when the "Company Director" texts asking for an urgent gift card purchase.',
    hintText: 'Executive impersonation scams (CEO fraud) bypass normal approval hierarchies through artificial urgency.',
    scenario: 'Arun gets a message from an unknown number with the CEO\'s photo: "I\'m in a board meeting, buy 10 Apple gift cards for clients immediately."',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Comply with CEO',
      websiteAUrl: 'Rush to buy gift cards using personal funds',
      websiteBPrice: 'Verify Internal Channel',
      websiteBUrl: 'Call executive assistant or verify via corporate email'
    },
    successFeedback: 'Corporate protocol maintained! Executives do not ask junior employees to buy gift cards from random personal numbers.',
    correctionFeedback: 'CEO fraud relies on intimidation and deference to authority. Always verify via internal corporate channels.',
    learningTip: 'Never bypass standard corporate financial controls for WhatsApp messages claiming to be senior management.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-087',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Safe response to urgent voice note.',
    instruction: 'Enter a safe challenge response asking for the family safety codeword.',
    hintText: 'Ask them to state the secret family keyword before discussing money.',
    scenario: 'A voice note on WhatsApp sounds like your brother asking for an immediate ₹10,000 transfer.',
    interactionType: 'text-entry',
    characterId: 'priya',
    sceneType: 'text_refusal_entry',
    acceptedAnswers: ['what is our codeword', 'codeword', 'secret code', 'what is the code', 'safety word', 'tell me our family codeword'],
    successFeedback: 'Safety codeword challenged! An impersonator has no way to answer a private family keyword.',
    correctionFeedback: 'Challenging with a pre-arranged family safety code stops AI voice scams in their tracks.',
    learningTip: 'Set up a private "family safety codeword" with your parents and children today.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-088',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'list',
    title: 'Order family emergency verification.',
    instruction: 'Put the verification steps in order during an alleged emergency call.',
    hintText: 'Stay calm, disconnect, verify with family members, and avoid hasty transfers.',
    scenario: 'A caller claims your son was detained by police and demands bail money within 15 minutes.',
    interactionType: 'ordering',
    characterId: 'thatha',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'fem_1', text: 'Take a deep breath and resist the impulse to send money in panic', correctOrder: 1 },
      { id: 'fem_2', text: 'Hang up and immediately call your son directly on his normal phone', correctOrder: 2 },
      { id: 'fem_3', text: 'If his phone is unreachable, call his college, workplace, or roommate', correctOrder: 3 },
      { id: 'fem_4', text: 'Never transfer funds to personal UPI IDs or unverified accounts', correctOrder: 4 }
    ],
    correctTargetIds: ['fem_1', 'fem_2', 'fem_3', 'fem_4'],
    successFeedback: 'Calm verification process ordered! Scammers count on panic overriding your critical thinking.',
    correctionFeedback: 'In 99.9% of these calls, the son or relative is safe in class or at work with their phone silenced.',
    learningTip: 'Panic is the scammer\'s weapon. Taking 60 seconds to make a secondary phone call always shatters the illusion.',
    difficulty: 'Advanced',
    points: 100
  },
  {
    id: 'puz-089',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Distinguish verified from viral media.',
    instruction: 'Tap the verified news source to confirm sensational breaking video news.',
    hintText: 'Check official accredited news wires rather than forwarded clips on social media.',
    scenario: 'A viral video clip claims a major bank has collapsed and all ATMs are permanently shut down.',
    interactionType: 'simulated-settings',
    characterId: 'arun',
    sceneType: 'shopping_offer_compare',
    correctTargetId: 'site_real',
    scenePayload: {
      websiteAPrice: 'Forwarded Video',
      websiteAUrl: 'Forwarded many times on WhatsApp without source link',
      websiteBPrice: 'RBI Official Press Release',
      websiteBUrl: 'Official RBI press release portal (rbi.org.in)'
    },
    successFeedback: 'Official source verified! Financial panic is frequently manufactured by sensationalist synthetic media.',
    correctionFeedback: 'Do not forward unverified video clips that cause panic. Check official press releases on rbi.org.in.',
    learningTip: 'Before forwarding alarming videos, check PIB Fact Check (factcheck.pib.gov.in) or mainstream accredited news wires.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-090',
    category: 'AI Voice Cloning, Deepfakes & Family Impersonation',
    categoryLabel: 'AI Voice Cloning & Deepfakes',
    iconType: 'shield',
    title: 'Actions after cloned-voice scam call.',
    instruction: 'Select all safe actions after successfully evading a cloned-voice extortion call.',
    hintText: 'Alert family members so they do not fall for the same scam, and report the caller number.',
    scenario: 'You just hung up on a scammer who cloned your sister\'s voice asking for money.',
    interactionType: 'multi-select',
    characterId: 'priya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'cv_warn', label: 'Call your family WhatsApp group to warn them that scammers are targeting the family', isSign: true },
      { id: 'cv_report', label: 'Report the scammer\'s phone number on the national Chakshu portal (sancharsaathi.gov.in)', isSign: true },
      { id: 'cv_taunt', label: 'Keep calling the scammer back to argue and swear at them', isSign: false },
      { id: 'cv_post', label: 'Post your sister\'s full phone number and personal details online', isSign: false }
    ],
    correctTargetIds: ['cv_warn', 'cv_report'],
    successFeedback: 'Proper community protection! Warning family prevents the scammer from calling your elderly parents next.',
    correctionFeedback: 'Scammers frequently call multiple family members in succession using the same cloned script.',
    learningTip: 'Report scam communication numbers on the Department of Telecommunications Sanchar Saathi portal (sancharsaathi.gov.in).',
    difficulty: 'Standard',
    points: 100
  },

  // =========================================================================
  // CATEGORY 10: RECOVERY SCAMS, DELIVERY & INCIDENT RESPONSE (091–100)
  // =========================================================================
  {
    id: 'puz-091',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'shield',
    title: 'Spot recovery agent upfront fee.',
    instruction: 'Tap the demand that proves an online "funds recovery expert" is a secondary scammer.',
    hintText: 'Scammers monitor cyber complaint comments and promise to "hack the bank" to recover lost money for an advance fee.',
    scenario: 'After losing money in a scam, an account on Instagram messages: "I am ethical hacker, pay ₹3,000 and I will retrieve your money."',
    interactionType: 'single-select',
    characterId: 'arun',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'Asset Recovery Expert',
      jobFee: 'Pay ₹3,000 Upfront Recovery Fee'
    },
    successFeedback: 'Recovery scammer caught! "Fund recovery agents" on social media are secondary predators targeting existing victims.',
    correctionFeedback: 'Only legal law enforcement agencies and your bank can freeze and recover lost funds. Private "hackers" cannot.',
    learningTip: 'Never hire private "hackers" to recover lost money. It is a secondary fraud called a "Recovery Scam."',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-092',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'magnifier',
    title: 'Spot fake courier redelivery link.',
    instruction: 'Tap the nominal payment link in this courier notification.',
    hintText: 'Scammers ask for small ₹5 or ₹10 redelivery fees to harvest your complete debit card details and CVV.',
    scenario: 'An SMS says: "BlueDart Package missed. Pay ₹10 re-delivery surcharge to schedule delivery: bluedart-reschedule.top"',
    interactionType: 'tap-to-discover',
    characterId: 'priya',
    sceneType: 'bank_transaction_link',
    correctTargetId: 'spoof_link',
    scenePayload: {
      suspiciousUrl: 'https://bluedart-reschedule.top/pay-10-rupees'
    },
    successFeedback: 'Redelivery trap caught! The ₹10 charge is a lure to capture card details and trigger unauthorized OTPs.',
    correctionFeedback: 'Entering card details on fake delivery portals allows scammers to empty your account within minutes.',
    learningTip: 'Courier services never require online micro-payments to release packages. Contact the original seller to resolve delivery.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-093',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'shield',
    title: 'Spot fake government subsidy fee.',
    instruction: 'Tap the fraudulent demand in this government benefit scheme announcement.',
    hintText: 'Direct Benefit Transfer (DBT) schemes credit directly to your Jan Dhan / bank account without registration fees.',
    scenario: 'A message claims: "PM Solar Subsidy / Laptop Scheme 2024. Pay ₹500 portal registration charge to receive ₹25,000 subsidy."',
    interactionType: 'single-select',
    characterId: 'thatha',
    sceneType: 'work_from_home_banner',
    correctTargetId: 'job_fee',
    scenePayload: {
      jobTitle: 'Government Scheme Portal',
      jobFee: 'Pay ₹500 Registration Charge'
    },
    successFeedback: 'Government scheme fraud identified! Genuine welfare programs never charge upfront application fees via private links.',
    correctionFeedback: 'Official government schemes are hosted strictly on .gov.in or .nic.in portals and never demand advance fees on WhatsApp.',
    learningTip: 'Check official government welfare schemes on myscheme.gov.in. Real welfare programs never charge private processing fees.',
    difficulty: 'Casual',
    points: 100
  },
  {
    id: 'puz-094',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'shield',
    title: 'Spot fake cybercrime investigator.',
    instruction: 'Select all signs that reveal someone claiming to be a "Cybercrime Officer" is an imposter.',
    hintText: 'Police officers will never ask you to transfer money to personal accounts to "test bank security."',
    scenario: 'A caller claiming to be an Inspector from National Cyber Crime Cell investigates your complaint.',
    interactionType: 'multi-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'fc_money', label: 'Demands you transfer "security deposit" to clear your name from money laundering', isSign: true },
      { id: 'fc_chat', label: 'Conducts official case investigation exclusively on WhatsApp chat', isSign: true },
      { id: 'fc_portal', label: 'Refers you to your formal Acknowledgement Number on cybercrime.gov.in', isSign: false },
      { id: 'fc_station', label: 'Asks you to visit the local cyber police station with physical documents', isSign: false }
    ],
    correctTargetIds: ['fc_money', 'fc_chat'],
    successFeedback: 'Fake investigator unmasked! Real police officers never ask victims to transfer money to test bank security.',
    correctionFeedback: 'Official cyber investigations are tracked via formal case acknowledgement numbers on cybercrime.gov.in.',
    learningTip: 'Official cybercrime complaints generate a formal 14-digit acknowledgement number you can track on cybercrime.gov.in.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-095',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'list',
    title: 'Order steps after disclosing OTP.',
    instruction: 'Put the urgent steps in order after accidentally disclosing an OTP to a stranger.',
    hintText: 'Lock card instantly, inform bank, call 1930, and change passwords.',
    scenario: 'In a moment of distraction, Thatha reads out an SMS code to a caller claiming to be from his bank.',
    interactionType: 'ordering',
    characterId: 'thatha',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'otp_e1', text: 'Immediately open your banking app and freeze / lock your debit/credit card', correctOrder: 1 },
      { id: 'otp_e2', text: 'Call your bank\'s 24x7 emergency helpline to block netbanking login', correctOrder: 2 },
      { id: 'otp_e3', text: 'Call 1930 (Cyber Crime Helpline) if any money was deducted', correctOrder: 3 },
      { id: 'otp_e4', text: 'Change your netbanking password, UPI PIN, and email credentials', correctOrder: 4 }
    ],
    correctTargetIds: ['otp_e1', 'otp_e2', 'otp_e3', 'otp_e4'],
    successFeedback: 'Emergency containment executed! Fast card freezing stops ongoing unauthorized debit transactions.',
    correctionFeedback: 'Most banking apps feature an instant "Card Lock" switch in their settings. Use it immediately.',
    learningTip: 'Memorize your bank\'s instant card-lock feature in your mobile app so you can lock cards in 5 seconds.',
    difficulty: 'Advanced',
    points: 100
  },
  {
    id: 'puz-096',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'list',
    title: 'Order first actions after fraud.',
    instruction: 'Put the first response actions in order following unauthorized bank withdrawals.',
    hintText: 'Call 1930 within the Golden Hour, notify bank, lodge cyber complaint, and preserve evidence.',
    scenario: 'You notice two unauthorized debits totaling ₹45,000 from your savings account.',
    interactionType: 'ordering',
    characterId: 'priya',
    sceneType: 'incident_steps_order',
    orderingSteps: [
      { id: 'ff_1', text: 'Call 1930 (National Cybercrime Reporting Helpline) immediately', correctOrder: 1 },
      { id: 'ff_2', text: 'Report unauthorized transaction to your bank branch within 72 hours for zero-liability protection', correctOrder: 2 },
      { id: 'ff_3', text: 'Export bank statement PDF and save all transaction SMS alerts', correctOrder: 3 },
      { id: 'ff_4', text: 'File a formal complaint on the National Cybercrime Reporting Portal (cybercrime.gov.in)', correctOrder: 4 }
    ],
    correctTargetIds: ['ff_1', 'ff_2', 'ff_3', 'ff_4'],
    successFeedback: 'Zero-liability protocol followed! Under RBI rules, reporting unauthorized electronic transactions within 3 days limits customer liability.',
    correctionFeedback: 'RBI guidelines state that customer liability is ZERO if the unauthorized transaction is reported within 3 working days.',
    learningTip: 'Under RBI rules, reporting unauthorized debits to your bank within 72 hours protects you with zero customer liability.',
    difficulty: 'Challenging',
    points: 100
  },
  {
    id: 'puz-097',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'list',
    title: 'Match official reporting channels.',
    instruction: 'Match each official cyber protection resource to its dedicated purpose.',
    hintText: 'India operates specialized portals for cybercrime, lost phones, and scam phone numbers.',
    scenario: 'Knowing the right official portal for different digital safety issues.',
    interactionType: 'matching',
    characterId: 'arun',
    sceneType: 'interactive_matching',
    matchingPairs: [
      { leftId: 'o1', leftText: 'cybercrime.gov.in (Helpline 1930)', rightId: 'oo1', rightText: 'Reporting financial fraud and online cybercrimes' },
      { leftId: 'o2', leftText: 'sancharsaathi.gov.in (CEIR)', rightId: 'oo2', rightText: 'Blocking and tracing lost or stolen mobile handsets' },
      { leftId: 'o3', leftText: 'Chakshu Portal (DoT)', rightId: 'oo3', rightText: 'Reporting suspected fraud phone calls and SMS numbers' }
    ],
    correctTargetIds: ['o1-oo1', 'o2-oo2', 'o3-oo3'],
    successFeedback: 'Official government channels matched! Sanchar Saathi blocks stolen IMEI handsets across all telecom operators.',
    correctionFeedback: 'Knowing the specific portal ensures your complaint reaches the correct regulatory authority quickly.',
    learningTip: 'Save 1930 (Cyber Crime Helpline) and Sanchar Saathi in your contacts for immediate family emergency access.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-098',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'shield',
    title: 'Preserve digital evidence.',
    instruction: 'Select all critical pieces of evidence to preserve before deleting a scam chat.',
    hintText: 'Keep transaction IDs, phone numbers, and full uncropped screenshots of chat conversations.',
    scenario: 'Arun prepares evidence to submit to the cyber police after an online marketplace fraud.',
    interactionType: 'multi-select',
    characterId: 'arun',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'ev_utr', label: '12-digit UTR transaction number and beneficiary bank/UPI ID', isSign: true },
      { id: 'ev_chat', label: 'Uncropped screenshots of full chat history showing phone number in header', isSign: true },
      { id: 'ev_clean', label: 'Factory resetting your smartphone to clear all cache files', isSign: false },
      { id: 'ev_del', label: 'Deleting the chat messages so you don\'t have to see them', isSign: false }
    ],
    correctTargetIds: ['ev_utr', 'ev_chat'],
    successFeedback: 'Crucial evidence preserved! The 12-digit UTR number allows the cyber police to trace the receiving bank account.',
    correctionFeedback: 'Never delete messages or factory reset your phone before taking screenshots—you destroy the investigation evidence.',
    learningTip: 'Always save uncropped screenshots showing the scammer\'s full phone number and transaction UTR numbers.',
    difficulty: 'Balanced',
    points: 100
  },
  {
    id: 'puz-099',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'shield',
    title: 'Compromised social account response.',
    instruction: 'Select all protective actions after your social media account is hijacked.',
    hintText: 'Revoke third-party apps, change email passwords, and check connected accounts.',
    scenario: 'Someone accessed Priya\'s account and is sending phishing links to all her contacts.',
    interactionType: 'multi-select',
    characterId: 'priya',
    sceneType: 'symptoms_checklist',
    options: [
      { id: 'soc_apps', label: 'Review and revoke unauthorized third-party apps connected to your profile', isSign: true },
      { id: 'soc_pass', label: 'Change your account password and activate app-based Two-Factor Authentication', isSign: true },
      { id: 'soc_wait', label: 'Wait 7 days to see if the hacker stops posting on their own', isSign: false },
      { id: 'soc_fee', label: 'Pay the hacker a ransom fee on Instagram DM to return the account', isSign: false }
    ],
    correctTargetIds: ['soc_apps', 'soc_pass'],
    successFeedback: 'Decisive account defense chosen! Revoking rogue third-party apps closes backdoor API access.',
    correctionFeedback: 'Never pay ransom to hackers. They will demand more money and rarely return full account control.',
    learningTip: 'Check "Apps and Websites" in your Facebook/Instagram/Google settings and revoke access to old or unknown services.',
    difficulty: 'Standard',
    points: 100
  },
  {
    id: 'puz-100',
    category: 'Recovery Scams, Delivery & Incident Response',
    categoryLabel: 'Recovery Scams & Incident Response',
    iconType: 'shield',
    title: 'Complete digital safety shield.',
    instruction: 'Complete the final master verification by configuring the safest account defense settings.',
    hintText: 'Strong unique passphrase + Two-Factor Authentication + zero credential sharing = complete protection.',
    scenario: 'Final master puzzle: Putting together all fundamental digital habits learned throughout CybAram Cyber Puzzles.',
    interactionType: 'simulated-settings',
    characterId: 'priya',
    sceneType: 'account_security_settings',
    correctTargetId: 'set_2fa',
    options: [
      { id: 'set_pwd', label: 'Update to Long Passphrase' },
      { id: 'set_2fa', label: 'Enable Two-Factor Authentication (2FA)' },
      { id: 'set_alerts', label: 'Turn On Instant Login Alerts' },
      { id: 'set_rec', label: 'Add Verified Recovery Email' }
    ],
    successFeedback: 'Master Digital Defender status achieved! You have mastered real-world safety across all 10 threat categories.',
    correctionFeedback: 'Two-Factor Authentication is the ultimate shield that keeps you safe even if passwords are leaked.',
    learningTip: 'Congratulations on completing the CybAram Cyber Puzzles bank! Practice these habits every day to keep yourself and your loved ones safe in cyberspace.',
    difficulty: 'Advanced',
    points: 100
  }
];

// Validation & Registry Safeguards
export function validatePuzzleRegistry(puzzles: DetailedPuzzleData[]): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const idSet = new Set<string>();

  if (puzzles.length !== 100) {
    errors.push(`Registry must contain exactly 100 puzzles, found ${puzzles.length}`);
  }

  puzzles.forEach((p, idx) => {
    // 1. Unique ID check
    if (!p.id) {
      errors.push(`Puzzle at index ${idx} is missing an ID`);
    } else if (idSet.has(p.id)) {
      errors.push(`Duplicate puzzle ID detected: ${p.id}`);
    } else {
      idSet.add(p.id);
    }

    // 2. Required fields check
    if (!p.title || !p.instruction || !p.scenario || !p.category) {
      errors.push(`Puzzle ${p.id} has missing core textual fields`);
    }

    // 3. Validation rule check
    if (!p.correctTargetId && (!p.correctTargetIds || p.correctTargetIds.length === 0)) {
      errors.push(`Puzzle ${p.id} has no correct target validation rule`);
    }

    // 4. Multi-select set check
    if (p.interactionType === 'multi-select') {
      if (!p.correctTargetIds || p.correctTargetIds.length === 0) {
        errors.push(`Multi-select puzzle ${p.id} requires correctTargetIds array`);
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Pure Fisher-Yates shuffle that returns a new randomized copy
export function getFreshShuffledPuzzlesBank(): DetailedPuzzleData[] {
  const copy = [...PUZZLES_BANK_100];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
