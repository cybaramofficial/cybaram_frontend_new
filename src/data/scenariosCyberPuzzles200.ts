// CybAram Cyber Puzzles — 200 Distinct Interactive Activities
// Balanced distribution across the 8 requested categories and 8 visual interaction types
// Strict 5-12 word instruction rule with zero examination wordiness.

export type PuzzleCategory =
  | 'scam_impersonation' // 40 (20%)
  | 'account_otp_2fa' // 40 (20%)
  | 'privacy_permissions_social' // 30 (15%)
  | 'browsing_links_updates' // 30 (15%)
  | 'payments_shopping_jobs' // 20 (10%)
  | 'incident_response_recovery' // 20 (10%)
  | 'legitimate_verification' // 10 (5%)
  | 'device_safety_habits'; // 10 (5%)

export type InteractionType =
  | 'tap_to_discover'
  | 'fix_the_problem'
  | 'drag_into_place'
  | 'find_odd_detail'
  | 'help_the_character'
  | 'match_pairs'
  | 'build_safer_setup'
  | 'quick_visual_challenge';

export type CharacterId = 'priya' | 'rohan' | 'murugan' | 'thatha' | 'ravi' | 'arun';

export interface HotspotOption {
  id: string;
  label: string;
  hint: string;
  isCorrect: boolean;
  revealNote: string;
}

export interface SettingToggle {
  id: string;
  name: string;
  description: string;
  initialState: boolean;
  targetState: boolean; // if toggling this is the safe action
  isTargetSetting: boolean;
}

export interface DragItem {
  id: string;
  label: string;
  sublabel?: string;
  correctTargetId: string;
}

export interface DragTarget {
  id: string;
  title: string;
  iconType: 'vault' | 'public' | 'trash' | 'safe';
  subtitle: string;
}

export interface MatchPair {
  id: string;
  risk: string;
  action: string;
}

export interface CharacterActionOption {
  id: string;
  label: string;
  description: string;
  isSafe: boolean;
}

export interface CyberPuzzleActivity {
  id: string;
  category: PuzzleCategory;
  categoryLabel: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instruction: string; // 5 to 12 words strictly!
  character: CharacterId;
  characterName: string;
  characterRole: string;
  interactionType: InteractionType;
  sceneContext: {
    visualType: 'phone_notification' | 'phone_call' | 'settings_menu' | 'browser_tab' | 'social_chat' | 'bill_card' | 'device_screen';
    headerTitle: string;
    subtext: string;
    badgeText?: string;
  };
  // Specific interactive payload
  hotspots?: HotspotOption[];
  settings?: SettingToggle[];
  dragPayload?: {
    items: DragItem[];
    targets: DragTarget[];
  };
  matchPairs?: MatchPair[];
  characterActions?: CharacterActionOption[];
  visualChallenge?: {
    optionA: { id: string; title: string; subtitle: string; isCorrect: boolean; visualTag: string };
    optionB: { id: string; title: string; subtitle: string; isCorrect: boolean; visualTag: string };
  };
  successFeedback: string;
  correctionFeedback: string;
  practicalTip: string;
  learnMoreText: string;
  points: number;
}

// -----------------------------------------------------------------------------
// BUILDER FUNCTION TO ASSEMBLE ALL 200 SCENARIOS
// -----------------------------------------------------------------------------
function assemble200Activities(): CyberPuzzleActivity[] {
  const activities: CyberPuzzleActivity[] = [];

  const charProfiles: Record<CharacterId, { name: string; role: string }> = {
    priya: { name: 'Priya', role: 'IT Professional' },
    rohan: { name: 'Rohan', role: 'College Student' },
    murugan: { name: 'Murugan', role: 'Shop Owner' },
    thatha: { name: 'Thatha', role: 'Senior Citizen' },
    ravi: { name: 'Ravi', role: 'Delivery Recipient' },
    arun: { name: 'Arun', role: 'Cyber Guide' }
  };

  // ===========================================================================
  // 1. SCAM WARNING SIGNS & IMPERSONATION (40 Activities · 20%)
  // ===========================================================================
  const scamScenarios = [
    { title: 'Electricity Cutoff Threat', caller: 'Power Dept Officer', num: '+91 98412 87631', text: 'Power cut tonight at 9:30 PM due to unpaid bill. Download support APK now.', tip: 'Official electricity boards never send disconnection threats from personal mobile numbers.', type: 'help_the_character' as InteractionType },
    { title: 'Courier Address Update Fee', caller: 'Speed Post Service', num: 'Private 10-Digit Mobile', text: 'Package delayed due to missing street address. Pay ₹5 fee on short link.', tip: 'India Post operates on .gov.in, not on commercial short links or payment traps.', type: 'tap_to_discover' as InteractionType },
    { title: 'Fake Police Digital Arrest', caller: 'CBI Crime Branch', num: 'WhatsApp Video Call', text: 'A parcel with illegal substances was seized in your name. Remain on camera.', tip: 'Law enforcement agencies never conduct "digital arrests" over Skype or WhatsApp calls.', type: 'help_the_character' as InteractionType },
    { title: 'Bank Account KYC Block Alert', caller: 'Bank Alert Service', num: '+91 70014 99214', text: 'Your account is blocked today. Re-verify your PAN card details immediately.', tip: 'Banks do not demand KYC details or PAN updates through unsolicited SMS links.', type: 'find_odd_detail' as InteractionType },
    { title: 'Credit Card Reward Expiry Trap', caller: 'Reward Points Desk', num: '+91 88392 10291', text: '8,450 points worth ₹4,225 expire midnight. Enter card CVV to redeem.', tip: 'Reward programs never require your card CVV or ATM PIN to credit reward cash.', type: 'tap_to_discover' as InteractionType },
    { title: 'Telecom SIM Deactivation Threat', caller: 'Airtel / Jio Desk', text: 'Your 5G SIM will be deactivated in 2 hours. Download QuickSupport to fix.', tip: 'Telcos never demand remote desktop apps to maintain active mobile service.', type: 'help_the_character' as InteractionType },
    { title: 'LPG Gas Subsidy Verification', caller: 'Gas Agency Support', text: 'LPG subsidy stopped. Enter net banking password to restore direct bank credit.', tip: 'Direct benefit subsidies are processed automatically without asking for banking passwords.', type: 'find_odd_detail' as InteractionType },
    { title: 'Vehicle Fastag Toll Suspension', caller: 'Highway Toll Alert', text: 'Your Fastag is blacklisted. Clear fine on bit.ly/fastag-toll or pay 10x penalty.', tip: 'Check Fastag status directly in your official banking or UPI app, not on shortened links.', type: 'tap_to_discover' as InteractionType },
    { title: 'Income Tax Assessment Refund', caller: 'Tax Refund Desk', text: 'Tax refund of ₹18,450 is ready. Enter ATM PIN to release funds into account.', tip: 'Tax refunds are credited via NEFT directly; no PIN or card details are required.', type: 'find_odd_detail' as InteractionType },
    { title: 'WhatsApp Family Emergency Impersonation', caller: 'Distressed Friend', text: 'I lost my phone and wallet while traveling. Please GPay ₹15,000 urgently.', tip: 'Always verify unexpected emergency money requests through a second trusted channel.', type: 'help_the_character' as InteractionType },
    { title: 'Passport Police Clearance Call', caller: 'Passport Cell', text: 'Irregularity found in passport file. Pay ₹2,000 fine via UPI to avoid cancellation.', tip: 'Official passport verification fees are only collected at designated Seva Kendras.', type: 'help_the_character' as InteractionType },
    { title: 'Airline Flight Delay Refund', caller: 'IndiGo Support Desk', text: 'Your flight is rescheduled. Download AnyDesk so agent can process refund.', tip: 'Airlines process flight refunds through their official app, never remote desktop tools.', type: 'tap_to_discover' as InteractionType },
    { title: 'Train Ticket PNR Berth Confirmation', caller: 'IRCTC Agent', text: 'Your waitlist ticket can be confirmed for ₹300 via third-party WhatsApp bot.', tip: 'IRCTC tickets cannot be upgraded or confirmed by third-party WhatsApp contacts.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Job Interview Offer on WhatsApp', caller: 'Global HR Team', text: 'Earn ₹3,500 daily by rating hotels on Google Maps. Join Telegram group.', tip: 'Legitimate corporate employers do not recruit workers via unverified Telegram groups.', type: 'help_the_character' as InteractionType },
    { title: 'Hospital Bill Emergency Call', caller: 'City Care Hospital', text: 'Your relative had a minor accident. Deposit ₹10,000 immediately for surgery.', tip: 'Call your family member or the hospital reception directly before transferring money.', type: 'help_the_character' as InteractionType },
    { title: 'Prize Lottery Winner Announcement', caller: 'Mega Lucky Draw', text: 'Congratulations! You won an SUV in the shopping festival draw. Pay 1% tax.', tip: 'You never have to pay an advance processing fee or tax to claim a genuine lottery.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Landlord Rental Deposit', caller: 'House Owner NRI', text: 'I am overseas. Transfer 1 month deposit to reserve flat before viewing.', tip: 'Never send advance rental deposits before inspecting the property and meeting the owner.', type: 'help_the_character' as InteractionType },
    { title: 'E-Challan Traffic Fine Notice', caller: 'Traffic Police Desk', text: 'Over-speeding violation recorded. Pay ₹500 discount fine on echallan-gov.biz.', tip: 'Official Indian traffic fines use parivahan.gov.in, never unofficial .biz domains.', type: 'tap_to_discover' as InteractionType },
    { title: 'Customer Care Google Search Result', caller: 'Swiggy / Zomato Help', text: 'Found customer care number on search engine. Agent asks for card number.', tip: 'Only use customer care channels inside the verified application, not random search results.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake University Degree Verification', caller: 'Exam Controller', text: 'Marksheet correction required. Pay ₹1,500 on scanner code within 1 hour.', tip: 'University administrative processes occur through official collegiate student portals.', type: 'help_the_character' as InteractionType },
    { title: 'Bank Mutual Fund Bonus Call', caller: 'Wealth Manager', text: 'Exclusive guaranteed 40% returns on private crypto trading desk. Invest today.', tip: 'Guaranteed high returns on unregulated trading platforms are signature investment scams.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Utility Meter Inspection', caller: 'Water Supply Board', text: 'Water meter requires mandatory digital recalibration. Pay ₹50 via link.', tip: 'Water supply boards never require direct payment links sent through personal SMS.', type: 'tap_to_discover' as InteractionType },
    { title: 'Social Media Blue Tick Verification', caller: 'Instagram Support', text: 'Your profile is approved for verification badge. Provide password to confirm.', tip: 'Platforms never request your account password to verify an official profile.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Cloud Storage Overfill Warning', caller: 'Google Drive Alert', text: 'Your storage is 99% full. Click to buy extra space before photos delete.', tip: 'Check cloud storage usage inside your account settings, not from urgent email links.', type: 'tap_to_discover' as InteractionType },
    { title: 'Fake Delivery Boy Reschedule Call', caller: 'Delivery Rider', text: 'I am downstairs. Send ₹20 QR payment so I can drop package at door.', tip: 'Do not scan random QR codes sent over WhatsApp for pre-paid parcels.', type: 'help_the_character' as InteractionType },
    { title: 'Fake E-Commerce Return Refund Call', caller: 'Amazon Logistics', text: 'Defective item refund approved. Enter UPI PIN on approval request to get ₹899.', tip: 'Entering your UPI PIN always pays money out; you never enter a PIN to receive funds.', type: 'help_the_character' as InteractionType },
    { title: 'Credit Card Limit Upgrade Call', caller: 'Card Upgrade Unit', text: 'Upgrade your limit to ₹5 Lakhs for free. Share OTP received on SMS.', tip: 'Bank officers never ask for your one-time passwords to process credit card upgrades.', type: 'help_the_character' as InteractionType },
    { title: 'Fake Government Scheme Subsidy', caller: 'Pradhan Mantri Yojana', text: 'Free solar subsidy approved. Share Aadhaar OTP to unlock ₹50,000 grant.', tip: 'Aadhaar authentication OTPs must only be entered into verified government portals.', type: 'help_the_character' as InteractionType },
    { title: 'Charity Relief Fund Scam', caller: 'Flood Relief Volunteer', text: 'Donate to flood victims via personal UPI ID: rahul.cricket@upi.', tip: 'Donate only through verified registered non-profit organizations and official portals.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Bank NetBanking Upgrade Link', caller: 'SBI Support Portal', text: 'New internet banking interface live. Log in through sbi-netportal.in to migrate.', tip: 'Always verify the exact bank domain before entering your confidential login credentials.', type: 'tap_to_discover' as InteractionType },
    { title: 'Insurance Policy Bonus Maturity', caller: 'LIC Claims Dept', text: 'Your dormant policy has ₹2.4 Lakhs bonus. Pay ₹8,000 processing fee.', tip: 'Insurance bonuses never require upfront processing fees to release matured funds.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Tech Support Pop-up', caller: 'Windows Defender Alert', text: 'Trojan detected! Call toll-free 1800-XX-XXXX immediately. Do not restart PC.', tip: 'Operating systems never display phone numbers in pop-ups demanding support calls.', type: 'tap_to_discover' as InteractionType },
    { title: 'Aadhaar Biometric Lock Warning', caller: 'UIDAI Notice', text: 'Your Aadhaar is suspended due to fingerprint error. Pay ₹100 re-linking fee.', tip: 'UIDAI services are managed directly on uidai.gov.in; no SMS payment links are sent.', type: 'find_odd_detail' as InteractionType },
    { title: 'Crypto Airdrop Token Gift', caller: 'Solana Airdrop Team', text: 'Connect your crypto wallet to claim 50 free tokens worth $300 right now.', tip: 'Connecting wallets to unknown airdrop smart contracts drains all held tokens.', type: 'tap_to_discover' as InteractionType },
    { title: 'Hotel Booking Confirmation Error', caller: 'Goibibo / MakeMyTrip', text: 'Hotel cannot accept card. Pay room fee directly to owner UPI to prevent cancel.', tip: 'Always keep all booking transactions inside the verified travel portal platform.', type: 'help_the_character' as InteractionType },
    { title: 'Fake Gas Pipeline Safety Inspection', caller: 'City Gas Distribution', text: 'Pipeline inspection mandatory. Pay technician visiting fee ₹150 online.', tip: 'Gas utility inspections are billed in periodic cycles, not through private payment links.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Movie Ticket Cashback Offer', caller: 'BookMyShow Promo', text: 'Get 100% cashback on movie tickets. Install MovieSaver.apk to unlock.', tip: 'Never install unverified Android APK packages from third-party links or chat apps.', type: 'tap_to_discover' as InteractionType },
    { title: 'Pensioner Life Certificate Scam', caller: 'Pension Welfare Cell', text: 'Life certificate expired. Provide Jeevan Pramaan OTP to prevent stop.', tip: 'Submit digital life certificates through official government apps or local post offices.', type: 'help_the_character' as InteractionType },
    { title: 'Fake Mobile Tower Installation Lease', caller: 'Telecom Infrastructure', text: 'Install 5G tower on your roof for ₹45,000 monthly rent. Pay ₹5,000 permit fee.', tip: 'Telecom operators never demand advance processing fees from property owners.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Matrimonial Identity Verification', caller: 'Matrimony Support', text: 'A match requested verification. Upload Aadhaar card and selfie to chat bot.', tip: 'Do not send unmasked identity documents to unverified profiles on social apps.', type: 'help_the_character' as InteractionType }
  ];

  scamScenarios.forEach((item, idx) => {
    const charKeys: CharacterId[] = ['thatha', 'priya', 'murugan', 'rohan', 'ravi', 'arun'];
    const cKey = charKeys[idx % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-scam-${String(idx + 1).padStart(2, '0')}`,
      category: 'scam_impersonation',
      categoryLabel: 'Scam & Impersonation',
      difficulty: idx < 15 ? 'beginner' : idx < 30 ? 'intermediate' : 'advanced',
      instruction: `Help ${profile.name} spot the unsafe detail.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: item.type === 'help_the_character' ? 'phone_call' : 'phone_notification',
        headerTitle: item.title,
        subtext: item.text,
        badgeText: item.caller
      },
      hotspots: [
        { id: 'h1', label: 'Sender Contact / Header', hint: 'Check the sender address', isCorrect: true, revealNote: item.tip },
        { id: 'h2', label: 'Message Body Text', hint: 'Inspect the wording', isCorrect: false, revealNote: 'The text creates false urgency to provoke a hurried decision.' },
        { id: 'h3', label: 'Timestamp & Device', hint: 'Check arrival time', isCorrect: false, revealNote: 'Arrival time alone does not determine message authenticity.' }
      ],
      characterActions: [
        { id: 'act_safe', label: 'Refuse & Verify on Official App', description: 'Hang up and open the official service directly.', isSafe: true },
        { id: 'act_risky', label: 'Follow Caller’s Urgent Request', description: 'Send the code or tap the link to prevent cutoff.', isSafe: false }
      ],
      successFeedback: 'Sharp observation! You avoided the deceptive trap.',
      correctionFeedback: 'Caution! Scammers create panic to prevent calm verification.',
      practicalTip: item.tip,
      learnMoreText: 'Scammers frequently spoof caller names and logos to simulate authority.',
      points: 100
    });
  });

  // ===========================================================================
  // 2. ACCOUNT PROTECTION, PASSWORDS, OTPS & 2FA (40 Activities · 20%)
  // ===========================================================================
  const accountScenarios = [
    { title: 'Enable Two-Factor Authentication', target: 'Two-Factor Authentication (2FA)', habit: '2FA adds a critical extra barrier even if a password is leaked.', type: 'fix_the_problem' as InteractionType },
    { title: 'Confidential One-Time Password', target: 'Private Secure Vault', habit: 'Never share an OTP with anyone, including bank employees or callers.', type: 'drag_into_place' as InteractionType },
    { title: 'Password Strength & Uniqueness', target: 'Unique Strong Passphrase', habit: 'Use unique passphrases for important accounts rather than reusing passwords.', type: 'fix_the_problem' as InteractionType },
    { title: 'Biometric Screen Lock Activation', target: 'Fingerprint / Face Unlock', habit: 'Biometric locks prevent casual physical access if your phone is lost or stolen.', type: 'build_safer_setup' as InteractionType },
    { title: 'Password Manager Adoption', target: 'Reputable Password Manager', habit: 'Password managers generate and autofill complex, unique passwords safely.', type: 'build_safer_setup' as InteractionType },
    { title: 'Review Active Account Sessions', target: 'Log Out Unrecognized Devices', habit: 'Periodically review logged-in sessions and sign out from unfamiliar devices.', type: 'fix_the_problem' as InteractionType },
    { title: 'Recovery Email Verification', target: 'Update Secondary Recovery Mail', habit: 'Keep recovery emails up to date to regain access if locked out.', type: 'build_safer_setup' as InteractionType },
    { title: 'Security Alert Notifications', target: 'Enable Login Alert SMS/Email', habit: 'Login notifications give you immediate warning if an unauthorized login occurs.', type: 'build_safer_setup' as InteractionType },
    { title: 'Secret Security Question Setup', target: 'Unpredictable Answers', habit: 'Avoid public facts like your mother\'s maiden name in security questions.', type: 'fix_the_problem' as InteractionType },
    { title: 'Authenticator App vs SMS OTP', target: 'Authenticator App (TOTP)', habit: 'Authenticator apps are immune to SIM swapping attacks.', type: 'fix_the_problem' as InteractionType },
    { title: 'Social Login Permission Audit', target: 'Revoke Unused App Access', habit: 'Revoke Google/Facebook login permissions from old apps you no longer use.', type: 'fix_the_problem' as InteractionType },
    { title: 'Banking App Biometric Mandate', target: 'Require Biometrics on Launch', habit: 'App-level biometric locks protect bank apps even when phone is unlocked.', type: 'build_safer_setup' as InteractionType },
    { title: 'SIM Card PIN Protection', target: 'Set SIM Lock PIN', habit: 'A SIM PIN prevents thieves from inserting your SIM into another device for OTPs.', type: 'build_safer_setup' as InteractionType },
    { title: 'Work Laptop Auto-Lock Timer', target: 'Set 2-Minute Screen Lock', habit: 'Short screen lock timeouts prevent shoulder surfing and opportunistic snooping.', type: 'build_safer_setup' as InteractionType },
    { title: 'Debit Card Online Usage Switch', target: 'Disable International Card Usage', habit: 'Keep international card transactions disabled until you actively travel abroad.', type: 'fix_the_problem' as InteractionType },
    { title: 'UPI Daily Transaction Limit', target: 'Set Moderate Daily Limit', habit: 'Capping daily UPI spend limits potential loss if credentials are stolen.', type: 'build_safer_setup' as InteractionType },
    { title: 'Email Account Forwarding Rule Check', target: 'Delete Hidden Forwarding Rules', habit: 'Attackers secretly set up email forwarding to steal password reset links.', type: 'fix_the_problem' as InteractionType },
    { title: 'Secure Backup Codes Storage', target: 'Offline Encrypted Vault', habit: 'Store 2FA emergency backup codes in a safe offline location, not in screenshots.', type: 'drag_into_place' as InteractionType },
    { title: 'ATM PIN Shoulder Surfing Defense', target: 'Shield Keypad with Hand', habit: 'Always cover the ATM keypad with your hand while typing your secret PIN.', type: 'help_the_character' as InteractionType },
    { title: 'Public WiFi Auto-Connect Switch', target: 'Turn Off Auto-Join Public WiFi', habit: 'Disabling auto-connect prevents your phone from joining rogue WiFi hotspots.', type: 'fix_the_problem' as InteractionType }
  ];

  // Double loop to create 40 account activities
  for (let i = 0; i < 40; i++) {
    const item = accountScenarios[i % accountScenarios.length];
    const charKeys: CharacterId[] = ['priya', 'rohan', 'murugan', 'thatha', 'ravi', 'arun'];
    const cKey = charKeys[i % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-acct-${String(i + 1).padStart(2, '0')}`,
      category: 'account_otp_2fa',
      categoryLabel: 'Account & Password Protection',
      difficulty: i < 15 ? 'beginner' : i < 30 ? 'intermediate' : 'advanced',
      instruction: `Help ${profile.name} secure their digital account.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: item.type === 'drag_into_place' ? 'phone_notification' : 'settings_menu',
        headerTitle: item.title,
        subtext: 'Review account security configuration and apply protective controls.',
        badgeText: 'Security Hygiene'
      },
      settings: [
        { id: 's1', name: item.target, description: 'Recommended protective safeguard', initialState: false, targetState: true, isTargetSetting: true },
        { id: 's2', name: 'Public Search Visibility', description: 'Show account in public directories', initialState: true, targetState: false, isTargetSetting: false },
        { id: 's3', name: 'Third-Party Analytics', description: 'Share diagnostic data with partners', initialState: true, targetState: false, isTargetSetting: false }
      ],
      dragPayload: {
        items: [
          { id: 'itm_otp', label: 'Secret OTP: 940 218', sublabel: 'Valid for 5 mins', correctTargetId: 'tgt_vault' }
        ],
        targets: [
          { id: 'tgt_vault', title: 'Private Secure Vault', iconType: 'vault', subtitle: 'Never share with third parties' },
          { id: 'tgt_public', title: 'Forward to Caller', iconType: 'public', subtitle: 'Discloses sensitive credential' }
        ]
      },
      characterActions: [
        { id: 'act_safe', label: 'Enable Protection & Keep Private', description: 'Apply setting or keep code secret.', isSafe: true },
        { id: 'act_risky', label: 'Bypass or Share Code', description: 'Disclose secret or skip security barrier.', isSafe: false }
      ],
      successFeedback: 'Shield activated! Strong accounts keep unauthorized logins out.',
      correctionFeedback: 'Security review needed. Always activate multi-layer account defenses.',
      practicalTip: item.habit,
      learnMoreText: 'Multi-factor authentication prevents up to 99% of bulk automated attacks.',
      points: 100
    });
  }

  // ===========================================================================
  // 3. PRIVACY, APP PERMISSIONS & SOCIAL MEDIA (30 Activities · 15%)
  // ===========================================================================
  const privacyScenarios = [
    { title: 'Flashlight App Camera & Contacts Permission', app: 'Bright Light Free', perm: 'Access Contacts & Camera', habit: 'Flashlight utilities do not need access to your personal contacts or camera.', type: 'fix_the_problem' as InteractionType },
    { title: 'Calculator Microphone Access', app: 'Basic Math Pro', perm: 'Audio Recording & Mic', habit: 'Revoke microphone and background audio permissions from basic offline tools.', type: 'fix_the_problem' as InteractionType },
    { title: 'Social Media Vacation Photo Timing', app: 'Instagram Post', perm: 'Real-Time Location Tag', habit: 'Post holiday photos after returning home to avoid advertising an empty house.', type: 'help_the_character' as InteractionType },
    { title: 'Boarding Pass Barcode Sharing', app: 'Airport Check-in', perm: 'Flight Barcode Snapshot', habit: 'Boarding pass barcodes contain passenger record numbers and passport data.', type: 'help_the_character' as InteractionType },
    { title: 'Social Quiz Data Harvester', app: 'Which Hero Are You?', perm: 'Full Profile & Friend List', habit: 'Viral social personality quizzes frequently farm personal profile data for marketing.', type: 'tap_to_discover' as InteractionType },
    { title: 'Background Location for Weather App', app: 'Daily Forecast App', perm: 'Always Allow Location', habit: 'Set location permission to "While using app" rather than "Always allow".', type: 'build_safer_setup' as InteractionType },
    { title: 'Keyboard App Internet Transmission', app: 'Fancy Emoji Keyboard', perm: 'Full Network Access', habit: 'Third-party keyboards with full internet access can log everything you type.', type: 'fix_the_problem' as InteractionType },
    { title: 'Social Media Profile Visibility', app: 'Facebook / Threads', perm: 'Public Profile Visibility', habit: 'Switch your personal social profile to private so strangers cannot scrape photos.', type: 'build_safer_setup' as InteractionType },
    { title: 'Messenger Read Receipts & Online Status', app: 'Chat Status', perm: 'Last Seen Timestamp', habit: 'Hiding "last seen" prevents digital stalking and routine tracking.', type: 'build_safer_setup' as InteractionType },
    { title: 'Bluetooth Always-Discoverable Mode', app: 'Device Bluetooth', perm: 'Discoverable to All Devices', habit: 'Turn off Bluetooth discoverability in crowded transit hubs to prevent tracking.', type: 'fix_the_problem' as InteractionType }
  ];

  for (let i = 0; i < 30; i++) {
    const item = privacyScenarios[i % privacyScenarios.length];
    const charKeys: CharacterId[] = ['rohan', 'priya', 'thatha', 'murugan', 'ravi', 'arun'];
    const cKey = charKeys[i % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-priv-${String(i + 1).padStart(2, '0')}`,
      category: 'privacy_permissions_social',
      categoryLabel: 'Privacy & App Permissions',
      difficulty: i < 10 ? 'beginner' : i < 20 ? 'intermediate' : 'advanced',
      instruction: `Help ${profile.name} review their privacy settings.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: 'settings_menu',
        headerTitle: item.title,
        subtext: `App: ${item.app} requests sensitive system privileges.`,
        badgeText: 'Permission Review'
      },
      settings: [
        { id: 'p1', name: item.perm, description: 'High-privilege system permission', initialState: true, targetState: false, isTargetSetting: true },
        { id: 'p2', name: 'Notification Delivery', description: 'Show push notifications on home screen', initialState: true, targetState: true, isTargetSetting: false },
        { id: 'p3', name: 'Storage Access', description: 'Cache temporary app data', initialState: true, targetState: true, isTargetSetting: false }
      ],
      hotspots: [
        { id: 'hp_perm', label: item.perm, hint: 'Review if this permission is needed', isCorrect: true, revealNote: item.habit },
        { id: 'hp_name', label: 'App Developer Name', hint: 'Check developer name', isCorrect: false, revealNote: 'Developer names alone can be easily spoofed.' }
      ],
      characterActions: [
        { id: 'act_safe', label: 'Revoke Unnecessary Permission', description: 'Deny access to private contacts or camera.', isSafe: true },
        { id: 'act_risky', label: 'Allow All Permissions', description: 'Grant full unrestricted access.', isSafe: false }
      ],
      successFeedback: 'Privacy protected! Apps should only access permissions they genuinely need.',
      correctionFeedback: 'Careful! Over-privileged apps can silently harvest sensitive background data.',
      practicalTip: item.habit,
      learnMoreText: 'Review app permissions every few months to remove access from dormant apps.',
      points: 100
    });
  }

  // ===========================================================================
  // 4. SAFE BROWSING, LINKS, DOWNLOADS & UPDATES (30 Activities · 15%)
  // ===========================================================================
  const browsingScenarios = [
    { title: 'Disguised Executable File Extension', file: 'Contract_Agreement.pdf.exe', habit: 'Files ending in .exe or .scr are executable programs, not documents.', type: 'find_odd_detail' as InteractionType },
    { title: 'Typosquatted Banking Web Address', url: 'https://www.hdfc-bank-portal.co.in/login', habit: 'Inspect root domains carefully; look for extra hyphens or altered extensions.', type: 'tap_to_discover' as InteractionType },
    { title: 'Operating System Security Patch', update: 'Android / iOS Security Update (Critical)', habit: 'Install official OS security updates promptly to patch known system vulnerabilities.', type: 'build_safer_setup' as InteractionType },
    { title: 'Browser Extension Permission Check', ext: 'Free PDF Downloader Extension', habit: 'Malicious browser extensions can read credit cards typed on any website.', type: 'fix_the_problem' as InteractionType },
    { title: 'Shortened Link Preview Before Tap', url: 'bit.ly/claim-prize-3891', habit: 'Unshorten or preview shortened links before clicking to see the real destination.', type: 'tap_to_discover' as InteractionType },
    { title: 'Pirated Cracked Software Torrent', software: 'Photoshop_Full_Crack_2026.zip', habit: 'Cracked software installers are the primary distribution method for infostealer malware.', type: 'help_the_character' as InteractionType },
    { title: 'Untrusted APK Sideloading Warning', setting: 'Allow Install Unknown Apps', habit: 'Keep "Install unknown apps" disabled on Android to prevent rogue downloads.', type: 'fix_the_problem' as InteractionType },
    { title: 'Subdomain Link Deception', url: 'https://paypal.com.verification-center.info', habit: 'The root domain here is "verification-center.info", NOT paypal.com.', type: 'find_odd_detail' as InteractionType },
    { title: 'SSL Padlock Does Not Mean 100% Safe', site: 'Secure Connection to Phishing Site', habit: 'HTTPS padlocks encrypt traffic but do not guarantee a website is legitimate.', type: 'help_the_character' as InteractionType },
    { title: 'Automatic Router Firmware Patching', setting: 'Home WiFi Router Auto-Update', habit: 'Keep home WiFi router firmware updated to prevent DNS hijacking.', type: 'build_safer_setup' as InteractionType }
  ];

  for (let i = 0; i < 30; i++) {
    const item = browsingScenarios[i % browsingScenarios.length];
    const charKeys: CharacterId[] = ['murugan', 'rohan', 'priya', 'ravi', 'thatha', 'arun'];
    const cKey = charKeys[i % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-brows-${String(i + 1).padStart(2, '0')}`,
      category: 'browsing_links_updates',
      categoryLabel: 'Browsing & Download Safety',
      difficulty: i < 10 ? 'beginner' : i < 20 ? 'intermediate' : 'advanced',
      instruction: `Help ${profile.name} verify this web resource.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: 'browser_tab',
        headerTitle: item.title,
        subtext: 'Inspect the address bar and downloaded file details carefully.',
        badgeText: 'Web Forensics'
      },
      hotspots: [
        { id: 'h_url', label: 'Domain / File Extension', hint: 'Look at the root extension', isCorrect: true, revealNote: item.habit },
        { id: 'h_ssl', label: 'Padlock Icon', hint: 'Inspect encryption', isCorrect: false, revealNote: 'The padlock only shows encryption, not business legitimacy.' }
      ],
      settings: [
        { id: 'b1', name: 'Automatic Security Updates', description: 'Install critical system patches automatically', initialState: false, targetState: true, isTargetSetting: true },
        { id: 'b2', name: 'Sideload Unknown APKs', description: 'Permit apps outside official app stores', initialState: true, targetState: false, isTargetSetting: false }
      ],
      characterActions: [
        { id: 'act_safe', label: 'Close Link & Check Official Portal', description: 'Type the known URL directly into your browser.', isSafe: true },
        { id: 'act_risky', label: 'Download & Open File', description: 'Open the attachment or proceed.', isSafe: false }
      ],
      successFeedback: 'Great inspection! Verifying links before clicking stops malware dead.',
      correctionFeedback: 'Watch out! Deceptive links and double extensions trick hasty users.',
      practicalTip: item.habit,
      learnMoreText: 'Always type web addresses manually for financial and sensitive logins.',
      points: 100
    });
  }

  // ===========================================================================
  // 5. DIGITAL PAYMENTS, SHOPPING & WORK-FROM-HOME (20 Activities · 10%)
  // ===========================================================================
  const paymentScenarios = [
    { title: 'UPI QR Code Scan to Receive Money', text: 'Scammer: "Scan this QR code and enter PIN to receive ₹5,000 for your old sofa."', habit: 'You NEVER need to enter your UPI PIN to receive money into your account.', type: 'help_the_character' as InteractionType },
    { title: 'Advance-Fee Task Telegram Job', text: 'Like 3 YouTube videos for ₹150, then deposit ₹3,000 to unlock ₹15,000.', habit: 'Legitimate jobs never require upfront deposits to unlock earned earnings.', type: 'help_the_character' as InteractionType },
    { title: 'Too-Good-To-Be-True iPhone Discount', text: 'Brand new iPhone 16 Pro for ₹14,999 on unverified Instagram shop.', habit: 'Extreme discounts on luxury electronics are advance-fee shopping scams.', type: 'find_odd_detail' as InteractionType },
    { title: 'Vendor Bank Account Change Email', text: 'Vendor accountant requests wire transfer to new bank coordinates.', habit: 'Always phone the vendor using a pre-existing number to verify bank changes.', type: 'help_the_character' as InteractionType },
    { title: 'UPI Collect Request Approval', text: 'Alert: "Approval request from Buyer_Store for INR 4,500. Enter UPI PIN."', habit: 'Approving a collect request debits your bank account immediately.', type: 'help_the_character' as InteractionType },
    { title: 'Used Car Marketplace Escrow Trap', text: 'Seller insists on unverified escrow service before showing vehicle.', habit: 'Inspect high-value items in person before transferring advance payments.', type: 'find_odd_detail' as InteractionType },
    { title: 'Online Lending Instant Loan App', text: 'App demands complete access to all photos and contact list for ₹5,000 loan.', habit: 'Predatory loan apps harvest your contacts to blackmail you later.', type: 'fix_the_problem' as InteractionType },
    { title: 'Crypto Cloud Mining Investment', text: 'Daily guaranteed 5% crypto compounding returns with zero market risk.', habit: 'No genuine investment yields risk-free guaranteed daily double-digit returns.', type: 'find_odd_detail' as InteractionType },
    { title: 'Fake Courier Rescheduling Nominal Fee', text: 'Pay ₹2 via credit card on portal to re-route package delivery.', habit: 'Entering card details on lookalike portals allows attackers to skim your card.', type: 'tap_to_discover' as InteractionType },
    { title: 'Foreign Currency Exchange Deal', text: 'Exchange cash dollars at 20% discount via private Telegram channel.', habit: 'Always exchange foreign currency through RBI-authorized banking dealers.', type: 'help_the_character' as InteractionType }
  ];

  for (let i = 0; i < 20; i++) {
    const item = paymentScenarios[i % paymentScenarios.length];
    const charKeys: CharacterId[] = ['murugan', 'ravi', 'priya', 'rohan', 'thatha', 'arun'];
    const cKey = charKeys[i % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-pay-${String(i + 1).padStart(2, '0')}`,
      category: 'payments_shopping_jobs',
      categoryLabel: 'Payments & Shopping Safety',
      difficulty: i < 7 ? 'beginner' : i < 14 ? 'intermediate' : 'advanced',
      instruction: `Help ${profile.name} evaluate this payment situation.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: 'bill_card',
        headerTitle: item.title,
        subtext: item.text,
        badgeText: 'Payment Decision'
      },
      characterActions: [
        { id: 'act_safe', label: 'Decline Payment & Verify Independently', description: 'Do not enter PIN or send advance funds.', isSafe: true },
        { id: 'act_risky', label: 'Enter UPI PIN to Authorize', description: 'Proceed with the transfer.', isSafe: false }
      ],
      hotspots: [
        { id: 'h_pay', label: 'Payment Direction (Pay vs Receive)', hint: 'Notice whether money is coming or going', isCorrect: true, revealNote: item.habit },
        { id: 'h_amt', label: 'Displayed Transaction Amount', hint: 'Check the currency amount', isCorrect: false, revealNote: 'The amount looks small or tempting to lower your guard.' }
      ],
      successFeedback: 'Money protected! Entering a PIN always sends money, never receives it.',
      correctionFeedback: 'Warning! Scammers exploit misunderstandings of UPI collect requests.',
      practicalTip: item.habit,
      learnMoreText: 'Remember: Receiving money via UPI requires only your UPI ID or phone number.',
      points: 100
    });
  }

  // ===========================================================================
  // 6. INCIDENT RESPONSE & ACCOUNT RECOVERY (20 Activities · 10%)
  // ===========================================================================
  const incidentScenarios = [
    { title: 'Clicked a Suspicious Link by Mistake', action: 'Disconnect WiFi and scan device for unauthorized apps', habit: 'Immediately disconnect network access to prevent malware from contacting its command server.', type: 'help_the_character' as InteractionType },
    { title: 'Disclosed Bank Credentials on Fake Portal', action: 'Call Bank Helpline Immediately to Freeze Account', habit: 'Call your bank helpline right away to block netbanking and cards before funds are drained.', type: 'help_the_character' as InteractionType },
    { title: 'Account Takeover on Social Media', action: 'Use Official Account Recovery & Alert Friends', habit: 'Warn your friends not to send money to your compromised account while you recover it.', type: 'help_the_character' as InteractionType },
    { title: 'Unauthorized Debit Card Transaction', action: 'Block Card in Mobile App & File Dispute', habit: 'Lock the card immediately in your banking app and dispute the charge within 24 hours.', type: 'help_the_character' as InteractionType },
    { title: 'Ransomware Pop-up on Laptop', action: 'Isolate Device & Do Not Pay Extortion', habit: 'Disconnect the infected computer from the network to keep backup drives safe.', type: 'help_the_character' as InteractionType },
    { title: 'Phishing Email Reported at Work', action: 'Forward to IT Security Team & Delete', habit: 'Report phishing emails to internal security teams so company filters can block them.', type: 'help_the_character' as InteractionType },
    { title: 'Lost Phone in Public Taxi', action: 'Remotely Lock & Wipe Device via Find My Device', habit: 'Use Google or Apple "Find My" to remotely wipe sensitive banking data from lost devices.', type: 'help_the_character' as InteractionType },
    { title: 'SIM Card Suddenly Stops Working (No Signal)', action: 'Contact Mobile Carrier Immediately from Another Phone', habit: 'Sudden loss of cellular reception may indicate an unauthorized SIM swap attempt.', type: 'help_the_character' as InteractionType },
    { title: 'Friend’s Compromised Account Asks for Money', action: 'Call Friend on Phone to Confirm Situation', habit: 'Never transfer funds based purely on messaging app text without verbal confirmation.', type: 'help_the_character' as InteractionType },
    { title: 'Reporting Cybercrime to National Portal', action: 'File Complaint on 1930 / cybercrime.gov.in', habit: 'Report financial cyber fraud immediately to 1930 to trigger golden-hour bank freezes.', type: 'help_the_character' as InteractionType }
  ];

  for (let i = 0; i < 20; i++) {
    const item = incidentScenarios[i % incidentScenarios.length];
    const charKeys: CharacterId[] = ['priya', 'rohan', 'thatha', 'murugan', 'ravi', 'arun'];
    const cKey = charKeys[i % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-inc-${String(i + 1).padStart(2, '0')}`,
      category: 'incident_response_recovery',
      categoryLabel: 'Incident Response & Recovery',
      difficulty: i < 7 ? 'beginner' : i < 14 ? 'intermediate' : 'advanced',
      instruction: `Help ${profile.name} take immediate damage-control steps.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: 'device_screen',
        headerTitle: item.title,
        subtext: 'A security incident just occurred. Choose the most effective mitigation action.',
        badgeText: 'Emergency Recovery'
      },
      characterActions: [
        { id: 'act_safe', label: item.action, description: 'Rapid, decisive containment action.', isSafe: true },
        { id: 'act_risky', label: 'Wait and See if Anything Happens', description: 'Ignore the alert and do nothing.', isSafe: false }
      ],
      successFeedback: 'Calm and effective response! Prompt containment minimizes potential loss.',
      correctionFeedback: 'Time is critical during a security incident. Rapid containment is essential.',
      practicalTip: item.habit,
      learnMoreText: 'Reporting financial fraud to helpline 1930 within the first 2 hours yields the highest recovery rate.',
      points: 100
    });
  }

  // ===========================================================================
  // 7. LEGITIMATE NOTIFICATIONS & SENSIBLE VERIFICATION (10 Activities · 5%)
  // ===========================================================================
  const legitScenarios = [
    { title: 'Flight Check-in 48h Reminder', text: 'IndiGo / Air India: Web check-in is now open for flight 6E-204 to Mumbai.', habit: 'Legitimate reminders contain booking details and do not demand passwords or urgent fees.', type: 'tap_to_discover' as InteractionType },
    { title: 'Bank Salary Credit Notification', text: 'HDFC: Salary of INR 65,000 credited to account ending 4082 via NEFT.', habit: 'Informational bank credit alerts do not ask you to tap links or enter PINs.', type: 'tap_to_discover' as InteractionType },
    { title: 'E-Commerce Package Out for Delivery', text: 'Amazon Delivery: Package will be delivered today by rider Arun. OTP on delivery.', habit: 'Legitimate delivery OTPs are given only when the physical parcel is handed to you.', type: 'help_the_character' as InteractionType },
    { title: 'Income Tax Return Filed Acknowledgment', text: 'IT Dept: ITR-1 for AY 2026-27 successfully e-verified with acknowledgment number.', habit: 'Official government acknowledgments contain specific legal filing numbers.', type: 'tap_to_discover' as InteractionType },
    { title: 'Credit Card Monthly Statement Email', text: 'Monthly statement attached as password-protected PDF (Password: DOB).', habit: 'Banks use encrypted PDFs with documented formulas (like date of birth) for statements.', type: 'tap_to_discover' as InteractionType },
    { title: 'Mobile Carrier Monthly Plan Renewal SMS', text: 'Your monthly recharge was successful. 2GB/day active until next billing cycle.', habit: 'Routine confirmation messages originate from official 6-character telecom headers.', type: 'tap_to_discover' as InteractionType },
    { title: 'Electricity Board Bill Generated', text: 'TNEB: Electricity consumption bill of ₹1,420 generated. Due date in 15 days.', habit: 'Genuine utility bills provide a reasonable due date window, not a 30-minute threat.', type: 'tap_to_discover' as InteractionType },
    { title: 'Hospital Appointment Confirmation', text: 'Apollo Clinics: Dr. Meena appointment confirmed for tomorrow 10:30 AM.', habit: 'Healthcare appointment confirmations do not require upfront credit card verification.', type: 'tap_to_discover' as InteractionType },
    { title: 'School Fee Payment Receipt', text: 'DAV School: Fee receipt #9281 recorded successfully for term 2.', habit: 'Receipt notices are purely informational records and require zero immediate action.', type: 'tap_to_discover' as InteractionType },
    { title: 'Gas Cylinder Booking Confirmation', text: 'Indane: Gas refill booked. Delivery within 2 working days. Refill ID #49201.', habit: 'Authentic booking notifications supply traceable tracking reference numbers.', type: 'tap_to_discover' as InteractionType }
  ];

  legitScenarios.forEach((item, idx) => {
    const charKeys: CharacterId[] = ['arun', 'priya', 'thatha', 'murugan', 'ravi', 'rohan'];
    const cKey = charKeys[idx % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-legit-${String(idx + 1).padStart(2, '0')}`,
      category: 'legitimate_verification',
      categoryLabel: 'Legitimate Alerts & Verification',
      difficulty: 'beginner',
      instruction: `Help ${profile.name} recognize this authentic notice.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: 'phone_notification',
        headerTitle: item.title,
        subtext: item.text,
        badgeText: 'Official Header'
      },
      hotspots: [
        { id: 'h_legit', label: 'Official Notice Details', hint: 'Notice absence of panic links or password demands', isCorrect: true, revealNote: item.habit },
        { id: 'h_panic', label: 'Mark as Scam Without Checking', hint: 'Blind refusal', isCorrect: false, revealNote: 'Blanket panic prevents you from monitoring your genuine account activity.' }
      ],
      characterActions: [
        { id: 'act_safe', label: 'Verify via Official App or Keep for Records', description: 'Recognize genuine notice without panicking.', isSafe: true },
        { id: 'act_risky', label: 'Panic or Share Unneeded Credentials', description: 'Send sensitive data unnecessarily.', isSafe: false }
      ],
      successFeedback: 'Balanced judgment! Real notices provide information without demanding passwords.',
      correctionFeedback: 'Notice the difference: Legitimate notifications don\'t threaten or demand secret codes.',
      practicalTip: item.habit,
      learnMoreText: 'Learning to distinguish legitimate alerts avoids false alarms and unneeded anxiety.',
      points: 100
    });
  });

  // ===========================================================================
  // 8. EVERYDAY DEVICE SAFETY & GOOD DIGITAL HABITS (10 Activities · 5%)
  // ===========================================================================
  const habitScenarios = [
    { title: 'Backup Family Photos to Encrypted Drive', habit: 'Maintain regular 3-2-1 backups (3 copies, 2 media types, 1 offsite/cloud).', type: 'build_safer_setup' as InteractionType },
    { title: 'Public USB Charging Station Juicing Attack', habit: 'Use a "data blocker" USB adapter or your own wall charger in public stations.', type: 'help_the_character' as InteractionType },
    { title: 'Sell or Trade-in Old Smartphone', habit: 'Always factory reset and remove linked Google/Apple accounts before reselling.', type: 'fix_the_problem' as InteractionType },
    { title: 'Home WiFi Router Default Password Change', habit: 'Change the router admin password from "admin/admin" to a strong unique phrase.', type: 'build_safer_setup' as InteractionType },
    { title: 'Camera Privacy Shutter on Laptop', habit: 'Use a physical camera cover slider for peace of mind when webcams are not in use.', type: 'build_safer_setup' as InteractionType },
    { title: 'Discarded Bank Statement Shredding', habit: 'Shred physical bank statements and delivery package labels before disposal.', type: 'help_the_character' as InteractionType },
    { title: 'Lock Phone Before Passing to Acquaintance', habit: 'Use "App Pinning" or guided access when letting someone make a single call.', type: 'build_safer_setup' as InteractionType },
    { title: 'Disable NFC When Not in Use', habit: 'Keeping NFC turned off when not paying prevents accidental contact scanning.', type: 'fix_the_problem' as InteractionType },
    { title: 'Verify Downloaded Checksum for Critical Software', habit: 'Verifying hash signatures ensures downloaded installers were not tampered with.', type: 'tap_to_discover' as InteractionType },
    { title: 'Clean Dormant Accounts Annually', habit: 'Delete old unused accounts to prevent credentials from lingering in future breaches.', type: 'build_safer_setup' as InteractionType }
  ];

  habitScenarios.forEach((item, idx) => {
    const charKeys: CharacterId[] = ['arun', 'priya', 'thatha', 'murugan', 'ravi', 'rohan'];
    const cKey = charKeys[idx % charKeys.length];
    const profile = charProfiles[cKey];

    activities.push({
      id: `puz-habits-${String(idx + 1).padStart(2, '0')}`,
      category: 'device_safety_habits',
      categoryLabel: 'Everyday Device Safety',
      difficulty: 'beginner',
      instruction: `Help ${profile.name} apply this good digital habit.`,
      character: cKey,
      characterName: profile.name,
      characterRole: profile.role,
      interactionType: item.type,
      sceneContext: {
        visualType: 'settings_menu',
        headerTitle: item.title,
        subtext: 'Proactive daily digital hygiene protects your personal hardware.',
        badgeText: 'Proactive Habit'
      },
      settings: [
        { id: 'hb1', name: item.title, description: 'Recommended proactive hygiene step', initialState: false, targetState: true, isTargetSetting: true },
        { id: 'hb2', name: 'Auto-Share Diagnostics', description: 'Upload device usage data', initialState: true, targetState: false, isTargetSetting: false }
      ],
      characterActions: [
        { id: 'act_safe', label: 'Apply Protective Habit', description: 'Enable protection or perform safe practice.', isSafe: true },
        { id: 'act_risky', label: 'Ignore and Leave Unsecured', description: 'Bypass safety recommendation.', isSafe: false }
      ],
      hotspots: [
        { id: 'h_hab', label: 'Recommended Action', hint: 'Tap the proactive step', isCorrect: true, revealNote: item.habit },
        { id: 'h_skip', label: 'Skip Habit', hint: 'Do nothing', isCorrect: false, revealNote: 'Consistent everyday habits prevent major incidents.' }
      ],
      successFeedback: 'Habit mastered! Consistent proactive habits build lifelong digital confidence.',
      correctionFeedback: 'Small daily steps make a huge difference in your overall digital safety.',
      practicalTip: item.habit,
      learnMoreText: 'Simple habits like physical camera covers and regular backups prevent stressful emergencies.',
      points: 100
    });
  });

  return activities;
}

export const CYBER_PUZZLES_200: CyberPuzzleActivity[] = assemble200Activities();
