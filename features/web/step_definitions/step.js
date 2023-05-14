const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let countTags;

//Add steps to versión 5.x
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
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(postDescription);
});

When('I enter post description edition {string}', async function (postDescription) {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
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

When('I click a post link', async function () {
  let element = await this.driver.$('.gh-list-row.gh-posts-list-item:last-child');
  return await element.click()
});

When('I click a unpublish ratio btn', async function () {
  let element = await this.driver.$('.gh-publishmenu-radio-button:first-child');
  return await element.click()
});

When('I click a publish btn', async function(){
  let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
  return await element.click()
});

When('I click a schedule ratio btn', async function(){
  let element = await this.driver.$('.gh-publishmenu-section > div:nth-child(2) > div:nth-child(1)');
  return await element.click()
});

//New Tag Step

When('I enter link tag menu', async function() {
  let element = await this.driver.$('.gh-nav-list > li:nth-child(4)');
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

//Edit mail staff fail
When('I enter email owner {string}', async function (name) {
  let element = await this.driver.$('#user-email');
  return await element.setValue(name);
});

Then('I validate error button save', async function() {
  let element = await this.driver.$('.gh-btn.gh-btn-blue').getText();
  expect(element).to.equals("Retry");
})

// New post draft
When('I click Drafts', async function () {
  let element = await this.driver.$('#ember1288');
  return await element.click()
});

When('I click post', async function () {
  let element = await this.driver.$('#ember1406');
  return await element.click()
});

Then('I evaluate the draft created', async function() {
  let tags = await this.driver.$$('.posts-list > li');
  this.countTags < tags.length;
})

// Create new page
When('I enter link pages menu', async function() {
  let element = await this.driver.$('.gh-nav-list > li:nth-child(3)');
  return await element.click();
})

When('I click new page', async function () {
  let element = await this.driver.$('.ember-view.gh-btn.gh-btn-green');
  return await element.click()
});

When('I enter page title {string}', async function (postTitle) {
  let element = await this.driver.$('.gh-editor-title');
  return await element.setValue(postTitle);
});

When('I enter content new page {string}', async function (postDescription) {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(postDescription);
});


Then('I get state new page', async function() {
  let element = await this.driver.$('fw4.midgrey-l2').getText();
  expect(element).to.contain('Published')
})

// Edit page
When('I click a page link', async function () {
  let element = await this.driver.$('.gh-content-entry-title');
  return await element.click()
});

When('I enter content page {string}', async function (postDescription) {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(postDescription);
});

When('I click update', async function () {
  let element = await this.driver.$('.gh-publishmenu-trigger');
  return await element.click()
});

When('I click update now', async function () {
  let element = await this.driver.$('.gh-publishmenu-button');
  return await element.click()
});

Then('I get state page edited', async function() {
  let element = await this.driver.$('fw4.midgrey-l2').getText();
  expect(element).to.contain('Published')
})

// Delete page
When('I click a settings btn', async function() {
  let element = await this.driver.$('.post-settings');
  return await element.click();
})

When("I click a delete btn", async function () {
  let element = await this.driver.$(".settings-menu-delete-button");
  return await element.click();
});

When("I confirm delete btn", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return await element.click();
});

Then("I see no pages text", async function () {
  let element = await this.driver.$(".no-posts-box");
  expect(element).to.exist;
});

// List the pages
Then('I see the pages', async function() {
  let tags = await this.driver.$$('.gh-list > *');
  expect(tags.length).to.greaterThanOrEqual(0)
})

// Change site title
When("I click expand button", async function () {
  let element = await this.driver.$(
    ".gh-setting-first .gh-setting-action .gh-btn"
  );
  return await element.click();
});

When("I enter site title {string}", async function (siteTitle) {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(siteTitle);
});

When("I click save settings", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
  );
  return await element.click();
});

Then("I get website title updated", async function () {
  let element = await this.driver.$(".gh-nav-menu-details-blog").getText();
  expect(element).to.contain("New site title");
});

// Change website language
When("I click last expand button", async function () {
  let element = await this.driver.$(
    ".gh-setting-last .gh-setting-action .gh-btn"
  );
  return await element.click();
});

When("I enter new lenguage identifier {string}", async function (siteTitle) {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(siteTitle);
});

Then("I get website language updated", async function () {
  let element = await this.driver.$("html[lang='es']");
  expect(element).to.exist;
});

// Delete item from navigation
When("I click delete navigation item button", async function () {
  let element = await this.driver.$(".gh-blognav-delete");
  return await element.click();
});

Then("I get item navigation deleted", async function () {
  let items = await this.driver.$$(
    ".gh-blognav-item.gh-blognav-item--sortable.ember-view"
  );
  expect(items.length).to.lessThan(4);
});

// Edit item from navigation
When("I change nav item text {string}", async function (newLabel) {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(newLabel);
});

Then("I get nav item updated", async function () {
  let element = await this.driver.$(".nav-index");
  expect(element).to.exist;
});

// Edit website description
When("I enter site description {string}", async function (siteDescription) {
  let element = await this.driver.$(
    ".description-container .ember-text-field.gh-input.ember-view"
  );
  return await element.setValue(siteDescription);
});

Then("I get website description updated", async function () {
  let element = await this.driver.$("meta[name='description']");
  let element2 = await this.driver.$("meta[content='New site description']");
  expect(element).to.exist;
  expect(element2).to.exist;
});

//Add steps to versión 5.x

// Generic Steps
When('I enter email v5 {string}', async function (email) {
  let element = await this.driver.$('#identification');
  return await element.setValue(email);
});

When('I enter password v5 {string}', async function (password) {
  let element = await this.driver.$('#password');
  return await element.setValue(password);
});

When('I click login v5', async function () {
  let element = await this.driver.$('#ember5');
  return await element.click()
});

When("I take screenshot with name {string}", async function (screenName) {
  return await this.driver.saveScreenshot(`./comparativeReport/screenshots/${screenName}.png`);
});

//New Tag Step
When('I enter link tag menu v5', async function() {
  let element = await this.driver.$('.gh-nav-list.gh-nav-manage > li:nth-child(3)');
  let tags = await this.driver.$$('.tags-list > *');
  this.countTags = tags.length;
  return await element.click();
})

// New publication step
When('I click new post v5', async function () {
  let element = await this.driver.$('.view-actions-top-row > a:nth-child(1)');
  return await element.click()
});

When('I click publish v5', async function () {
  let element = await this.driver.$('.flex.items-center > button:nth-child(2)');
  return await element.click()
});

When('I click publish now v5', async function () {
  let element = await this.driver.$('.gh-publish-cta > button:nth-child(1)');
  return await element.click()
});

Then('I get post succesfully text', async function() {
  let element = await this.driver.$('.gh-publish-cta > button > span').getText();
  expect(element).to.contain('Publish post, right now')
})

When('I click a unpublish ratio btn v5', async function () {
  let element = await this.driver.$('.flex.items-center > button:nth-child(2)');
  return await element.click()
});

When('I click a publish btn v5', async function(){
  let element = await this.driver.$('.gh-revert-to-draft');
  return await element.click()
});

When('I click a post link v5', async function () {
  let element = await this.driver.$('.posts-list.gh-list > div:nth-child(1)');
  return await element.click()
});

Then('I get post deleted text', async function() {
  let element = await this.driver.$('.gh-notification-title').getText();
  expect(element).to.contain('Post successfully reverted to a draft.')
})

//Change language v5
When("I click last expand button v5", async function () {
  let element = await this.driver.$(
    ".gh-expandable > div:nth-child(3) > div:nth-child(1) > button"
  );
  return await element.click();
});

When("I click save settings v5", async function () {
  let element = await this.driver.$(
    ".view-actions > button"
  );
  return await element.click();
});

//Change language v5
When("I click expand button v5", async function () {
  let element = await this.driver.$(
    ".gh-expandable > div:nth-child(1) > div:nth-child(1) > button"
  );
  return await element.click();
});

Then("I get website title updated v5", async function () {
  let element = await this.driver.$(".gh-nav-menu-details-sitetitle").getText();
  expect(element).to.contain("New site title");
});

// Delete item from navigation v5
Then("I get item navigation deleted v5", async function () {
  let items = await this.driver.$$(".gh-main-section-content > .gh-blognav-delete");
  expect(items.length).to.lessThan(2);
});

// Create new page v5
When("I click a settings btn v5", async function () {
  let element = await this.driver.$(".settings-menu-toggle");
  return await element.click();
});

When("I click a delete btn v5", async function () {
  let element = await this.driver.$(".settings-menu-delete-button");
  return await element.click();
});

Then("I get page deleted", async function () {
  let items = await this.driver.$$(".gh-post-list-cta.edit");
  expect(items.length).to.lessThan(2);
});