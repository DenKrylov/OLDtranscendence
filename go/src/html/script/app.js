new Vue({
	el: '.app',
	data: {
		login: false,
		mainPage: true,
		signPage: false,
		chatPage: false,
		gamePage: false,
		chats: [
			{
				name: 'Transcendence',
				message: 'Я вас опять скипну с чата!',
			},
			{
				name: 'Ngonzo',
				message: 'Да оке!'
			},
			{
				name: 'Esnowbal',
				message: 'Hi'
			},
			{
				name: 'Gwynthon',
				message: 'Hi'
			},
			{
				name: 'Hrewa',
				message: 'Hi'
			},
		],
		dialog: [
			{
				user: 'Esnowbal',
				text: 'Привет всем!'
			},
			{
				user: 'Monie',
				text: 'Привет!'
			},
			{
				user: 'Ngonzo',
				text: 'Приветики!'
			},
			{
				user: 'Sultan',
				text: 'Я вас опять скипну с чата!'
			},
		]
	},
	methods: {
		checkLogin: function() {
			this.signPage = false;
			this.login = true;
		},
		showHome: function() {
			this.mainPage = true;
			this.signPage = false;
			this.chatPage = false;
			this.gamePage = false;
		},
		showSign: function() {
			this.mainPage = true;
			this.signPage = true;
			this.chatPage = false;
			this.gamePage = false;
		},
		showChat: function() {
			this.mainPage = false;
			this.signPage = false;
			this.chatPage = true;
			this.gamePage = false;
		},
		showGame: function() {
			this.mainPage = false;
			this.signPage = false;
			this.chatPage = false;
			this.gamePage = true;
		},
		logout: function() {
			this.mainPage = true;
			this.signPage = false;
			this.chatPage = false;
			this.gamePage = false;
			this.login = false;
		}
	}
})