// More or less working:
// foo (a, b, c) {
//    var x1 = a | b
//    var x2 = a & b & c
//    var x3 = a | c
//    p(x1)
//    p(x2)
//    p(x3)
//    return x1 + x2 //+ x3 
//}
function foo(a, b, c) {
    // noinline
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    var x1 = a | b 
    var x2 = a & b
    var x3 = a | c
    p(x3)
    p(x2)
    p(x1)
//    p(a)
//    p(b)
    return x1 
//    p(x1)
//    p(x1)
//    p(x1)
//    p(x1)
//    return x2 
//    return x1 //+ x3 
//    p(x2)
}

function p(x) {
    // noinline
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
//    print (x)
//    var a = Math.random() // we don't support gc yet, so no doubles for now.
//    b = Math.sin(a) * Math.sin(a)
//    c = Math.cos(a) * Math.cos(a)
//    print (++cnt )
      if (x)
          return 1
//        eval("print (x | 0)")
//    print (x)
      return 0
}

//%NeverOptimizeFunction(p);
//%NeverOptimizeFunction(TimeFunc);
cnt = 0
function TimeFunc() {
    for (var i = 0; i < 1; i++) {
        var sum = 0;
        for(var x = 0; x < 50; x++)
            for(var y = 0; y < 256; y++)
                //sum += foo(64206, y + x) 
            sum += foo(64206, y, 48879); 
    }
    return sum;
}

sum = TimeFunc();

print (sum)
