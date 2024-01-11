hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.scroll-reveal', {
        origin: 'top',
        distance: '40px',
        duration: 1000,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200
    });
    ScrollReveal().reveal('.scroll-reveal2', {
        origin: 'left',
        distance: '40px',
        duration: 3000,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 400
    });
});

// -------------------------------------

const title = document.querySelector('.ah');
const titleTwo = document.querySelector('.ahh');



(async () => {
    const { value: nombre } = await Swal.fire({
        title: 'Ingrese su nombre: ',
        input: 'text',
        inputPlaceholder: 'Nombre: ',
        inputValue: '',
        confirmButtonText: 'Aceptar',
        backdrop: 'true',
        customClass: {
            popup: 'class-swal2'
        }

    });
    if (nombre.trim() === '' || nombre === null) {
        title.textContent = `Bienvenidos a Larat Make Up`;
        Swal.fire({
            title: `No ingreso el nombre.`,
            text: 'Por favor ingrese el nombre.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            backdrop: 'true',
            timer: 3000,
            timerProgressBar: true,
            customClass: {
                popup: 'class-swal'
            }
        });
    }

    else {
        title.textContent = `Bienvenidos a Larat Make Up, ${nombre}`;
        titleTwo.textContent = `${nombre}, en Larat Make Up, no solo creamos looks,
        sino que también creamos experiencias que te harán sentir seguro/a y radiante. Únete a
        nosotros y déjanos realzar tu belleza de una manera única y personalizada.`;
        Swal.fire({
            title: `${nombre}`,
            text: 'Gracias por ingresar el nombre.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            backdrop: 'true',
            timer: 3000,
            timerProgressBar: true,
            customClass: {
                popup: 'class-swal'
            }

        });


        titleTwo.textContent = `${nombre}, en Larat Make Up, no solo creamos looks,
sino que también creamos experiencias que te harán sentir seguro/a y radiante. Únete a
nosotros y déjanos realzar tu belleza de una manera única y personalizada.`;

    }
})()

