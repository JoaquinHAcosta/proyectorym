export function validation(data) {
    const errors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /^(?=.*\d).{6,10}$/

    if (!data.email) {
        errors.email = "Nombre de usuario vacio"
    } else if (!regexEmail.test(data.email)) {
        errors.email = "El nombre de usuario debe ser un Email"
    } else if (data.email.length > 35) {
        errors.email = "El nombre de usuario no debe ser mayor a 35 caracteres"
    } else if (regexEmail.test(data.email)) {
        errors.email = ""
    }

    if (!regexPass.test(data.password)) {
        errors.password = "La contraseña debe tener al menos 1 numero y tener entre 6 a 10 digitos"
    }

    return errors
}