
export interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'city-branding', label: 'CITY BRANDING & TOURISM' },
  { id: 'intl-govt', label: 'INTERNATIONAL & GOVT' },
  { id: 'sports', label: 'SPORTS & EVENTS' },
  { id: 'clubs-orgs', label: 'CLUBS & ORGS' },
  { id: 'corporate-expo', label: 'CORPORATE & EXPO' },
  { id: 'cultural', label: 'CULTURAL & ENT' },
  { id: 'religious', label: 'RELIGIOUS' },
  { id: 'agriculture', label: 'AGRICULTURE' },
  { id: 'political', label: 'POLITICAL' },
  { id: 'education', label: 'EDUCATION' },
];

export const WORK_ITEMS: WorkItem[] = [
  { id: 1, title: "Pokhara: Tourism Capital of Nepal", category: "city-branding", description: "Full Branding", image: "https://picsum.photos/seed/pokhara/800/600" },
  { id: 2, title: "Pokhara Visit Year 2025", category: "city-branding", description: "Campaign Design", image: "https://picsum.photos/seed/visit2025/800/600" },
  { id: 3, title: "Pokhara Metropolitan City Establishment Day", category: "city-branding", description: "Event Branding", image: "https://picsum.photos/seed/cityday/800/600" },
  { id: 4, title: "Pokhara Street Festival & Mahotsav", category: "city-branding", description: "Event Design", image: "https://picsum.photos/seed/streetfest/800/600" },
  { id: 18, title: "Pokhara Street Festival Musical Eve", category: "city-branding", description: "Event Design", image: "https://picsum.photos/seed/musicaleve/800/600" },
  { id: 19, title: "Lekhnath Fair / Mahotsav", category: "city-branding", description: "Event Design", image: "https://picsum.photos/seed/lekhnath/800/600" },
  { id: 20, title: "Fewa New Year Fair", category: "city-branding", description: "Event Design", image: "https://picsum.photos/seed/fewa/800/600" },
  { id: 5, title: "PATA Annual Summit", category: "intl-govt", description: "Event Branding", image: "https://picsum.photos/seed/pata/800/600" },
  { id: 6, title: "Pokhara International Airport Inauguration", category: "intl-govt", description: "Event Identity", image: "https://picsum.photos/seed/airport/800/600" },
  { id: 7, title: "Nepal Rastra Bank Corporate Events", category: "intl-govt", description: "Corporate Branding", image: "https://picsum.photos/seed/nrb/800/600" },
  { id: 21, title: "Job Fair – Pokhara Metropolitan City", category: "intl-govt", description: "Government Event", image: "https://picsum.photos/seed/jobfair/800/600" },
  { id: 8, title: "Aaha Rara Pokhara Gold Cup", category: "sports", description: "Sports Branding", image: "https://picsum.photos/seed/goldcup/800/600" },
  { id: 9, title: "Tiger Cup Volleyball", category: "sports", description: "Sports Branding", image: "https://picsum.photos/seed/tigercup/800/600" },
  { id: 22, title: "Pokhara Sports Awards", category: "sports", description: "Awards Branding", image: "https://picsum.photos/seed/sportsawards/800/600" },
  { id: 10, title: "Lions Club Conventions", category: "clubs-orgs", description: "Convention Design", image: "https://picsum.photos/seed/lions/800/600" },
  { id: 11, title: "18th Rotary District Convention", category: "clubs-orgs", description: "Convention Branding", image: "https://picsum.photos/seed/rotary/800/600" },
  { id: 12, title: "WADA Auto Show", category: "corporate-expo", description: "Expo Branding", image: "https://picsum.photos/seed/autoshow/800/600" },
  { id: 23, title: "PCCI Trade Fair", category: "corporate-expo", description: "Expo Design", image: "https://picsum.photos/seed/pcci/800/600" },
  { id: 13, title: "Miss Pokhara", category: "cultural", description: "Beauty Pageant", image: "https://picsum.photos/seed/misspokhara/800/600" },
  { id: 24, title: "Miss Tamang", category: "cultural", description: "Beauty Pageant", image: "https://picsum.photos/seed/misstamang/800/600" },
  { id: 25, title: "Teej Festival", category: "cultural", description: "Festival Design", image: "https://picsum.photos/seed/teej/800/600" },
  { id: 14, title: "Krishna Janmashtami (ISKCON)", category: "religious", description: "Religious Event", image: "https://picsum.photos/seed/iskcon/800/600" },
  { id: 15, title: "Krishi Paryatan Mela (Mustang)", category: "agriculture", description: "Regional Event", image: "https://picsum.photos/seed/krishi/800/600" },
  { id: 16, title: "NCP UML Party Designs", category: "political", description: "Political & Organizational", image: "https://picsum.photos/seed/political/800/600" },
  { id: 17, title: "Prativa Secondary School Anniversary", category: "education", description: "Education & Institutional", image: "https://picsum.photos/seed/school/800/600" },
];

export const CLIENTS = [
  "Nepal Tourism Board",
  "Pokhara Metropolitan",
  "UNDP",
  "Nepal Rastra Bank",
  "Chinese Embassy",
  "Parichay Advertising",
];

export const SERVICES = [
  "Event Branding",
  "Brand Guidelines",
  "Social Media Design",
  "Video Editing",
  "Motion Graphics",
];

export const TOOLS = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Premiere Pro",
  "Adobe After Effects",
];
