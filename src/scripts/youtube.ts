/**
 * Erzeugt den YouTube-Player. Wird erst nach einem Klick aufgerufen – vorher
 * besteht keine Verbindung zu Google (siehe Datenschutzerklärung).
 */
export function createPlayer(videoId: string): HTMLIFrameElement {
  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  frame.title = 'YouTube-Video';
  frame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  return frame;
}
