<script>
	export let href = "#";
  let slotContent = '';
</script>

<style lang="scss" type="text/scss">
a {
  position: relative;
  display: inline-block;
  font-size: 1em;
  color: rgb(2, 110, 172);
  text-decoration: none;
  overflow: hidden;
  line-height:1.09em;
  vertical-align: sub;
}
a .over {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  -webkit-transition: -webkit-transform 175ms ease;
  transition: -webkit-transform 175ms ease;
  transition: transform 175ms ease;
  transition: transform 175ms ease, -webkit-transform 175ms ease;
}
a .over::before {
  display: inline-block;
  content: attr(data-content);
  color: midnightblue;
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
  -webkit-transition: -webkit-transform 175ms ease;
  transition: -webkit-transform 175ms ease;
  transition: transform 175ms ease;
  transition: transform 175ms ease, -webkit-transform 175ms ease;
  text-decoration: underline;
}
a:hover .over {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}
a:hover .over::before {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}
</style>

<a href={href} target="_blank" rel="noreferrer">
	<span class="over" data-content="{slotContent.textContent}" aria-hidden="true"></span>
	<span bind:this={slotContent}><slot/></span>
</a>