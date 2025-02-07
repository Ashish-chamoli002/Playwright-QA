import {test, expect} from '@playwright/test';

let baseURL = 'https://reqres.in/api/';
test.describe('Fetching User', () => {
    
    test('GET USERS',async ({request}) => {
        const response = await request.get(`${baseURL}users`);
        expect(response.status()).toBe(200);
        
        const body = await response.json();
        expect(body.data.length).toBe(6);
        expect(body.total).toBe(12);
        
    });
});

test.describe('Creating user ', () => {
    
    
    test('GET USER by ID',async ({request}) => {
        const CreatedUserResponse = await request.post(`${baseURL}users`, {
            data: {
                "name": "Ashish QA API TEST",
                "job": "QA"
            }
        });
        expect(CreatedUserResponse.status()).toBe(201);
        
        const body = await CreatedUserResponse.json();
    
        expect(body.name).toBe('Ashish QA API TEST');
        expect(body.job).toBe('QA');
    });
});