export interface Programm {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  paragraphs: string[];
}

export const programme: Programm[] = [
  {
    id: 'programm',
    eyebrow: 'Programm',
    title: 'Zehn Jahre Pospurtal',
    tagline: 'Jubiläumsprogramm quer durch die Welt der Posaune',
    image: 'selfie.webp',
    imageAlt: 'Das Quartett Pospurtal',
    width: 1061,
    height: 707,
    paragraphs: [
      'Zehn Jahre gemeinsames Musizieren, zehn Jahre Freude am Klang: Das feiert Pospurtal mit einem Programm, das die ganze Bandbreite des Posaunenquartetts zeigt. Von barocken Werken über klassische Bearbeitungen bis hin zu zeitgenössischer Musik und Jazz-Interpretationen spannt sich der Bogen durch vier Jahrhunderte Musikgeschichte.',
      'Dabei zeigt sich, was die Posaune alles kann: mal festlich und strahlend, mal lyrisch und zart, mal groovend und mit einem Augenzwinkern. Das Jubiläumsprogramm ist so bunt wie das Repertoire, das sich in zehn Jahren angesammelt hat, und zeigt das Instrument von einer Seite, die viele im Publikum so noch nicht erlebt haben.',
      'Ein Konzert zum Feiern, Staunen und Wiederentdecken für alle, die Pospurtal seit Jahren begleiten, und für alle, die das Quartett zum ersten Mal hören.',
    ],
  },
  {
    id: 'romantische-konzerte',
    eyebrow: 'Programm',
    title: 'Romantische Konzerte',
    tagline: 'Posaunenquartett und Orgel',
    image: 'breitbild_4.webp',
    imageAlt: 'Pospurtal an der Orgelempore',
    width: 1000,
    height: 563,
    paragraphs: [
      'Wenn vier Posaunen auf eine Orgel treffen, entsteht eine Klangfülle, die an ein ganzes Orchester erinnert. Im Romantischen Konzert verbindet sich der warme, samtige Ton des Quartetts mit der räumlichen Kraft der Orgel, vom zartesten Pianissimo bis zum festlichen Tutti, das den Kirchenraum bis in den letzten Winkel füllt.',
      'Auf dem Programm stehen romantische und klassische Werke sowie berühmte Bearbeitungen, die eigens für diese Besetzung eine ganz neue Klangsprache entfalten. Vertraute Melodien erklingen in ungewohnter Farbe, große Musik wird auf besondere Weise neu erlebbar.',
      'Ein Konzertabend, der die Akustik des Raumes zum Mitspieler macht und zeigt, wie viel Orchester in fünf Musikern stecken kann.',
    ],
  },
];
