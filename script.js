/*Instruções do Desafio:
1. Alterar o Texto na Seção "HOME":
o Substitua o texto "Easy way to find a perfect property" por "Bem-vindo ao
Nosso Site".
2. Alterar Imagem:
o Substitua dinamicamente a imagem da classe "hero-content" por outra
imagem. Pode ser um link externo ou uma imagem adicionada à pasta
assets/images.
3. Esconder Elemento:
o Oculte o elemento de classe "availability-content" utilizando JavaScript.
4. Estilizar um Parágrafo no Rodapé:
o Localize o parágrafo que contém o texto:
▪ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro
quisquam laborum, sapiente similique nesciunt architecto tenetur!..."

o Aplique os seguintes estilos:
▪ Texto em negrito.
▪ Cor do texto alterada para azul.

5. Mover Elemento:
o Reposicione o elemento de classe "find", atualmente próximo ao rodapé, para
ficar logo abaixo do elemento de classe "hero".
6. Adicionar Comportamento ao Botão "CONTACT US":
o Adicione o ID "btn-contact" ao botão "CONTACT US" na seção "find".

o Configure o botão para exibir um alerta ao ser clicado, informando que o
botão foi acionado.

7. Adicionar Nova Opção no Formulário "RENT":
o Na seção "Location", insira uma nova opção no elemento <select> com o valor
"Presidente Prudente".
8. Adicionar Item no Menu de Navegação:
o Insira dinamicamente a opção "ABOUT US" após o item "BLOG" no cabeçalho.
o Verifique se o item também aparece corretamente na versão mobile.

Desafios Extras:
9. Validação de Formulário no Rodapé:
o No campo de email localizado no rodapé, adicione uma validação para verificar
se o campo está vazio ao clicar no botão de envio.
o Caso esteja vazio, exiba um alerta com a mensagem "O campo de email está
vazio".
*/
document.querySelector('.hero-content').firstElementChild.innerHTML = "Bem-vindo ao Nosso Site"; //estou pegando o primeiro "filho", da classe hero-content

document.querySelector('.hero-content').style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/9/98/Presidente_Prudente.JPG')"; //fazendo a troca da imagem por otra usando o cdn

document.querySelector('.availability-content').style.display = 'none'; // aqui pego todo o meu container e aplico o displey none para faze-lo sumir

document.querySelector('.footer-content p').style.color = 'blue'; // navego pelo meu footer-content para pegar apenas o meu <p> e aplicar a cor da fonte.

document.querySelector('.footer-content p').style.fontWeight = 'bold';// navego pelo meu footer-content para pegar apenas o meu <p> e aplicar o negrito.

function clickado(){ // função quando o botão for clicado ele redireciona para cá

   const botao = document.getElementById('btn-contact'); //pegando o id
    alert ('contato realizado com sucesso!') //disparando o alerta
}

let selectElement = document.querySelector('#rent select[name="location"]'); // Seleciona o elemento <select> dentro do formulário com id 'rent' e name='location'

let novaopc = document.createElement('option'); // crio um novo elemento <option>

novaopc.value = 'Presidente Prudente'; //defino o valor da nova opção
novaopc.textContent = 'Presidente Prudente'; //Define o texto visível da nova opção como 'Presidente Prudente'
selectElement.appendChild(novaopc); // Adiciona a nova opção ao <select> previamente selecionado

let elementodiv = document.querySelector('.navbar-list');// Seleciona o elemento com a classe 'navbar-list'
let novalist = document.createElement('li'); // Cria um novo item de lista <li>
novalist.textContent = 'ABOUT US'; //Define o texto do novo item de lista como 'ABOUT US'
elementodiv.appendChild(novalist); // Adiciona o novo item de lista à lista de navegação

function validar(){
let campo = document.querySelector('.footer-subscribe input').value;
    if (campo === ""){  //validei se o campo é igual a vazio.
        alert('campo esta vazio'); // se for ele despara o alerta
    }
}