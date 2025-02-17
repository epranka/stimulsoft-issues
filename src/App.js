/* eslint-disable */

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(
      `/stimulsoft/localization/lt.xml`,
      true
    );

    Stimulsoft.Base.StiLicense.loadFromFile("/stimulsoft/license.key");

    Stimulsoft.Base.StiFontCollection.addFontFile(
      "/fonts/Calibri/calibri-regular.ttf",
      "Calibri",
      0 // Regular
    );

    Stimulsoft.Base.StiFontCollection.addFontFile(
      "/fonts/Calibri/calibri-bold.ttf",
      "Calibri",
      1 // Bold
    );

    Stimulsoft.Base.StiFontCollection.addFontFile(
      "/fonts/Calibri/calibri-italic.ttf",
      "Calibri",
      2 // Italic
    );

    Stimulsoft.Base.StiFontCollection.addFontFile(
      "/fonts/Calibri/calibri-bold-italic.ttf",
      "Calibri",
      1 | 2 // Bold italic
    );

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Report.mdc');

    var viewer = new Stimulsoft.Viewer.StiViewer();
    viewer.report = report;
  }, []);

  return (
    <div className="App">
      <div id="content"></div>
    </div>
  );
}

export default App;
