window.addEventListener('load',()=>{
    const title = document.querySelector('.moviesAddTitulo')
    const section = document.querySelector('#formulario')
    const article = document.querySelector('article')
    
    title.innerHTML += 'AGREGAR PELÍCULAS'
    title.classList.add('titulo')
    article.classList.add('fondoTransparente')
    section.classList.add('fondoCRUD')
}) 