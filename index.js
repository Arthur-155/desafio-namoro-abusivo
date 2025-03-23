const validandoClickNao = document.getElementById('nao')
const validandoClickSim = document.getElementById('sim')

if (validandoClickNao) {
    validandoClickNao.addEventListener('click', () => {
        let clicouNovamente = true;

        while (clicouNovamente) {
            const resposta = confirm('Você tem certeza que não quer mesmo ?')

            if(resposta == false || resposta == true) {
                clicouNovamente = false;
            }
        }
    });
}


if (validandoClickSim) {
    validandoClickSim.addEventListener('click', () => {
        alert('Você fez a escolha certa, meu número 1234-5678')
    });
}