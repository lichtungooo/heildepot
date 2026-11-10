// Die Daten importieren einander ohne Endung (wie Vite es erlaubt); Node braucht sie.
// Dieser Haken hängt `.js` an relative Pfade ohne Endung, allein für die Skripte.
import { register } from 'node:module'

register('data:text/javascript,' + encodeURIComponent(
  "export async function resolve(s, c, n) { if (/^\\.\\.?\\//.test(s) && !/\\.[a-z]+$/i.test(s)) s += '.js'; return n(s, c) }"))
