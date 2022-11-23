export function usuarioDTO( idFuncion, idUsuario, pelicula){

    return{
        idFuncion,
        idUsuario,
        ...pelicula
    }
}