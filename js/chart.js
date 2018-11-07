'use strict'
let elChartContainer =document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

function displayChart(){ 
  let elChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [travelPlaces[0].title, travelPlaces[1].title, travelPlaces [2].title, travelPlaces[3].title, travelPlaces[4].title, travelPlaces[5].title,travelPlaces[6].title, travelPlaces[7].title],
      datasets: [
        {label: '# of Clicks',
          data: [travelPlaces[0].clicked, travelPlaces[1].clicked,travelPlaces[2].clicked, travelPlaces[0].clicked, travelPlaces  [0].clicked, travelPlaces[0].clicked,travelPlaces[0].clicked,travelPlaces[0].clicked],
          backgroundColor: 'red',
          borderColor:  'red', 
          borderWidth: 1},
        {label: '# of Shown',
          data:[travelPlaces[0].shown, travelPlaces[1].shown, travelPlaces[2].shown, travelPlaces[0].shown, travelPlaces[0].shown, travelPlaces[0].shown,travelPlaces[0].shown,travelPlaces[0].shown],
          backgroundColor: 'blue',
          borderColor: 'orange',
          borderWidth: 1
        }]

      
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}