export interface CvEntry {
  title: string;
  location: string;
  year: string;
  collaborators?: string[];
  partner?: string;
}

export const cvEntries: CvEntry[] = [
  {
    title: "Places of Rural Practice",
    location: "Brandenburg, Germany",
    year: "2021",
    collaborators: ["Ludivine Gragy", "Julian Schubert", "Pepe Dayaw", "Franziska Lutze"],
  },
  {
    title: "Patterns of Rural Commoning",
    location: "Gerswalde, Germany",
    year: "Sep. 2020",
    partner: "Canadian Center for Architecture",
    collaborators: ["Anne Schwalbe", "Markus Shimizu", "Ronald Klemmer"],
  },
  {
    title: "Baustoffe Anwenden: Kalk",
    location: "Gerswalde, Germany",
    year: "Sep. 2020",
    partner: "Saint-Astier, Baukultur Initiative Brandenburg",
  },
  {
    title: "Wiesenhäuser",
    location: "Zehdenick, Germany",
    year: "Jul. 2020",
    partner: "Das Blaue Pferd",
    collaborators: ["Patrick Eicke"],
  },
  {
    title: "Neue Narrativen – Sommerakademie",
    location: "Gerswalde, Germany",
    year: "Aug. 2020",
  },
];

export const contactInfo = {
  studioName: "studio.blumenspiess",
  address: {
    street: "Waschingtonstr. 31.",
    zip: "99423",
    city: "Weimar",
    country: "Deutschland",
  },
  email: "info@studio-blumenspiess.de",
  phone: "0151 29095618",
  instagram: "https://instagram.com/studio.blumenspiess",
  team: ["Anne-Fleur Ising", "Philipp Helio Spiess"],
};
