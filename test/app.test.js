const request = require('supertest')
const {app,server}= require('../app')

describe('Get /',()=>{
    it("Should return 200 status and the correct message",async () =>{
        const response= await request(app).get("/");
        expect(response.status).toBe(200);
         expect(response.text).toBe("Welcome to ShopEasy from TM World");

    })

})
afterAll(()=>{
    server.close();
})