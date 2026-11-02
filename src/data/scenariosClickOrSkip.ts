import { CharacterType } from '../components/vilaiyaattu/CharacterScenes.tsx';

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
  character: CharacterType;
  settingName: string;
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

// Helper template builder to generate 100 robust, distinct scenarios across 10 realistic categories
function createScenarios(): ClickOrSkipScenario[] {
  const categories = [
    {
      cat: 'Work-from-Home Task Scams',
      char: 'woman_at_home' as CharacterType,
      setting: 'Home Living Room',
      items: [
        { name: 'YouTube Video Liking Job', fee: '₹150 bait', bait: '3 video likes for ₹150 instant UPI', trap: 't.me/GlobalTaskHR_04', realUrl: 'https://telegram-task-vip.org/invest', advice: 'Legitimate employers never pay ₹5,000/day for liking videos or demand prepaid security deposits.' },
        { name: 'Hotel & Resort Review Rating Job', fee: '₹200 instant', bait: 'Rate 5 hotels on Google Maps for instant cash', trap: 'bit.ly/hotel-rater-jobs', realUrl: 'https://hotel-reviews-scam.xyz/deposit', advice: 'Review farms use upfront payments as bait to trick users into depositing large sums in crypto tasks.' },
        { name: 'E-Commerce Product Boosting Task', fee: '₹500 welcome bonus', bait: 'Add items to cart to boost merchant ranking', trap: 'wa.me/919876543210?text=Job', realUrl: 'https://boost-merchant-vip.net/login', advice: 'Adding items to carts does not increase merchant sales; this is an advance-fee recharge trap.' },
        { name: 'Part-Time Telegram Movie Reviewer', fee: '₹3,000/day promise', bait: 'Watch trailers and submit 1-sentence reviews', trap: 't.me/MovieRatingDesk_9', realUrl: 'https://movie-tasks-fund.live/pay', advice: 'No media studio pays users through anonymous Telegram groups with withdrawal tier locks.' },
        { name: 'Data Entry / Typing Captcha Contract', fee: '₹1,500 security deposit', bait: 'Earn ₹25,000/month typing scanned documents', trap: 'tinyurl.com/captcha-work-in', realUrl: 'https://data-entry-hub.org/penalty', advice: 'Typing contract scams invent fake quality errors to extort legal cancellation penalties from applicants.' },
        { name: 'Social Media Influencer Like Assistant', fee: 'Daily payout guarantee', bait: 'Follow Instagram accounts of brands for ₹50 each', trap: 'instatask-earning.online/reg', realUrl: 'https://instatask-earning.online/download.apk', advice: 'Third-party APKs promising Instagram automated payout tokens steal your social credentials and contacts.' },
        { name: 'Audio Book Narration Voice Rating', fee: 'Flexible hours', bait: 'Listen to 30-sec audio clips and rate voice quality', trap: 'voice-rater-pro.in/signup', realUrl: 'https://voice-rater-pro.in/subscription', advice: 'Beware of unsolicited freelance offers asking for bank login or upfront verification fees.' },
        { name: 'App Store Rating & Feedback Agent', fee: 'Daily ₹1,200', bait: 'Install new apps and leave 5-star ratings', trap: 'appstore-reviewer.club/app', realUrl: 'https://appstore-reviewer.club/malware.apk', advice: 'Installing unverified APKs outside the official Google Play / App Store bypasses OS security sandboxes.' },
        { name: 'Proofreading High School Notes', fee: '₹500 per chapter', bait: 'Review simple English essays and get paid weekly', trap: 'bit.ly/proofread-freelance', realUrl: 'https://proofreading-scam.biz/deposit', advice: 'Scammers demand "identity verification deposits" before sending nonexistent manuscripts.' },
        { name: 'Online Survey & Consumer Opinion Panel', fee: 'Instant ₹800 coupon', bait: 'Complete a 3-minute survey about household brands', trap: 'survey-cash-direct.top/q', realUrl: 'https://survey-cash-direct.top/adware', advice: 'Fake survey aggregators redirect indefinitely through adware networks to harvest phone numbers and emails.' }
      ]
    },
    {
      cat: 'Urgent Disconnection Scams',
      char: 'small_business_owner' as CharacterType,
      setting: 'Retail Shop Office',
      items: [
        { name: 'Electricity Bill Disconnection Notice', fee: 'Power cut tonight at 9:30 PM', bait: 'Previous bill not updated in server; call officer immediately', trap: 'bit.ly/tneb-power-update', realUrl: 'https://tneb-payment-collector.apk', advice: 'State electricity boards send messages via registered TRAI DLT headers, never ordinary 10-digit mobile numbers.' },
        { name: 'Piped Natural Gas Meter Disconnection', fee: 'Gas shutoff in 2 hours', bait: 'Safety inspection pending; pay ₹15 update fee', trap: 'png-gas-update.online/pay', realUrl: 'https://png-gas-update.online/card-theft', advice: 'Utility providers do not terminate supplies on 2 hours notice via SMS links.' },
        { name: 'Broadband Fiber Line Termination Notice', fee: 'Internet disconnect 6 PM', bait: 'KYC missing for high-speed fiber; click to verify Aadhaar', trap: 'airtel-fiber-kyc.net/verify', realUrl: 'https://airtel-fiber-kyc.net/phishing', advice: 'Always verify broadband account status inside the official provider app or website.' },
        { name: 'Commercial Water Meter Disconnection', fee: 'Commercial connection freeze', bait: 'Municipal water assessment overdue by 90 days', trap: 'jal-board-notice.in/bill', realUrl: 'https://jal-board-notice.in/mule-pay', advice: 'Municipal water bills are paid at official e-governance counters or official municipal portals.' },
        { name: 'LPG Cylinder Subsidy Suspension Alert', fee: 'Subsidy hold', bait: 'Link bank account to prevent subsidy forfeiture', trap: 'lpg-subsidy-direct.co/aadhaar', realUrl: 'https://lpg-subsidy-direct.co/harvest', advice: 'Government subsidies are linked through bank branch mandates or official unified portals (myLPG.in).' },
        { name: 'Electricity Meter Smart-Card Deactivation', fee: 'Prepaid meter lockout', bait: 'Recharge failed; download APK to reboot meter', trap: 'smartmeter-reboot.in/dl', realUrl: 'https://smartmeter-reboot.in/trojan.apk', advice: 'Never install Android APK files received through SMS to manage smart utility meters.' },
        { name: 'Hospital Emergency Power Disconnect Threat', fee: 'Critical line notice', bait: 'Urgent compliance penalty required for medical shop', trap: 'power-compliance.org/fast', realUrl: 'https://power-compliance.org/stealer', advice: 'Fraudsters exploit emergency anxiety to bypass accounting verification protocols.' },
        { name: 'Telecom Tower Lease Land Tax Due', fee: 'Tower demolition notice', bait: 'Pay local cess tax to keep telecom lease valid', trap: 'telecom-cess.online/tax', realUrl: 'https://telecom-cess.online/gateway', advice: 'Telecom tower operations are handled directly via corporate legal agreements, not SMS links.' },
        { name: 'State Electricity Late Fee Extortion', fee: '₹3,400 penalty waiver', bait: 'Clear old dispute for 50% discount within 30 mins', trap: 'discom-rebate.in/settle', realUrl: 'https://discom-rebate.in/upi', advice: 'Discount waivers with 30-minute timers are manufactured urgency designed to prevent thinking.' },
        { name: 'Commercial Trade License Shutoff Notice', fee: 'Shop seal warning', bait: 'Municipal health officer will seal premises tomorrow', trap: 'trade-license-portal.cc/fine', realUrl: 'https://trade-license-portal.cc/phish', advice: 'Official shop license inspections require formal written summons with government stamp.' }
      ]
    },
    {
      cat: 'Parcel & Courier Redelivery Traps',
      char: 'delivery_recipient' as CharacterType,
      setting: 'Apartment Doorstep',
      items: [
        { name: 'Postal Department Address Incomplete', fee: '₹5 re-dispatch charge', bait: 'Tracking #IN89218 cannot deliver due to street number', trap: 'indiapost-redelivery.info/addr', realUrl: 'https://indiapost-redelivery.info/card_form', advice: 'The ₹5 fee is bait: fraudsters use it to capture your full debit card number, CVV, and OTP.' },
        { name: 'BlueDart Courier Wrong Pincode Hold', fee: '₹10 update fee', bait: 'Package returned to hub; update pincode now', trap: 'bluedart-track-update.site/pin', realUrl: 'https://bluedart-track-update.site/gateway', advice: 'Logistics couriers hold packages for reattempt without demanding debit card CVVs over random websites.' },
        { name: 'International Customs Clearance Fee', fee: '₹499 customs duty', bait: 'Overseas gift parcel arriving with unpaid duty', trap: 'customs-india-clearance.org/duty', realUrl: 'https://customs-india-clearance.org/pay', advice: 'Customs duties are assessed formally with a bill of entry, not personal UPI links.' },
        { name: 'Amazon Prime Failed Delivery Notice', fee: 'Delivery cancelled', bait: 'Driver could not find house; confirm coordinates', trap: 'amazon-delivery-status.club/map', realUrl: 'https://amazon-delivery-status.club/login', advice: 'Check delivery updates directly inside your authentic Amazon app, never through third-party SMS links.' },
        { name: 'Delhivery Package Damage Verification', fee: 'Insurance payout claim', bait: 'Your box arrived damaged; claim compensation', trap: 'delhivery-claims.biz/photo', realUrl: 'https://delhivery-claims.biz/apk', advice: 'Delivery claims never require downloading an external `.apk` file to view parcel damage photos.' },
        { name: 'DTDC Courier Address Rerouting Fee', fee: '₹25 rerouting fee', bait: 'Receiver requested alternate address', trap: 'dtdc-reroute-parcel.online/form', realUrl: 'https://dtdc-reroute-parcel.online/steal', advice: 'Always verify DTDC parcel tracking codes on dtdc.in directly.' },
        { name: 'E-Commerce Cash on Delivery Double Debit', fee: 'Double charge dispute', bait: 'OTP needed to reverse accidental extra payment', trap: 'cod-refund-desk.in/reverse', realUrl: 'https://cod-refund-desk.in/collect', advice: 'Entering your UPI PIN on a collect request sends money; PIN is never needed to receive refunds.' },
        { name: 'SpeedPost Registered Medical Parcel', fee: 'Urgent medication hold', bait: 'Prescription package pending receiver identity upload', trap: 'speedpost-meds.info/kyc', realUrl: 'https://speedpost-meds.info/id-theft', advice: 'Government SpeedPost does not request Aadhaar copies through third-party `.info` domains.' },
        { name: 'Courier Locker Access PIN Expiry', fee: 'Locker penalty fee', bait: 'Smart locker storage fee of ₹20 accumulating hourly', trap: 'smartlocker-collect.top/pin', realUrl: 'https://smartlocker-collect.top/hack', advice: 'Smart locker services send 4-digit PINs directly in SMS without requiring online payments.' },
        { name: 'Festival Hamper Delivery Confirmation', fee: 'Surprise gift package', bait: 'An anonymous friend sent you a celebration hamper', trap: 'festival-hamper-track.site/open', realUrl: 'https://festival-hamper-track.site/form', advice: 'Surprise gift parcel scams trick users into paying "freight handling charges" for non-existent gifts.' }
      ]
    },
    {
      cat: 'Banking, KYC & Account Freeze Alerts',
      char: 'working_professional' as CharacterType,
      setting: 'Office Desk',
      items: [
        { name: 'HDFC NetBanking PAN Card Expiry', fee: 'Account blocked today', bait: 'PAN expired in banking records; update to prevent freeze', trap: 'netbanking-kyc-verify.co.in/pan', realUrl: 'https://netbanking-kyc-verify.co.in/harvest', advice: 'Banks never send KYC update hyperlinks from 10-digit mobile phone numbers.' },
        { name: 'SBI YONO App Security Certificate Update', fee: 'App access terminated', bait: 'Your YONO app version is expired; install mandatory patch', trap: 'sbi-yono-update.online/yono.apk', realUrl: 'https://sbi-yono-update.online/malware.apk', advice: 'Only update banking applications through the official Google Play Store or Apple App Store.' },
        { name: 'Credit Card Reward Points Expiry Alert', fee: '₹9,850 cash voucher', bait: 'Points worth ₹9,850 expire midnight; convert to cash', trap: 'card-rewards-redeem.in/cash', realUrl: 'https://card-rewards-redeem.in/cc_phish', advice: 'Reward points conversions do not require entering your CVV and net banking password.' },
        { name: 'ICICI Inactive Debit Card Reactivation', fee: 'Card deactivated', bait: 'Card disabled due to non-usage; click to retain card', trap: 'icici-card-enable.top/auth', realUrl: 'https://icici-card-enable.top/steal', advice: 'Manage debit and credit card security toggles inside the official banking app under Card Controls.' },
        { name: 'Axis Bank Unauthorized Login Warning', fee: 'New device login', bait: 'Login from Kolkata IP; if not you, cancel immediately', trap: 'axis-security-cancel.online/stop', realUrl: 'https://axis-security-cancel.online/login', advice: 'Phishing alerts use fake security breach warnings to scare you into entering your credentials on fake portals.' },
        { name: 'Bank of Baroda Aadhaar Mandate Failure', fee: 'DBT benefits paused', bait: 'Biometric link failed; click to re-authenticate Aadhaar', trap: 'bob-aadhaar-link.in/portal', realUrl: 'https://bob-aadhaar-link.in/biometrics', advice: 'Aadhaar authentication is conducted only through UIDAI portals or physical bank branches.' },
        { name: 'Kotak 811 Zero-Balance Account Fee Warning', fee: 'Penalty of ₹1,200', bait: 'Maintain balance or pay penalty waiver fee', trap: 'kotak-zero-balance.site/exempt', realUrl: 'https://kotak-zero-balance.site/card', advice: 'Zero-balance accounts do not charge balance penalties; review official terms in your statements.' },
        { name: 'Punjab National Bank Dormant Account Alert', fee: 'Account marked dormant', bait: 'Deposit ₹1 to reactivate your dormant account', trap: 'pnb-dormant-active.in/deposit', realUrl: 'https://pnb-dormant-active.in/mule', advice: 'Reactivating a dormant account requires physical in-person branch verification with KYC documents.' },
        { name: 'Credit Bureau Score Drop Alert & Dispute', fee: 'Score fell by 85 pts', bait: 'Suspicious loan opened in your name; dispute now', trap: 'cibil-score-dispute.org/check', realUrl: 'https://cibil-score-dispute.org/steal', advice: 'Check official credit reports directly from authorized bureaus (CIBIL, Experian) using secure bookmarks.' },
        { name: 'Bank Fastag Wallet Negative Balance Blacklist', fee: 'Toll plaza blacklist', bait: 'Fastag blocked; recharge within 15 minutes', trap: 'fastag-toll-recharge.site/topup', realUrl: 'https://fastag-toll-recharge.site/skimmer', advice: 'Recharge Fastags using verified bank payment handles or inside reputable UPI apps directly.' }
      ]
    },
    {
      cat: 'Messaging Forwards & Social Viral Schemes',
      char: 'family' as CharacterType,
      setting: 'Family Living Room',
      items: [
        { name: 'Free 3 Months 5G Recharge Festival Gift', fee: 'Free recharge', bait: 'National jubilee celebration offering free 3 months recharge', trap: 'free-5g-festival.buzz/claim', realUrl: 'https://free-5g-festival.buzz/spam', advice: 'Telecom providers do not distribute unlimited recharges via ".buzz" viral forward links.' },
        { name: 'WhatsApp Gold Exclusive Feature Upgrade', fee: 'Exclusive feature pack', bait: 'Send 100MB files, hide blue ticks, video call 50 people', trap: 'whatsapp-gold-installer.net/dl', realUrl: 'https://whatsapp-gold-installer.net/spyware.apk', advice: 'WhatsApp Gold is a classic malware lure that installs spyware to read personal messages.' },
        { name: 'Prime Minister Student Laptop Scheme 2026', fee: 'Free laptop allocation', bait: 'Register with Aadhaar and school ID to claim HP laptop', trap: 'pm-laptop-scheme-gov.online/form', realUrl: 'https://pm-laptop-scheme-gov.online/harvest', advice: 'Official central schemes use ".gov.in" domains, never commercial ".online" or ".xyz" extensions.' },
        { name: 'Tata Motors 75th Anniversary Lucky Draw', fee: 'Free Harrier SUV', bait: 'Spin the wheel to win a luxury SUV; 3 spins remaining', trap: 'tata-anniversary-spin.site/wheel', realUrl: 'https://tata-anniversary-spin.site/phish', advice: 'Brand lucky spins requiring you to forward links to 10 WhatsApp groups are ad-fraud data harvesters.' },
        { name: 'Family Group Emergency Medical Loan Request', fee: 'Urgent ₹20,000 need', bait: 'Cousin in hospital with road accident; send via UPI now', trap: 'Emergency UPI transfer message', realUrl: 'upi://pay?pa=scammer.mule@upi', advice: 'Always call your relative directly on their known phone number to verify before transferring emergency funds.' },
        { name: 'Free Solar Panel Rooftop Subsidy Grant', fee: '100% free solar', bait: 'Government installing free solar in your neighborhood', trap: 'pm-solar-grant.club/apply', realUrl: 'https://pm-solar-grant.club/booking_fee', advice: 'Official PM Surya Ghar solar rooftop applications are only processed on pmsuryaghar.gov.in.' },
        { name: 'Ram Mandir Commemorative Gold Coin Free Delivery', fee: 'Only ₹199 shipping', bait: 'Limited edition consecrated coin sent free of charge', trap: 'ayodhya-coin-gift.store/order', realUrl: 'https://ayodhya-coin-gift.store/pay', advice: 'Religious sentiment is weaponized in shipping-fee scams that deliver plastic tokens or nothing at all.' },
        { name: 'Electricity Department WhatsApp Customer Group', fee: 'Bill dispute assistance', bait: 'Join community group for direct engineer access', trap: 'chat.whatsapp.com/invitation/scam', realUrl: 'https://whatsapp-group-stealer.org', advice: 'Official government utilities do not operate informal WhatsApp groups for bill adjustments.' },
        { name: 'Free Disney+ Hotstar 1-Year VIP Subscription', fee: 'Free streaming', bait: 'Telecom partnership giving free annual OTT pass', trap: 'hotstar-free-vip.xyz/activate', realUrl: 'https://hotstar-free-vip.xyz/credential_theft', advice: 'Never enter your streaming or phone passwords on third-party activation domains.' },
        { name: 'Viral Job Fair Registration Token', fee: 'Direct company interview', bait: 'TCS, Infosys, Wipro mass hiring fair in your city', trap: 'mega-job-fair.in/pass', realUrl: 'https://mega-job-fair.in/entry_ticket_fee', advice: 'Premier IT firms never charge application fees or conduct off-campus drives via viral forwards.' }
      ]
    },
    {
      cat: 'Fake Customer Care & Search Engine Traps',
      char: 'woman_at_home' as CharacterType,
      setting: 'Kitchen & Dining Table',
      items: [
        { name: 'Google Pay Transaction Stuck Refund Call', fee: '₹3,000 stuck in transit', bait: 'Refund manager calls from 10-digit number to reverse payment', trap: 'AnyDesk / TeamViewer remote install', realUrl: 'https://remote-desktop-takeover.apk', advice: 'Customer support agents never ask you to install remote screen-sharing tools like AnyDesk to refund money.' },
        { name: 'IRCTC Train Ticket Refund Toll-Free Scam', fee: 'Cancelled ticket refund', bait: 'Call 9811234567 found on Google Maps listing for IRCTC', trap: 'Fake phone number in search results', realUrl: 'tel:9811234567', advice: 'Scammers edit phone numbers on Google Maps listings; always verify official contact numbers on irctc.co.in.' },
        { name: 'Swiggy / Zomato Food Order Missing Item Agent', fee: '₹450 missing pizza refund', bait: 'Agent asks you to scan a QR code to receive the refund', trap: 'Scan QR code to receive money', realUrl: 'upi://pay?pa=fake.agent@upi&am=450', advice: 'Scanning a QR code always DEDUCTS money from your account; you never scan a QR code to receive money.' },
        { name: 'Paytm Wallet KYC Home Executive Visit', fee: 'KYC expired', bait: 'Executive will visit home; pay ₹20 appointment fee online', trap: 'paytm-kyc-appointment.in/pay', realUrl: 'https://paytm-kyc-appointment.in/steal', advice: 'Do not pay visit fees on third-party websites; complete wallet KYC inside the official verified application.' },
        { name: 'Airline Baggage Lost Helpline on Twitter / X', fee: 'Lost suitcase tracking', bait: 'Support handle @IndiGo_Help_Desk asks for WhatsApp chat', trap: 'Fake social media support handle', realUrl: 'https://wa.me/917890123456', advice: 'Check for verified airline checkmarks and use official airline websites for baggage tracking.' },
        { name: 'Gas Agency Cylinder Booking Helpline', fee: 'Cylinder delayed 5 days', bait: 'Book express delivery by transferring ₹50 booking advance', trap: 'express-gas-dispatch.site/book', realUrl: 'https://express-gas-dispatch.site/upi', advice: 'Book domestic LPG cylinders only via registered IVRS phone numbers or the unified official apps.' },
        { name: 'Aadhaar Card Address Correction Assistance', fee: 'Fast-track address update', bait: 'Update address without document proof for ₹350', trap: 'm-aadhaar-fastrack.co/update', realUrl: 'https://m-aadhaar-fastrack.co/aadhaar_otp', advice: 'Address updates can only be performed legitimately through myaadhaar.uidai.gov.in with valid proofs.' },
        { name: 'Hospital Doctor Appointment Pre-Booking Token', fee: 'Doctor slot confirmed', bait: 'Pay ₹100 registration fee to guarantee 10 AM consultation', trap: 'apollo-clinic-booking.site/pay', realUrl: 'https://apollo-clinic-booking.site/card', advice: 'Search engine clinic listings often feature scammer numbers; book through official hospital apps directly.' },
        { name: 'Mutual Fund Dividend Redemption Helpline', fee: 'Unclaimed dividend of ₹8,400', bait: 'Transfer to alternate bank account before financial year end', trap: 'amfi-dividend-claim.org/verify', realUrl: 'https://amfi-dividend-claim.org/phish', advice: 'Unclaimed dividends are tracked and claimed through official RTA portals (CAMS, KFintech).' },
        { name: 'DTH Dish TV Signal Error Correction', fee: 'Error code 101 on screen', bait: 'Send SMS with card number to clear satellite blockage', trap: 'dishtv-signal-clear.top/refresh', realUrl: 'https://dishtv-signal-clear.top/gateway', advice: 'Signal refresh requests are free and performed inside the DTH provider portal or official WhatsApp bot.' }
      ]
    },
    {
      cat: 'Online Shopping & Too-Good-To-Be-True Deals',
      char: 'working_professional' as CharacterType,
      setting: 'Home Study',
      items: [
        { name: 'iPhone 16 Pro Flash Sale for ₹2,499', fee: '95% discount', bait: 'Customs seized warehouse clearance sale; only 5 units left', trap: 'apple-customs-sale.shop/buy', realUrl: 'https://apple-customs-sale.shop/checkout', advice: 'Premium electronics are never sold at 95% discount; fake stores take your money and ship empty boxes.' },
        { name: 'Brand Sneakers Buy 1 Get 4 Free Offer', fee: 'Nike / Adidas clearance', bait: 'End of season clearance with cash on delivery unavailable', trap: 'sneakers-clearance-deal.online', realUrl: 'https://sneakers-clearance-deal.online/payment', advice: 'New lookalike domains offering extreme multi-buy discounts are disposable credit-card harvesting traps.' },
        { name: 'Luggage Trolley Bag Set for ₹499 on Instagram Ad', fee: 'Factory direct price', bait: '3-piece polycarbonate luggage with international warranty', trap: 'travel-luggage-direct.store', realUrl: 'https://travel-luggage-direct.store/pay', advice: 'Inspect merchant domain creation date and customer reviews before entering payment details on social media ads.' },
        { name: 'Gold Jewellery 50% Off Making Charge & 0% GST', fee: 'Festive gold offer', bait: 'Pure 24K hallmarked coin at ₹4,000 below market rate', trap: 'tanishq-festive-store.site/coin', realUrl: 'https://tanishq-festive-store.site/skimmer', advice: 'Gold is a standardized commodity; offers significantly below market rate are counterfeit scams.' },
        { name: 'Luxury Perfume Clearance Tester Bottles', fee: '₹899 for Dior / Chanel', bait: 'Original tester stock imported from Dubai duty free', trap: 'luxury-perfume-outlet.shop', realUrl: 'https://luxury-perfume-outlet.shop/phish', advice: 'Counterfeit cosmetic websites steal credit card details and supply untested hazardous liquids.' },
        { name: 'Electric Scooter Booking for ₹499 Pre-Launch', fee: 'EV scooter allotment', bait: 'Book subsidy slot for high-range EV with guaranteed delivery', trap: 'green-ev-scooter.org/book', realUrl: 'https://green-ev-scooter.org/advance', advice: 'Verify electric vehicle manufacturers through official automotive association directories before booking.' },
        { name: 'Dry Fruits & Nuts Wholesale 5kg Pack for ₹999', fee: 'Wholesale Kashmiri dry fruits', bait: 'Almonds, cashews, walnuts delivered with free honey jar', trap: 'kashmir-dryfruits-wholesale.in', realUrl: 'https://kashmir-dryfruits-wholesale.in/gateway', advice: 'Disproportionately cheap grocery bulk deals on social media disappear after taking upfront payments.' },
        { name: 'Smart Watch with ECG & Blood Pressure for ₹399', fee: 'Warehouse overstock', bait: 'Medical grade smartwatch with AMOLED screen at ₹399', trap: 'smart-gadgets-bazaar.online', realUrl: 'https://smart-gadgets-bazaar.online/pay', advice: 'Unrealistic gadget pricing is designed to capture card credentials on unsecured payment screens.' },
        { name: 'Kids Bicycle Direct from Manufacturer for ₹799', fee: 'Direct factory outlet', bait: 'Alloy frame mountain bike for children with free helmet', trap: 'kids-cycles-direct.shop', realUrl: 'https://kids-cycles-direct.shop/collect', advice: 'Always verify merchant physical registration and refund policy before making online payments.' },
        { name: 'Silk Saree Direct Weaver Festival Sale', fee: 'Kanchipuram pure silk ₹899', bait: 'Support traditional weavers facing warehouse flooding', trap: 'pure-silk-weavers.site/saree', realUrl: 'https://pure-silk-weavers.site/card_theft', advice: 'Emotional charity appeals combined with synthetic silk at absurd prices are classic e-commerce traps.' }
      ]
    },
    {
      cat: 'Investment, Crypto & High-Return Schemes',
      char: 'small_business_owner' as CharacterType,
      setting: 'Office',
      items: [
        { name: 'Institutional IPO Guaranteed Allotment Club', fee: '100% allotment guarantee', bait: 'Special institutional quota for high-demand IPO via VIP group', trap: 't.me/HNI_IPO_Allotment_Desk', realUrl: 'https://institutional-ipo-pool.cc/invest', advice: 'Retail investors can only apply for IPOs through SEBI-registered ASBA brokers; there are no secret VIP groups.' },
        { name: 'Daily 10% Compounding AI Crypto Arbitrage App', fee: 'Automated trading bot', bait: 'Deposit ₹10,000, AI trades across Binance and returns ₹1,000 daily', trap: 'crypto-ai-arbitrage.app/dl', realUrl: 'https://crypto-ai-arbitrage.app/malware.apk', advice: 'Any scheme promising guaranteed daily double-digit returns is a Ponzi scheme destined to collapse.' },
        { name: 'Foreign Forex Currency Trading Signal Group', fee: '98% win rate signals', bait: 'Copy expert trades on MT5 with 1:500 leverage', trap: 'forex-signals-vip.biz/join', realUrl: 'https://unregulated-broker-drain.com', advice: 'Trading forex on unauthorized offshore platforms violates Indian FEMA regulations and risks complete loss.' },
        { name: 'Pig Butchering Romance & Wealth Investment', fee: 'Build joint future fund', bait: 'Online acquaintance guides you to invest in a gold exchange', trap: 'sgx-gold-trading.live/login', realUrl: 'https://sgx-gold-trading.live/takeover', advice: 'Never invest in financial platforms recommended by individuals you have only met on social media or dating apps.' },
        { name: 'Pre-Market Penny Stock Surge Tip on WhatsApp', fee: 'Upper circuit guaranteed', bait: 'Operator group pumping microcap stock tomorrow at 9:15 AM', trap: 't.me/StockMarketPumps_India', realUrl: 'https://penny-stock-trap.org', advice: 'Stock pump-and-dump schemes trap retail buyers while scammers sell off their accumulated holdings.' },
        { name: 'Agricultural Sandalwood Farming 500% Return', fee: 'Long-term timber plantation', bait: 'Own 10 sandalwood trees with government harvest certificate', trap: 'green-sandalwood-trust.in', realUrl: 'https://green-sandalwood-trust.in/invest', advice: 'Check if plantation schemes are registered under SEBI Collective Investment Schemes (CIS).' },
        { name: 'Peer-to-Peer High Interest Lending Circle', fee: 'Earn 24% annual interest', bait: 'Lend money to verified local shopkeepers via private app', trap: 'p2p-direct-lending.net/app', realUrl: 'https://p2p-direct-lending.net/apk', advice: 'P2P lending platforms in India must hold a valid NBFC-P2P license issued by the Reserve Bank of India.' },
        { name: 'Carbon Credit Green Investment Token', fee: 'Global sustainability yield', bait: 'Buy verified ESG carbon credits and trade on international market', trap: 'carbon-yield-token.io/stake', realUrl: 'https://carbon-yield-token.io/wallet_drainer', advice: 'Crypto wallet drainers request unlimited token approval to sweep all assets from your private wallet.' },
        { name: 'Gold Micro-Leasing Daily Payout Scheme', fee: 'Lease your digital gold', bait: 'Earn 1% daily interest on your digital gold holdings', trap: 'gold-lease-payout.in/stake', realUrl: 'https://gold-lease-payout.in/theft', advice: 'Gold does not generate high daily yields; unverified leasing platforms run with customer deposits.' },
        { name: 'Mutual Fund Pre-Listing Private Placement', fee: 'Pre-IPO shares at discount', bait: 'Exclusive shares of unicorn startups before stock exchange debut', trap: 'unicorn-shares-prelisting.co', realUrl: 'https://unicorn-shares-prelisting.co/form', advice: 'Unlisted share transactions must be conducted through certified depositories with formal stamp duty verification.' }
      ]
    },
    {
      cat: 'Instant Loan & Blackmail Extortion Traps',
      char: 'woman_at_home' as CharacterType,
      setting: 'Bedroom Desk',
      items: [
        { name: 'Instant 5-Minute Paperless Loan of ₹50,000', fee: 'No CIBIL score needed', bait: 'Instant loan approved in 5 minutes with zero documents', trap: 'fast-cash-loan.top/download.apk', realUrl: 'https://predatory-loan-app.xyz/permissions', advice: 'Predatory loan apps harvest your contacts and photo gallery to blackmail you with doctored images.' },
        { name: 'Electricity Disconnect Late Fee Loan Waiver', fee: 'Loan settlement relief', bait: 'Settle overdue loan with 90% discount on WhatsApp', trap: 'loan-settlement-waiver.in/pay', realUrl: 'https://loan-settlement-waiver.in/upi', advice: 'Loan settlements must be completed directly with RBI-registered banks with a formal No Due Certificate.' },
        { name: 'Credit Limit Upgrade from ₹25,000 to ₹3,00,000', fee: 'Zero fee upgrade', bait: 'Pre-approved credit card limit increase; click to accept', trap: 'card-limit-boost.site/upgrade', realUrl: 'https://card-limit-boost.site/otp_steal', advice: 'Genuine credit limit increases are approved inside your mobile banking app without asking for OTPs.' },
        { name: 'Police Cyber Cell Video Call Blackmail Threat', fee: 'Digital arrest warning', bait: 'Parcel intercepted with illegal narcotics; arrest warrant issued', trap: 'Skype / WhatsApp video call demand', realUrl: 'https://fake-police-station.online', advice: 'Law enforcement agencies never conduct "digital arrest" trials over Skype or demand money transfers.' },
        { name: 'Credit Card Bill EMI Conversion Cash Rebate', fee: '₹1,200 cashback', bait: 'Convert last month bill into 0% interest EMI and get cashback', trap: 'emi-cashback-portal.net/convert', realUrl: 'https://emi-cashback-portal.net/card', advice: 'Review EMI terms in your verified banking statement rather than clicking SMS links.' },
        { name: 'Emergency Personal Overdraft Pre-Approval', fee: 'Overdraft facility', bait: 'Emergency funds available in 60 seconds; sign digital note', trap: 'emergency-overdraft.biz/apply', realUrl: 'https://emergency-overdraft.biz/phish', advice: 'Legitimate personal loans require formal income verification through RBI regulated lenders.' },
        { name: 'Loan App Harassment Defense & File Deletion', fee: '₹2,500 file deletion service', bait: 'We will hack the illegal loan app database and remove your data', trap: 'loan-app-data-remover.in/service', realUrl: 'https://secondary-scam-recovery.org', advice: 'Recovery scammers prey on loan app victims by falsely claiming they can delete server databases.' },
        { name: 'Education Loan Interest Subsidy Release', fee: 'Interest rebate ₹18,000', bait: 'Central interest subsidy ready for disbursement', trap: 'edu-loan-subsidy.org/claim', realUrl: 'https://edu-loan-subsidy.org/login', advice: 'Education loan subsidies are credited directly through the Canara Bank Vidya Lakshmi portal.' },
        { name: 'Vehicle Repossession Stop Payment Order', fee: 'Car seizure notice', bait: 'Two EMI defaults; pay ₹5,000 recovery stay charge', trap: 'vehicle-seizure-stay.co/notice', realUrl: 'https://vehicle-seizure-stay.co/pay', advice: 'Bank loan recoveries follow legal SARFAESI notices and direct branch communication.' },
        { name: 'Medical Emergency Fast-Loan Approval', fee: 'Disburse in 10 minutes', bait: 'Immediate medical treatment funds with zero guarantor', trap: 'hospital-urgent-loan.online/get', realUrl: 'https://hospital-urgent-loan.online/steal', advice: 'During medical stress, consult hospital patient finance desks rather than unverified online loan apps.' }
      ]
    },
    {
      cat: 'Legitimate Everyday Scenarios (Discernment Test)',
      char: 'delivery_recipient' as CharacterType,
      setting: 'Home Entrance',
      items: [
        { name: 'Official Bank Credit Card Fraud Check (No Link)', fee: 'Security notice', bait: 'Transaction of ₹8,400 at Croma on 23-Oct. If not you, SMS NO to 56767 or call number on card back.', trap: 'Legitimate SMS alert with NO links', realUrl: 'tel:1800120120', advice: 'Authentic fraud alerts do NOT include hyperlinks and advise you to check the physical number on the back of your card.' },
        { name: 'Genuine Electricity Board Receipt (DLT Header)', fee: 'Payment receipt', bait: 'Payment of ₹1,420 received for Consumer #040921 on 22-Oct. Receipt #TNEB8921. VM-TNEBPW.', trap: 'Official receipt SMS with registered header', realUrl: 'https://www.tnebnet.org', advice: 'Genuine payment receipts confirm transactions already completed and do not demand urgent clicks.' },
        { name: 'Authentic Courier Out-For-Delivery Notice', fee: 'Delivery today', bait: 'Your Amazon package with tracking #40291 is out for delivery with agent Ramesh. Share delivery PIN 4910 upon handover.', trap: 'Legitimate delivery PIN notice', realUrl: 'https://www.amazon.in/orders', advice: 'Real delivery PINs are shared verbally only when the courier agent physically arrives at your door with the box.' },
        { name: 'Genuine Doctor Clinic Appointment Reminder', fee: 'Appointment reminder', bait: 'Reminder: Consultation with Dr. Sundaram at MedCenter tomorrow at 11:30 AM. Reply CANCEL to reschedule.', trap: 'Legitimate clinic SMS', realUrl: 'tel:04428192000', advice: 'Legitimate clinic reminders state the doctor name, time, and do not contain external payment links.' },
        { name: 'Official LPG Cylinder Booking Confirmation', fee: 'Booking confirmed', bait: 'Booking for Indane 14.2kg cylinder ref #89201 confirmed. Delivery in 2 days. Cash on delivery ₹890.', trap: 'Official Indane DLT SMS', realUrl: 'https://cx.indianoil.in', advice: 'Official cylinder booking notices confirm standard delivery dates without pressure to pay via third-party links.' },
        { name: 'Legitimate Income Tax E-Filing Filing Acknowledgement', fee: 'ITR-V generated', bait: 'ITR-1 for AY 2026-27 successfully e-verified. Acknowledgement number 4892019482. Check portal.', trap: 'Official tax filing SMS with no links', realUrl: 'https://eportal.incometax.gov.in', advice: 'Official e-filing confirmations reference your filing acknowledgement number and invite you to log into the main portal.' },
        { name: 'Bank Account Interest Credit Notification', fee: 'Interest credited', bait: 'Quarterly savings bank interest of ₹412.00 credited to account ending 8921 on 30-Sep. AD-HDFCBK.', trap: 'Legitimate credit alert', realUrl: 'https://netbanking.hdfcbank.com', advice: 'Credit alerts confirm incoming balance additions without asking for action or verification.' },
        { name: 'Mutual Fund Monthly SIP Debit Notification', fee: 'SIP executed', bait: 'Your scheduled SIP of ₹5,000 for Nippon India Small Cap Fund executed successfully on 10-Oct. NAV: 142.10.', trap: 'Official AMC transaction alert', realUrl: 'https://mf.nipponindiaim.com', advice: 'Scheduled SIP execution alerts provide precise NAV and unit allocation records without requiring user action.' },
        { name: 'Passport Seva Appointment Token Schedule', fee: 'Passport appointment', bait: 'Appointment at PSK Saligramam on 28-Oct at 10:15 AM Batch B4. Bring original documents.', trap: 'Official MEA passport SMS', realUrl: 'https://portal2.passportindia.gov.in', advice: 'Official passport appointments list the specific passport seva kendra, batch time, and require physical documents.' },
        { name: 'School Fee Payment Receipt from Verified School Portal', fee: 'Term 2 fee paid', bait: 'Fee payment of ₹18,500 received for Aditi Sharma, Class 7B. Receipt #SCH-2026-891. DPS-CHENN.', trap: 'Official school DLT header message', realUrl: 'https://dpschennai.edu.in', advice: 'Official educational fee receipts include student names, classes, and formal institutional DLT headers.' }
      ]
    }
  ];

  const scenarios: ClickOrSkipScenario[] = [];
  let idCounter = 1;

  categories.forEach((catGroup) => {
    catGroup.items.forEach((item) => {
      const isLegit = catGroup.cat.includes('Legitimate');
      const isMalicious = !isLegit;

      scenarios.push({
        id: `cos-scenario-${String(idCounter).padStart(3, '0')}`,
        category: catGroup.cat,
        title: item.name,
        senderName: isLegit ? item.name.split(' ')[0] + ' Service' : item.name.split(' ')[0] + ' Support',
        senderAddress: isLegit ? 'VM-OFFICIAL (DLT Registered)' : '+91 9' + Math.floor(100000000 + Math.random() * 900000000),
        senderAvatarText: item.name.slice(0, 2).toUpperCase(),
        timestamp: `${((idCounter * 7) % 12) + 1}:${(idCounter * 13) % 60 < 10 ? '0' : ''}${(idCounter * 13) % 60} ${idCounter % 2 === 0 ? 'PM' : 'AM'} Today`,
        notificationTitle: isLegit ? `Notice: ${item.name}` : `⚠️ URGENT: ${item.name}`,
        notificationSnippet: item.bait.slice(0, 80) + '...',
        fullMessageText: `${item.bait}. ${isLegit ? 'Verify on the official portal if needed.' : `Please resolve immediately: ${item.trap}`}`,
        linkText: isLegit ? 'No external link provided' : item.trap,
        linkTargetDisplay: isLegit ? 'None' : `https://${item.trap}`,
        realDestinationUrl: item.realUrl,
        isMalicious: isMalicious,
        contextNote: isLegit
          ? 'You receive this formal notification while reviewing your normal day-to-day accounts.'
          : 'You receive this message unexpectedly with high emotional urgency and pressure.',
        character: catGroup.char,
        settingName: catGroup.setting,
        inspectionClues: {
          senderNote: isLegit
            ? 'Message originates from a verified 6-character telecom regulatory DLT header, not a personal 10-digit number.'
            : 'Sent from a standard 10-digit mobile number or unverified sender without institutional authentication.',
          urlAnalysis: isLegit
            ? 'No external link is included; the message relies on standard shortcodes or official internal portals.'
            : `The link disguises an unverified destination: ${item.realUrl}. It does not point to the genuine organization.`,
          officialVerificationNote: isLegit
            ? 'Checking your official app confirms this transaction was legitimately logged in your account history.'
            : 'Checking official app records independently reveals no such emergency, suspension, or penalty exists.'
        },
        clickConsequence: {
          title: isLegit ? 'Safe Official Portal' : '🚨 Dangerous Digital Trap Triggered',
          description: isLegit
            ? 'Opening the official channel confirms your account is secure with zero disruption.'
            : `Following the suspicious prompt redirected you to an unverified portal. An attacker attempted to harvest credentials or install unauthorized payloads.`,
          technicalImpact: isLegit
            ? 'Standard encrypted session on genuine domain.'
            : 'Phishing credential theft, APK accessibility hijack, or advance-fee extortion.',
          severity: isLegit ? 'moderate' : 'critical',
          mockScreenType: isLegit ? 'phishing_portal' : 'fake_apk'
        },
        skipResolution: {
          title: isLegit ? 'Prudent Verification' : '🛡️ Threat Successfully Avoided',
          description: isLegit
            ? 'You handled the alert with prudent caution, verifying the details without panic.'
            : `You recognized the warning signs in "${item.name}". By skipping the link and verifying through official channels, you protected your data.`,
          officialAction: isLegit ? 'Recorded the confirmation.' : 'Reported the suspicious number.',
          rewardPoints: 100
        },
        keyTakeaway: item.advice
      });

      idCounter++;
    });
  });

  return scenarios;
}

export const CLICK_OR_SKIP_SCENARIOS_100: ClickOrSkipScenario[] = createScenarios();
