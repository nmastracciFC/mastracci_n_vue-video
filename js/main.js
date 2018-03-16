const vm = new Vue({
	el:"#app",
	data: {
		welcomemessage: "Welcome to the Vue App!",
		deliciousFruit: [
		{
			name: 'apple',
			flavour: 'tasty'

		},
		{
			name: 'oranges',
			flavour: 'acidic'

		},
		{
			name: 'pineapples',
			flavour: 'sour'

		}],
		hasVue: true,
		vuemessage: "Vue's here!"
	},
	methods: {
		logClicked(e) {
			console.log(e.currentTarget, this);
		}
	}
});