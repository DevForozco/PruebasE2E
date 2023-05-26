//Importar Playwright
const playwright = require("playwright");
const { nodes, user } = require('../../utils/utils');
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

    await page.goto(nodes.urlBase);
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/ghostHome.png",
    });
    console.log("Unchanged navigation screenshoot completed");
    //Abrir la URL a probar en la página y cargar el login
    await page.goto(nodes.urlSignin);
    await new Promise((r) => setTimeout(r, 2000));
    // Ingresar usuario y password
    await page.fill(pageObject.login.mailImput, user.mail);
    await page.fill(pageObject.login.pssImput, user.password);
    await page.click(pageObject.login.loginBtn);
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Login completed");
    // Ir a la vista de Diseño
    await page.goto(nodes.urlSettingss);
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/designSectionScreen.png",
    });
    console.log("Design settings screen loaded");
    // Editar un item de la nav
    await page.fill(pageObject.post.itemText, "Index");
    await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/designAfterEditingNavItem.png",
    });
    console.log("First navigation item edited");
    await page.goto(nodes.urlBase);
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/ghostHomeNavItemEdited.png",
    });
    console.log("Navigation item modify test completed"); //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
