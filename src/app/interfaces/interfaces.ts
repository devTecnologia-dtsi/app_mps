export interface ResponseLogin {
    resp: boolean,
    message: string,
    data: DataUser
}

interface DataUser {
    id: string,
    nombre: string,
    correo: string,
    telefono: string,
    identificacion: string,
    programaPsi: string,
    tipoDocumento: number
}

export interface ResponseChangePassword {
    resp: boolean,
    message: string
}

export interface ResponseModules {
    resp: boolean,
    data: Array<DataModules>
}

export interface DataModules {
    id: number,
    nombre: string,
    imagen: string,
    descripcion: string
}

export interface ResponseSubModule {
    resp: boolean,
    data: Array<DataSubModule>
}

export interface DataSubModule {
    id: number,
    moduleId: number,
    titulo: string,
    contenido: string,
    imagenTitulo: string,
    isImage: boolean,
    isVideo: boolean
}

export interface CambioContrasena {
    email: string,
    contrasena: string,
    nuevaContrasena: string,
    confirmarContrasena: string
}