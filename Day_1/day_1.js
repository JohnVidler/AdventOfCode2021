import fs from 'fs';

(async () => {
	partOne();
	partTwo();
})();

function partOne() {
	console.log( "Day 1, Part 1" );

	let raw = fs.readFileSync( 'input.txt', 'UTF-8' ).split('\n');

	let count = 0;
	for( let i=1; i<raw.length; i++ ) {
		if( parseInt( raw[i] ) > parseInt( raw[i-1] ) ) {
			count++;
			console.log( raw[i-1], '<', raw[i], count );
		} else {
			console.log( raw[i-1], '>=', raw[i], count );
		}
	}
	console.log( "Count = ", count );
}

function partTwo() {
	console.log( "Day 1, Part 2" );

	let raw = fs.readFileSync( 'input.txt', 'UTF-8' ).split('\n').map( v => parseInt(v) );

	let count = 0;
	for( let i=3; i<raw.length; i++ ) {
		let sumA = raw[i-1] + raw[i-2] + raw[i-3];
		let sumB = raw[i] + raw[i-1] + raw[i-2];

		if( sumB > sumA )
			count++;

	}
	console.log( "Count = ", count );
}