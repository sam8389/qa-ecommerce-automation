import { Given, When, Then } from '@cucumber/cucumber';

Given('user is on login page', async function () {
    console.log('User is on login page');
});

When('user enters valid username and password', async function () {
    console.log('User enters credentials');
});

Then('user should be redirected to inventory page', async function () {
    console.log('User lands on inventory page');
});