import {test, expect, request } from '@playwright/test';

test('Get', async({page})=> {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const respondJSON = await res.json();
    expect(respondJSON.page).toBe(2);
    expect(respondJSON.per_page).toBe(6);
});

test('Post', async({page})=> {
    const apiContext = await request.newContext();
    const postData = {
        "name": "test",
        "job": "leader"
    };
    const res = await apiContext.post('https://reqres.in/api/users', {
        data: postData
    });
    expect(res.status()).toBe(201);
    const respondJSON = await res.json();
    expect(respondJSON.name).toBe('test');
    expect(respondJSON.job).toBe('leader');
});

test('Put', async({page})=> {
    const apiContext = await request.newContext();
    const putData = {
        "name": "morpheus",
        "job": "zion resident"
    };
    const res = await apiContext.put('https://reqres.in/api/users/2', {
        data: putData
    });
    expect(res.status()).toBe(200);
    const respondJSON = await res.json();
    expect(respondJSON.name).toBe('morpheus');
    expect(respondJSON.job).toBe('zion resident');
});

test('Delete', async ({ page }) => {
    const apiContext = await request.newContext();
  
    const res = await apiContext.delete('https://reqres.in/api/users/2');
  
    expect(res.status()).toBe(204); // API reqres.in DELETE /users/2 harusnya balikin 204 No Content
  });