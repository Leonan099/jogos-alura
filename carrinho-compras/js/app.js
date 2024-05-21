function adicionar() {

    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valorProduto = retornaValor(produto);

    if(isNaN(quantidade) ||quantidade <= 0) {	
        alert('Houve um erro, reveja se os dados estão corretos!');
        return;
    }

    let carrinho = document.getElementById('lista-produtos');
    let section = document.createElement('section')
    let textoCarrinho = criaHTML(valorProduto,quantidade);

    section.setAttribute('class', 'carrinho__produtos__produto');
    section.innerHTML = textoCarrinho;
    carrinho.appendChild(section);

    exibeResultado(valorProduto,quantidade);
    
}

function limpar() {

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';

    document.getElementById('valor-total').innerHTML = `R$0`;

}

function retornaValor(product) {

   switch(product) {
    case 'Fone de ouvido - R$100':
        return 100;
    case 'Celular - R$1400':
        return 1400;
    case 'Oculus VR - R$5000':
        return 5000;        
   }

}

function criaHTML(valorProduto,quantidade) {
    
    if(valorProduto == 100) {
        return `<span class="texto-azul">${quantidade}x</span> Fone de ouvido <span class="texto-azul">R$${valorProduto}</span>`
    } else if(valorProduto == 1400) {
        return `<span class="texto-azul">${quantidade}x</span> Celular <span class="texto-azul">R$${valorProduto}</span>`
    } else {
        return `<span class="texto-azul">${quantidade}x</span> Oculos VR <span class="texto-azul">R$${valorProduto}</span>`
    }

}

function exibeResultado(valorProduto,quantidade) {

    let textTotal = document.getElementById('valor-total');
    let valorTotal = parseInt(textTotal.innerHTML.slice(2));
    let valorComQuantidade = valorProduto * quantidade;
    valorTotal += valorComQuantidade;
    document.getElementById('valor-total').innerHTML = `R$${valorTotal}`;
    
}
