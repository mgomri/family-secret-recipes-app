const request = require('supertest');
const server = require('../api/server');
const Users = require('../models/users-model');
const Recipes = require( '../models/recipes-model');
const Ingredients = require('../models/ingredients-model');
const Instructions = require('../models/instructions-model'); 
const database = require('../data/dbConfig')


let token;

beforeAll((done) => {
    request(server)
        .post('/users/login')
        .send({
            username: 'ironChef',
            password: 'hello123'
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        })
});

beforeEach(async () => {
    await database('users').truncate();
    await database('recipes').truncate();
    await database('ingredients').truncate();
    await database('instructions').truncate();
});

 

 describe('server', () => {
     //test the environment
     it('can run tests', () => {
         expect(true).toBeTruthy();
     });

     describe('index route', () => {
         describe('index route', () => {
             it('should return from the index route: an Ok status code, a JASON object with the expected body content', async () => {
                 const expectedStatusCode = 200;
                 const actualStatusCode = await request(server).get('/');
                 expect(actualStatusCode.status).toEqual(expectedStatusCode);
             });

             it('should return from the index route a JASON object with the expected body contents', async () => {
                const expectedBody = {welcomeMessage:'Family Cook Book Api'}
                const actualBody = await request(server).get('/');
                expect(actualBody.type).toEqual('application/json');
                expect(actualBody.body).toEqual(expectedBody);    
            });
         })
     });

 });

//Users
 describe('users model', () => {
     describe('add()', () => {
         it('should add new users into the db', async () => {
             await Users.add({
                                username:'test_user_1',
                                password:'password_1',
                                email:'testuser_1@testmail.com'
                            })
             const users = await database('users');
             expect(users).toHaveLength(1);
               
         })

         it('should insert the provided user into the db', async () => {
            let user = await Users.add({ 
                                            username:'test_user_1',
                                            password:'password_1',
                                            email:'testuser_1@testmail.com'
                                        });

            expect(user.username).toBe('test_user_1');
          });
         
     })
 })


describe('server', () => {
    describe('Get /', () => {
        it('should require authorization', () => {
            return request(server)
            .get('/recipes')
            .then(res => {
                expect(res.statusCode).toBe(400);
            });
        });


    });

    describe('Get /', () => {
        it('should allow acces when the user is authenticated', () => {
            return request(server)
                    .get('/recipes')
                    .set('authorization', token)
                    .then(response => {
                        console.log(token)
                        expect(response.statusCode).toBe(200);
                        
                    })
        })
    })

// Recipes
    describe('Get /', () => {
        it('should get a list of recipes', () => {
            return request(server)
                    .get('/recipes')
                    .set('authorization', token)
                    .then(response => {
                        expect(Array.isArray(response.body)).toBe(true);
                    })
        })
    })

    describe('Get /', () => {
        it('should return an array of length 2', () => {
            return request(server)
                    .get('/recipes')
                    .set('authorization', token)
                    .then(response => {
                        expect(response.body).toHaveLength(2);
                    })
        })
    })



});