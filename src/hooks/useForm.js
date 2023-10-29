const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario

    const namesOne = e.target.namesOne.value;
    const namesTwo = e.target.namesTwo.value;
    const emailOne = e.target.emailOne.value;
    const passwordOne = e.target.PasswordOne.value;
    const passwordTwo = e.target.PasswordTwo.value;
    const directionOne = e.target.directionOne.value;

    // Realiza la validación de datos aquí
    if (namesOne.trim() === "" || namesTwo.trim() === "" || !isValidEmail(emailOne) || passwordOne !== passwordTwo) {
        alert("Por favor, complete los campos correctamente.");
        return;
    }

    // Crear un objeto con los datos a enviar
    const data = {
        namesOne,
        namesTwo,
        emailOne,
        passwordOne,
        directionOne,
    };

    // Realiza la solicitud POST utilizando fetch
    try {
        const response = await fetch("http://localhost:300/0logup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            // La solicitud se completó con éxito
            alert("Registro exitoso");
            // Aquí puedes redirigir al usuario a otra página si es necesario
        } else {
            alert("Hubo un problema al registrar. Por favor, inténtelo de nuevo.");
        }
    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
    }
};

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

export { handleSubmit }