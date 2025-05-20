import post_create from "../../fixtures/json/post_create.json"
import post_update from "../../fixtures/json/post_update.json"

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

describe('Api test cases for CRUD operation for posts', () => {

    it('Successful creation of a new post', () => {
        cy.request('POST', baseUrl, {
            title: post_create.title,
            body: post_create.body,
            userId: post_create.userId
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.body).to.eq(post_create.body);
            expect(response.body.title).to.eq(post_create.title);
            expect(response.body.userId).to.eq(post_create.userId);
        });
    });

    it('Creation post with missing fields', () => {
        cy.request('POST', baseUrl
        ).then((response) => {
            //this test will not pass, because this site "https://jsonplaceholder.typicode.com" allows users to create a new post with missing fields (i recieve 201 not 400)
            expect(response.status).to.eq(400);
        });
    });

    it('Get all posts', () => {
        cy.request(baseUrl).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    it('Get non-existent post', () => {
        cy.request({
            url: `${baseUrl}/999999`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.statusText).to.eq("Not Found");
        });
    });

    it('Update a post', () => {
        cy.request('PUT', `${baseUrl}/1`, {
            title: post_update.title,
            body: post_update.body,
            userId: post_update.userId
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq(post_update.title);
            expect(response.body.body).to.eq(post_update.body);
            expect(response.body.userId).to.eq(post_update.userId);
        });
    });

    it('Update a non-existent post', () => {
        cy.request('PUT', `${baseUrl}/999999`, {
            title: post_update.title,
            body: post_update.body,
            userId: post_update.userId,
            failOnStatusCode: false,
        }).then((response) => {
            //this test will not pass, because this site "https://jsonplaceholder.typicode.com" throw 500 error not 404 when users try to update non-existent post
            expect(response.status).to.eq(404);
        });
    });

    it('Delete a post', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/1`
        }).then((response) => {
            expect([200, 204]).to.include(response.status);
            expect(["OK", "No Content"]).to.include(response.statusText);
        });
    });

    it('Delete non-existent post', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/999999`,
            failOnStatusCode: false
        }).then((response) => {
            //this test will not pass, because this site "https://jsonplaceholder.typicode.com" does not return 404 for non-existent resources on DELETE requests — it always returns 200 to simulate a successful operation
            expect(response.status).to.eq(404);
        });
    });
});