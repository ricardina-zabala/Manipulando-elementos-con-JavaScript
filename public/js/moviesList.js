window.addEventListener('load',()=>{
   const title = document.querySelector('.moviesListTitulo')
   const body = document.querySelector('body')
   const modoOscuro = window.prompt('¿Desea modo oscuro?')

   if (modoOscuro) {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
   }

   title.innerHTML += 'Listado de películas'
   title.style.color = 'white'
   title.style.backgroundColor = 'teal'
   title.style.padding = '20px'
}) 