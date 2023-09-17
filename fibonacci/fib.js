// install node and run following command in terminal >>> $node fibonacci/fib.js 

// FIBONACCI SEQUENCE

function fibs (n) {

    if (n === 0) return []
    if (n === 1) return [0]
    
    let a = [0, 1];

    for (let i = 0; i <= n - 3; i++) {
        a.push( a[a.length - 1] + a[a.length - 2])
    }
    return a
}

// FIBONACCI SEQUENCE RECURSION

function fibsRecOneLine (n) {
    return n === 1 ? [0] : n === 2 ? [0, 1] : [...fibsRec(n-1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}

function fibsRec (n) {
    
    if ( n == 1 ) return [ 0 ]
    if ( n == 2 ) return [ 0, 1 ]
    
    return [...fibsRec(n-1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}