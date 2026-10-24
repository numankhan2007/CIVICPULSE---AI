export type Report = {
  id: string; title: string; category: string; area: string; ward: string; priority: 'Critical' | 'High' | 'Moderate';
  state: 'New' | 'Assigned' | 'In review'; date: string; votes: number; lat: number; lng: number; description: string;
  department: string; image?: string; duplicateCount?: number;
};

export const initialReports: Report[] = [
  { id:'CP-1048', title:'Road surface collapse near school gate', category:'Roads & Infrastructure', area:'Adyar · 2nd Avenue', ward:'Ward 142', priority:'Critical', state:'Assigned', date:'12 min ago', votes:28, lat:13.0067, lng:80.2570, description:'A deep pothole has formed at the school entrance, forcing two-wheelers into traffic.', department:'Roads Department', image:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80', duplicateCount:4 },
  { id:'CP-1047', title:'Overflowing community waste point', category:'Waste Management', area:'T. Nagar · Pondy Bazaar', ward:'Ward 133', priority:'High', state:'New', date:'38 min ago', votes:19, lat:13.0418, lng:80.2337, description:'Waste has accumulated around the collection point and is spilling onto the pavement.', department:'Sanitation Department', image:'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80', duplicateCount:2 },
  { id:'CP-1046', title:'Water leak along residential lane', category:'Water & Drainage', area:'Velachery · Lake View Rd', ward:'Ward 177', priority:'High', state:'In review', date:'1 hr ago', votes:16, lat:12.9750, lng:80.2200, description:'A steady water leak is running across the lane and making the surface slippery.', department:'Water Board', duplicateCount:3 },
  { id:'CP-1045', title:'Streetlight outage at bus stop', category:'Public Safety', area:'Mylapore · Luz Corner', ward:'Ward 123', priority:'Moderate', state:'New', date:'2 hrs ago', votes:11, lat:13.0339, lng:80.2695, description:'Two streetlights are not working, leaving the bus stop poorly lit after sunset.', department:'Electrical Department' },
  { id:'CP-1044', title:'Blocked storm-water drain', category:'Water & Drainage', area:'Anna Nagar · 3rd Main Rd', ward:'Ward 102', priority:'Moderate', state:'Assigned', date:'3 hrs ago', votes:8, lat:13.0850, lng:80.2101, description:'Leaves and plastic waste are blocking a drain ahead of expected rain.', department:'Water Board' },
  { id:'CP-1043', title:'Broken footpath paving', category:'Roads & Infrastructure', area:'Nungambakkam · College Rd', ward:'Ward 110', priority:'Moderate', state:'In review', date:'5 hrs ago', votes:7, lat:13.0604, lng:80.2496, description:'Loose paving blocks create a trip hazard along the footpath.', department:'Roads Department' },
];
