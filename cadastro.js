// Mascara de celular // 

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  // Mascara Data de nascimento // 

function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
}

// Mascara Telefone Fixo // 

function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{4})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,4})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

// Mascara CPF // 

function mascara(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}



// VALIDA CEP//

document.addEventListener("DOMContentLoaded", function () {
  const cepInput = document.getElementById("cep");
  const ruaInput = document.getElementById("rua");
  const numInput = document.getElementById("num");
  const complementoInput = document.getElementById("complemento");
  const bairroInput = document.getElementById("bairro");
  const estadoInput = document.getElementById("estado");
  const cidadeInput = document.getElementById("cidade");

  cepInput.addEventListener("blur", function () {
      const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
      if (cep.length === 8) {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
              .then(response => response.json())
              .then(data => {
                  if (!data.erro) {
                      ruaInput.value = data.logradouro;
                      bairroInput.value = data.bairro;
                      cidadeInput.value = data.localidade;
                      estadoInput.value = data.uf;
                  }
              })
              .catch(error => console.log(error));
      }
  });
});

// VALIDA SENHA//


function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);


