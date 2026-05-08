export type CarouselCaption = {
  title: string;
  subtitle: string;
};

const SLIDE_COUNT = 19;

export const CAROUSEL_SLIDES = [...Array(SLIDE_COUNT)].map(
  (_, i) => `/carousel/${String(i + 1).padStart(2, "0")}.jpg`
);

export const MODAL_SLIDES = [...Array(SLIDE_COUNT)].map(
  (_, i) => `/modal/${String(i + 1).padStart(2, "0")}.jpg`
);

export const CAROUSEL_CAPTIONS: (CarouselCaption | null)[] = [
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "RM144", subtitle: "Residenza" },
  { title: "RM144", subtitle: "Residenza" },
  { title: "RM144", subtitle: "Residenza" },
  { title: "TT33", subtitle: "Residenza" },
  { title: "Casa DV", subtitle: "Residenza" },
  { title: "Casa DV", subtitle: "Residenza" },
  { title: "Casa VDA", subtitle: "Residenza" },
  { title: "Domus 8", subtitle: "Residenza" },
  { title: "Scuola dell'infanzia Villasanta", subtitle: "Edificio Pubblico" },
  { title: "Scuola dell'infanzia Villasanta", subtitle: "Edificio Pubblico" },
  { title: "Scuola dell'infanzia Villasanta", subtitle: "Edificio Pubblico" },
  { title: "Scuola Primaria Pordenone", subtitle: "Edificio Pubblico" },
  { title: "Scuola Primaria Blassono", subtitle: "Edificio Pubblico" },
  { title: "Rifugio Tonini", subtitle: "Edificio Pubblico" },
];
