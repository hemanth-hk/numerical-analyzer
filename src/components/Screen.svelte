<script>

import EFM from '../algo/EulerForwardMethod.js'

  import Chart from 'chart.js'
  import { onMount } from 'svelte';
  export let equation;
  export let h;
  export let fxy;
  export let method;
  export let lowerLimit;
  export let upperLimit;
  export let plot;
  export let initialValue

  let ctx,myChart;

  let drawChart = (plotData, plotLabels) => {
    if(myChart) myChart.destroy();

    ctx = document.getElementById('mychart')
    myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: plotLabels,
        datasets: [{
            fill : false,
            data: plotData,
            backgroundColor: '#22d1ee',
            borderColor: '#3d5af1',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
        display: false
        },
        tooltips: {
            callbacks: {
            label: function(tooltipItem) {
                    return tooltipItem.yLabel;
            }
            }
        }
    }
});
  }

  onMount(() => {
      drawChart([],[])
  });

  $: if(plot){
      console.log('From Scrren',plot)
    let data = EFM(fxy,h,lowerLimit,upperLimit,initialValue)
      drawChart(data.yval,data.xval)
      plot = !plot
  }  

</script>
<div class="container">
    <br><br>
    <h3 class="is-size-4 has-text-centered">Approximate curve of <span class="tag is-large">y = f(x)</span></h3>
    <br>
    <canvas id="mychart" width="3" height="1"></canvas>
</div>
<br>
<div class="container has-text-centered">
    <h3 class="is-size-3">Solution</h3>
    <br>
    <p>fxy : { fxy }</p>
    <p>method : { method }</p>
    <p>h : { h }</p>
    <p>equation : { equation }</p>
    <p>initialValue : {initialValue}</p>
</div>

<style>

</style>