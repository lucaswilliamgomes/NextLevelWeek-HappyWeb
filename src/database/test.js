const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    // inserir dados na tabela
    await saveOrphanage(db, {
        lat : "-27.2385383",
        lng : "-49.6118011",
        name: 'Lar dos meninos',
        about: "vida de gado",
        whatsapp: "987982731",
        images : [
            "https://images.unsplash.com/photo-1601758123870-856824bb7a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1597905733802-7bec89b471b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        ],
        instructions : "so tapa de qualidade",
        opening_hours: "Horário de visitação das 8h as 16h",
        open_on_weekends : "1"
    })
    
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log ((selectedOrphanages))

    
    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all ('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

})