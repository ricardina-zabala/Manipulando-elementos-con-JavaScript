window.addEventListener('load',()=>{
    const main = document.querySelector('.container')
    const title = document.querySelector('.subtitulo')
    const link = document.querySelector('a')
    const paragraphs = document.querySelectorAll('p')
    const userName = window.prompt('Ingrese su nombre')
    if (!userName) {
        title.innerText += 'Invitado'
    } else {
        title.innerText += userName
    }
    title.style.textTransform = 'uppercase'
    link.style.color = 'blue'

    if (window.confirm('¿Desea colocar un fondo de pantalla?')) {
        document.querySelector('body').classList.add('fondo')
    }

    for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        if (1 % 2 === 0) {
            p.classList.add('destacadoPar')
        } else {
            p.classList.add('destacadoImpar')
        }
    }

    main.style.display = 'block'
}) 