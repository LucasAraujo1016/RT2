"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_js_1 = require("./calculo.js");
var Bhaskara = /** @class */ (function (_super) {
    __extends(Bhaskara, _super);
    function Bhaskara() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bhaskara.prototype.calcular = function (numero1, numero2) {
        console.log('Método não implementado para Bhaskara.');
        return 0;
    };
    Bhaskara.prototype.calcularBhaskara = function (numero1, numero2, numero3) {
        var delta = numero2 * numero2 - 4 * numero1 * numero3;
        if (delta > 0) {
            var x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
            var x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);
            console.log("As ra\u00EDzes da equa\u00E7\u00E3o s\u00E3o: x1 = ".concat(x1.toFixed(2), " e x2 = ").concat(x2.toFixed(2)));
            return [x1, x2];
        }
        else if (delta === 0) {
            var x = -numero2 / (2 * numero1);
            console.log("A raiz da equa\u00E7\u00E3o \u00E9: x = ".concat(x.toFixed(2)));
            return [x];
        }
        else {
            console.log('A equação não possui raízes reais.');
            return null;
        }
    };
    return Bhaskara;
}(calculo_js_1.default));
exports.default = Bhaskara;
