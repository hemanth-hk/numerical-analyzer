<script>
  import Chart from 'chart.js';
  import { onMount } from 'svelte';
  export let visible;
  export let equation;
  export let h;
  export let fxy;
  export let method;


  let drawChart = () => {
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            fill : false,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }

  onMount(() => {
      drawChart();
  });
</script>
<div class="container">
<canvas id="myChart" width="3" height="1"></canvas>
<p>{ visible }</p>
<p>{ fxy }</p>
<p>{ method }</p>
<p>{ h }</p>
<p>{ equation }</p>
</div>
<style>

</style>