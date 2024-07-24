let radiologias = [
    {
        HORA: "11:00",
        ESPECIALISTA: "IGNACIO SCHULZ",
        PACIENTE: "FRANCISCA ROJAS",
        RUT: "9878782-1	",
        PREVISION: "FONASA"
    },
    {
        HORA: "11:30",
        ESPECIALISTA: "FEDERICO SUBERCASEAUX",
        PACIENTE: "PAMELA ESTRADA",
        RUT: "15345241-3",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "3:00",
        ESPECIALISTA: "FERNANDO WURTHZ",
        PACIENTE: "ARMANDO LUNA",
        RUT: "16445345-9",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "3:30",
        ESPECIALISTA: "ANA MARIA GODOY",
        PACIENTE: "MANUEL GODOY",
        RUT: "17666419-0",
        PREVISION: "FONASA"
    }, {
        HORA: "4:00",
        ESPECIALISTA: "PATRICIA SUAZO",
        PACIENTE: "RAMON ULLOA",
        RUT: "14989389-K",
        PREVISION: "FONASA"
    }
];
document.getElementById("radiologia").addEventListener('click', () => {

    hacerParrafos(radiologias)

})
//creamos los parrafos
function hacerParrafos(radiologias) {
    let parrafo = ''
    for (let i = 0; i < radiologias.length; i++) {
        parrafo += `
        <tr>
            <td>${radiologias[i].HORA}</td>
            <td>${radiologias[i].ESPECIALISTA}</td>
            <td>${radiologias[i].PACIENTE}</td>
            <td>${radiologias[i].RUT}</td>
            <td>${radiologias[i].PREVISION}</td>
        </tr>
        `
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = parrafo;
}

let traumatologias = [
    {
        HORA: "8:00",
        ESPECIALISTA: "MARIA PAZ ALTUZARRA",
        PACIENTE: "PAULA SANCHEZ",
        RUT: "15554774-5",
        PREVISION: "FONASA"
    },
    {
        HORA: "10:00",
        ESPECIALISTA: "RAUL ARAYA",
        PACIENTE: "ANGÉLICA NAVAS",
        RUT: "15444147-9",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "10:30",
        ESPECIALISTA: "MARIA ARRIAGADA",
        PACIENTE: "ANA KLAPP",
        RUT: "17879423-9",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:00",
        ESPECIALISTA: "ALEJANDRO BADILLA",
        PACIENTE: "FELIPE MARDONES",
        RUT: "1547423-6",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:30",
        ESPECIALISTA: "CECILIA BUDNIK",
        PACIENTE: "DIEGO MARRE",
        RUT: "16554741-K",
        PREVISION: "FONASA"
    },
    {
        HORA: "12:00",
        ESPECIALISTA: "ARTURO CAVAGNARO",
        PACIENTE: "CECILIA MENDEZ",
        RUT: "9747535-8",
        PREVISION: "ISAPRE"
    }
];
document.getElementById("traumatologia").addEventListener('click', () => {

    hacerParrafos2(traumatologias)

})

//creamos los parrafos
function hacerParrafos2(traumatologias) {
    let parrafo = ''
    for (let i = 0; i < traumatologias.length; i++) {
        parrafo += `
        <tr>
            <td>${traumatologias[i].HORA}</td>
            <td>${traumatologias[i].ESPECIALISTA}</td>
            <td>${traumatologias[i].PACIENTE}</td>
            <td>${traumatologias[i].RUT}</td>
            <td>${traumatologias[i].PREVISION}</td>
        </tr>
        
        `
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = parrafo;
}

let dentales = [
    {
        HORA: "8:30",
        ESPECIALISTA: "ANDREA ZUÑIGA",
        PACIENTE: "MARCELA RETAMAL",
        RUT: "11123425-6",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:00",
        ESPECIALISTA: "MARIA PIA ZAÑARTU",
        PACIENTE: "ANGEL MUÑOZ",
        RUT: "9878789-2",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:30",
        ESPECIALISTA: "SCARLETT WITTING",
        PACIENTE: "MARIO KAST",
        RUT: "7998789-5",
        PREVISION: "FONASA"
    },
    {
        HORA: "1:00",
        ESPECIALISTA: "FRANCISCO VON TEUBER",
        PACIENTE: "KARIN FERNANDEZ",
        RUT: "18887662-K",
        PREVISION: "FONASA"
    },
    {
        HORA: "1:30",
        ESPECIALISTA: "EDUARDO VIÑUELA",
        PACIENTE: "HUGO SANCHEZ",
        RUT: "17665461-4",
        PREVISION: "FONASA"
    },
    {
        HORA: "2:00",
        ESPECIALISTA: "RAQUEL VILLASECA",
        PACIENTE: "ANA SEPULVEDA",
        RUT: "14441281-0",
        PREVISION: "ISAPRE"
    }
];

document.getElementById("dental").addEventListener('click', () => {

    hacerParrafos3(dentales)

})

//creamos los parrafos
function hacerParrafos3(dentales) {
    let parrafo = ''
    for (let i = 0; i < dentales.length; i++) {
        parrafo += `
        <tr>
            <td>${dentales[i].HORA}</td>
            <td>${dentales[i].ESPECIALISTA}</td>
            <td>${dentales[i].PACIENTE}</td>
            <td>${dentales[i].RUT}</td>
            <td>${dentales[i].PREVISION}</td>
        </tr>
        `
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = parrafo;
}

document.getElementById("primerUltimo").addEventListener('click', () => {
    crearExtremos(radiologias, traumatologias, dentales)
})

//Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.
function crearExtremos(radiologias, traumatologias, dentales) {
    let parrafo = ''
    parrafo += `
    <p>Primera atención: ${radiologias[0].PACIENTE} - ${radiologias[0].PREVISION} | ${radiologias[radiologias.length - 1].PACIENTE} - ${radiologias[radiologias.length - 1].PREVISION}</p>

    <p>Primera atención: ${traumatologias[0].PACIENTE} - ${traumatologias[0].PREVISION} | ${traumatologias[radiologias.length - 1].PACIENTE} - ${traumatologias[traumatologias.length - 1].PREVISION}</p>

    <p>Primera atención: ${dentales[0].PACIENTE} - ${dentales[0].PREVISION} | ${dentales[dentales.length - 1].PACIENTE} - ${dentales[dentales.length - 1].PREVISION}</p>
    `
    let resultado = document.getElementById("primerUltimoP")
    resultado.innerHTML = parrafo
}
