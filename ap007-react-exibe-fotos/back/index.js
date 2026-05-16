const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()
// middle wears
app.use(express.json())
// app.use(cors()) -> libera requisições vindas de origens quaisquer
app.use(cors())

app.get('/search', async (req, res) => {

    //console.log(req.params)
    //console.log(req.query)

    // localhost:3000/lembretes/:id (parametro path, de caminho)
    // localhost:3000/lembretes/:id/observacoes?letra=a&importante=sim (2 parametros de query)
 
    // req.params (pega parametros de path)
    // req.query (pega parametros de query)
 
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1',
        headers: {
            Authorization: 'a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV'
        }
    })
    
    const {data} = await pexelsClient.get('/search', {
        params: {
            query: req.query.query
        }
    })

    console.log(data)

    res.json(data)
})

const port = 3000
app.listen(port, () => console.log(`Back. ${port}`))