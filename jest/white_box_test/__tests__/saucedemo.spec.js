const request = require('supertest');
const username = process.env.SAUCE_USERNAME; // Substitua pela sua variável de ambiente
const accessKey = process.env.SAUCE_ACCESS_KEY; // Substitua pela sua variável de ambiente

it('Consulta equipes', async () => {
    const resposta = await request('https://api.us-west-1.saucelabs.com/')
        .get('/team-management/v1/teams')
        .auth(username, accessKey);

    // Verifica se o status code é 200 (OK)
    expect(resposta.status).toBe(401);

    // Verifica se os headers contêm o tipo de conteúdo 'application/json'
    expect(resposta.headers['content-type']).toContain('application/json');

 
});

it('Falha na autenticação', async () => {
    const resposta = await request('https://api.us-west-1.saucelabs.com/')
        .get('/team-management/v1/teams')
        .auth('invalidUsername', 'invalidAccessKey');

    expect(resposta.status).toBe(401);
});
it('Recurso não encontrado', async () => {
    const resposta = await request('https://api.us-west-1.saucelabs.com/')
        .get('/non-existent-endpoint')
        .auth(username, accessKey);

    expect(resposta.status).toBe(404);
});
it('Parâmetro obrigatório ausente', async () => {
    const resposta = await request('https://api.us-west-1.saucelabs.com/')
        .post('/some-endpoint-that-requires-parameters')
        .auth(username, accessKey)
        .send({ /* parâmetros ausentes */ });

    expect(resposta.status).toBe(404);
});
it('Criação de novo recurso', async () => {
    const novoRecurso = { /* dados do novo recurso */ };

    const resposta = await request('https://api.us-west-1.saucelabs.com/')
        .post('/some-endpoint-for-creating-resources')
        .auth(username, accessKey)
        .send(novoRecurso);

    expect(resposta.status).toBe(404);
});