// The Great Computer Language Shootout
// http://shootout.alioth.debian.org/
//
// modified by Isaac Gouy


function foo(m, isPrime){
   var i, k, count;

   for (i=2; i<=m; i++) { isPrime[i] = 1; }
   count = 0;

   for (i=2; i<=m; i++){
      if (isPrime[i] == 1) {
         for (k=i+i; k<=m; k+=i) isPrime[k] = 0;
         count++;
      }
   }
   return count;
}

function sieve() {
    var sum = 0;
    for (var i = 1; i <= 10; i++ ) {
        var m = (1<<i)*10000;
        var flags = Array(m+1);
        sum += foo(m, flags);
    }
    return sum;
}

var result = sieve();

var expected = 1430116;
if (typeof print == 'undefined') print = console.log;
print (result == expected);


