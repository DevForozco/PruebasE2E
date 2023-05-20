const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const dataAPriori = require("../../../mock-data.json");

let countTags;
const rowRandom = Math.floor((Math.random() * (999 - 1 + 1)) + 1);

//Add steps to versión 3.x
// Generic Steps
When('I enter email {kraken-string}', async function (email) {
  let element = await this.driver.$('#ember8');
  return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
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

When('I enter post empty title', async function () {
  let element = await this.driver.$(".gh-editor-title ");
  return await element.setValue(' ');
});

When('I enter post valid title', async function () {
  let element = await this.driver.$(".gh-editor-title ");
  return await element.setValue(dataAPriori[rowRandom].title);
});

When('I enter post exceeds titulo', async function () {
  let element = await this.driver.$(".gh-editor-title ");
  return await element.setValue(dataAPriori[rowRandom].description256);
});

When('I enter post invalid title', async function () {
  let element = await this.driver.$(".gh-editor-title ");
  return await element.setValue(dataAPriori[rowRandom].caracteresEspeciales);
});

When('I enter post valid description', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(dataAPriori[rowRandom].description256);
});

When('I enter post empty description', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(' ');
});

When('I enter post exceeds description', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(dataAPriori[rowRandom].description256);
});

When('I enter post invalid description', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(dataAPriori[rowRandom].caracteresEspeciales);
});

When('I enter post description edition {string}', async function (postDescription) {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(postDescription);
});

When('I click publish', async function () {
  let element = await this.driver.$('.gh-publishmenu-trigger');
  return await element.click()
});

When('I validate publish btn', async function () {
  let element = await this.driver.$('.gh-publishmenu-trigger');
  expect(element.isReactElement).equals(false)
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

Then("I get title post succesfully", async function () {
  let element = await this.driver.$(".gh-notification-title").getText();
  expect(element).to.contain("Published");
});

Then("I get title post deleted succesfully", async function () {
  let element = await this.driver.$(".gh-notification-title").getText();
  expect(element).to.contain("Saved");
});

Then("I get title post updated succesfully", async function () {
  let element = await this.driver.$(".gh-notification-title").getText();
  expect(element).to.contain("Updated");
});

Then("I see at least one post", async function () {
  let element = await this.driver.$(".gh-list-row.gh-posts-list-item");
  expect(element).to.exist;
});

Then("I get title post scheduled succesfully", async function () {
  let element = await this.driver.$(".gh-notification-title").getText();
  expect(element).to.contain("Scheduled");
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

When('I enter name tag', async function () {
  let element = await this.driver.$('#tag-name');
  return await element.setValue(dataAPriori[rowRandom].title);
});

When('I enter name tag null', async function () {
  let element = await this.driver.$('#tag-name');
  return await element.setValue(dataAPriori[rowRandom].null);
});

When('I enter color tag', async function () {
  let element = await this.driver.$('.input-color > input:nth-child(1)');
  return await element.setValue(dataAPriori[rowRandom].color.split('#')[1]);
});

When('I enter invalid color tag', async function () {
  let element = await this.driver.$('.input-color > input:nth-child(1)');
  return await element.setValue(dataAPriori[rowRandom].color);
});


When('I enter slug tag', async function () {
  let element = await this.driver.$('#tag-slug');
  return await element.setValue(dataAPriori[rowRandom].fullName);
});

When('I enter description tag', async function () {
  let element = await this.driver.$('#tag-description');
  return await element.setValue(dataAPriori[rowRandom].description100);
});

When('I enter description tag too long', async function () {
  let element = await this.driver.$('#tag-description');
  return await element.setValue(dataAPriori[rowRandom].description1000);
});

When('I click save tag', async function() {
  let element = await this.driver.$('.view-actions > button:nth-child(1)');
  return await element.click();
})

Then('Evaluate the tag created', async function(){
  let tags = await this.driver.$$('.tags-list > *');
  expect(tags.length).to.greaterThan(0)
});

Then('Evaluate message to name tag null', async function(){
  let element = await this.driver.$('.response').getText();
  expect(element).contains('You must specify a name for the tag');
});

Then('Evaluate message to invalid color', async function(){
  let element = await this.driver.$('.error > p:nth-child(2)').getText();
  expect(element).contains('The color should be in valid hex format');
});

Then('Evaluate message to description to long', async function(){
  let element = await this.driver.$('.form-group.error.ember-view > p').getText();
  expect(element).contains('Description cannot be longer than 500 characters');
});


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

When('I enter valid title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.setValue(dataAPriori[rowRandom].title);
});

When('I enter valid content', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(dataAPriori[rowRandom].description100);
});

When('I enter without title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.setValue(' ');
});

When('I enter without content', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(' ');
});

When('I enter exceeds title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.setValue(dataAPriori[rowRandom].description256);
});

When('I enter invalid title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.setValue(dataAPriori[rowRandom].caracteresEspeciales);
});

When('I enter exceeds content', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(dataAPriori[rowRandom].description256);
});

When('I enter invalid content', async function () {
  let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
  return await element.setValue(dataAPriori[rowRandom].caracteresEspeciales);
});

Then('I evaluate btn publish', async function(){
  let element = await this.driver.$('.gh-publishmenu-trigger');
  expect(element.isReactElement).equals(false)
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

When("I enter new lenguage identifier", async function () {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(dataAPriori[rowRandom].language);
});

When("I enter new lenguage identifier null", async function () {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(dataAPriori[rowRandom].null);
});

When("I enter new lenguage identifier 1000 caracteres", async function () {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(dataAPriori[rowRandom].description1000);
});

When("I enter new lenguage identifier special characters", async function () {
  let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
  return await element.setValue(dataAPriori[rowRandom].caracteresEspeciales);
});


Then("I get website language updated", async function () {
  let element = await this.driver.$("html[lang='es']");
  expect(element).to.exist;
});

Then("I get text error by too long", async function(){
  let element = await this.driver.$(".gh-alert-content").getText();
  expect(element).contains("server error, cannot edit setting. ENAMETOOLONG: name too long");
});

Then("I get text error by failed", async function(){
  let element = await this.driver.$(".gh-alert-content").getText();
  expect(element).contains("Validation error, cannot edit setting. The request failed validation.");
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
When('I enter email v5 {kraken-string}', async function (email) {
  let element = await this.driver.$('#identification');
  return await element.setValue(email);
});

When('I enter password v5 {kraken-string}', async function (password) {
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
