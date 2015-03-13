 var vAxisGridLineStyle = { 
 	  		count: 5,
            color: 'grey'
         }; //End of gridLineStyle style definition
         
  var axisTextStyle = {
  		fontSize: 10
  		 }; //End of hAxisTextStyle

 
 //The code below is taken from: http://jsfiddle.net/api/post/library/pure/
 // Referencing the Visualization API of a basic column chart.

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {

	//Creating an overarching array to reference in the addRows section. 
	//It will include the date and value information from rawDataIMR
	
	var IMRArray = []; 
		
	// Starting a for loop to pull array of arrays from rawDataIMR
	
	for (var i=0; i<rawDataIMR.observations.length; i++){
		
		var dateAndValueArray = []; //This is the 'medium' array. It will hold each set of date and value.
		
			//Creating a set of variables to split and reconfigure the DATE string in rawDataIMR.
			var dateArray = rawDataIMR.observations[i].DATE.split("-");
			var year = Number(dateArray[0]);
			var month = Number(dateArray[1]-1);
			var day = Number(dateArray[2]);
			var date = new Date(year,month,day);
			
			var worldAverageIMR = 34
			var barColor = 'red'
			var lineColor = 'black'
			
			//Pushing the date and IMR value into the 'medium' sized array, dataAndValueArray
			dateAndValueArray.push(date);
			dateAndValueArray.push(rawDataIMR.observations[i].VALUE);
			dateAndValueArray.push(barColor);
			dateAndValueArray.push(worldAverageIMR);
			dateAndValueArray.push(lineColor);
			
			if(rawDataIMR.observations[i].DATE == "2013-01-01"){
				dateAndValueArray.push("Mali's infant mortality rate is more than double the world average.");
			}else{
				dateAndValueArray.push("");
			} 
			
			//Pushing the 'medium' sized array, dataAndValueArray, into the 'big' array, IMRArray.
			IMRArray.push(dateAndValueArray); 
			
		};//End of 'for' loop
		
		
      var IMRData = new google.visualization.DataTable();
      IMRData.addColumn('date', 'Year');
      IMRData.addColumn('number', 'Infant mortality rate');
      IMRData.addColumn({type:'string', role:'style'});
      IMRData.addColumn('number', 'Global average in 2013');
      IMRData.addColumn({ type:'string', role: 'style' });
      IMRData.addColumn({type:'string', role:'annotation'});
      IMRData.addRows(IMRArray);
      
      // Formatting the date type.
      var formatter = new google.visualization.DateFormat({formatType: 'long'});
      formatter.format(IMRData, 0);
      
      
      var IMRSpecs = {
      				   title:'Infant Morality Rate in Mali Has Fallen, But Remains High',
                       width: 1200,
                       height: 900,
                       vAxis: {
                       		title: 'Deaths per 1,000 live births',
                       		minValue: 0,
                       		textStyle: {},
                       		gridlines:{}
                       },
                       hAxis: {
                       		title: 'Year',
                       		format:'y',
                       		textStyle: {}
                       },
                       seriesType: "bars",
                       series: {
                       		1: {type: "line"}
                       },
                       colors: ['red', 'black']
                      }; //End of option

		IMRSpecs.vAxis.gridlines = vAxisGridLineStyle;
		IMRSpecs.hAxis.textStyle = axisTextStyle;
		IMRSpecs.vAxis.textStyle = axisTextStyle
      
      //Instantiate and draw the IMRchart, passing it the data and options
      var IMRChart = new google.visualization.ComboChart(document.getElementById('IMR'));
      IMRChart.draw(IMRData, IMRSpecs);
      
}//End of function drawChart