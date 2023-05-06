const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {string}', async function (email) {
  let element = await this.driver.$('#ember8');
  return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
  let element = await this.driver.$('#ember10');
  return await element.setValue(password);
});

When('I click login', async function () {
  let element = await this.driver.$('#ember12');
  return await element.click()
});

When('I click new post', async function () {
  let element = await this.driver.$('.ember-view.gh-btn.gh-btn-green');
  return await element.click()
});

When('I enter post title {string}', async function (postTitle) {
  let element = await this.driver.$(".gh-editor-title ");
  return await element.setValue(postTitle);
});

When('I enter post description {string}', async function (postDescription) {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
  return await element.setValue(postDescription);
});

When('I click publish', async function () {
  let element = await this.driver.$('.gh-publishmenu-trigger');
  return await element.click()
});

When('I click publish now', async function () {
  let element = await this.driver.$('.gh-publishmenu-button');
  return await element.click()
});



