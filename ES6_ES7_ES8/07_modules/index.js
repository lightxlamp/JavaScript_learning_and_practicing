// https://webpack.js.org/guides/getting-started/

import {COLOR, sum} from './module'
import ImportedDefaultLogger from './module'
import * as badImportExample from './module'

console.log('color:', COLOR);
console.log('sum of 1 and 2 =', sum(1, 2));
ImportedDefaultLogger.logFromModule();
badImportExample.sayHi('Stas');
badImportExample.default.logFromModule();

