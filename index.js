const express = require('express');
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

// organicShop products
//  organicShop SEJzqO2V0lBsnz6b



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWOD}@cluster0.30t0ldh.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






async function run(){
    try{
        const organicCollection = client.db('organicShop').collection('products')

        app.get('/products', async(req, res) =>{
            const query = {}
            const result = await organicCollection.find(query).limit(3).toArray()
            res.send(result)
        })
        app.get('/product', async(req, res) =>{
            const query = {}
            const result = await organicCollection.find(query).toArray()
            res.send(result)
        })
     



    }
    finally{

    }
}
run().catch(error => console.log(error))




app.get('/', (req, res) =>{
    res.send('api is running')
})

app.listen(port, () => {
    console.log('api is running', port);
})