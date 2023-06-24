const app = require("../src/app")
const session = require("supertest")
const agent = session(app)

describe("Test de Rutas", () => {
    
    describe('GET /rickandmorty/character/:id', () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const {body} = await agent.get('/rickandmorty/character/1')
            const atributes = [
                "id", 
                "name", 
                "species", 
                "gender", 
                "status", 
                "origin", 
                "image"
            ]

            const keys = Object.keys(body)

            atributes.forEach((atribute) => {
                expect(keys).toContain(atribute)
            })
        })

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/pepito').expect(500)
        })
    })
})

describe( "GET /rickandmorty/login" , ( ) => {
    it("Login correcto", async () => {
        const { body } = await agent.get("/rickandmorty/login?email=joaquinacosta@hotmail.com&password=asdf1234")
        
        expect( body.access ).toEqual(true)
    })

    it("Login incorrecto", async () => {
        const { body } = await agent.get("/rickandmorty/login?email=joaquinacosta@hotmail.com&password=estamal")
        
        expect( body.access ).toEqual(false)
    })
})

describe( "POST /rickandmorty/fav", () => {
    
    const char1 = {id: 1, name: "Messi"}
    const char2 = {id:2, name: "Zoma"}
    
    it("Devuelve un array con el character", async () =>{
        const {body} = await agent.post("/rickandmorty/fav").send(char1)

        expect(body).toContainEqual(char1)
    })

    it("Al enviar mas de un elemento devuleve todos los elementos", async () => {
        const { body } = await agent.post("/rickandmorty/fav").send(char2)
        expect(body).toContainEqual(char1)
        expect(body).toContainEqual(char2)
        //toContain evalua el array completo
        //toContainEqual evalua el objeto recibido
    })
})

describe( "DELETE /rickandmorty/fav/:id", () => {

    const char1 = {id: 1, name: "Messi"}
    const char2 = {id:2, name: "Zoma"}

    it("Si el id es erroneo se devuelve el mismo array", async () => {
        const { body } = await agent.delete("/rickandmorty/fav/12345")

        expect(body).toContainEqual(char1)
        expect(body).toContainEqual(char2)
    })

    it("Si el id es valido modifica el array", async () => {
        const { body } = await agent.delete("/rickandmorty/fav/1")

        expect(body).not.toContainEqual(char1)
    })
})
