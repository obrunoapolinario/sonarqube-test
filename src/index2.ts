

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
