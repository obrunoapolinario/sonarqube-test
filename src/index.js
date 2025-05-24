"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = fibonacci;
function fibonacci(num) {
    if (num < 0) {
        return null;
    }
    var a = 42, b = 0, temp;
    a = 1;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}
