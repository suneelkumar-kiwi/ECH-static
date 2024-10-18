import { drBilly, drCloe, drGuy, drJenny, drJoe, forzley, jameson, jorge, maciulis, metz, orozco } from '../utils/icons';

export const BOOLEAN = {
  TRUE: true,
  FALSE: false,
};
export const NO_VAL = null;
export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// maxico timezone...
export const TIMEZONE_OPTIONS = [
  { value: 'AST_CA', label: 'AST - Atlantic Standard Time (Canada)', disabled: false },
  { value: 'CST_CA', label: 'CST - Central Standard Time (Canada)', disabled: false },
  { value: 'CST_MX', label: 'CST - Central Standard Time (Mexico)', disabled: false },
  { value: 'EST_CA', label: 'EST - Eastern Standard Time (Canada)', disabled: false },
  { value: 'EST_MX', label: 'EST - Eastern Standard Time (Mexico)', disabled: false },
  { value: 'GST', label: 'GST - Gulf Standard Time', disabled: false },
  { value: 'MST_CA', label: 'MST - Mountain Standard Time (Canada)', disabled: false },
  { value: 'MST_MX', label: 'MST - Mountain Standard Time (Mexico)', disabled: false },
  { value: 'NST_CA', label: 'NST - Newfoundland Standard Time (Canada)', disabled: false },
  { value: 'PST_CA', label: 'PST - Pacific Standard Time (Canada)', disabled: false },
  { value: 'PST_MX', label: 'PST - Pacific Standard Time (Mexico)', disabled: false },
];

export const TIMEZONE_IANA: Record<string, string> = {
  // maxico
  PST_MX: 'America/Tijuana',
  MST_MX: 'America/Chihuahua',
  CST_MX: 'America/Mexico_City',
  EST_MX: 'America/Cancun',
  // canada Timezones
  AST_CA: 'America/Halifax',
  CST_CA: 'America/Winnipeg',
  EST_CA: 'America/Toronto',
  MST_CA: 'America/Edmonton',
  NST_CA: 'America/St_Johns',
  PST_CA: 'America/Vancouver',
  // dubai
  GST: 'Asia/Dubai',
};

export const IANA_TIMEZONE_NAME: Record<string, string> = {
  'America/Tijuana': 'PST_MX',
  'America/Chihuahua': 'MST_MX',
  'America/Mexico_City': 'CST_MX',
  'America/Cancun': 'EST_MX',
  'America/Halifax': 'AST_CA',
  'America/Winnipeg': 'CST_CA',
  'America/Toronto': 'EST_CA',
  'America/Edmonton': 'MST_CA',
  'America/St_Johns': 'NST_CA',
  'America/Vancouver': 'PST_CA',
  'Asia/Dubai': 'GST',
  'America/Chicago': 'CDT'
};

export const IANA_TIMEZONE: Record<string, string> = {
  'America/Tijuana': 'PST - Mexico',
  'America/Chihuahua': 'MST - Mexico',
  'America/Mexico_City': 'CST - Mexico',
  'America/Cancun': 'EST - Mexico',
  'America/Halifax': 'AST - Canada',
  'America/Winnipeg': 'CST - Canada',
  'America/Toronto': 'EST - Canada',
  'America/Edmonton': 'MST - Canada',
  'America/St_Johns': 'NST - Canada',
  'America/Vancouver': 'PST - Canada',
  'Asia/Dubai': 'GST',
  'America/Chicago': 'CDT'
};

export const SLOT_MIN_DURATION = 15;
export const ALLOW_JOINING_BEFORE = 5; // enable join now 5 minutes earlier

export const MAX_END_DATE_TIME = '11:30 pm';
export const MAX_START_DATE_TIME = '11:00 pm';
export const MIN_START_DATE_TIME = '00:00 am';
export const START_DAY_TIME = '00:00:00';
export const END_DAY_TIME = '23:59:59';

export const SESSION_DURATION_OPTIONS = [
  { value: '15', label: '15 min' },
  { value: '30', label: '30 min' },
  { value: '45', label: '45 min' },
  { value: '60', label: '1 hr' },
  { value: '120', label: '2 hr' },
];

export const CURRENCY = [
  { value: 'USD', label: '$' },
  { value: 'CAD', label: 'C$' },
  { value: 'MXN', label: 'MX$' },
  { value: 'AED', label: 'د.إ' },
];

export const DAYS_SHORTHAND = {
  sunday: 'Sun',
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
};

export const DAY_NAMES: Record<string, string> = {
  Sun: 'Sunday',
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
};

export const TIME_FORMAT = 'hh:mm A';

export const VIEW_DATE_FORMAT = 'MMM DD, YYYY';

export const DATE_DISPLAY_FORMAT = 'dddd, MMMM D';

export const MONTH_FORMAT = 'MM/YYYY';
export const MONTH_FORMAT_VIEW = 'MMM YYYY';
export const FULL_DATE_VIEW_FORMAT = 'MMMM DD, YYYY';

export const TIME_24_FORMAT = 'HH:mm:ss';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-dd';
export const TIME_FORMAT_HMS = 'HH:mm:ss';

export const FULL_DATE_FORMAT = 'YYYY-MM-DD hh:mmA';

export const FULL_DATE = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const SEL_DATE_FORMAT = 'yyyy-MM-dd';

export const DATE_FORMAT_FIX = 'MM/dd/YYYY';
export const DATE_FORMAT_VIEW = 'MM/DD/YYYY';

export const TRUE = true;
export const FALSE = false;

export const PRACTICE_LOACTION_SEPARATOR = '--';

export const OTP_VERIFIED_SUCCESSFULLY = 'A verification code has been sent to your email address.';

export const rejectedStatus : any = [
  'resubmission_requested',
  'declined',
  'expired',
  'abandoned',
];
export const waitingStatus = ['review', 'pending', 'submitted', ''];

export const teamMembers: any = [
  {
    image: jorge,
    name: 'Dr. Jorge',
    role: 'Founder & CEO (Mexico) Medical Doctor, Masters H.A',
    description: 'DESCRIPTION_0',
    longDescription: 'LONGDESCRIPTION_0',
  },
  {
    image: metz,
    name: 'Aaron K. Metz',
    role: 'Founder & COO (CANADA) Holistic Fine Art & Web3 Blockchain Innovator',
    description: 'DESCRIPTION_1',
    longDescription: 'LONGDESCRIPTION_1',
  },
  {
    image: orozco,
    name: 'Diego Orozco',
    role: 'Founder & CMO (USA/Mexico) Senior Blockchain Project Manager',
    description: 'DESCRIPTION_2',
    longDescription: 'LONGDESCRIPTION_2',
  },
  {
    image: maciulis,
    name: 'Saulius Maciulis',
    role: 'Founder & CBTO (LITHUANIA) Ama Host & Senior Blockchain Advisor',
    description: 'DESCRIPTION_3',
    longDescription: 'LONGDESCRIPTION_3',
  },
  {
    image: forzley,
    name: 'Luke Forzley',
    role: 'Chief Technology Officer (USA) & Web3 Specialist',
    description: 'DESCRIPTION_4',
    longDescription: 'LONGDESCRIPTION_4',
  },
  {
    image: jameson,
    name: 'Flynn Jameson',
    role: 'Chief Communication Officer (USA) & Web3 Specialist',
    description: 'DESCRIPTION_5',
    longDescription: 'LONGDESCRIPTION_5',
  },
];

export const SESSION_STATUS = {
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  UPCOMING: 'upcoming',
  NOSHOW: 'noshow'
};

export const REFUND_PAYMENT_STATUS = {
  PENDING: 'pending'
};

export const PROFILE_TABS_KEYS = {
  '/hcp/edit-personal-info': 'personalInformation',
  '/hcp/edit-medical-info': 'medicalRegistration',
  '/hcp/edit-education': 'education',
  '/hcp/edit-expirence': 'workExperience',
  '/hcp/edit-practice': 'practice',
};

export const PAGE_CHANGE_TIMEOUT = 1000;

export const doctorsList: any = [
  {
    id: 1,
    image: drCloe,
    name: 'Dr. Jorge',
    degination: 'Critical Medicine',
    experience: ' 4 Years',
    star: 4.9,
  },
  {
    id: 2,
    image: drJoe,
    name: 'Joe Cooper',
    degination: 'Nutritional Coach',
    experience: ' 3 Years',
    star: 4.9,
  },
  {
    id: 3,
    image: drGuy,
    name: 'Dr. Guy Hawkins',
    degination: 'Psychiatric',
    experience: ' 8 Years',
    star: 4.9,
  },
  {
    id: 4,
    image: drJenny,
    name: 'Dr. Jenny Wilson',
    degination: 'Gynecologist',
    experience: ' 7 Years',
    star: 4.9,
  },
  {
    id: 5,
    image: drBilly,
    name: 'Dr. Billy Benson',
    degination: 'Family Doctor',
    experience: ' 4 Years',
    star: 4.9,
  },
];

export const TABLE_DATA = [
  {
    id: 1,
    name: 'Hanna Jones',
    joinedDate: 'Jul 30, 2024',
    email: 'hanna.j@gmail.com',
    gender: 'Female',
    age: 25,
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    status: {
      text: 'Active',
      className: 'text-green',
    },
  },
];

export const YYYY_MM_DD = 'YYYY-MM-DD';
export const EARNING_CURRENCY = {
  ONE: 50096.50,
  TWO: 1296.50,
  THREE: 596.50
};
