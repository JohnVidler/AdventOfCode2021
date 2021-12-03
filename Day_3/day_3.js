import fs from 'fs';

(async () => {
    // Sanitise stuff a bit so we know where we are for processing the rest...
    const data = fs.readFileSync( 'input.txt', 'UTF-8' )
                    .split('\n')
                    .map( v => v.split('') )
                    .map( v => v.map( j => parseInt(j) ) );

    console.log( "Day 3, Part 1" );
	
    const ones = countValues( data, 1 );
    const gammaRate = parseInt( ones.map( v => (v > data.length/2?1:0) ).join(''), 2 ); // Mmmm... stream operations...
    const epsilonRate = parseInt( ones.map( v => (v > data.length/2?0:1) ).join(''), 2 );
    console.log( `Gamma Rate = ${gammaRate}, Epsilon Rate = ${epsilonRate}, Answer = ${gammaRate * epsilonRate}\n` );

    console.log( "Day 3, Part 2" );
	partTwo( data );
})();

function countValues( data, needle ) {
    let map = new Array(data[0].length).fill(0);
    data.forEach( row => row.forEach( (v,i) => map[i] += needle===v ? 1 : 0 ) );
    return map;
}

function partTwo( data ) {

    let pool = data;
    let offset = 0;
    while( pool.length > 1 ) {
        const ones = countValues(pool, 1).map( v => (v >= (pool.length/2) ? 1 : 0) );
        pool = pool.filter( v => v[offset] == ones[offset] );
        offset++
    }
    const oxygenGeneratorRating = parseInt( pool[0].join(''), 2 );

    // Very repetative, I know I could do this in one loop with two conditions on the loop, but this is lexographically tidier...
    pool = data;
    offset = 0;
    while( pool.length > 1 ) {
        const ones = countValues(pool, 1).map( v => (v < (pool.length/2) ? 1 : 0) );
        pool = pool.filter( v => v[offset] == ones[offset] );
        offset++
    }
    const co2GeneratorRating = parseInt( pool[0].join(''), 2 );

    console.log( `O2 = ${oxygenGeneratorRating}, CO2 = ${co2GeneratorRating}, Answer = ${oxygenGeneratorRating * co2GeneratorRating}` );
}