# infantMortalityRateMali

rawDataIMR = The raw data on infant mortality rates in Mali, sourced from the St. Louis FRED at the following URL: https://research.stlouisfed.org/fred2/series/SPDYNIMRTINMLI

IMRArray = The 'big' array of arrays. It sits outside of the 'for' loop and is referenced in data.addRows.

dateAndValueArray = This is the 'medium' array within the 'for'loop. It will be populated the dates and values from rawDataIMR.

dateArray, year, month, day, date: A series of variables used to reconfigure the DATE string in rawDataIMR so it is accepted by the dataTable.

IMRData = The data made up by the DataTable that populates the IMRChart. It is referenced in the final bit of the drawChart function along with options in: "IMRChart.draw(IMRData, IMRSpecs)"

IMRSpecs = The design and specs of the IMRchart. It is referenced in the final bit of the drawChart function along with options in: "IMRChart.draw(IMRData, IMRSpecs)"

IMRchart = The final chart with data and options that will be called upon in the div section of the html.


