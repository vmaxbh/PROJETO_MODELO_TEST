const request = require('supertest');

describe('API Test', () => {
    it('GET /entries', async () => {
        const resposta = await request('https://api.publicapis.org')
            .get('/entries')
            .expect('Content-Type', /json/)
            .expect(200);
            
        expect(resposta.body).toHaveProperty('entries');
        expect(Array.isArray(resposta.body.entries)).toBe(true);
    });
    it('verifica status e tipo de conteúdo', async () => {
        const resposta = await request('https://api.publicapis.org')
            .get('/entries')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('verifica se a propriedade entries existe e é uma matriz', async () => {
        const resposta = await request('https://api.publicapis.org')
            .get('/entries');

        expect(resposta.body).toHaveProperty('entries');
        expect(Array.isArray(resposta.body.entries)).toBe(true);
    });

    it('verifica as propriedades de cada entrada na matriz entries', async () => {
        const resposta = await request('https://api.publicapis.org')
            .get('/entries');

        resposta.body.entries.forEach(entry => {
            expect(entry).toHaveProperty('API');
            expect(entry).toHaveProperty('Description');
            expect(entry).toHaveProperty('HTTPS');
            expect(entry).toHaveProperty('Cors');
            expect(entry).toHaveProperty('Link');
        });
    });

    it('verifica se a API retorna um erro para um método HTTP inválido', async () => {
        await request('https://api.publicapis.org')
            .post('/entries') // POST não é um método válido para essa rota
            .expect(405); // Espera-se um erro 405 (Method Not Allowed)
    });

   
});