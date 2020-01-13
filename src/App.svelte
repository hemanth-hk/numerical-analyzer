<script>
  import Screen from './components/screen.svelte'
  import Navbar from './components/Navbar.svelte'

  let visible;
  let equation = 'ODE';
  let h;
  let fxy;
  let method;
  let lowerLimit = 0;
  let upperLimit;


</script>

<main>
<Navbar />
<br><br>
<div class="container">
    <div class="columns">
        <div class="column">
            <span class="label">Equation Type :</span>
            <div class="select is-primary">
                <select bind:value={equation}>
                    <option value="ODE">Ordinary Differential Equation</option>
                    <!-- <option value="PDE">Partial Differential Equation</option> -->
                </select>
            </div>
        </div>
        <div class="column">
            <span class="label">Method :</span>
            <div class="select is-primary">
                {#if equation == 'ODE' }
                <select bind:value={method}>
                    <option value="Euler's Forward Method">Euler's Forward Method</option>
                    <option value="Euler's Forward Method">Euler's Backward Method</option>
                    <option value="Euler's Forward Method">Mid point Method</option>
                    <!-- <option value="Heun's Method">Heun's Method</option>
				<option value="Polygon Method (Modified Euler's Method)">Polygon Method (Modified Euler's Method)</option>
				<option value="Ralston's Method (RK-2 Method)">Ralston's Method (RK-2 Method)</option>
				<option value="Runge-Kutta Method (4th Order Method)">Runge-Kutta Method (4th Order Method)</option> -->
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
</div>

<br>

<div class="container">
    <div class="columns">
        <div class="column is-3">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">dy/dx=</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input class="input is-primary" bind:value={fxy} type="text" placeholder="f(x,y)">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
              <div class="field is-horizontal">
                <div class="field-body">
                    <div class="field">
                        <p class="control is-pulled-right">
                            <input class="input is-primary" bind:value={lowerLimit} type="number" placeholder="lower limit">
                        </p>
                    </div>
                </div>
                <div class="field-label is-normal">
                    <label class="label">&lt; x &lt;</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-pulled-left">
                            <input class="input is-primary" bind:value={upperLimit} type="number" placeholder="upper limit">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-3">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">y({lowerLimit}) = </label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input class="input is-primary" bind:value={fxy} type="number" placeholder="x">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br><br>
  <Screen {visible}{equation}{h}{fxy}{method}/>

</main>

<style>

</style>