//Importar Playwright
const playwright = require("playwright");
const { nodes, user } = require("../../utils/utils");
const { pageObject } = require("../../pageObject");

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
    await new Promise((r) => setTimeout(r, 7000));
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_0.png",
    });

    // Ingresar usuario y password
    await page.fill(pageObject.login.mailImput, user.mail);
    await page.fill(pageObject.login.pssImput, user.password);

    // Clic en el botón Sing in
    await new Promise((r) => setTimeout(r, 7000));
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_1.png",
    });
    await page.click(pageObject.login.loginBtn);
    await new Promise((r) => setTimeout(r, 9000));
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_2.png",
    });

    await page.click(".gh-nav-list > li:nth-child(4)");
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_3.png",
    });

    await page.click(".view-actions > div > button:nth-child(2)");
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_4.png",
    });

    await new Promise((r) => setTimeout(r, 2000));
    await page.click(".view-actions > a:nth-child(2)");
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_5.png",
    });

    await new Promise((r) => setTimeout(r, 3000));
    await page.fill(pageObject.tag.nameImput, "Tag de prueba");
    await page.fill(".input-color > input:nth-child(1)", "FF4000");
    await page.fill("#tag-slug", "first-tag");
    await page.fill("#tag-description", "This is a description for my new tag");
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_6.png",
    });

    await new Promise((r) => setTimeout(r, 2000));
    await page.click(".view-actions > button:nth-child(1)");

    await new Promise((r) => setTimeout(r, 2000));
    await page.click(".gh-nav-list > li:nth-child(4)");
    await page.screenshot({
      path: "comparativeReport/screenshots/ref-3.3/create_internal_tag_7.png",
    });
    expect(".tags-list > *").greaterThan(0);

    //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
