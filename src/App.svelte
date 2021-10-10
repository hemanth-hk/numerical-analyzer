<script>
    import Screen from './components/screen.svelte'
    import Navbar from './components/Navbar.svelte'
    import Footer from './components/Footer.svelte'

    let equation = 'ODE';
    let h;
    let fxy;
    let method;
    let lowerLimit = 0;
    let upperLimit;
    let initialValue;
    let analyticalFunction
    let plot = false;
</script>

<main>
    <Navbar />
    <br><br>
    <div class="container">
        <div class="level">
            <div class="level-item level-left">
                <span class="label">Equation Type:&nbsp;&nbsp;</span>
                <div class="select is-primary">
                    <select bind:value={equation} on:change={()=> plot = false}>
                    <option value="ODE">Ordinary Differential Equation</option>
                    <!-- <option value="PDE">Partial Differential Equation</option> -->
                </select>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <span class="label">Method:&nbsp;&nbsp;</span>
                <div class="select is-primary">
                    {#if equation == 'ODE' }
                    <select bind:value={method} on:change={()=> plot = false}>
                    <option value="Euler">Euler's Forward Method</option>
                    <option value="Heun">Heun's Method</option>
                    <option value="Polygon">Polygon Method</option>
                    <option value="Ralston">Ralston's Method</option>
                    <option value="RK4th">4th Order Runge-Kutta Method</option>
                </select> {:else}
                    <select>
                    <option>Partial Differential Equation</option>
                    <option>Heun's Method</option>
                </select> {/if}
                </div>
            </div>
            <div class="level-item level-right">
                <span class="label">Step Size (h):&nbsp;&nbsp;</span>
                <div class="field">
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" bind:value={h} on:change={()=> plot = false} type="number" placeholder="Step Size">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br>

    <div class="container">
        <div class="level">
            <div class="level-item level-left">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">dy/dx=&nbsp;&nbsp;</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" bind:value={fxy} on:change={()=> plot = false} type="text" placeholder="f(x,y)">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" bind:value={lowerLimit} on:change={()=> plot = false} type="number" placeholder="lower limit">
                            </p>
                        </div>
                    </div>
                    <div class="field-label is-normal">
                        <label class="label">&lt; x &lt; </label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" bind:value={upperLimit} on:change={()=> plot = false} type="number" placeholder="upper limit">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="level-item level-right">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">y({lowerLimit}):&nbsp;&nbsp;</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" bind:value={initialValue} on:change={()=> plot = false} type="number" placeholder="x">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="optional">
        <br>
        <p class="is-size-6 has-text-centered">This is an optional input. If you know the analytical solution of the differential equation and want to plot along-with numerical solution, then input the equation</p><br>
        <div class="level">
            <div class="level-item has-text-centered">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">y=&nbsp;</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" bind:value={analyticalFunction} on:change={()=> plot = false} type="text" placeholder="f(x)">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
    <br>
    <div class="level">
        <div class="level-item has-text-centered">
            <button class="button is-primary" on:click={()=> {
            if(equation && h && upperLimit && fxy && method){
                plot = true
                console.log(plot)
            }else{
                alert("Please Fill all the values")
            }
        }}>Let's Do Some Math</button>
        </div>
    </div>
    <br>
</main>
<Screen {equation}{h}{fxy}{method}{lowerLimit}{upperLimit}{plot}{initialValue}{analyticalFunction}/>
<br>
<Footer />


<style>
    .field-label {
        margin-right: 0;
    }
    
    main {
        background-color: #333474;
    }
    
    .label {
        color: white;
    }
    
    .optional {
        color: white;
        background-color: #353796
    }
</style>