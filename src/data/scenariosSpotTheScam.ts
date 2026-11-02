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

function createSpotTheScamCases(): SpotTheScamCase[] {
  const caseThemes = [
    {
      category: 'Business Email Compromise (BEC)',
      type: 'email' as const,
      difficulty: 'Intermediate' as const,
      verdict: 'scam' as const,
      prefix: 'BEC',
      items: [
        { title: 'Executive Wire Transfer Re-Route', sender: 'Vikram Sethi (CEO)', from: 'vikram.sethi@apexcorp-ltd.co', realDomain: 'apexcorp.com', subject: 'URGENT: Outstanding Vendor Wire Update (Confidential)', body: 'I am boarding a flight. Wire ₹4,85,000 to updated vendor bank coordinates immediately.', clue: 'Spoofed lookalike domain (.co vs .com) and artificial pressure right before bank cutoff.' },
        { title: 'Urgent Supplier Bank Coordinate Amendment', sender: 'Accounts Payable Lead', from: 'billing@metaltech-supplies.net', realDomain: 'metaltech-supplies.com', subject: 'Change of Bank Details for October Dispatch Invoice', body: 'Our bank is undergoing an annual audit. Please route pending remittances to our auxiliary account.', clue: 'Sudden requests to switch banking coordinates must always be verified via an established phone callback.' },
        { title: 'Confidential Acquisition Retainer Deposit', sender: 'Managing Director Office', from: 'md-private@zenith-holdings.biz', realDomain: 'zenith-holdings.com', subject: 'Project Phoenix: Confidential Legal Escrow Retainer', body: 'Do not discuss this with the team yet. Wire the legal escrow deposit before noon today.', clue: 'Appeals to secrecy ("keep this between us") are intended to prevent normal accounting checks.' },
        { title: 'Vendor Milestone Payment Expedited Request', sender: 'Logistics Partner Desk', from: 'invoicing@swiftlogix-india.co', realDomain: 'swiftlogix.in', subject: 'Expedited Freight Settlement - Consignment #4920', body: 'Consignment is held at port. Settle ₹1,40,000 to release container before demurrage penalties apply.', clue: 'Lookalike domain registered recently with fabricated shipping penalty threats.' },
        { title: 'Year-End IT Infrastructure Audit Settlement', sender: 'Global Cloud Systems', from: 'finance@cloudmatrix-billing.cc', realDomain: 'cloudmatrix.com', subject: 'Overdue Cloud Server Capacity Retainer', body: 'Service suspension notice: Pay outstanding cloud hosting invoice to prevent enterprise outage.', clue: 'Disposable .cc domain masquerading as an enterprise cloud infrastructure vendor.' },
        { title: 'External Legal Counsel Retainer Adjustment', sender: 'Sharma & Associates Legal', from: 'attorney@sharmalegal-chambers.org', realDomain: 'sharmalegal.in', subject: 'Court Filing Retainer Fee Adjustment', body: 'Urgent filing fees needed for tomorrow morning court hearing. Updated payment coordinates enclosed.', clue: 'Unverified sender address with urgency tied to fictitious court filing deadlines.' },
        { title: 'Executive Bonus Payroll Adjustment Notification', sender: 'Group HR Director', from: 'hr-payroll@tata-enterprises.org', realDomain: 'tata.com', subject: 'Discretionary Bonus Disbursement - Account Confirmation', body: 'Confirm your salary account credentials to receive the festive bonus allocation.', clue: 'Legitimate HR teams never request netbanking logins or card numbers to disburse bonuses.' },
        { title: 'Software License Renewal Emergency Invoice', sender: 'Enterprise Software Portal', from: 'renewals@enterprise-crm.online', realDomain: 'crm-enterprise.com', subject: 'License Deactivation Warning - Immediate Wire Required', body: 'Annual CRM license expires today. Update billing card to maintain customer data access.', clue: 'Notice sent from an unverified .online domain with high-pressure shutdown warnings.' },
        { title: 'Subcontractor Labor Wage Direct Wire', sender: 'Site Construction Engineer', from: 'site.engineer@infra-projects.site', realDomain: 'infraprojects.com', subject: 'Urgent Weekly Labor Wages Disbursement', body: 'Laborers awaiting cash transfer at site office. Transfer to alternate UPI handle now.', clue: 'Bypassing formal corporate disbursement processes using informal personal UPI handles.' },
        { title: 'Audit Committee Compliance Retainer', sender: 'Statutory Auditor Office', from: 'compliance@deloitte-audit-desk.co', realDomain: 'deloitte.com', subject: 'Special Regulatory Compliance Filing Fee', body: 'Mandatory government statutory fee required before 5 PM to avoid corporate registry penalties.', clue: 'Fraudulent third-party domain typosquatting a major accounting firm.' }
      ]
    },
    {
      category: 'Banking & Transaction Verifications',
      type: 'sms' as const,
      difficulty: 'Intermediate' as const,
      verdict: 'legitimate' as const,
      prefix: 'BNK',
      items: [
        { title: 'Genuine Credit Card Transaction Fraud Alert', sender: 'HDFC Bank', from: 'VM-HDFCBN (Official DLT Header)', realDomain: 'hdfcbank.com', subject: 'Card Transaction Verification', body: 'Alert: Transaction of INR 14,200 attempted on card ending 4082 at CROMA. If not you, SMS NO to 56767 or call number on card back.', clue: 'Crucially, genuine fraud alerts do NOT contain clickable links; they advise checking the physical card.' },
        { title: 'Authentic NetBanking Password Change Alert', sender: 'State Bank of India', from: 'AD-SBINB (TRAI Registered)', realDomain: 'sbi.co.in', subject: 'Security Notice: Password Updated', body: 'Your SBI NetBanking login password was updated on 23-Oct. If not requested by you, call 1800112211 immediately.', clue: 'Provides official toll-free helpline without clickable suspicious links.' },
        { title: 'Legitimate ICICI Bank ATM Cash Withdrawal', sender: 'ICICI Bank Alert', from: 'VK-ICICIB', realDomain: 'icicibank.com', subject: 'ATM Withdrawal Notice', body: 'INR 5,000.00 withdrawn from ATM at Anna Nagar on card xx1092. Available balance: INR 42,150.00.', clue: 'Standard informative transaction confirmation; asks for no credentials or immediate action.' },
        { title: 'Axis Bank Scheduled Standing Instruction Execution', sender: 'Axis Bank Alerts', from: 'VM-AXISBK', realDomain: 'axisbank.com', subject: 'Standing Instruction Processed', body: 'Standing instruction of INR 3,500 for HDFC Life Policy #8910 processed successfully.', clue: 'Scheduled recurring payment confirmation with clear policy numbers and zero hyperlinked pressure.' },
        { title: 'Kotak Mahindra Balance Threshold Alert', sender: 'Kotak Alerts', from: 'AD-KOTAKB', realDomain: 'kotak.com', subject: 'Account Balance Update', body: 'Account xx4910 balance below INR 10,000. Current balance INR 8,420. Avoid non-maintenance charges.', clue: 'Standard balance threshold notification originating from registered commercial sender header.' },
        { title: 'Bank of Baroda Cheque Clearance Confirmation', sender: 'Bank of Baroda', from: 'VM-BOBTXN', realDomain: 'bankofbaroda.in', subject: 'Cheque Passed Successfully', body: 'Cheque #004921 for INR 25,000 in favor of Suresh Kumar passed from account xx8921.', clue: 'Formal cheque clearing notification with cheque number and beneficiary name.' },
        { title: 'Punjab National Bank NEFT Credit Alert', sender: 'PNB Alerts', from: 'VK-PNBTXN', realDomain: 'pnbindia.in', subject: 'NEFT Credit Received', body: 'NEFT credit of INR 48,000 received from Infosys Ltd UTR #N102948192 into account xx3102.', clue: 'Verified incoming salary credit with complete UTR transaction reference number.' },
        { title: 'IndusInd Bank International Card Usage Toggle', sender: 'IndusInd Bank', from: 'VM-INDBNK', realDomain: 'indusind.com', subject: 'Card Security Setting', body: 'International transactions on your card ending 9012 are currently DISABLED. Manage inside IndusNet.', clue: 'Educational security advisory recommending managing settings directly inside the official app.' },
        { title: 'Standard Chartered Fixed Deposit Renewal', sender: 'Standard Chartered', from: 'AD-SCBLTD', realDomain: 'sc.com/in', subject: 'FD Maturity Notice', body: 'Your FD #910294 maturing on 01-Nov will auto-renew for 1 year at 7.10% p.a. Check portal to modify.', clue: 'Clear maturity advice with prevailing rate and standard portal instructions.' },
        { title: 'Federal Bank UPI Mandate Approval Confirmation', sender: 'Federal Bank', from: 'VM-FEDBNK', realDomain: 'federalbank.co.in', subject: 'UPI AutoPay Mandate', body: 'UPI AutoPay mandate for Netflix Entertainment for INR 649/month successfully created with UMN #49102.', clue: 'Complete UPI mandate reference code with exact merchant name.' }
      ]
    },
    {
      category: 'Government Ministry & Tax Authority Phishing',
      type: 'email' as const,
      difficulty: 'Beginner' as const,
      verdict: 'scam' as const,
      prefix: 'GOV',
      items: [
        { title: 'Income Tax Assessment Direct Deposit Refund', sender: 'Income Tax Department e-Filing', from: 'refund@incometax-efiling-portal.org', realDomain: 'incometax.gov.in', subject: 'Notice of Tax Assessment: Refund of ₹18,420 Ready', body: 'Due to invalid bank account transit details, refund could not be deposited. Confirm netbanking credentials now.', clue: 'Non-governmental .org domain asking for netbanking passwords to issue refunds.' },
        { title: 'Aadhaar Biometric Lock Violation Penalty', sender: 'UIDAI Regulatory Desk', from: 'security@uidai-aadhaar-notice.in', realDomain: 'uidai.gov.in', subject: 'Fine Notice: Unlocked Biometric Authentication Penalty', body: 'Your Aadhaar biometrics remained unlocked. Pay ₹500 compliance penalty to prevent deactivation.', clue: 'UIDAI does not fine citizens for leaving biometric locks off.' },
        { title: 'Ministry of Corporate Affairs Annual Filing Fine', sender: 'MCA E-Governance Cell', from: 'notices@mca-gov-filing.com', realDomain: 'mca.gov.in', subject: 'Show Cause Notice: Company Director Non-Compliance', body: 'Director Identification Number (DIN) flagged for suspension. Clear filing arrears within 24 hours.', clue: 'Commercial .com domain mimicking the Ministry of Corporate Affairs (.gov.in).' },
        { title: 'Employees Provident Fund Organization (EPFO) Interest Withholding', sender: 'EPFO Claims Cell', from: 'epfo-claims@epfindia-pension.org', realDomain: 'epfindia.gov.in', subject: 'UAN KYC Discrepancy: PF Interest On Hold', body: 'Your annual EPF interest of ₹34,200 is withheld due to missing nominee bank account details.', clue: 'Third-party domain harvesting UAN passwords and bank account credentials.' },
        { title: 'State Transport Department E-Challan Penalty', sender: 'Traffic Police E-Challan', from: 'echallan@traffic-police-fines.online', realDomain: 'echallan.parivahan.gov.in', subject: 'Over-Speeding Challan #DL89218 - Vehicle Seizure Notice', body: 'Your vehicle DL04AB9812 was photographed speeding. Pay ₹2,000 fine online or face court summons.', clue: 'Traffic e-challans are only hosted on the official national Parivahan portal (parivahan.gov.in).' },
        { title: 'Consumer Affairs Department Lottery Winner Cess', sender: 'National Lottery Directorate', from: 'claims@consumer-affairs-lottery.site', realDomain: 'consumeraffairs.nic.in', subject: 'Prize Award Confirmation: ₹25,00,000 Selected', body: 'Deposit 2% advance TDS fee of ₹50,000 to government treasury to release your lottery prize.', clue: 'Government departments never run WhatsApp lotteries or ask for advance fees to release winnings.' },
        { title: 'Cyber Crime Police Digital Arrest Warrant Notice', sender: 'Special Cyber Crime Cell', from: 'investigation@cybercrime-warrant.co', realDomain: 'cybercrime.gov.in', subject: 'Legal Summons: Money Laundering & Telecom Fraud Investigation', body: 'A mobile SIM in your name was found involved in financial fraud. Connect to video trial immediately.', clue: 'Law enforcement does not issue arrest warrants over unverified email or conduct trials on video chat.' },
        { title: 'Directorate General of Foreign Trade (DGFT) License Freeze', sender: 'DGFT Export Control', from: 'dgft@dgft-export-licensing.org', realDomain: 'dgft.gov.in', subject: 'IEC Code Suspension Warning: Missing Compliance Document', body: 'Your Importer-Exporter Code will be blacklisted unless renewed via the expedited payment link.', clue: 'Official DGFT portals operate strictly under the gov.in domain architecture.' },
        { title: 'State Electricity Regulatory Commission Tariff Rebate', sender: 'SERC Consumer Welfare', from: 'rebate@serc-tariff-rebate.in', realDomain: 'tnerc.gov.in', subject: 'Electricity Tariff Excess Charge Refund of ₹4,200', body: 'Consumers are eligible for a monsoon tariff refund. Enter UPI ID to receive the rebate.', clue: 'Utility tariff adjustments are credited automatically in subsequent monthly consumption bills.' },
        { title: 'Ministry of External Affairs Passport Dispatch Failure', sender: 'Passport Seva Kendra', from: 'dispatch@passportindia-delivery.info', realDomain: 'passportindia.gov.in', subject: 'Passport Dispatch Blocked: Address Verification Failure', body: 'Your passport parcel is held at the regional hub. Pay re-verification fee to resume dispatch.', clue: 'Passport delivery issues are resolved through physical visits to the designated PSK or post office.' }
      ]
    },
    {
      category: 'Trojan & Double Extension Attachments',
      type: 'invoice' as const,
      difficulty: 'Advanced' as const,
      verdict: 'scam' as const,
      prefix: 'TRJ',
      items: [
        { title: 'Freelance Design Retainer Invoice Executable', sender: 'Creative Producer Desk', from: 'sarah.jenkins.design@gmail.com', realDomain: 'gmail.com', subject: 'Signed Contract & Scope PDF Attached', body: 'Review the attached statement of work and signed milestone invoice so we can release payment.', clue: 'Attachment is named "Contract_Invoice.pdf.exe", disguising a Windows executable malware dropper.' },
        { title: 'Resume & Portfolio Submission with Screen Saver Extension', sender: 'Senior Developer Candidate', from: 'arun.developer@outlook.com', realDomain: 'outlook.com', subject: 'Application for Senior Full-Stack Lead - Portfolio Inside', body: 'Please find my comprehensive project portfolio and reference letters attached.', clue: 'File named "Arun_Resume_Portfolio.pdf.scr" utilizes the .scr executable extension to bypass email filters.' },
        { title: 'Court Legal Summons & Eviction Notice Archive', sender: 'District Civil Court Registry', from: 'clerk@delhi-district-court.site', realDomain: 'delhidistrictcourts.nic.in', subject: 'Legal Summons in Suit #891/2026 - Notice of Appearance', body: 'You are summoned to appear. The official sealed charge sheet and evidence photos are in the zip file.', clue: 'Zip archive containing an encrypted script payload (.vbs) designed to evade cloud antivirus scanners.' },
        { title: 'Supplier Payment Remittance Advice with Macro Document', sender: 'Global Heavy Machinery Accounts', from: 'finance@industrial-spares-apac.com', realDomain: 'spares.com', subject: 'Remittance Slip #INV-98218 (Enable Macros to View)', body: 'Payment remittance slip attached. Please click "Enable Content / Enable Macros" to display figures.', clue: 'Instructions to enable Word/Excel macros are a signature method for executing malicious VBA scripts.' },
        { title: 'Urgent Purchase Order & Technical Drawings Specification', sender: 'Procurement Specialist', from: 'procurement@tenders-india.org', realDomain: 'eprocure.gov.in', subject: 'Tender RFQ-9021 Technical Drawing Specs', body: 'Submit quotation within 48 hours based on the attached CAD drawings and technical specifications.', clue: 'Attachment is an executable archive (.iso) that mounts a virtual drive containing infostealer malware.' },
        { title: 'Medical Health Insurance Claim Settlement Voucher', sender: 'Star Health TPA Desk', from: 'claims@tpa-health-settlement.net', realDomain: 'starhealth.in', subject: 'Discharge Summary & Claim Settlement PDF', body: 'Attached is the hospital bill breakdown and settlement approval letter.', clue: 'Disguised executable payload intended to compromise corporate workstations.' },
        { title: 'Chartered Accountant Tax Computation Worksheet', sender: 'Singhal & Co Tax Advisers', from: 'tax@singhal-associates.co', realDomain: 'singhal.in', subject: 'FY2026 Tax Computation & Advance Tax Challan', body: 'Please review the tax computation file and approve the advance tax installment before the 15th.', clue: 'File named "Tax_Challan_FY26.xlsx.exe" preys on tax filing season urgency.' },
        { title: 'Flight Ticket & Hotel Booking Voucher Confirmation', sender: 'MakeMyTrip Corporate Desk', from: 'corporate-bookings@mmt-travel.site', realDomain: 'makemytrip.com', subject: 'E-Ticket & Hotel Confirmation Voucher #MMT89218', body: 'Your flight to Bengaluru is confirmed. Download your boarding pass and tax invoice.', clue: 'Phishing email using a fake travel booking to deliver remote access trojan (RAT) payloads.' },
        { title: 'HR Department Employee Appraisal Evaluation Form', sender: 'Internal Human Resources', from: 'appraisals@corp-management.org', realDomain: 'company.com', subject: 'Confidential: Annual Performance Appraisal Matrix', body: 'Fill out your self-evaluation worksheet and submit to your reporting manager by Friday.', clue: 'Internal employee targeting email originating from an external lookalike domain.' },
        { title: 'Bank Locker Inventory Checklist & Safety Declaration', sender: 'Safe Deposit Vault Division', from: 'vault@bank-locker-services.com', realDomain: 'bank.com', subject: 'Mandatory Locker Agreement & Inventory Schedule', body: 'RBI guidelines require updated locker agreements. Fill the attached digital PDF form.', clue: 'Locker agreements require physical execution on non-judicial stamp paper at the branch, never email executables.' }
      ]
    },
    {
      category: 'Cloud Services & Enterprise IT Impersonation',
      type: 'email' as const,
      difficulty: 'Intermediate' as const,
      verdict: 'scam' as const,
      prefix: 'CLD',
      items: [
        { title: 'Microsoft 365 Password Expiration Alert', sender: 'IT Helpdesk Administrator', from: 'admin@office365-security-portal.com', realDomain: 'microsoft.com', subject: 'Your corporate password expires in 2 hours', body: 'To retain your current password without interruption, verify your identity on our secure portal.', clue: 'Fake Microsoft login page hosted on a third-party domain capturing corporate Single Sign-On (SSO) credentials.' },
        { title: 'Google Workspace Storage Quota Exceeded Warning', sender: 'Google Drive Storage Admin', from: 'storage-team@google-drive-quota.org', realDomain: 'google.com', subject: 'Storage Full: Incoming emails are bouncing', body: 'Your mailbox has reached 99.4% capacity. Request free storage extension to resume receiving mail.', clue: 'Storage quota scam leveraging fear of missed emails to harvest Google account credentials.' },
        { title: 'Zoom Video Conference Invitation from HR Management', sender: 'HR Talent Department', from: 'meetings@zoom-corporate-portal.net', realDomain: 'zoom.us', subject: 'Mandatory All-Hands Meeting on Company Restructuring', body: 'Join the confidential briefing regarding team realignment. Log in with your corporate email.', clue: 'Phishing link disguised as a Zoom meeting room to steal company login tokens.' },
        { title: 'DocuSign Electronic Signature Pending Verification', sender: 'DocuSign Electronic System', from: 'service@docusign-contracts.site', realDomain: 'docusign.com', subject: 'Completed: Please DocuSign Mutual Non-Disclosure Agreement', body: 'Review and sign the attached digital document before the signing link expires in 24 hours.', clue: 'Deceptive link pointing to a credential harvest landing page rather than docusign.net.' },
        { title: 'Slack Workspace Security Session Revocation', sender: 'Slack Security Operations', from: 'no-reply@slack-workspace-alerts.com', realDomain: 'slack.com', subject: 'Suspicious device connected to your Slack workspace', body: 'A foreign IP accessed your channels. Re-authenticate your device to terminate active sessions.', clue: 'Phishing attack mimicking Slack security alerts to hijack enterprise collaboration tokens.' },
        { title: 'GitHub Personal Access Token Expiry Notice', sender: 'GitHub Developer Security', from: 'security@github-auth-service.org', realDomain: 'github.com', subject: 'CRITICAL: Personal Access Token Expiring Today', body: 'Your token with repo admin permissions expires today. Renew token to prevent CI/CD pipeline failure.', clue: 'Targeted developer phishing aimed at harvesting GitHub repository access tokens and private source code.' },
        { title: 'Dropbox Business File Share Notification', sender: 'Partner Strategy Consultant', from: 'share@dropbox-cloud-files.net', realDomain: 'dropbox.com', subject: 'Confidential Market Analysis 2026 Shared with You', body: 'A 45-page market intelligence report has been shared. Sign in to view protected folder.', clue: 'Masked hyperlink redirecting to a fake multi-cloud login form harvesting credentials.' },
        { title: 'VPN Client Mandatory Security Patch Update', sender: 'Enterprise Network Security', from: 'vpn-admin@corp-secure-network.co', realDomain: 'company.com', subject: 'Mandatory AnyConnect VPN Security Update', body: 'Install the new security certificate patch before 6 PM to retain remote working network access.', clue: 'Fake internal IT email distributing remote access trojans disguised as VPN updates.' },
        { title: 'Salesforce CRM Lead Allocation Alert', sender: 'Salesforce System Notifications', from: 'alerts@salesforce-lead-routing.biz', realDomain: 'salesforce.com', subject: 'New Enterprise Lead Assigned: Immediate Follow-up Required', body: 'High-value prospect requested consultation. Log into CRM to view client phone number and requirements.', clue: 'Deceptive sales notification designed to capture sales executive CRM login credentials.' },
        { title: 'Atlassian Jira Project Permission Revocation', sender: 'Jira Service Management', from: 'jira-notifications@atlassian-cloud.site', realDomain: 'atlassian.com', subject: 'Permission Expiry: Agile Board Access Expiring', body: 'Your developer sprint board privileges will expire unless confirmed by user re-authentication.', clue: 'Unverified sender domain targeting software engineering project boards.' }
      ]
    },
    {
      category: 'Ambiguous & Contextual Verification Needed',
      type: 'email' as const,
      difficulty: 'Advanced' as const,
      verdict: 'inconclusive' as const,
      prefix: 'AMB',
      items: [
        { title: 'Vendor Invoice with Minor Address Variation', sender: 'Apex Logistics Chennai', from: 'accounts@apex-logistics.in', realDomain: 'apex-logistics.in', subject: 'Invoice #AL-9810 for Freight Clearance', body: 'Please find attached the routine monthly transport bill. Kindly note our registered office has moved to Guindy.', clue: 'Sender domain matches past correspondence, but office address changed. Prudent protocol requires telephone callback.' },
        { title: 'Job Offer Letter from External HR Agency', sender: 'Global Headhunters Talent', from: 'priya.n@talentconnect-partners.com', realDomain: 'talentconnect-partners.com', subject: 'Offer Discussion: Senior Cybersecurity Consultant', body: 'We reviewed your interview rounds. Attached is the preliminary compensation structure for your review.', clue: 'Domain appears legitimate, but applicant does not recall interviewing with this specific company; requires verification.' },
        { title: 'Credit Card Limit Upgrade from Unfamiliar Shortcode', sender: 'Bank Notification Desk', from: 'TD-HDFCBK (Unusual Header)', realDomain: 'hdfcbank.com', subject: 'Credit Card Limit Revision', body: 'Your credit limit has been revised to INR 5,00,000. No action needed if acceptable; call helpline to decline.', clue: 'Header prefix is unusual; no links are provided. Requires verifying account limit inside the official mobile app.' },
        { title: 'E-Commerce Merchant Supplier Quality Notice', sender: 'Vendor Operations Desk', from: 'vendor-ops@merchant-network.in', realDomain: 'merchant-network.in', subject: 'Quality Assessment Review for Batch #892', body: 'A customer reported a packaging discrepancy. Please review the attached customer feedback notes.', clue: 'Authentic sender domain, but attachment format is unfamiliar. Inconclusive until checked with internal vendor relations.' },
        { title: 'Conference Speaker Invitation Travel Booking', sender: 'CyberTech Summit Organizer', from: 'program@cybertech-asia.org', realDomain: 'cybertech-asia.org', subject: 'Invitation to Keynote Panel on AI Safety', body: 'We would love to invite you to speak. Please review the draft conference program and travel arrangements.', clue: 'Legitimate conference website, but speaker invitation was unsolicited; requires verification via official committee members.' },
        { title: 'Landlord Rent Account Maintenance Notice', sender: 'Apartment Association Manager', from: 'maintenance@greenacres-association.in', realDomain: 'greenacres.in', subject: 'Water Surcharge & Maintenance Bill for October', body: 'Water charges are higher this month due to pipeline repairs. Pay into the association current account.', clue: 'Requires checking physical building noticeboard or confirming with association treasurer before transferring.' },
        { title: 'University Transcript Request from Foreign Evaluator', sender: 'Credential Evaluation Services', from: 'transcripts@global-eval.org', realDomain: 'global-eval.org', subject: 'Verification Request for Degree Certificate', body: 'An applicant provided your contact as their academic referee. Please confirm graduation year.', clue: 'Legitimate academic verification agency, but requires confirming candidate identity before disclosing student records.' },
        { title: 'Hospital Diagnostic Lab Report Password Notification', sender: 'Medall Healthcare Diagnostics', from: 'reports@medall-labs.in', realDomain: 'medall.in', subject: 'Diagnostic Blood Test Report #MD9810 Ready', body: 'Your routine health checkup results are ready. File is password protected with your birth year.', clue: 'Matches a real diagnostic lab, but recipient did not undergo blood tests recently; verify with family members first.' },
        { title: 'Electricity Board Planned Power Shutdown Bulletin', sender: 'State Power Transmission Corp', from: 'VM-TNEBPW', realDomain: 'tnebltd.gov.in', subject: 'Planned Maintenance Shutdown Notice', body: 'Power supply will be suspended in your area on Saturday from 9 AM to 5 PM for substation maintenance.', clue: 'DLT header is authentic and no links are included, but exact street name is omitted; check local substation board.' },
        { title: 'Charity Foundation CSR Grant Request', sender: 'Rural Child Education Trust', from: 'director@rural-education-trust.org', realDomain: 'rural-education.org', subject: 'Proposal for Annual School Kit Sponsorship', body: 'Attached is our audited annual report and 80G tax exemption certificate for your CSR committee.', clue: 'Documents appear complete, but requires verifying 80G registration on the Income Tax Department portal.' }
      ]
    }
  ];

  const allCases: SpotTheScamCase[] = [];
  let caseCounter = 1;

  // Generate 100 cases by creating 10 cases across 10 distinct sub-themes
  caseThemes.forEach((theme) => {
    theme.items.forEach((item, itemIdx) => {
      const isScam = theme.verdict === 'scam';
      const isLegit = theme.verdict === 'legitimate';
      const isInconclusive = theme.verdict === 'inconclusive';

      allCases.push({
        id: `sts-case-${String(caseCounter).padStart(3, '0')}`,
        caseCode: `CASE-${theme.prefix}-${String(itemIdx + 1).padStart(2, '0')}`,
        type: theme.type,
        title: item.title,
        difficulty: theme.difficulty,
        threatCategory: theme.category,
        senderDisplayName: item.sender,
        senderAddress: item.from,
        subjectOrHeader: item.subject,
        receivedTime: `${((caseCounter * 3) % 12) + 1}:${(caseCounter * 7) % 60 < 10 ? '0' : ''}${(caseCounter * 7) % 60} ${caseCounter % 2 === 0 ? 'PM' : 'AM'}`,
        bodyContent: {
          salutation: theme.type === 'sms' ? undefined : 'Dear Recipient,',
          paragraphs: [
            item.body,
            isScam
              ? 'Please resolve this matter within the allocated time window to prevent administrative escalation.'
              : isLegit
              ? 'Thank you for choosing verified, secure channels for your communications.'
              : 'Please review the enclosed details and confirm through standard protocol.'
          ],
          highlightedLink: isScam
            ? {
                displayText: `https://${item.realDomain}/secure-portal`,
                hoverDestination: `http://${item.from.split('@')[1] || 'malicious-server.net'}/phishing-login`,
                isDeceptive: true
              }
            : undefined,
          attachment:
            theme.type === 'invoice' || item.title.includes('Invoice') || item.title.includes('PDF')
              ? {
                  name: `${item.title.replace(/\s+/g, '_')}.pdf${isScam ? '.exe' : ''}`,
                  size: isScam ? '2.8 MB' : '185 KB',
                  actualExtension: isScam ? '.exe' : '.pdf',
                  iconType: isScam ? 'warning' : 'pdf',
                  isDeceptive: isScam
                }
              : undefined
        },
        hotspots: [
          {
            id: `hs-${caseCounter}-sender`,
            label: 'Sender & Domain Origin',
            description: 'Check sender address characters, headers and domain TLD.',
            isSuspicious: isScam,
            explanation: isScam
              ? `Sender address is "${item.from}", which differs from the legitimate domain "${item.realDomain}". This is typosquatting.`
              : isLegit
              ? `Originates from official registered header "${item.from}" compliant with regulatory standards.`
              : `Domain "${item.from}" appears valid, but out-of-band verification is required due to contextual changes.`
          },
          {
            id: `hs-${caseCounter}-urgency`,
            label: 'Psychological Urgency & Tactics',
            description: 'Analyze the tone, deadlines, and emotional pressure applied.',
            isSuspicious: isScam,
            explanation: isScam
              ? 'The message employs artificial urgency (immediate deadlines, threats of cutoff/penalties) to bypass critical evaluation.'
              : isLegit
              ? 'Calm, informative tone without panic-inducing countdowns or threats.'
              : 'Moderate tone, but requests action without standard confirmation channels.'
          },
          {
            id: `hs-${caseCounter}-link_or_action`,
            label: 'Link / Attachment / Action Request',
            description: 'Examine hyperlinks, payload extensions, or required actions.',
            isSuspicious: isScam,
            explanation: isScam
              ? item.clue
              : isLegit
              ? 'Contains no external hyperlinked trap. Advises verification through the physical card or official app.'
              : 'Verify out-of-band by calling verified phone numbers on record before proceeding.'
          }
        ],
        verdict: theme.verdict,
        officialForensicExplanation: isScam
          ? `Forensic analysis classifies this case as a SCAM. ${item.clue}`
          : isLegit
          ? `Forensic analysis confirms this communication is LEGITIMATE. Notice the absence of credential demands, the verified sender header, and standard security warnings.`
          : `Forensic analysis classifies this case as INCONCLUSIVE. While the communication does not contain blatant malware, best-practice cyber hygiene requires out-of-band telephone verification before executing changes.`,
        investigatorTips: [
          'Inspect the sender domain character by character to catch subtle misspellings or extra suffixes.',
          'Hover over any hyperlink to inspect the true server destination before clicking.',
          'When in doubt about financial or account changes, perform an out-of-band telephone call on a known verified number.'
        ],
        pointsAwarded: 150
      });

      caseCounter++;
    });
  });

  return allCases;
}

export const SPOT_THE_SCAM_CASES_100: SpotTheScamCase[] = createSpotTheScamCases();
