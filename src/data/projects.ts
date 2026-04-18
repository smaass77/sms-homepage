import medienparkMoers from "@/assets/referenz-medienpark.jpg";
import schornackerWesel from "@/assets/referenz-schornacker.jpg";
import speditionHuenxe from "@/assets/referenz-huenxe.jpg";
import parkdeckWesel from "@/assets/referenz-parkdeck.jpg";
import superflyDuisburg from "@/assets/referenz-superfly.jpg";
import maxiEssen from "@/assets/referenz-essen.jpg";
import starPipingWesel from "@/assets/referenz-star-piping.jpg";
import edekaWesel from "@/assets/referenz-edeka.jpg";
import cramerWesel from "@/assets/referenz-cramer.jpg";
import maxiHolzwickede from "@/assets/referenz-holzwickede.jpg";
import maxiDorsten from "@/assets/referenz-dorsten.jpg";
import maxiSchwaebischHall from "@/assets/referenz-schwaebisch-hall.jpg";
import maxiGelsenkirchen from "@/assets/referenz-gelsenkirchen.jpg";
import seibelWeyerBottrop from "@/assets/referenz-seibel-weyer.jpg";
import maxiDarmstadt from "@/assets/referenz-darmstadt.jpg";
import gewerbeparkIISchermbeck from "@/assets/referenz-gewerbepark-ii.jpg";

export type Project = {
  name: string;
  location: string;
  kwp: number;
  year: string;
  modules: number;
  yieldKwh: number;
  image?: string;
};

export const projects: Project[] = [
  { name: "maxi-garagen", location: "Darmstadt", kwp: 475, year: "2020", modules: 1378, yieldKwh: 400000, image: maxiDarmstadt },
  { name: "Seibel & Weyer", location: "Bottrop", kwp: 545, year: "2020", modules: 1760, yieldKwh: 310000, image: seibelWeyerBottrop },
  { name: "maxi-garagen", location: "Gelsenkirchen", kwp: 369, year: "2019", modules: 1248, yieldKwh: 310000, image: maxiGelsenkirchen },
  { name: "maxi-garagen", location: "Schwäbisch Hall", kwp: 499, year: "2019", modules: 1719, yieldKwh: 425000, image: maxiSchwaebischHall },
  { name: "maxi-garagen", location: "Dorsten", kwp: 345, year: "2018", modules: 1231, yieldKwh: 295000, image: maxiDorsten },
  { name: "maxi-garagen", location: "Holzwickede", kwp: 496, year: "2018", modules: 1772, yieldKwh: 425500, image: maxiHolzwickede },
  { name: "Autohaus Cramer", location: "Wesel", kwp: 188, year: "2018", modules: 682, yieldKwh: 177000, image: cramerWesel },
  { name: "Superfly", location: "Duisburg", kwp: 759, year: "2015/2018", modules: 2830, yieldKwh: 620000, image: superflyDuisburg },
  { name: "maxi-garagen", location: "Essen", kwp: 538, year: "2016", modules: 2030, yieldKwh: 470000, image: maxiEssen },
  { name: "EDEKA-Komp", location: "Wesel", kwp: 85, year: "2015", modules: 333, yieldKwh: 73000, image: edekaWesel },
  { name: "STAR-Piping", location: "Wesel", kwp: 824, year: "2014", modules: 3294, yieldKwh: 782800, image: starPipingWesel },
  { name: "Schornacker", location: "Wesel", kwp: 290, year: "2014", modules: 1135, yieldKwh: 255000, image: schornackerWesel },
  { name: "Gewerbepark II", location: "Schermbeck", kwp: 1075, year: "2013", modules: 4480, yieldKwh: 900000, image: gewerbeparkIISchermbeck },
  { name: "Spedition", location: "Hünxe", kwp: 424, year: "2013", modules: 2232, yieldKwh: 415520, image: speditionHuenxe },
  { name: "Medienpark", location: "Moers", kwp: 157, year: "2009/2012", modules: 1708, yieldKwh: 135000, image: medienparkMoers },
  { name: "Parkdeck", location: "Wesel", kwp: 549, year: "2011", modules: 2391, yieldKwh: 520000, image: parkdeckWesel },
];

export const projectStats = {
  count: projects.length,
  totalKwp: projects.reduce((s, p) => s + p.kwp, 0),
  totalYieldKwh: projects.reduce((s, p) => s + p.yieldKwh, 0),
};

export const sizeClass = (kwp: number): "klein" | "mittel" | "gross" => {
  if (kwp <= 250) return "klein";
  if (kwp <= 500) return "mittel";
  return "gross";
};

export const sizeClassLabel: Record<"klein" | "mittel" | "gross", string> = {
  klein: "bis 250 kWp",
  mittel: "250–500 kWp",
  gross: "500+ kWp",
};
