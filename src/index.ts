// Função que não é usada
function unusedFunction() {
    console.log("Isso nunca será chamado.1")
}

// Duplicação de código (blocos quase idênticos)
export function greet1(name: string) {
    if (name === "") {
        console.log("Olá, visitante!")
    } else {
        console.log("Olá, " + name)
    }
}

export function greet2(name: string) {
    if (name === "") {
        console.log("Olá, visitante!")
    } else {
        console.log("Olá, " + name)
    }
}

export function greet(name: string) {
    if (name === "") {
        console.log("Olá, visitante!")
    } else {
        console.log("Olá, " + name)
    }
}

//Complexidade desnecessária
export function complexLogic(x: number): string {
    if (x > 10) {
        if (x % 2 === 0) {
            if (x < 100) {
                return "Número entre 10 e 100 e par"
            } else {
                return "Número maior que 100 e par"
            }
        } else {
            return "Número ímpar maior que 10"
        }
    } else {
        return "Número menor ou igual a 10"
    }
}

// Estilo e lógica quebrada
export function add(a: number, b: number): number {
    let result = a + b
    let debug = "resultado: " + result // variável nunca usada
    return result
}

export function calcularMedia(n1: number, n2: number, n3: number): number {
    let media = 0 // variável não usada corretamente (Sonar aponta como não utilizada)
    let soma = n1 + n2 + n3
    let resultado = soma / 3

    return resultado // 'media' foi declarada mas nunca usada
}

// // Lógica incorreta de Fibonacci (bug)
// export function fibonacci(num: number): number {
//   if (num < 0) {
//     return -1; // estranho retornar -1
//   }

//   let a = 1, b = 0, temp;
//   while (num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }
