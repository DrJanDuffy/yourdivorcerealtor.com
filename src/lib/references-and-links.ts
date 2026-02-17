/**
 * References & Links page data
 * Authoritative links from Family Law Self-Help Center (Clark County, Nevada) and state sources
 * Used on /references-and-links for E-E-A-T and user value
 */

const FLSHC_BASE = 'https://www.familylawselfhelpcenter.org';

export type ReferenceLink = {
  title: string;
  href: string;
  description: string;
};

export const brochuresLinks: ReferenceLink[] = [
  {
    title: 'E-Filing Guide (English)',
    href: `${FLSHC_BASE}/images/forms/FLSH/eFiling-Guide-English.pdf`,
    description: 'Family Law Self-Help Center guide to electronic filing in Clark County (PDF).',
  },
];

export const clarkCountyLinks: ReferenceLink[] = [
  {
    title: 'Clark County Courts – E-filing assistance',
    href: 'http://www.clarkcountycourts.us/departments/clerk/electronic-filing/support/',
    description: 'Clark County District Court clerk electronic filing support and instructions.',
  },
  {
    title: 'Clark County',
    href: 'http://www.clarkcountynv.gov/',
    description: 'Official Clark County, Nevada government website.',
  },
  {
    title: 'Family Law Self-Help Center – Community Resources',
    href: `${FLSHC_BASE}/community-resources`,
    description: 'Domestic violence, legal resources, senior resources, and other community links for Clark County.',
  },
  {
    title: 'Family Law Self-Help Center – References & Links',
    href: `${FLSHC_BASE}/references-links`,
    description: 'Official references and links from the Family Law Self-Help Center.',
  },
  {
    title: 'Family Law Self-Help Center – Contact',
    href: `${FLSHC_BASE}/contact`,
    description: 'Contact or visit the Family Law Self-Help Center in Las Vegas.',
  },
  {
    title: 'Legal Aid Center of Southern Nevada',
    href: 'http://www.lacsn.org/',
    description: 'LACSN operates the Family Law Self-Help Center under contract with Clark County.',
  },
];

export const lawLibrariesLinks: ReferenceLink[] = [
  {
    title: 'Law Libraries and Self-Help',
    href: `${FLSHC_BASE}/self-help/getting-started/lawyers-and-legal-help/law-libraries-and-self-help`,
    description: 'Where to find law libraries and self-help resources in Nevada.',
  },
  {
    title: 'Courts & Case Lookup',
    href: `${FLSHC_BASE}/courts-case-lookup`,
    description: 'Links to look up your case, District Court, and Nevada Supreme Court.',
  },
  {
    title: 'Look Up My Case',
    href: `${FLSHC_BASE}/courts-case-lookup/look-up-my-case`,
    description: 'Look up your family law case in Clark County.',
  },
  {
    title: 'District Court',
    href: `${FLSHC_BASE}/courts-case-lookup/district-court`,
    description: 'Eighth Judicial District Court (Clark County) information.',
  },
  {
    title: 'Nevada Supreme Court',
    href: `${FLSHC_BASE}/courts-case-lookup/nevada-supreme-court`,
    description: 'Nevada Supreme Court information and resources.',
  },
  {
    title: 'Rules & Laws',
    href: `${FLSHC_BASE}/rules-laws`,
    description: 'District Court rules, Supreme Court rules, and Nevada statutes.',
  },
  {
    title: 'Nevada Statutes',
    href: `${FLSHC_BASE}/rules-laws/nevada-statutes`,
    description: 'Nevada state statutes and legislation.',
  },
  {
    title: 'District Court Rules',
    href: `${FLSHC_BASE}/rules-laws/district-court-rules`,
    description: 'Eighth Judicial District Court local rules.',
  },
  {
    title: 'Supreme Court Rules',
    href: `${FLSHC_BASE}/rules-laws/supreme-court-rules`,
    description: 'Nevada Supreme Court rules.',
  },
];

export const stateOfNevadaLinks: ReferenceLink[] = [
  {
    title: 'Nevada state portal',
    href: 'http://nv.gov/',
    description: 'Official Nevada state government website.',
  },
  {
    title: 'Nevada e-filing (Tyler Tech)',
    href: 'https://nevada.tylertech.cloud/OfsWeb/Home',
    description: 'Electronic filing for Nevada courts.',
  },
  {
    title: 'Nevada NRS Chapter 123',
    href: 'https://www.leg.state.nv.us/NRS/NRS-123.html',
    description: 'Nevada community property laws (rights of married couples).',
  },
  {
    title: 'Nevada Real Estate Division',
    href: 'https://red.nv.gov/',
    description: 'Nevada state agency for real estate licensing and regulation.',
  },
  {
    title: 'Nevada State Bar',
    href: 'https://nvbar.org/',
    description: 'Find a licensed Nevada family law attorney.',
  },
];

export const videosLinks: ReferenceLink[] = [
  {
    title: 'Legal Aid Center of Southern Nevada – YouTube',
    href: 'https://www.youtube.com/user/LegalAidCenterSNV',
    description: 'Videos from Legal Aid Center of Southern Nevada on family law and self-help topics.',
  },
];
