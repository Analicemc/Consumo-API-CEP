$(document).ready(function (){//minha primeira linha de código utilizando a lib jQuery :D
    $("[name=cep]").blur(function(){
        let cep = $(this).val();
        if (cep != undefined){
            const validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)){
                $.getJSON(`https://viacep.com.br/ws/${cep}/json/?callback=?`, function(json){
                    if (!("erro" in json)){
                        //se não tiver erro, atualiza campos
                        $("#lograd").val(json.logradouro);
                        $("#comple").val(json.complemento);
                        $("#bairro").val(json.bairro);
                        $("#cidade").val(json.localidade);
                        $("#estado").val(json.uf);
                    }else{
                        //se tiver, informa ao usuário
                        $("[name=cep]").insertAdjacentHTML('beforeend', ` <p class='warner'>${cep} não encontrado!</p>`);
                    }
                })
            }else{
                //cep inválido
                $("[name=cep]").insertAdjacentHTML('beforeend', ` <p class='warner'>${cep} inválido!</p>`);
            }
        }else{
            $("[name=cep]").insertAdjacentHTML('beforeend', ` <p class='warner'>Preencha o campo CEP</p>`)
        }
    })
});