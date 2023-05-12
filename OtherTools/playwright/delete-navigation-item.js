//Importar Playwright
const playwright = require("playwright");
const { nodes, user } = require('../../utils/utils');

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

    await page.goto(nodes.urlBase);
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/ghostHome.png",
    });
    console.log("Unchanged navigation screenshoot completed");
    //Abrir la URL a probar en la página y cargar el login
    await page.goto(nodes.urlSignin);
    await new Promise((r) => setTimeout(r, 2000));
    // Ingresar usuario y password
    await page.fill('#ember8', user.mail);
    await page.fill('#ember10', user.password);
    await page.click("#ember12");
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Login completed");
    // Ir a la vista de Diseño
    await page.goto(nodes.urlSettings);
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/designSectionScreen.png",
    });
    console.log("Design settings screen loaded");
    // Eliminar un item de la nav
    await page.click(".gh-blognav-delete");
    await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/designAfterDeletingNavItem.png",
    });
    console.log("First navigation item deleted");
    await page.goto(baseURL);
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/ghostHomeNavItemDeleted.png",
    });
    console.log("Navigation item delete test completed"); //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
