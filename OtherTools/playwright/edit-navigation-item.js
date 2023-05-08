//Importar Playwright
const playwright = require("playwright");

const logInURL = "http://localhost:2368/ghost/#/signin";
const designSettingsURL = "http://localhost:2368/ghost/#/settings/design";
const baseURL = "http://localhost:2368";

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

    await page.goto(baseURL);
    await page.screenshot({
      path: "./OtherTools/playwright/ghostHome.png",
    });
    console.log("Unchanged navigation screenshoot completed");
    //Abrir la URL a probar en la página y cargar el login
    await page.goto(logInURL);
    await new Promise((r) => setTimeout(r, 2000));
    // Ingresar usuario y password
    await page.fill("#ember8", "forozcob@uniandes.edu.co");
    await page.fill("#ember10", "Pruebas123***");
    await page.click("#ember12");
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Login completed");
    // Ir a la vista de Diseño
    await page.goto(designSettingsURL);
    await page.screenshot({
      path: "./OtherTools/playwright/designSectionScreen.png",
    });
    console.log("Design settings screen loaded");
    // Editar un item de la nav
    await page.fill(".ember-text-field.gh-input.ember-view", "Index");
    await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({
      path: "./OtherTools/playwright/designAfterEditingNavItem.png",
    });
    console.log("First navigation item edited");
    await page.goto(baseURL);
    await page.screenshot({
      path: "./OtherTools/playwright/ghostHomeNavItemEdited.png",
    });
    console.log("Navigation item modify test completed"); //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
