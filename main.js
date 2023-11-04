const form = document.getElementById('form-contato');
const NomeContato = document.getElementById('nome-contato');
const NumeroContato = document.getElementById('numero-contato');
const MensagemTelefone = document.getElementById('telefone');
const MensagemNome = document.getElementById('nome');
let linhas = '';
const CorpoTabela = document.querySelector('tbody');
let nomeArray = [];
let numeroArray = [];



form.addEventListener('submit', function(e){
    e.preventDefault ();
    VerificandoArrays ();
    
    
    
})

function VerificandoArrays (){

    if (nomeArray.includes(NomeContato.value)) {
        
        alert('este nome ja está incluso');
        NomeContato.value = '';

    }

    else if (numeroArray.includes(NumeroContato.value)) {

        alert('este número ja está incluso');
        NumeroContato.value = '';

    } else {

        ValidaNome ();

}
}

function ValidaNome () {
    const NomeComoArray = NomeContato.value.split(' ');

    if(NomeComoArray.length < 2 ){
        
        MensagemNome.style.display = 'block';
        NomeContato.style.border = '1px solid red';

    } else {

        MensagemNome.style.display = 'none';
        NomeContato.style.border = '';
        ValidaNumero();

    }
}

    function ValidaNumero() {

        if (NumeroContato.value.length == 11 ) {

            MensagemTelefone.style.display = 'none';
            NumeroContato.style = '';
            AdicionaLinha();
            
        } else {
            
            MensagemTelefone.style.display = 'block';
            NumeroContato.style.border = '1px solid red';
            

        }

    }
    




function AdicionaLinha() {

    let linha = '<tr>';
    linha += `<td> ${NomeContato.value}</td>`;
    linha += `<td> ${NumeroContato.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;
    
    CorpoTabela.innerHTML = linhas;
    
    nomeArray.push(NomeContato.value);
    numeroArray.push(NumeroContato.value);
    
    NomeContato.value = '';
    NumeroContato.value = '';

} 







