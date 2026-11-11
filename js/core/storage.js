const KEY='spectra-ui-v1';
export function savePreference(value){try{localStorage.setItem(KEY,JSON.stringify(value))}catch(e){console.warn('Local cache unavailable',e)}}
export function readPreference(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}}
