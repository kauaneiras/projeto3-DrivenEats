let p;
let b;
let s;
let total;
let pratoescolhido;
let bebidaescolhida;
let sobremesaescolhida;
let precoprato;
let precobebida;
let precosobremesa;
let totalponto;

// COMIDA

function pratoestrogonofe() {
  document.getElementById("estrogonofe").style.borderColor = "darkgreen";
  document.getElementById("wrap").style.borderColor = "white";
  document.getElementById("risotto").style.borderColor = "white";
  document.getElementById("salada").style.borderColor = "white";
  document.getElementById("risotto").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("wrap").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("estrogonofe").style.filter = "drop-shadow(0 0 0.40rem grey)";
    document.getElementById("salada").style.filter = "drop-shadow(0 0 0.40rem white)";

  document.getElementById("estrogonofecheck").style.display = "block";
  document.getElementById("wrapcheck").style.display = "none";
  document.getElementById("saladacheck").style.display = "none";
  document.getElementById("risottocheck").style.display = "none";

  pratoescolhido = "estrogonofe";
  precoprato = 18.90;
  p = 1;
  botaoverde();
}

function pratowrap() {
    document.getElementById("estrogonofe").style.borderColor = "white";
    document.getElementById("wrap").style.borderColor = "darkgreen";
    document.getElementById("risotto").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("risotto").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("wrap").style.filter = "drop-shadow(0 0 0.40rem grey)";
    document.getElementById("estrogonofe").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("salada").style.filter = "drop-shadow(0 0 0.40rem white)";
  
    document.getElementById("wrapcheck").style.display = "block";
    document.getElementById("estrogonofecheck").style.display = "none";
    document.getElementById("saladacheck").style.display = "none";
    document.getElementById("risottocheck").style.display = "none";
  
    pratoescolhido = "wrap";
    precoprato = 18.90;
    p = 1;
    botaoverde();
  }

function pratosalada() {
    document.getElementById("estrogonofe").style.borderColor = "white";
    document.getElementById("wrap").style.borderColor = "white";
    document.getElementById("risotto").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "darkgreen";
    document.getElementById("risotto").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("wrap").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("estrogonofe").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("salada").style.filter = "drop-shadow(0 0 0.40rem grey)";
  
    document.getElementById("saladacheck").style.display = "block";
    document.getElementById("wrapcheck").style.display = "none";
    document.getElementById("estrogonofecheck").style.display = "none";
    document.getElementById("risottocheck").style.display = "none";
  
    pratoescolhido = "salada";
    precoprato = 16.90;
    p = 1;
    botaoverde();
  }

  function pratorisotto() {
    document.getElementById("risotto").style.borderColor = "green";
    document.getElementById("wrap").style.borderColor = "white";
    document.getElementById("estrogonofe").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("risotto").style.filter = "drop-shadow(0 0 0.40rem grey)";
    document.getElementById("wrap").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("estrogonofe").style.filter = "drop-shadow(0 0 0.40rem white)";
    document.getElementById("salada").style.filter = "drop-shadow(0 0 0.40rem white)";
  
    document.getElementById("risottocheck").style.display = "block";
    document.getElementById("wrapcheck").style.display = "none";
    document.getElementById("saladacheck").style.display = "none";
    document.getElementById("estrogonofecheck").style.display = "none";
  
    pratoescolhido = "risotto";
    precoprato = 18.90;
    p = 1;
    botaoverde();
    }

    // BEBIDA
    function bebidazevia() {
        document.getElementById("zevia").style.borderColor = "green";
        document.getElementById("sucolaranja").style.borderColor = "white";
        document.getElementById("kombucha").style.borderColor = "white";
        document.getElementById("kombuchadacasa").style.borderColor = "white";
        document.getElementById("zevia").style.filter = "drop-shadow(0 0 0.40rem grey)";
        document.getElementById("sucolaranja").style.filter = "drop-shadow(0 0 0.40rem white)";
        document.getElementById("kombucha").style.filter = "drop-shadow(0 0 0.40rem white)";
        document.getElementById("kombuchadacasa").style.filter = "drop-shadow(0 0 0.40rem white)";
      
        document.getElementById("zeviacheck").style.display = "block";
        document.getElementById("sucolaranjacheck").style.display = "none";
        document.getElementById("kombuchacheck").style.display = "none";
        document.getElementById("kombuchadacasacheck").style.display = "none";
      
        bebidaescolhida = "zevia";
        precobebida = 8.90;
        b = 2;
        botaoverde();
        }

        function bebidasucolaranja() {
          document.getElementById("zevia").style.borderColor = "white";
          document.getElementById("sucolaranja").style.borderColor = "darkgreen";
          document.getElementById("kombucha").style.borderColor = "white";
          document.getElementById("kombuchadacasa").style.borderColor = "white";
          document.getElementById("zevia").style.filter = "drop-shadow(0 0 0.40rem white)";
          document.getElementById("sucolaranja").style.filter = "drop-shadow(0 0 0.40rem grey)";
          document.getElementById("kombucha").style.filter = "drop-shadow(0 0 0.40rem white)";
          document.getElementById("kombuchadacasa").style.filter = "drop-shadow(0 0 0.40rem white)";

          document.getElementById("sucolaranjacheck").style.display = "block";
          document.getElementById("zeviacheck").style.display = "none";
          document.getElementById("kombuchacheck").style.display = "none";
          document.getElementById("kombuchadacasacheck").style.display = "none";
        
          bebidaescolhida = "sucolaranja";
          precobebida = 6.90;
          b = 2;
          botaoverde();
          }

          function bebidakombucha() {
            document.getElementById("zevia").style.borderColor = "white";
            document.getElementById("sucolaranja").style.borderColor = "white";
            document.getElementById("kombucha").style.borderColor = "darkgreen";
            document.getElementById("kombuchadacasa").style.borderColor = "white";
            document.getElementById("zevia").style.filter = "drop-shadow(0 0 0.40rem white)";
            document.getElementById("sucolaranja").style.filter = "drop-shadow(0 0 0.40rem white)";
            document.getElementById("kombucha").style.filter = "drop-shadow(0 0 0.40rem grey)";
            document.getElementById("kombuchadacasa").style.filter = "drop-shadow(0 0 0.40rem white)";

            document.getElementById("kombuchacheck").style.display = "block";
            document.getElementById("sucolaranjacheck").style.display = "none";
            document.getElementById("kombuchadacasacheck").style.display = "none";
            document.getElementById("zeviacheck").style.display = "none";
          
            bebidaescolhida = "kombucha";
            precobebida = 12.90;
            b = 2;
            botaoverde();
            }

            function bebidakombuchadacasa() {
              document.getElementById("zevia").style.borderColor = "white";
              document.getElementById("sucolaranja").style.borderColor = "white";
              document.getElementById("kombucha").style.borderColor = "white";
              document.getElementById("kombuchadacasa").style.borderColor = "darkgreen";
              document.getElementById("zevia").style.filter = "drop-shadow(0 0 0.40rem white)";
              document.getElementById("sucolaranja").style.filter = "drop-shadow(0 0 0.40rem white)";
              document.getElementById("kombucha").style.filter = "drop-shadow(0 0 0.40rem white)";
              document.getElementById("kombuchadacasa").style.filter = "drop-shadow(0 0 0.40rem grey)";

              document.getElementById("kombuchadacasacheck").style.display = "block";
              document.getElementById("kombuchacheck").style.display = "none";
              document.getElementById("sucolaranjacheck").style.display = "none";
              document.getElementById("zeviacheck").style.display = "none";
            
        bebidaescolhida = "kombuchadacasa";
        precobebida = 9.90;
         b = 2;
        botaoverde();
        }
     

    //SOBREMESAS
    function sobremesaparfeit() {
      document.getElementById("parfeit").style.borderColor = "green";
      document.getElementById("sunday").style.borderColor = "white";
      document.getElementById("petitgateau").style.borderColor = "white";
      document.getElementById("strudell").style.borderColor = "white";
      document.getElementById("parfeit").style.filter = "drop-shadow(0 0 0.40rem grey)";
      document.getElementById("sunday").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("petitgateau").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("strudell").style.filter = "drop-shadow(0 0 0.40rem white)";

      document.getElementById("parfeitcheck").style.display = "block";
      document.getElementById("sundaycheck").style.display = "none";
      document.getElementById("petitgateaucheck").style.display = "none";
      document.getElementById("strudellcheck").style.display = "none";
    
      sobremesaescolhida = "parfeit";
      precosobremesa = 9.90;
      s = 3;
      botaoverde();
      }

      function sobremesapetitgateau() {
      document.getElementById("parfeit").style.borderColor = "white";
      document.getElementById("sunday").style.borderColor = "white";
      document.getElementById("petitgateau").style.borderColor = "darkgreen";
      document.getElementById("strudell").style.borderColor = "white";
      document.getElementById("parfeit").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("sunday").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("petitgateau").style.filter = "drop-shadow(0 0 0.40rem grey)";
      document.getElementById("strudell").style.filter = "drop-shadow(0 0 0.40rem white)";

      document.getElementById("parfeitcheck").style.display = "none";
      document.getElementById("sundaycheck").style.display = "none";
      document.getElementById("petitgateaucheck").style.display = "block";
      document.getElementById("strudellcheck").style.display = "none";
      
      
      sobremesaescolhida = "patitgateau";
      precosobremesa = 9.90;
      s = 3;
      botaoverde();
      }

      function sobremesasunday() {
      document.getElementById("parfeit").style.borderColor = "white";
      document.getElementById("sunday").style.borderColor = "darkgreen";
      document.getElementById("petitgateau").style.borderColor = "white";
      document.getElementById("strudell").style.borderColor = "white";
      document.getElementById("parfeit").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("sunday").style.filter = "drop-shadow(0 0 0.40rem grey)";
      document.getElementById("petitgateau").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("strudell").style.filter = "drop-shadow(0 0 0.40rem white)";

      document.getElementById("parfeitcheck").style.display = "none";
      document.getElementById("sundaycheck").style.display = "block";
      document.getElementById("petitgateaucheck").style.display = "none";
      document.getElementById("strudellcheck").style.display = "none";
        
      sobremesaescolhida = "sunday";
      precosobremesa = 9.90;
      s = 3;
      botaoverde();
      }

      function sobremesastrudell() {
      document.getElementById("parfeit").style.borderColor = "white";
      document.getElementById("sunday").style.borderColor = "white";
      document.getElementById("petitgateau").style.borderColor = "white";
      document.getElementById("strudell").style.borderColor = "green";
      document.getElementById("parfeit").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("sunday").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("petitgateau").style.filter = "drop-shadow(0 0 0.40rem white)";
      document.getElementById("strudellcheck").style.filter = "drop-shadow(0 0 0.40rem grey)";

      document.getElementById("parfeitcheck").style.display = "none";
      document.getElementById("sundaycheck").style.display = "none";
      document.getElementById("petitgateaucheck").style.display = "none";
      document.getElementById("strudellcheck").style.display = "block";
          
      sobremesaescolhida = "strudell";
      precosobremesa = 9.90;
            s = 3;
            botaoverde();
            }
        
      

// BOTAO 
function botaoverde() {
  if (p === 1 && b === 2 && s === 3) {
    document.getElementById("botao").style.display = "block";
    document.getElementById("botaocinza").style.display = "none";
  }
  total = precoprato + precobebida + precosobremesa;
}

function aparecerMensagem() {
  //ATUALIZAR COMIDAS
  document.getElementById("pratoescolhido").textContent = pratoescolhido;
  document.getElementById("bebidaescolhida").textContent = bebidaescolhida;
  document.getElementById("sobremesaescolhida").textContent = sobremesaescolhida;
  // ATUALIZAR PREÇOS 
  totalponto = total.toFixed(2);
  let pratoponto = precoprato.toFixed(2);
  let bebidaponto = precobebida.toFixed(2);
  let sobremesaponto = precosobremesa.toFixed(2);
  document.getElementById("precoprato").textContent =
    "R$ " + pratoponto.replace(".", ",");
  document.getElementById("precobebida").textContent =
    "R$ " + bebidaponto.replace(".", ",");
  document.getElementById("precosobremesa").textContent =
    "R$ " + sobremesaponto.replace(".", ",");
  document.getElementById("resultado").textContent =
    "R$ " + totalponto.replace(".", ",");
  // APARECER MSG 
  document.getElementById("revisaodopedido").style.display = "flex";
  
}

// FINALIZAR PEDIDO 

function botaocancelar() {
  document.getElementById("revisaodopedido").style.display = "none";
}

function botaofazerpedido() {
  let nome = prompt("Qual seu nome?");
  let endereço = prompt("Digite seu endereço");
  let mensagem =
    "Olá, gostaria de fazer o pedido:" +
    "\n" +
    "- " +
    pratoescolhido +
    "\n" +
    "- " +
    bebidaescolhida +
    "\n" +
    "- " +
    sobremesaescolhida +
    "\n" +
    "Total: " +
    "R$ " +
    totalponto.replace(".", ",") +
    "\n" +
    "\n" +
    "Nome: " +
    nome +
    "\n" +
    "Endereço: " +
    endereço;
  window.open("https://wa.me/+5561981826401?text=" + encodeURIComponent(mensagem));
}
