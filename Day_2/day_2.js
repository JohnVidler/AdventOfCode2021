import fs from 'fs';

(async () => {
    const data = fs.readFileSync( 'input.txt', 'UTF-8' )
                .split('\n')
                .map( v => {
                    let r = v.split(' ');
                    return [ r[0], parseInt( r[1] ) ];
                } );

	partOne( data );
	partTwo( data );
})();

function partOne( data ) {
	console.log( "Day 2, Part 1" );

    let x = 0, y = 0;
    data.forEach( op => {
        switch( op[0] ) {
            case 'forward': x += op[1]; break;
            case 'down': y += op[1]; break;
            case 'up': y -= op[1]; break;
            default:
                console.log( "Bad OP = ", op[0] );
        }
    });

    console.log( "Position:", `{${x},${y}}`);
    console.log( "Answer = ", x * y );
}

function partTwo( data ) {
	console.log( "Day 2, Part 2" );
    
    let x = 0, y = 0, aim = 0;
    data.forEach( op => {
        switch( op[0] ) {
            case 'forward':
                x += op[1];
                y += aim * op[1];
                break;
            case 'down': aim += op[1]; break;
            case 'up': aim -= op[1]; break;
            default:
                console.log( "Bad OP = ", op[0] );
        }
    });

    console.log( "Position:", `{${x},${y}}`);
    console.log( "Answer = ", x * y );
}