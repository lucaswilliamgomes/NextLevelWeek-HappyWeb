
const Database = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

module.exports = {

    index (req, res) {
        return res.render ('index')
    },

    async orphanage (req, res) {
        try {
            const id = req.query.id
            const db = await Database;
            const orphanage = await db.all(`SELECT * FROM orphanages WHERE id="${id}"`)

            // Tratando as images
            orphanage[0].images = orphanage[0].images.split(',')
            orphanage[0].firstImage = orphanage[0].images[0]

            //Tratando o open_on_weekends
            if(orphanage[0].open_on_weekends == "0"){
                orphanage[0].open_on_weekends = false;
            } else {
                orphanage[0].open_on_weekends = true;
            }

            return res.render('orphanage', {orphanage: orphanage[0] })

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    async orphanages (req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render ('orphanages', {orphanages})

        } catch (error){
            console.log (error)
            return res.send('Erro no banco de dados!')
        }
        
        
    },

    createOrphanage (req, res) {
        return res.render ('create-orphanage')
    },

    async saveOrphanage(req, res) {
        const fields = req.body

        try {
            const db = await Database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            })

            // redirect
            return res.redirect ('/orphanages')
        
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
            
        }

        // save orphanate
        
    }

}