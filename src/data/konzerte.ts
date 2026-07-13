export interface Konzert {
  /** ISO-Datum, z. B. '2026-12-20' */
  date: string;
  /** Beginn als 'HH:MM'. Weglassen, solange die Uhrzeit nicht feststeht. */
  time?: string;
  program: string;
  /** Ort und Adresse weglassen, solange sie nicht feststehen. */
  venue?: string;
  address?: string;
  city?: string;
}

/** Chronologisch gepflegt; vergangene Termine werden entfernt. */
export const konzerte: Konzert[] = [
  {
    date: '2026-09-30',
    time: '18:00',
    program: 'Wenn es Rosen sind, werden sie blühen',
    venue: 'Johannes Gutenberg-Universität Mainz',
    address: 'Jakob-Welder-Weg 28, 55128 Mainz',
    city: 'Mainz',
  },
  {
    date: '2026-10-03',
    time: '18:00',
    program: 'Wenn es Rosen sind, werden sie blühen',
    venue: 'Kreistag Groß-Gerau',
    address: 'Wilhelm-Seipp-Straße 4, 64521 Groß-Gerau',
    city: 'Groß-Gerau',
  },
  {
    date: '2026-12-07',
    time: '19:30',
    program: 'Weihnachtskonzert mit dem Vokalensemble Enona',
    address: 'Am Gonsenheimer Spieß 1, 55122 Mainz',
    city: 'Mainz',
  },
  {
    date: '2026-12-20',
    program: 'Zehn Jahre Pospurtal — Premiere des Jubiläumsprogramms',
  },
];

const MONATE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

/** Zerlegt das ISO-Datum in die Bestandteile der Datumskachel. */
export function datumsteile(iso: string) {
  const [year, month, day] = iso.split('-');
  return { day, month: MONATE[Number(month) - 1], year };
}
