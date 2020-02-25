fetch(new Request('url', {
    method: 'POST',
    body: form
})).then((resposta) => {
    return resposta.json().then((retorno) => {
        return retorno;
    });
}).catch((erro) => {
    console.log(erro, 'Catch');
}).then(() => {
    console.log('Always');
});