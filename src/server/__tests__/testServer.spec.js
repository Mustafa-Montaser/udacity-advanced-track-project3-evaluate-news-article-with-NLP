
import 'babel-polyfill'

const request = require('supertest');
// import { request } from "supertest";
const { app } = require('../index');
// import { app } from "../index.mjs"



describe("testing server ", () => {

    test('defined invalid uri give 404', (done) => {
        request(app)
            .get('/error').then(response => {
                expect(response.statusCode).toBe(404)
                done()
            })
    })
    
    test('defined root status code = 200', (done) => {
        request(app)
            .get('/').then(response => {
                expect(response.statusCode).toBe(200)
                done()
            })
    })

})

