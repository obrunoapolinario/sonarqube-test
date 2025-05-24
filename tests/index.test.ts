// import { fibonacci } from "../src/index"

// it("should return '1' for 1", () => {
//   expect(fibonacci(1)).toBe(1);
// })

import { calcularMedia, greet1, add } from "../src/index"
// import {  complexLogic } from "../src/index"

describe("Funções greet1 e greet2", () => {
    it("greet1 deve cumprimentar visitante quando nome vazio", () => {
        console.log = jest.fn()
        greet1("")
        expect(console.log).toHaveBeenCalledWith("Olá, visitante!")
    })

    it("greet1 deve cumprimentar com nome", () => {
        console.log = jest.fn()
        greet1("Ana")
        expect(console.log).toHaveBeenCalledWith("Olá, Ana")
    })
})

// describe("Função complexLogic", () => {
//     it("retorna mensagem correta para número menor ou igual a 10", () => {
//         expect(complexLogic(5)).toBe("Número menor ou igual a 10")
//     })
// })

describe("Função add", () => {
    it("soma dois números corretamente", () => {
        expect(add(3, 4)).toBe(7)
        expect(add(-1, 1)).toBe(0)
    })
})

describe("Função calcularMedia", () => {
    it("deve calcular a média corretamente para três números positivos", () => {
        expect(calcularMedia(6, 7, 8)).toBe(7)
    })
})
