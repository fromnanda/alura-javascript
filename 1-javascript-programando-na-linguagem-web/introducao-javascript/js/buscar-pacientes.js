var botaoBusca = document.querySelector("#buscar-pacientes");
botaoBusca.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");

            var resultado = xhr.responseText;
            var pacientes = JSON.parse(resultado);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }


    })

    xhr.send();
})