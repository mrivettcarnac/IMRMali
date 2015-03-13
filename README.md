# infantMortalityRateMali

DESIGN RATIONALE:

This column chart visualizes yearly infant mortality rates in Mali since 1960. It also includes a reference line, the global infant mortality rate average as of 2013. 

I chose a column chart because the infant mortality rate’s absolute value is the vital piece of information. The viewer should see the whole number of deaths per 1000 lives births, not just the yearly trend. And I chose to color the bars red for its readability and relation to health (i.e. the red cross).

The addition of the world average line helps put the data into perspective. Without this information, the viewer would have no way of judging Mali’s infant mortality rate.


DATA VARIABLES:

rawDataIMR = The raw data on infant mortality rates in Mali, sourced from the St. Louis FRED at the following URL: https://research.stlouisfed.org/fred2/series/SPDYNIMRTINMLI

IMRArray = The 'big' array of arrays. It sits outside of the 'for' loop and is referenced in data.addRows.

dateAndValueArray = This is the 'medium' array within the 'for'loop. It will be populated the dates and values from rawDataIMR.

dateArray, year, month, day, date: A series of variables used to reconfigure the DATE string in rawDataIMR so it is accepted by the dataTable.

worldAverageIMR = This is a constant value of 34, and it is used to populate the column for the line chart that overlays the bar chart. 

barColor = This defines the color of the bars in the IMRChart. It populates on of the columns in the dataTable. It has a constant value, 'red'.

lineColor = This defines the color of the line in IMRChart. It populates on of the columns in the dataTable. It has a constant value, 'black'.

IMRData = The data made up by the DataTable that populates the IMRChart. It is referenced in the final bit of the drawChart function along with options in: "IMRChart.draw(IMRData, IMRSpecs)"

IMRSpecs = The design and specs of the IMRchart. It is referenced in the final bit of the drawChart function along with options in: "IMRChart.draw(IMRData, IMRSpecs)"

IMRchart = The final chart with data and options that will be called upon in the div section of the html.


STYLE VARIABLES:

vAxisGridLineStyle = This sets the number of grid lines that run perpendicular to the vAxis, 5, and their color, grey.

axisTextStyle = Sets the axis type size to 10.

dataSource = div style that defines the font, size and allignment of the text below the chart that references data sources.


