
renderSeriesTag();

function renderSeriesTag() {
  var pDoc = parent.document;

  // try web
  var webSeriesLink = pDoc.querySelector('.content__series-label a');
  var webSeriesLabel = pDoc.querySelector('.content__series-label span');
  if (webSeriesLink && webSeriesLabel) {
    webSeriesLabel.innerText = 'Observer Food Monthly Awards 2019';
    webSeriesLink.setAttribute('href', '/observer-food-monthly-awards')
  }

  // try app
  var appSeriesEl = pDoc.querySelector('.article-kicker__series a');
  if (appSeriesEl) {
    appSeriesEl.innerText = 'Observer Food Monthly Awards 2019';
    appSeriesEl.setAttribute('href', 'x-gu://front/mobile.guardianapis.com/uk/fronts/observer-food-monthly-awards');
  }

  cleanupAtom();
}

function cleanupAtom() {
  let parentDoc = window.parent.document;
  let allAtoms = parentDoc.querySelectorAll('.element-atom');
  allAtoms.forEach(function (a) {
    let iBody = a.querySelector('iframe').contentDocument.body;
    let iBodyText = iBody.innerText;
    if (iBodyText.indexOf('Label helper') >= 0) {
      a.parentElement.removeChild(a);
    }
  })
}
