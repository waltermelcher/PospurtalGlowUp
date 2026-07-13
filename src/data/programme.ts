import selfie from '../assets/selfie.webp';
import videoBruckner from '../assets/video_bruckner.webp';

export interface Werk {
  komponist: string;
  titel: string;
}

export interface Programm {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  /** Bild bzw. – bei gesetztem `video` – dessen Vorschaubild */
  image: ImageMetadata;
  imageAlt: string;
  /** Optionale YouTube-ID: zeigt statt des Bildes ein abspielbares Video */
  video?: string;
  paragraphs: string[];
  /** Optionale Werkauswahl, erscheint unter den Absätzen */
  werke?: {
    heading: string;
    items: Werk[];
  };
}

export const programme: Programm[] = [
  {
    id: 'programm',
    eyebrow: 'Programm',
    title: 'Zehn Jahre Pospurtal',
    tagline: 'Jubiläumsprogramm quer durch die Welt der Posaune',
    image: selfie,
    imageAlt: 'Das Quartett Pospurtal',
    paragraphs: [
      'Zehn Jahre gemeinsames Musizieren, zehn Jahre Freude am Klang: Das feiert Pospurtal mit einem Programm, das die ganze Bandbreite des Posaunenquartetts zeigt. Von barocken Werken über klassische Bearbeitungen bis hin zu zeitgenössischer Musik und Jazz-Interpretationen spannt sich der Bogen durch vier Jahrhunderte Musikgeschichte.',
      'Dabei zeigt sich, was die Posaune alles kann: mal festlich und strahlend, mal lyrisch und zart, mal groovend und mit einem Augenzwinkern. Das Jubiläumsprogramm ist so bunt wie das Repertoire, das sich in zehn Jahren angesammelt hat, und zeigt das Instrument von einer Seite, die viele im Publikum so noch nicht erlebt haben.',
      'Ein Konzert zum Feiern, Staunen und Wiederentdecken für alle, die Pospurtal seit Jahren begleiten, und für alle, die das Quartett zum ersten Mal hören.',
    ],
    werke: {
      heading: 'Zu hören sind unter anderem',
      items: [
        { komponist: 'Johann Sebastian Bach', titel: 'Fuge d-moll' },
        { komponist: 'Pierre Max Dubois', titel: 'Quatuor' },
        { komponist: 'Eugène Bozza', titel: 'Trois Pièces' },
        { komponist: 'Jan Koetsier', titel: 'Max und Moritz' },
      ],
    },
  },
  {
    id: 'romantische-konzerte',
    eyebrow: 'Programm',
    title: 'Romantische Konzerte',
    tagline: 'Posaunenquartett und Orgel',
    image: videoBruckner,
    imageAlt: 'Video: Pospurtal spielt Anton Bruckner – Scherzo',
    video: '7SDy23zIOMA',
    paragraphs: [
      'Wenn vier Posaunen auf eine Orgel treffen, entsteht eine Klangfülle, die an ein ganzes Orchester erinnert. Im Romantischen Konzert verbindet sich der warme, samtige Ton des Quartetts mit der räumlichen Kraft der Orgel, vom zartesten Pianissimo bis zum festlichen Tutti, das den Kirchenraum bis in den letzten Winkel füllt.',
      'Auf dem Programm stehen romantische und klassische Werke sowie berühmte Bearbeitungen, die eigens für diese Besetzung eine ganz neue Klangsprache entfalten. Vertraute Melodien erklingen in ungewohnter Farbe, große Musik wird auf besondere Weise neu erlebbar.',
      'Ein Konzertabend, der die Akustik des Raumes zum Mitspieler macht und zeigt, wie viel Orchester in fünf Musikern stecken kann.',
    ],
    werke: {
      heading: 'Zu hören sind unter anderem',
      items: [
        { komponist: 'Richard Wagner', titel: 'Gebet der Elisabeth' },
        { komponist: 'Felix Mendelssohn Bartholdy', titel: 'Lobgesang, op. 52' },
        { komponist: 'Anton Bruckner', titel: 'Scherzo aus der 1. Symphonie c-moll' },
        { komponist: 'Zsolt Gárdonyi', titel: 'Fantasie' },
      ],
    },
  },
];
