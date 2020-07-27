import meta1 from './data/meta1.json';
import meta2 from './data/meta2.json';
import meta3 from './data/meta3.json';
import meta4 from './data/meta4.json';
import meta5 from './data/meta5.json';

/**
 * @summary a function to concat all JSON files in the data folder into one array
 * @todo: Get brfs working in prod to dynamically pull all files from the data folder and return
 * in an array. This is hard coded temporarily to work in GitHub Pages
 */
export function getContentList() {
  return [meta1, meta2, meta3, meta4, meta5]
}