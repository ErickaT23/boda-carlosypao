const guests = [
    { id: "1", name: "Abby y Fer", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "2", name: "Dr. Alex Enriquez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "3", name: "Dr. Anthony Méndez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "4", name: "Dr. Carlos Aquino", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "5", name: "Dr. Daniel Villatoro", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "6", name: "Dr. David Ayerdi", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "7", name: "Dr. Diego Alvarado", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "8", name: "Dr. Edgar Pérez y Señora", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "9", name: "Dr. Félix Guzman", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "10", name: "Dr. Fernando Romero", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "11", name: "Dr. Francisco López", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "12", name: "Dr. Gustavo López y Sra.", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "13", name: "Dr. Ivan Perez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "14", name: "Dr. Javier Rodas y familia", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "15", name: "Dr. Jorge Ríos", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "16", name: "Dr. José Macario", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "17", name: "Dr. Juan Alberto Quemé", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "18", name: "Dr. Kevin Valdez e hijos", passes: 3, adults: 2, kids: 1, gender: "male" },
    { id: "19", name: "Dr. Leonel González", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "20", name: "Dr. Luis López", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "21", name: "Dr. Luis Pablo Boy", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "22", name: "Dr. Manuel Rojas", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "23", name: "Dr. Marco Guzmán", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "24", name: "Dr. Marcos González", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "25", name: "Dr. Marvin Santizo", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "26", name: "Dr. Milton Lopez y Sra.", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "27", name: "Dr. Oliver Martínez y Sra.", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "28", name: "Dr. Pablo Orozco", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "29", name: "Dr. Rafael Lopez Monterroso", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "30", name: "Dr. Roberto Estrada y Señora", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "31", name: "Dra. Andrea López", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "32", name: "Dra. Andrea Ruano", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "33", name: "Dra. Andrea Squit", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "34", name: "Dra. Aura Boj", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "35", name: "Dra. Belen Hernandez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "36", name: "Dra. Carol Guillén", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "37", name: "Dra. Dulce Najarro", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "38", name: "Dra. Edna Aguilar", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "39", name: "Dra. Estefanía Barrera", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "40", name: "Dra. Giezy García", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "41", name: "Dra. Jessica Siam", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "42", name: "Dra. Kelly Gómez", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "43", name: "Dra. Kimberly Cum", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "44", name: "Dra. Lourdes Agustín", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "45", name: "Dra. Lucía García", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "46", name: "Dra. Maria Fernanda Mazariegos Soto", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "47", name: "Dra. Maria Fernanda Perez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "48", name: "Dra. Maritza Rojas", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "49", name: "Dra. Michelle García", passes: 2, adults: 1, kids: 1, gender: "female" },
    { id: "50", name: "Dra. Paola Schoenfeld", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "51", name: "Dra. Rosa Galindo", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "52", name: "Dra. Rosana Barrios", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "53", name: "Dra. Sofia Cifuentes", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "54", name: "Dra. Virginia Fingado", passes: 3, adults: 3, kids: 0, gender: "female" },
    { id: "55", name: "Dra. Ximena Maldonado", passes: 2, adults: 1, kids: 1, gender: "female" },
    { id: "56", name: "Dra. Yesenia Valdez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "57", name: "Esposos Aguilar López", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "58", name: "Esposos Barrios Morales", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "59", name: "Esposos Díaz Obregon", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "60", name: "Esposos Gill Barillas", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "61", name: "Esposos Heredia Valdez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "62", name: "Esposos Hernández Valdez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "63", name: "Esposos Hoffman Bautista", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "64", name: "Esposos López Samayoa", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "65", name: "Esposos Mendez Farfan", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "66", name: "Esposos Monterroso Arreaga", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "67", name: "Esposos Pereira Valdez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "68", name: "Esposos Quan Obregon", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "69", name: "Esposos Romero Gonzalez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "70", name: "Esposos Valdez Quiñonez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "71", name: "Fam. Ramírez Castillo", passes: 4, adults: 4, kids: 0, gender: "neutral" },
    { id: "72", name: "Familia Alvarado Flores", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "73", name: "Familia Caal Bosque", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "74", name: "Familia Camacho Hernández", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "75", name: "Familia de León Alvarado", passes: 4, adults: 4, kids: 0, gender: "neutral" },
    { id: "76", name: "Familia de León Mérida", passes: 5, adults: 5, kids: 0, gender: "neutral" },
    { id: "77", name: "Familia de León Ríos", passes: 3, adults: 2, kids: 1, gender: "neutral" },
    { id: "78", name: "Familia Flores Reyes", passes: 4, adults: 4, kids: 0, gender: "neutral" },
    { id: "79", name: "Familia Flores Sánchez", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "80", name: "Familia Girón Flores", passes: 3, adults: 2, kids: 1, gender: "neutral" },
    { id: "81", name: "Familia Gonzales Nuñez", passes: 5, adults: 4, kids: 1, gender: "neutral" },
    { id: "82", name: "Familia Hernández Valdez", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "83", name: "Familia Maldonado Ríos", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "84", name: "Familia Marcial Herrarte", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "85", name: "Familia Monterroso Nuñez", passes: 3, adults: 2, kids: 1, gender: "neutral" },
    { id: "86", name: "Familia Nuñez Mendez", passes: 5, adults: 4, kids: 1, gender: "neutral" },
    { id: "87", name: "Familia Nuñez Monje", passes: 4, adults: 4, kids: 0, gender: "neutral" },
    { id: "88", name: "Familia Oscal Flores", passes: 3, adults: 2, kids: 1, gender: "neutral" },
    { id: "89", name: "Familia Pacajoj Alvarado", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "90", name: "Familia Pereira Martínez", passes: 4, adults: 2, kids: 2, gender: "neutral" },
    { id: "91", name: "Familia Ponce Gutierrez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "92", name: "Familia Ríos Orantes", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "93", name: "Familia Rodríguez Galicia", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "94", name: "Familia Sagastume Carles", passes: 4, adults: 3, kids: 1, gender: "neutral" },
    { id: "95", name: "Familia Sagastume Quiñonez", passes: 4, adults: 4, kids: 0, gender: "neutral" },
    { id: "96", name: "Familia Sagastume Rodríguez", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "97", name: "Familia Sagastume Vallecillo", passes: 4, adults: 4, kids: 0, gender: "neutral" },
    { id: "98", name: "Familia Sagüil Peña", passes: 5, adults: 5, kids: 0, gender: "neutral" },
    { id: "99", name: "Familia Sarti Ruiz", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "100", name: "Familia Soto Argueta", passes: 4, adults: 3, kids: 1, gender: "neutral" },
    { id: "101", name: "Familia Soto Sarti", passes: 5, adults: 3, kids: 2, gender: "neutral" },
    { id: "102", name: "Familia Toj Lara", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "103", name: "Familia Valdez Martínez", passes: 3, adults: 2, kids: 1, gender: "neutral" },
    { id: "104", name: "Familia Valdez Ríos", passes: 3, adults: 3, kids: 0, gender: "neutral" },
    { id: "105", name: "Ing Carlos Pererira y Esposa", passes: 2, adults: 2, kids: 0, gender: "neutral" },
    { id: "106", name: "Ing. Maria Ines Gordillo", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "107", name: "Joven Jose Ruiz", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "108", name: "Lic. Andres Lopez y familia", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "109", name: "Lic. Richard Brennen y Familia", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "110", name: "Lic. Rubén Espinoza y Señora", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "111", name: "Licda. Ana Luisa Sagastume", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "112", name: "Licda. Andrea López y familia", passes: 3, adults: 2, kids: 1, gender: "female" },
    { id: "113", name: "Licda. Claudia Gonzales", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "114", name: "Licda. Claudia Pereira e hijos", passes: 3, adults: 3, kids: 0, gender: "female" },
    { id: "115", name: "Licda. Flor Lopez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "116", name: "Licda. Grace Santiago", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "117", name: "Licda. Hermelinda Baten y familia", passes: 3, adults: 2, kids: 1, gender: "female" },
    { id: "118", name: "Licda. María Moreno", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "119", name: "Postgrado Medicina Interna", passes: 14, adults: 14, kids: 0, gender: "neutral" },
    { id: "120", name: "Sr. Angel Grotewold e hija", passes: 2, adults: 1, kids: 1, gender: "male" },
    { id: "121", name: "Sr. Fredy Pastor y esposa", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "122", name: "Sr. Benjamin Nuñez y familia", passes: 4, adults: 3, kids: 1, gender: "male" },
    { id: "123", name: "Sr. Carlos Valdez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "124", name: "Sr. David Flores y Señora", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "125", name: "Sr. David Jose Flores y familia", passes: 5, adults: 3, kids: 2, gender: "male" },
    { id: "126", name: "Sr. Gustavo Mejía", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "127", name: "Sr. Josue Nuñez Flores e hijo", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "128", name: "Sr. Marco Tulio Marcial", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "129", name: "Sr. Marío Ríos y familia", passes: 3, adults: 3, kids: 0, gender: "male" },
    { id: "130", name: "Sr. Mauro Paz y señora", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "131", name: "Sr. Omar Guzmán", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "132", name: "Sr. Oscar Vallecillo y Señora", passes: 2, adults: 2, kids: 0, gender: "male" },
    { id: "133", name: "Sr. Ramiro Godínez Mendez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "134", name: "Sr. Rubén Nuñez", passes: 1, adults: 1, kids: 0, gender: "male" },
    { id: "135", name: "Sr. Victor Valdez e hija", passes: 2, adults: 1, kids: 1, gender: "male" },
    { id: "136", name: "Sra. Adela de Soto", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "137", name: "Sra. Berta Alicia de Sagastume", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "138", name: "Sra. Betty Godínez y esposo", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "139", name: "Sra. Carmen Valdez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "140", name: "Sra. Cory Godínez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "141", name: "Sra. Elgi Ochoa y familia", passes: 4, adults: 2, kids: 2, gender: "female" },
    { id: "142", name: "Sra. Estela Ríos", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "143", name: "Sra. Jeimy Gutierrez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "144", name: "Sra. Lea Nuñez y esposo", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "145", name: "Sra. Liseth Mejicanos", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "146", name: "Sra. Maria Jose Flores e hijas", passes: 3, adults: 1, kids: 2, gender: "female" },
    { id: "147", name: "Sra. María Sara Sosa Montejo", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "148", name: "Sra. Melany Marcial y familia", passes: 4, adults: 2, kids: 2, gender: "female" },
    { id: "149", name: "Sra. Paola Barrios y esposo", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "150", name: "Sra. Rebeca Nuñez Flores e hijos", passes: 3, adults: 2, kids: 1, gender: "female" },
    { id: "151", name: "Sra. Ruby García y familia", passes: 3, adults: 2, kids: 1, gender: "female" },
    { id: "152", name: "Sra. Valeska Sarti y familia", passes: 4, adults: 4, kids: 0, gender: "female" },
    { id: "153", name: "Sra. Vilma de Nuñez", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "154", name: "Srita. Ana Armas", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "155", name: "Srita. Beverly Valdez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "156", name: "Srita. Brenda Toño", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "157", name: "Srita. Dana Mérida", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "158", name: "Srita. Elena Moran", passes: 2, adults: 2, kids: 0, gender: "female" },
    { id: "159", name: "Srita. Jeimi Lopez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "160", name: "Srita. Madeline Pineda", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "161", name: "Srita. Maria de los Ángeles Saquic", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "162", name: "Srita. Marie Andree Juarez", passes: 1, adults: 1, kids: 0, gender: "female" },
    { id: "163", name: "Srita. Yoselin Vasquez", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "164", name: "Sr. Carlos Alvarado y Familia", passes: 2, adults: 2, kids: 0, gender:"neutral"},
    { id: "165", name: "Dr. Luis Herrera", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "166", name: "Dra. Ana Hernández", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "167", name: "Dra. María Fernanda Mérida", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "168", name: "Dr. Néstor Lara", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "169", name: "Dra. Paola Sac", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "170", name: "Dra. Silvia Ramos", passes: 2, adults: 1, kids: 1, gender: "neutral"},
    { id: "171", name: "Sr. Josué Mejía", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "172", name: "Sra. Ivon Castillo", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "173", name: "Dra. Angelica Maldonado", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "174", name: "Sr. Amilcar Bosque y señora", passes: 2, adults: 2, kids: 0, gender: "neutral"},
    { id: "175", name: "Dr. Alberto Axt", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "176", name: "Sr. Julio Lopez y familia", passes: 9, adults: 7, kids: 2, gender: "neutral"},
    { id: "177", name: "Dr. Emanuel Cuc", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "178", name: "Dr. Javier Sim", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "179", name: "Post Grado Pediatría", passes: 0, adults: 0, kids: 0, gender: "neutral"},
    { id: "180", name: "Dr. Pablo Velásquez", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "181", name: "Dr. Juan Manuel Raymundo", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "182", name: "Dra. Fernanda Castillo", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "183", name: "Dr. Yeison", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "184", name: "Dr. Julio", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "185", name: "Dra. Alejandra López", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "186", name: "Dr. Jaime Gómez", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "187", name: "Esposos Cuyuch Venegas", passes: 2, adults: 2, kids: 0, gender: "neutral"},
    { id: "188", name: "Dr. José Benavente", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "189", name: "Dr. Daniel Quijivix", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "190", name: "Dra. Yadira Mérida", passes: 1, adults: 1, kids: 0, gender: "female"},
    { id: "191", name: "Dr. Ángel de León", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "192", name: "Dr. Alvin Castro", passes: 1, adults: 1, kids: 0, gender: "male"},
    { id: "193", name: "Dra. Nancy Mendoza", passes: 1, adults: 1, kids: 0, gender: "female"},
];


document.addEventListener("DOMContentLoaded", function () {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;

    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        let invitationText;
        let genderText;

        // Determinar frase de invitación según género y cantidad
        if (guest.passes === 1) {
            genderText = guest.gender === "female" ? "está invitada" : "está invitado";
        } else {
            if (guest.gender === "female" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitadas";
            } else if (guest.gender === "male" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitados";
            } else {
                genderText = "están invitados";
            }
        }

        invitationText = `¡${guest.name}, ${genderText}!`;
        document.getElementById('guest-name').textContent = invitationText;

        let passesText = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
        if (guest.kids > 0) {
            passesText += ` (${guest.adults} adulto${guest.adults !== 1 ? 's' : ''} y ${guest.kids} niño${guest.kids !== 1 ? 's' : ''})`;
        }

        document.getElementById('passes').textContent = `Invitación válida por ${passesText}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
