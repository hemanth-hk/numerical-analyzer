<script>
	import Screen from './screen.svelte'
  let equation = 'ODE'
  let visible = false
  let method;
  let h;
  let fxy;

</script>

<main>
<section class="hero is-light">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
		<div class="title">
			<h1>Numerical Analyzer</h1>
		</div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <a href="!#" class="button is-size-5">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>
<br>
  <div class="container">
<div class="columns">
  <div class="column is-4">
  <span class="label">Equation :</span>
<div class="select is-primary">
  <select bind:value={equation}>
    <option value="ODE">Ordinary Differential Equation</option>
    <option value="PDE">Partial Differential Equation</option>
  </select>
</div>
  </div>
  <div class="column is-5">
  <span class="label">Method :</span>
<div class="select is-primary">
	{#if equation == 'ODE' }
		   <select bind:value={method}>
				<option value="Euler's Forward Method">Euler's Forward Method</option>
				<option value="Heun's Method">Heun's Method</option>
				<option value="Polygon Method (Modified Euler's Method)">Polygon Method (Modified Euler's Method)</option>
				<option value="Ralston's Method (RK-2 Method)">Ralston's Method (RK-2 Method)</option>
				<option value="Runge-Kutta Method (4th Order Method)">Runge-Kutta Method (4th Order Method)</option>
			</select>
	{:else}
		<select>
			<option>Partial Differential Equation</option>
			<option>Heun's Method</option>
		</select>
	{/if}
</div>
</div>
  <div class="column is-2">
<div class="field">
    <span class="label">Step Size (h):</span>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input is-primary" bind:value={h} type="number" placeholder="Step Size">
      </p>
    </div>
  </div>
  </div>
</div>
  </div>
  <br>
  <div class="container">
  <div class="columns">
  <div class="column is-7 is-offset-2">
  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">dy/dx=</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input is-primary" bind:value={fxy} type="text" placeholder="Function in x and y or f(x,y)">
      </p>
    </div>
  </div>
  	<div class="buttons has-addons is-centered">
		<button class="button is-primary is-light" on:click={() => { 
      visible = true
      console.log(visible)
     }}>Let's Do Some Math</button>
	</div>
  </div>
  </div>
  </div>
<br>
<Screen {visible}{equation}{h}{fxy}{method} />
</main>

<style>
.title h1{
	margin-top: 1rem;
	font-size: 1.2em;
}
.has-addons{
	margin-left: 1em;
}
</style>