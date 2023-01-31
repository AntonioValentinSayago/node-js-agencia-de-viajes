let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

const cargarPeliculas = async () => {
    try {
        const respues = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6c1cb99ae63165b557828a1581dd1976&language=es-MX&page=${pagina}`);
    
        console.log(respues);

        // Si la respuesta es Correcta  Status 200
        if (respues.status === 200) {
            const movie = await respues.json();

            let fronPelicula = ' ';
            movie.results.forEach(pelicula => {
                fronPelicula += `
                <div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
                
                `;
            });

            document.getElementById('contenedor').innerHTML = fronPelicula;

        }else if (respues.status === 404){
            console.log("Error 404");
        }
    } catch (error) {
        console.log(error);
    }
}

cargarPeliculas();