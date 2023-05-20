const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require('fs');
const path = require("path");

const deleteFolderRecursively = function (directory_path) {
  if (fs.existsSync(directory_path)) {
      fs.readdirSync(directory_path).forEach(function (file, index) {
          var currentPath = path.join(directory_path, file);
          if (fs.lstatSync(currentPath).isDirectory()) {
            deleteFolderRecursively(currentPath);
          } else {
              fs.unlinkSync(currentPath); // delete file
          }
      });
  }
};

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  //deleteFolderRecursively('./comparativeReport/screenshots/test-5.x/');
  deleteFolderRecursively('./comparativeReport/screenshots/ref-3.x/');
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
