//Importar Playwright
const playwright = require("playwright");
const { Const } = require("../../utils/consts");
const { pageObject } = require('../../pageObject');

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ["chromium"]) {
    //, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType + "-------------------------------------------");

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el login
    await page.goto(nodes.urlSignin);
    await new Promise((r) => setTimeout(r, 2000));
    // Ingresar usuario y password
    await page.fill(pageObject.login.mailImput, user.mail);
    await page.fill(pageObject.login.pssImput, user.password);
    await page.click(pageObject.login.loginBtn);
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Login completed");
    // Ir a la vista de General y cambiar
    await page.goto(nodes.urlSettingsGeneral);
    console.log("General screen loaded");
    await page.click(".gh-setting-first .gh-setting-action .gh-btn");
    // Cambiar lenguaje del sitio web
    await page.screenshot({
      path: "./titleSectionExpanded.png",
    });
    await page.fill(pageObject.post.itemText, "New site title");
    await page.screenshot({
      path: "./websiteTitleEdited.png",
    });
    await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    console.log("Website title changed");
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({
      path: "./websiteTitleSavedChanges.png",
    });
    console.log("Website title test completed"); //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
