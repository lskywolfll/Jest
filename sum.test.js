const sum = require('./sum');
const fetch = require('isomorphic-fetch');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('validacion de api empresas', async () => {
    const respuesta = await fetch('http://localhost:3001/api/Empresas');

    expect(respuesta.status).toBe(200)
});