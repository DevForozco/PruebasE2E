//Importar Playwright
const playwright = require("playwright");

const logInURL = "http://localhost:2368/ghost/#/signin";
const generalSettingsURL = "http://localhost:2368/ghost/#/settings/general";

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
    await page.goto(logInURL);
    await new Promise((r) => setTimeout(r, 2000));
    // Ingresar usuario y password
    await page.fill("#ember8", "forozcob@uniandes.edu.co");
    await page.fill("#ember10", "Pruebas123***");
    await page.click("#ember12");
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Login completed");
    // Ir a la vista de General y cambiar
    await page.goto(generalSettingsURL);
    await page.screenshot({
      path: "./OtherTools/playwright/generalSettings.png",
    });
    console.log("General screen loaded");
    await page.click(".gh-setting-last .gh-setting-action .gh-btn");
    // Cambiar lenguaje del sitio web
    await page.screenshot({
      path: "./OtherTools/playwright/publicationLenguageExpanded.png",
    });
    await page.fill(".ember-text-field.gh-input.ember-view", "es");
    await page.screenshot({
      path: "./OtherTools/playwright/publicationLenguageEdited.png",
    });
    await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    console.log("Publication language changed");
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({
      path: "./OtherTools/playwright/publicationLenguageSavedChanges.png",
    });
    ex;
    console.log("Publication language test completed"); //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
