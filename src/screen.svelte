<script>
  export let visible;
  export let equation;
  export let h;
  export let fxy;
  export let method;
	function typewriter(node, { speed = 30 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === 3
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length * speed;

		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<main class="container" id="screen">
<div class="columns">
<div class="column here has-background-light">
{#if visible}
<section class="hero is-large">
      <h1 class="title" in:typewriter>Solution</h1>
    <div class="container">
      <p in:typewriter>{equation}</p>
      <p in:typewriter>{method}</p>
      <p in:typewriter>{h}</p>
      <p in:typewriter>{fxy}</p>
    </div>
</section>
{/if}
</div>
<div class="column here has-background-light">
{#if visible}
<section class="hero is-large">
  <div class="hero-body">
    <div class="container">

	<p in:typewriter>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo expedita reprehenderit, sequi quasi deserunt, saepe voluptate,
     repellat iusto quam aliquid vitae quod consequatur labore ratione unde eius aspernatur optio?
	</p>

    </div>
  </div>
</section>
  {/if}
</div>

</div>
</main>
<style>
.here{
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 96vh;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(161, 161, 161); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>