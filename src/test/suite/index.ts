import * as path from 'path';
import * as Mocha from 'mocha';
import { resolve } from 'dns';

// export function run(): Promise<void> {
// 	return Promise<>
// 	return resolve();
	// Create the mocha test
	// const mocha = new Mocha({
	// 	ui: 'tdd',
	// });
	// mocha.useColors(true);
	// 
	// const testsRoot = path.resolve(__dirname, '..');
	// 
	// return new Promise((c, e) => {
	// 	glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
	// 		if (err) {
	// 			return e(err);
	// 		}
	// 
	// 		// Add files to the test suite
	// 		files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));
	// 
	// 		try {
	// 			// Run the mocha test
	// 			mocha.run(failures => {
	// 				if (failures > 0) {
	// 					e(new Error(`${failures} tests failed.`));
	// 				} else {
	// 					c();
	// 				}
	// 			});
	// 		} catch (err) {
	// 			e(err);
	// 		}
	// 	});
	// });
// }