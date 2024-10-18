export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgotPassword',
  RESET_PASSWORD: '/resetPassword',
  VERIFY_OTP: '/verifyOtp',
  PATIENT_DASHBOARD: '/patient/dashboard',
  USER_PROFILE: '/patient/profile',
  PATIENT_USERDETAIL: '/patient/userDetailForm',
  HCP_PROFILE: '/hcp/onBoarding',
  HCP_ADD_AVAILABILITY: '/hcp/addAvailability',
  HCP_APPOINTMENT_CALENDAR: '/hcp/appointment-calendar',
  HCP_SESSION: '/hcp/mySessions',
  PATIENT_SESSION: '/patient/mySession',
  HCP_PATIENT_PROFILE: '/hcp/mySessions/patient',
  MY_HEALTH_RECORD: '/patient/healthRecords',
  PATIENT_USER_PROFILE: '/patient/edit-personal-info',
  OUR_TEAM: '/our-team',
  CHECKOUT: '/patient/checkout',
  HCP_SOMEONE_PROFILE_DETAIL: '/hcp/mySessions/someoneProfile'
};

export const REDIRECT_WITH_ROLE = {
  patient: '/patient/dashboard',
  admin: '/admin/dashboard',
  hcp: '/hcp/appointment-calendar',
};

export const MIDDLEWARE_MATCHER_ROUTES = [
  '/patient/:path*',
  '/admin/:path*',
  '/auth/:path*',
];

export const AUTH_ROUTES = [
  '/login',
  '/signup',
  '/forgotPassword',
  '/verifyOtp',
  '/admin/login'
];

export const EDIT_HCP_PROFILE = {
  PERSONAL_INFO: '/hcp/edit-personal-info',
  PRACTICE: '/hcp/edit-practice',
  EDUCATION: '/hcp/edit-education',
  WORK_EXPIRENCE: '/hcp/edit-expirence'
};

export const HCP_PROFILE = '/hcp/profile';
export const EDIT_MEDICAL_REGS = '/hcp/edit-medical-info';

export const VIDEO_CALL = {
  PATIENT_CALL_PAGE: '/patient/connect',
  HCP_CALL_PAGE: '/hcp/connect'
};

export const NO_HEADER = [VIDEO_CALL.HCP_CALL_PAGE, VIDEO_CALL.PATIENT_CALL_PAGE];

export const IGNORED_HEADER = [
  ROUTE_PATH.HCP_PROFILE,
  EDIT_HCP_PROFILE,
  EDIT_HCP_PROFILE.PERSONAL_INFO,
  EDIT_MEDICAL_REGS,
  EDIT_HCP_PROFILE.PRACTICE,
  EDIT_HCP_PROFILE.EDUCATION,
  EDIT_HCP_PROFILE.WORK_EXPIRENCE,
  ROUTE_PATH.PATIENT_USERDETAIL,
  ROUTE_PATH.PATIENT_USER_PROFILE,
  ROUTE_PATH.CHECKOUT
];

export const EDIT_PATIENT_PROFILE = {
  PERSONAL_INFO: '/patient/edit-personal-info',
};

export const REDIRECT_WITH_KYC = {
  patient: '/patient/userDetailForm',
  hcp: '/hcp/onBoarding',
};

export const REDIRECT_WITH_LOGOCLICK = {
  patient: ROUTE_PATH.PATIENT_DASHBOARD,
  hcp: ROUTE_PATH.HCP_APPOINTMENT_CALENDAR,
};

export const ADMIN_ROUTES = {
  LOGIN: '/admin/login',
  FORGOT_PASSWORD: '/admin/forgot-password',
  RESET_PASSWORD: '/admin/reset-password',
  DASHBOARD: '/admin/dashboard',
  ALL_SESSIONS: '/admin/all-sessions',
  CANCELLATION_POLICY: '/admin/cancellation',
  VIEW_PATIENT: '/admin/patient-profile',
  VIEW_HCP: '/admin/hcp-profile',
  VIEW_HCP_CALENDAR: '/admin/hcp-calendar',
  VERIFY_OTP: '/admin/verify-otp',
  EDIT_CANCELLATION_POLICY: '/admin/cancellation/edit'
};

export const HCP_PATIENT_HEALTH = {
  HEALTH_LIST: '/dashboard/search-hcp',
};

export const REMOVE_LANGUAGE = {
  EDIT_PERSONAL_INFO: '/patient/edit-personal-info',
  EDIT_HCP_PERSONAL_INFO: '/hcp/edit-personal-info',
  EDIT_HCP_MEDICAL_INFO: '/hcp/edit-medical-info',
  EDIT_EDUCATION_INFO: '/hcp/edit-education',
  EDIT_EXPERIENCE_INFO: '/hcp/edit-expirence',
  EDIT_PRACTICE_INFO: '/hcp/edit-practice',
  EDIT_SET_CALENDER: 'update'
};
