"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Expert {
    sum(a, b, ...n) {
    }
    dif(a, b, ...n) {
    }
    mul(a, b, ...n) {
    }
    div(a, b, ...n) {
    }
    pow(a, b) {
        return Math.pow(a, b);
    }
    fact(n) {
        if (n == 1)
            return 1;
        for (var i = n - 1; i >= 1; i--)
            n *= i;
        return n;
    }
    sqrt(n) {
        return Math.sqrt(n);
    }
}
exports.Expert = Expert;
