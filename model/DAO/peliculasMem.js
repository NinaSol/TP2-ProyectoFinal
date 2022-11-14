export class PeliculasMem {
    constructor() {
        this.peliculas = [
            {
                id: 1,
                nombre: 'PANTERA NEGRA: WAKANDA POR SIEMPRE',
                genero: 'Acción',
                director: 'Ryan Coogler',
                duracion: 161,
                clasificacion: '+13',
                imagen: 'https://static.cinemarkhoyts.com.ar/Images/Posters/c8bbddeba75e479d2400ef0e42a0a0bb.jpg?v=00000837',
                precio: 100
            },
            {
                id: 2,
                nombre: 'BLACK ADAM',
                genero: 'Acción',
                director: 'Jaume Collet-Serra',
                duracion: 125,
                clasificacion: '+13',
                imagen: 'https://static.cinemarkhoyts.com.ar/Images/Posters/62155eea4dbd73ca44d06e6b1da76a86.jpg?v=00000837',
                precio: 110
            },
            {
                id: 3,
                nombre: 'DC LIGA DE SUPERMASCOTAS',
                genero: 'Animación',
                director: 'Jared Stern, Sam Levine',
                duracion: 106,
                clasificacion: 'ATP',
                imagen: 'https://static.cinemarkhoyts.com.ar/Images/Posters/b308536a73b38edc6556812fb69c013a.jpg?v=00000837',
                precio: 90
            },
            {
                id: 4,
                nombre: 'EL ASCENSOR DEL DIABLO',
                genero: 'Terror',
                director: 'Peter Mourougaya',
                duracion: 80,
                clasificacion: '+13',
                imagen: 'https://static.cinemarkhoyts.com.ar/Images/Posters/73a36befd9236f73e2c0910b374dc33d.jpg?v=00000837',
                precio: 105
            },
        ]
    }
    getPelicula = async id => {
        return this.peliculas.find(pelicula => pelicula.id == id)    
    }
    getPeliculas = async _ => {
        try {
            return this.peliculas
        }
        catch {
            return []
        }
    }
    savePelicula = async pelicula => {
        const id = parseInt(this.peliculas[peliculas.length-1].id) + 1
        pelicula.id = String(id)
        this.peliculas.push(pelicula)
        return pelicula
    }
    updatePelicula = async (pelicula,id) => {
        /* Actualización total */
        pelicula.id = id
        const index = this.peliculas.findIndex(pelicula => pelicula.id == id)
        this.peliculas.splice(index, 1, pelicula)
        return pelicula
    }
    deletePelicula = async id => {
        const index = this.peliculas.findIndex(pelicula => pelicula.id == id)
        const pelicula = this.peliculas.splice(index, 1)[0]
        return pelicula
    }
}