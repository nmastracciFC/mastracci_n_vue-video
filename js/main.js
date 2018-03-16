const vm = new Vue({
	el:"#app",
	data: {
		mainmessage: "Welcome to my Vue Video App",
		videodata: [
		{
			name: "Star Wars: The Force Awakens",
			thumb: "forceawakens.jpg",
			vidsource: "forceawakens.mp4",
			description: "yet another Star Wars movie"
		},
		{
			name: "Stranger Things",
			thumb: "strangerthings.jpg",
			vidsource: "strangerthings.mp4",
			description: "Don't get lost in the upside-down"
		},
		{
			name: "Marvel's The Avengers",
			thumb: "avengers.jpg",
			vidsource: "avengers.mp4",
			description: "Black widow forever!"
		}
		]
		
	},
	methods: {
		loadMovie(e) {
			e.preventDefault();
			// working inside an object so do not use equals
			var dataKey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/')+1);
			currentData: this.videodata.filter(video => video.vidsource === dataKey);
		}
	}
});