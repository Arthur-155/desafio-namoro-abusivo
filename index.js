const validandoClickNao = document.getElementById('nao')
const validandoClickSim = document.getElementById('sim')


    validandoClickNao.addEventListener('click', () => {

        const randomX = Math.floor(Math.random() * (window.innerWidth - validandoClickNao.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - validandoClickNao.offsetHeight));
        

        validandoClickNao.style.position = 'absolute';
        validandoClickNao.style.left = randomX + 'px';
        validandoClickNao.style.top = randomY + 'px';

    });



if (validandoClickSim) {
    validandoClickSim.addEventListener('click', () => {
        alert('Você fez a escolha certa, meu número 1234-5678')
    });
}