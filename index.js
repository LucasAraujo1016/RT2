"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var somar_1 = require("./out/somar");
var subtracao_1 = require("./out/subtracao");
var multiplicacao_1 = require("./out/multiplicacao");
var divisao_1 = require("./out/divisao");
var potenciacao_1 = require("./out/potenciacao");
var radiciacao_1 = require("./out/radiciacao");
var bhaskara_1 = require("./out/bhaskara");
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Por favor, insira 2 n\u00FAmeros e a opera\u00E7\u00E3o desejada! (Ex: 2 3 SOMAR)\n", function (valor) {
        var instrucoes = valor.split(' ');
        var numero1 = Number(instrucoes[0]);
        var numero2 = Number(instrucoes[1]);
        var operação = instrucoes[2].toUpperCase();
        if (instrucoes.length !== 3) {
            console.log('Por favor, insira exatamente 2 números e a operação desejada!');
            leitor.close();
            return;
        }
        if (isNaN(numero1) || isNaN(numero2)) {
            console.log('Por favor, insira números válidos!');
            leitor.close();
            return;
        }
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(numero1, ", ").concat(numero2, ", ").concat(operação, " \n"));
        var calculo;
        switch (operação) {
            case 'SOMAR':
                calculo = new somar_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'SUBTRAIR':
                calculo = new subtracao_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'MULTIPLICAR':
                calculo = new multiplicacao_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'DIVIDIR':
                if (numero2 === 0) {
                    console.log('Não é possível dividir por zero!');
                    leitor.close();
                    return;
                }
                else {
                    calculo = new divisao_1.default();
                    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2)));
                    break;
                }
            case 'POTENCIAR':
                calculo = new potenciacao_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'RADICIAR':
                calculo = new radiciacao_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'BHASKARA':
                leitor.question("Por favor, insira o terceiro n\u00FAmero!\n", function (valor3) {
                    var numero3 = Number(valor3);
                    if (isNaN(numero3)) {
                        console.log('Por favor, insira um número válido!');
                        leitor.close();
                        return;
                    }
                    calculo = new bhaskara_1.default();
                    calculo.calcularBhaskara(numero1, numero2, numero3);
                    leitor.close();
                });
                return;
            default:
                console.log('Operação desconhecida!');
                leitor.close();
                return;
        }
        leitor.close();
    });
};
iniciar();
