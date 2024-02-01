const request = require('supertest')
it('Deve receber detalhes de pessoa existente no Banco de dados', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1')
    expect(resposta.status).toBe(200)
    expect(resposta.body.films).toBeDefined()
    expect(resposta.body.vehicles.length).toBeGreaterThan(0)
    expect(resposta.body.name).toBe('Luke Skywalker')
});

it('Deve receber uma mensagem de erro, quando busca pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/999')
    expect(resposta.status).toBe(404)
    
});