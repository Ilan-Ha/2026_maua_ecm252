const express = require('express')
const mysql2 = require('mysql2/promise')

const app = express()/// construcao de endpoints
/// função midware
    /// pega requisição do cliente, trata, envia ao servidor
    /// servidor responde direto ao cliente

app.use(express.json())

let dbConection 

const conectar = async () => {
    try {
        dbConection = await mysql2.createConnection({
            host: 'maus-ecm252-ilan-79a5.e.aivencloud.com',
            user: 'avnadmin',
            password: '',
            database: 'defaultdb',
            port: '26576'
        })
        console.log('Conectado ao MySQL')
    } catch (error) {
        console.log(`Erro ao conectar com o banco de dados: ${error}`)
    }
}
conectar()

/// endpoint
    /// metodo de acesso
    /// protocolo http
    /// resposta

/// definindo endpoints

app.get('/', (req,res) => {
    res.json({
        mensagem: 'Servidor funcionando'
    })
})

/*
console.log(await dbConection.query('SELECT * FROM tb_tarefa')) -> retorna
lista de listas
[
  [
    {
      cod_tarefa: 1,
      titulo: 'Ir ao mercado',
      descricao: 'Comprar leite e ovos',
      data_criacao: 2026-03-28T16:40:59.000Z
    }
  ],
  [
    `cod_tarefa` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `descricao` TEXT,
    `data_criacao` TIMESTAMP(19)
  ]
]
   */
app.get('/tarefas', async (req,res) => {
    try {
        /// desetruturando
        const [linhas] = await dbConection.query('SELECT * FROM tb_tarefa')
        res.json(linhas)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
        erro: 'Erro ao buscar as tarefas'
    })
    }
})

/// fazer uma rota para cadastrar uma tarefa
/// suponha que o cliente vai enviar titulo e descrição por meio de requisição
/// dica: use req.body

app.post('/tarefas', async (req,res)=>{
    try {
        const {titulo,descricao} = req.body
        const [resultado] = await dbConection.query(
            `INSERT INTO tb_tarefa (titulo, descricao) VALUES (?, ?)`,
            [titulo,descricao]
        )
        res.status(201).json({
            titulo: titulo,
            descricao: descricao,
            cod_tarefa: resultado.insertId
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
        erro: 'Erro ao buscar as tarefas'
    })
    }
})

/// fazer a rota para atualizar e a rota para remover

app.put('/tarefas', async (req,res) => {
    try {
        const {cod_tarefa,titulo,descricao} = req.body
        const [resultado] = await dbConection.query(
            `UPDATE tb_tarefa SET titulo = ?, descricao = ? WHERE cod_tarefa = ?`,
            [titulo,descricao,cod_tarefa]
        )
        res.status(201).json(resultado)
    } catch (error) {
        console.log(error)
        res.status(500).json({
        erro: 'Erro ao modificar as tarefas'
    })
    }
})

app.delete('/tarefas', async(req,res)=>{
    try {
        const {cod_tarefa} = req.body
        const [resultado] = await dbConection.query(
            `DELETE FROM tb_tarefa WHERE cod_tarefa = ?`,
            [cod_tarefa]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log(error)
        res.status(500).json({
        erro: 'Erro ao deletar as tarefas'
    })
    }
})

const port = 3000
app.listen(port, ()=>{
    console.log(`Servidor executando na porta ${port}.`)
})

