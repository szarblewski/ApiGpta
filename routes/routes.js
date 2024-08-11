const routes_auth = require('./auth/auth.routes');
const routes_sys_tabela = require('./sys/tabela.routes');
const routes_sys_campo = require('./sys/campo.routes');
const routes_sys_valor = require('./sys/valor.routes');

async function routes(app) {
     
    app.use('/auth', routes_auth);
    app.use('/sys/tabela', routes_sys_tabela);
    app.use('/sys/campo', routes_sys_campo);    
    app.use('/sys/valor', routes_sys_valor);
    
}

module.exports = {
    routes
}