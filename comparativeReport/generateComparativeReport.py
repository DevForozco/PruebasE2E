import os
from string import Template

fileName = "reporteRegresionVisual.html"

# Clean images from path
def cleanScreenshots():
    pass


# Execute E2E programas and generate images
def executeE2E(program):
    pass


# Write a html document
def writeReportFile():
    steps = []
    steps.append(Step("Fabian"))
    steps.append(Step("Orozco"))

    body = getRowsReport(steps)

    configFile = Config("http://www.google.com", body)

    if os.path.exists(fileName):
        os.remove(fileName)
    htmlReport = open(fileName, "a")
    htmlReport.write(makeHtmlReport(configFile, any))
    htmlReport.close()


# Get a report rows
def getRowsReport(steps):
    htmlBody = ""
    for row in steps:
        htmlBody = htmlBody + rowTemplate.format(row=row)
    return htmlBody


# Make a html report
def makeHtmlReport(config, restInfo):
    return headerTemplate.format(config=config)


class Config:
    def __init__(self, url, body):
        self.url = url
        self.body = body


class Step:
    def __init__(self, name):
        self.name = name


headerTemplate = """
    <!DOCTYPE html>
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
            <h3 class="display-3"> Reporte regresión visual <a href="{config.url}" target="_blank" class="link-info link-underline-opacity-25 link-underline-opacity-100-hover">ghost</a> </h3>
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushGhost">
          {config.body}
        </div>
       </div>
    </body>
    </html>"""

rowTemplate = """<div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading-{row.name}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-{row.name}" aria-expanded="false" aria-controls="flush-collapse-${row.name}">
                  Browser: {row.name}
                </button>
              </h2>
              <div id="flush-collapse-{row.name}" class="accordion-collapse collapse" aria-labelledby="flush-heading-{row.name}" data-bs-parent="#accordionFlushGhost">
                <div class="accordion-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-4 text-center">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Ref ghost v3.3</h5>
                      </div>
                      <img src="before-{row.name}.png" class="img-fluid card-img-bottom" alt="before-{row.name}">
                    </div>
                      </div>
                      <div class="col-4 text-center">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Test ghost v4.4</h5>
                      </div>
                      <img src="after-{row.name}.png" class="img-fluid card-img-bottom" alt="after-{row.name}">
                    </div>
                      </div>
                  <div class="col-4 text-center">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Diff</h5>
                      </div>
                      <img src="./compare-{row.name}.png" class="img-fluid card-img-bottom" alt="diff-{row.name}">
                    </div>
                      </div>
                    </div>
                    <div class="row">
                  <div class="col-12 text-center p-2 m-2">
                    <div class="card">
                      <h5 class="card-header">Data</h5>
                      <div class="card-body">
                        <p class="card-text font-monospace"> </p>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>"""

writeReportFile()
