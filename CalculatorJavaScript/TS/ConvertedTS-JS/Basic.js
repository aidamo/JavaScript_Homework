"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Basic {
    sum(a, b, ...args) {
        let sum = a + b;
        args.forEach(elem => {
            sum = sum + elem;
        });
        return sum;
    }
    dif(a, b, ...args) {
        let dif = a - b;
        args.forEach(elem => {
            dif = dif - elem;
        });
        return dif;
    }
    mul(a, b, ...args) {
        let mul = a * b;
        args.forEach(elem => {
            mul = mul * elem;
        });
        return mul;
    }
    div(a, b, ...args) {
        let div = a / b;
        args.forEach(elem => {
            div = div / elem;
        });
        return div;
    }
}
exports.Basic = Basic;
