export { seedData };

//interface
export interface Disc {
  id: string;
  name: string;
  brand: string;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  weight: number;
  color: string;
  imageUrl: string;
  price: number;
  type: string;
}

//seedning
const seedData: Disc[] = [
  {
    id: "1",
    name: "Glory Grand Orbit First Run",
    brand: "Latitude 64",
    speed: 7,
    glide: 5,
    turn: 0,
    fade: 3,
    weight: 176,
    color: "Blue",
    imageUrl: "https://discgolf.nu/images/zoom/l64_grand_orbit_glory_firstrun_blue.jpg",
    price: 269,
    type: "fairway driver",
  },

  {
    id: "2",
    name: "Culprit Lucid-X Chris Clemons Team Series",
    brand: "Dynamic Discs",
    speed: 4,
    glide: 2,
    turn: 0,
    fade: 3.5,
    weight: 175,
    color: "Orange",
    imageUrl: "https://discgolf.nu/images/normal/lucid-x-culprit-chris-clemons-team-series.jpg",
    price: 239,
    type: "fairway driver",
  },

  {
    id: "3",
    name: "Flow Opto-X Chameleon Clint Calvin",
    brand: "Latitude 64",
    speed: 11,
    glide: 6,
    turn: -0.5,
    fade: 2,
    weight: 175,
    color: "Pink",
    imageUrl: "https://discgolf.nu/images/list/opto-x-chameleon-flow-clint-calvin-team-series.jpg",
    price: 239,
    type: "fairway driver",
  },
  {
    id: "4",
    name: "Rive Grand Orbit Linus Carlsson",
    brand: "Latitude 64",
    speed: 13,
    glide: 5,
    turn: 0,
    fade: 3.5,
    weight: 173,
    color: "Blue, White",
    imageUrl: "https://discgolf.nu/images/normal/grand-orbit-rive-linus-carlsson-blue-white.jpg",
    price: 269,
    type: "distance driver",
  },
  {
    id: "5",
    name: "Grym K1 X-Out",
    brand: "Kastaplast",
    speed: 13,
    glide: 5,
    turn: -0,
    fade: 2,
    weight: 176,
    color: "Light-yellow",
    imageUrl: "https://discgolf.nu/images/normal/grym-k1-x-out-nice-to-have.jpg",
    price: 149,
    type: "distance driver",
  },
  {
    id: "6",
    name: "Guld",
    brand: "Kastaplast",
    speed: 13,
    glide: 5,
    turn: -0.5,
    fade: 3,
    weight: 175,
    color: "Mint & Green",
    imageUrl: "https://discsport.se/img/disc/kastaplast/k1-guld-FR.webp",
    price: 199,
    type: "distens driver",
  },
  {
    id: "7",
    name: "Buzzz",
    brand: "Discraft",
    speed: 5,
    glide: 4,
    turn: -1,
    fade: 1,
    weight: 178,
    color: "Blue",
    imageUrl: "https://discsport.se/img/disc/discraft/z-buzzz.jpg",
    price: 169,
    type: "midrange",
  },
  {
    id: "8",
    name: "P1 - Pro D-line",
    brand: "Discmaina",
    speed: 2,
    glide: 3,
    turn: 0,
    fade: 0,
    weight: 173,
    color: "White",
    imageUrl: "https://discsport.se/img/disc/discmania/d-line-flex2-p1.webp",
    price: 129,
    type: "Putter",
  },
  {
    id: "9",
    name: "Butter",
    brand: "Clash",
    speed: 2,
    glide: 3,
    turn: 0,
    fade: 1,
    weight: 178,
    color: "Blue",
    imageUrl: " https://discsport.se/img/disc/clash/steady-butter.webp",
    price: 199,
    type: "putter",
  },
  {
    id: "10",
    name: "Fuse",
    brand: "Latitude 64",
    speed: 5,
    glide: 6,
    turn: -1,
    fade: 0,
    weight: 174,
    color: "Orange",
    imageUrl: "https://discsport.se/img/disc/latitude64/fuseopto.jpg",
    price: 179,
    type: "midrange",
  },
  {
    id: "11",
    name: "Berg",
    brand: "Kastaplast",
    speed: 1,
    glide: 1,
    turn: 0,
    fade: 2,
    weight: 175,
    color: "Gray",
    imageUrl: "https://discsport.se/img/disc/kastaplast/k1-soft-berg-moomin.webp",
    price: 199,
    type: "putter",
  },
  {
    id: "12",
    name: "Mentor Active Premium",
    brand: "Discmania",
    speed: 11,
    glide: 5,
    turn: -2,
    fade: 2,
    weight: 165,
    color: "Yellow",
    imageUrl: "https://discgolf.nu/images/list/active_premium_mentor_yellow_2400px-x2.jpg",
    price: 159,
    type: "distance driver",
  },
];

export function getDiscById(id: string) {
  return seedData.find((i) => i.id === id);
}
