const compareImages = require("resemblejs/compareImages")
const config = require("./../resemblejs/screenshots-config.json");
const lstScreenshots = require("./../comparativeReport/screenshots-generated.json")
const fs = require('fs');
const { nodes } = require("../utils/utils");

const {options, basePath, extencion, versions, paths } = config;
const {screenshots} = lstScreenshots;

async function generatingScreenshotsInfo(callback){
  console.log('[X] Json Generated')
  callback();
}

async function compairImages(callback){
    if(screenshots.length === 0){
      return;
    }
    let resultInfo = {}
    for(screen of screenshots){
        const data = await compareImages(
            fs.readFileSync(`${basePath}${paths[0]}${screen.num}-${screen.action}-${screen.functionality}-${versions[0]}${extencion}`),
            fs.readFileSync(`${basePath}${paths[1]}${screen.num}-${screen.action}-${screen.functionality}-${versions[1]}${extencion}`),
            options
        );
        resultInfo[`${screen.num}-${screen.action}-${screen.functionality}`] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`${basePath}${paths[2]}${screen.num}-${screen.action}-${screen.functionality}-${versions[2]}${extencion}`, data.getBuffer());
    }
    console.log("[X] Compare Images")



    callback(resultInfo);
  }

  function generateReport(result){
    return `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          <title>Reporte regresión visual - ghost</title>
        </head>
        <body>
          <div class="container-fluid">
            <div class="row align-text-bottom">
              <div class="col">
                <h3 class="display-3"> Reporte regresión visual <a href="${nodes.urlBase}" target="_blank" class="link-info link-underline-opacity-25 link-underline-opacity-100-hover">ghost</a> </h3>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushGhost">
              ${screenshots.map(screen=>reportRow(`${screen.num}-${screen.action}-${screen.functionality}`, result[key]))}
            </div>
          </div>
        </body>
        </html>`;
  }


  function reportRow(key, info){
    return `<div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading-${key}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${key}" aria-expanded="false" aria-controls="flush-collapse-{info}">
        Browser: ${key}
      </button>
    </h2>
    <div id="flush-collapse-${key}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${key}" data-bs-parent="#accordionFlushGhost">
      <div class="accordion-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-4 text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ref ghost v3.3</h5>
            </div>
            <img src="${basePath}${paths[0]}${key}-${versions[0]}${extencion}" class="img-fluid card-img-bottom" alt="before-${key}">
          </div>
            </div>
            <div class="col-4 text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Test ghost v4.4</h5>
            </div>
            <img src="${basePath}${paths[1]}${key}-${versions[1]}${extencion}" class="img-fluid card-img-bottom" alt="after-${key}">
          </div>
            </div>
        <div class="col-4 text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Diff</h5>
            </div>
            <img src="${basePath}${paths[2]}${key}-${versions[2]}${extencion}" class="img-fluid card-img-bottom" alt="diff-${key}">
          </div>
            </div>
          </div>
          <div class="row">
        <div class="col-12 text-center p-2 m-2">
          <div class="card">
            <h5 class="card-header">Data</h5>
            <div class="card-body">
              <p class="card-text font-monospace">

                Aqui me voy hacer una tabla

              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

(async () => {
  await generatingScreenshotsInfo(
      () => compairImages((result) => fs.writeFileSync(`${basePath}report.html`, generateReport(result))))
})();
