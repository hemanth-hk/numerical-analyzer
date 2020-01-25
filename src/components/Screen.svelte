<script>

import EulerForwardMethod from '../algo/EulerForwardMethod.js'
import HeunMethod from '../algo/HeunMethod.js'
import Solver from '../algo/Solver.js'

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
  export let analyticalFunction

  let ctx,myChart,data;

  let drawChart = (plotData, plotLabels, analyticalData = []) => {
    if(myChart) myChart.destroy();

    ctx = document.getElementById('mychart')
    myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: plotLabels,
        datasets: [{
            fill : false,
            label : 'Numercial Solution',
            data: plotData,
            backgroundColor: '#22d1ee',
            borderColor: '#3d5af1',
            borderWidth: 2
        },
        {
            fill : false,
            label : 'Analytical Solution(if given)',
            data: analyticalData,
            backgroundColor: '#fccde2',
            borderColor: '#f3558e',
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
      if(method == 'Euler'){
          data = EulerForwardMethod(fxy,h,lowerLimit,upperLimit,initialValue)
      }else if(method == 'Heun'){
          data = HeunMethod(fxy,h,lowerLimit,upperLimit,initialValue)
      }
    let yAnalytical = Solver(data.xval,analyticalFunction)
      drawChart(data.yval,data.xval,yAnalytical)
      plot = !plot
  }

</script>
<div class="container">
    <br><br>
    <h3 class="is-size-4 has-text-centered">Approximate curve of <span class="tag is-large">y = f(x)</span> from Numercial Solution</h3>
    <br>
    <canvas id="mychart" width="3" height="1"></canvas>
</div>
<br>
    {#if data}
<div class="container">
    <h3 class="is-size-4"><strong>Solution :</strong></h3>
    <p>Here the given {equation == 'ODE' ? "Ordinary Diffrential Equation" : "Partial Diffrential Equation"} is to be solved by {data.otherInfo.name} 
    with inital x,y i.e <strong>x<sub>0</sub> = {lowerLimit} and y<sub>0</sub> = {initialValue}</strong> and the number of successive steps N = { Math.round((upperLimit - lowerLimit) / h) }.</p>
    <p>The function is given by <strong>dy/dx = f(x,y) = { fxy }</strong></p>
    <p>The Y values and errors in it are calculated from the formulae <strong>{@html data.otherInfo.formula }</strong></p>
    <br>
    <p class="is-size-5">After the calculations are done :</p>
    <p>The approximate solution of the given Diffrential Equation is <strong>{ data.yval[data.yval.length - 1] }</strong></p>
    <p>The Local error in the result is <strong>{@html data.otherInfo.localError }</strong> and Global error is <strong>{@html data.otherInfo.globalError }</strong></p>
    <br><br>
    <h3 class="is-size-4"><strong>Calculations :</strong></h3>
         <table class="table is-bordered is-fullwidth">
            {#each data.xval as val,index}
            <tr>
                <td><strong>Step : </strong>{index + 1}</td>
                <td><strong>X<sub>{index}</sub> : </strong>{ val }</td>
                <td><strong>Y<sub>{index}</sub> : </strong>{ data.yval[index] }</td>
                <td><strong>A : </strong>{ data.aval[index] || data.aval[index] == 0 ? data.aval[index] : 'Not required'}</td>
                <td><strong>Y<sub>{index + 1}</sub> : </strong>{ data.yval[index + 1] || data.yval[index + 1] == 0 ? data.yval[index + 1] : 'Not required'}</td>
            </tr>
            {/each}
         </table>
</div>
    {:else}
         <!-- else content here -->
    {/if}

<style>
p{
    font-size: 1.7erm;
}
</style>