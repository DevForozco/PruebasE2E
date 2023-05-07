const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let countTags;

// Generic Steps
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


// New publication step
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

//New Tag Step

When('I enter link tag menu', async function() {
  let element = await this.driver.$('#ember38');
  let tags = await this.driver.$$('.tags-list > *');
  this.countTags = tags.length;
  return await element.click();
})

When('I enter new tag', async function() {
  let element = await this.driver.$('.view-actions > a:nth-child(2)');
  return await element.click();
})

When('I enter name tag {string}', async function (name) {
  let element = await this.driver.$('#tag-name');
  return await element.setValue(name);
});

When('I enter color tag {string}', async function (color) {
  let element = await this.driver.$('.input-color > input:nth-child(1)');
  return await element.setValue(color);
});

When('I enter slug tag {string}', async function (slug) {
  let element = await this.driver.$('#tag-slug');
  return await element.setValue(slug);
});

When('I enter description tag {string}', async function (slug) {
  let element = await this.driver.$('#tag-description');
  return await element.setValue(slug);
});

When('I click save tag', async function() {
  let element = await this.driver.$('.view-actions > button:nth-child(1)');
  return await element.click();
})

Then('Evaluate the tag created', async function(){
  let tags = await this.driver.$$('.tags-list > *');
  expect(tags.length).to.greaterThan(0)
})

//Delete tag
When('I save the total tags', async function() {
  let tags = await this.driver.$$('.tags-list > li');
  this.countTags = tags.length;
})

When('I clic edit tag', async function() {
  let element = await this.driver.$('.tags-list:last-child');
  return await element.click();
})

When('I clic delete tag', async function() {
  let element = await this.driver.$('.gh-btn.gh-btn-red');
  return await element.click();
})

When('I clic confirm delete tag', async function() {
  let element = await this.driver.$('.modal-footer > button:nth-child(2)');
  return await element.click();
})

Then('Evaluate the tag deleted', async function(){
  let tags = await this.driver.$$('.tags-list > li');
  let totalTags = this.countTags -1;
  expect(tags.length).to.equals(totalTags);
})

//Edit tag
When('I clic edit save tag', async function() {
  let element = await this.driver.$('.tags-list > li > a > h3');
  console.log("ELEMENTS", element);
})

//New Internal Tag
When('I enter new internal tag', async function() {
  let element = await this.driver.$('.view-actions > div > button:nth-child(2)');
  return await element.click();
})

//Edit staff 
When('I enter link staff menu', async function() {
  let element = await this.driver.$('.gh-nav-list > li:nth-child(5)');
  return await element.click();
})

When('I clic edit owner', async function() {
  let element = await this.driver.$('.apps-grid > div:nth-child(3) > a');
  return await element.click();
})

When('I enter name owner {string}', async function (name) {
  let element = await this.driver.$('#user-name');
  return await element.setValue(name);
});

When('I save edit owner', async function() {
  let element = await this.driver.$('.gh-btn.gh-btn-blue');
  return await element.click();
})

Then('I get name edit owner', async function() {
  let element = await this.driver.$('.apps-grid > div:nth-child(3) > a > article > div:nth-child(1) > :nth-child(2) > h3').getText();
  expect(element).to.equals("Name Test");
})
