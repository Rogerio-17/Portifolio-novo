/*------------ Mostra cor do menu -----------*/

function scrollHeader() {
  var scroll = document.getElementById("header");

  if (window.scrollY > 150) {
    scroll.classList.add("scroll");
  } else {
    scroll.classList.remove("scroll");
  }
}

/*------------ Seleciona onde esta a página -----------*/

function scrollSel() {
  var altura = window.scrollY;
  var elemento1 = document.getElementById("sobre");
  var elemento2 = document.getElementById("hab");
  var elemento3 = document.getElementById("principais");
  var elemento4 = document.getElementById("cont");

  if (altura > 640 && altura < 1643) {
    elemento1.classList.add("sel");
  } else {
    elemento1.classList.remove("sel");
  }

  if (altura > 1644 && altura < 2385) {
    elemento2.classList.add("sel");
  } else {
    elemento2.classList.remove("sel");
  }

  if (altura > 2386 && altura < 4099) {
    elemento3.classList.add("sel");
  } else {
    elemento3.classList.remove("sel");
  }

  if (altura > 4100 && altura < 4500) {
    elemento4.classList.add("sel");
  } else {
    elemento4.classList.remove("sel");
  }
}

/*------------------------------ API GITHUB ---------------------------------*/
function getApiGitHub() {
  fetch("https://api.github.com/users/rogerio-17/repos")
    .then((resposta) => {
      return resposta.json();
    })
    .then((corpo) => {
      const cop = corpo;

      cop.map((item) => {
        // --------------- Pega as informações da API e guarda nas variaveis ---------
        const nome_projeto = item.name;
        const descricao = item.description;
        const link_projeto = item.html_url;
        const data_criacao = item.created_at;
        const linguagem = item.language;

        if (
          nome_projeto !== "Not-cia-cidade" &&
          nome_projeto !== "Rogerio-17"
        ) {
          /*--- Criando a imagem e definindo o link ---*/
          const img = document.createElement("img");
          img.src = "./img/folder-1.png";
          /*-----------------------------------------------------------------*/
          const divPai = document.getElementById("projetos");
          const divProjetos_git = document.createElement("div");
          const h3 = document.createElement("h3");
          const p = document.createElement("p");
          const h6 = document.createElement("h6");

          // ------ Imagens tecnologias ---------
          const imgTec = document.createElement("img");

          /*-------------------------- Link projeto ----------------------------------*/
          const link = document.createElement("a");
          link.href = link_projeto;

          divProjetos_git.className = "caixa_projeto";
          // ---------------- Define as classes da tecnologia
          imgTec.className = "imagem_tecnologia";
          link.target = "_blank";

          // ------------ Cria div e elementos
          divPai.appendChild(divProjetos_git);
          divProjetos_git.appendChild(img);
          divProjetos_git.appendChild(h3);
          divProjetos_git.appendChild(p);
          // ----------- Se a Tecnologia for HTML
          if (linguagem == "HTML") {
            imgTec.src = "./img/html5.png";
          }
          // ----------- Se a Tecnologia for CSS
          if (linguagem == "CSS") {
            imgTec.src = "./img/css3.png";
          }
          // ----------- Se a Tecnologia for JS
          if (linguagem == "JavaScript") {
            imgTec.src = "./img/js.png";
          }
          // ----------- Se a Tecnologia for React
          if (linguagem == "React") {
            imgTec.src = "./img/react.png";
          }
          divProjetos_git.appendChild(imgTec);

          divProjetos_git.appendChild(h6);
          divProjetos_git.appendChild(link);
          h3.textContent = nome_projeto.toUpperCase(0);
          p.textContent = descricao;

          // ------- Formata da data  -------
          h6.textContent =
            "Data de criação: " + new Date(data_criacao).toLocaleDateString();

          link.textContent = "Ver no GitHub";
        }
      });
    });
}

getApiGitHub();

/*---------------------------------------------------------------*/

/*
function calc() {
  var altura = window.scrollY;
  console.log(altura);
}
*/

window.addEventListener("scroll", function () {
  scrollHeader();
  scrollSel();
});

function openCity(tecName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(tecName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "rgba(166, 169, 156, 0.3)";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
