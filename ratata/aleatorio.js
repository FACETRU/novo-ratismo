const nomes = ["Cuca beludo", "Deide costa", "Simas turbo", "thomas turbando"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)