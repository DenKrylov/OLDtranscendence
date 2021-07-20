new Vue({
	el: '.app',
	data: {
		login: true, 
		mainPage: false,
		signPage: false,
		chatPage: true,
		gamePage: false,
		tmpDialog: '',
		tmpMessage: '',
		activeChat: 'Transcendence', //полюбому должен быть активный чат
		user: 'Monie', // имя пользователя залогиневшего
		bestGamer: 'Monie', //лучший игрок сохраняется в бд
		theme: true, //цвет темы. Должна сохраняться с бд
		chats: [
			{
				name: 'Transcendence',
				message: 'Я вас опять скипну с чатаl!',
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
			{
				name: 'Ngonzo',
				message: 'Да оке!',
				dialog: [
					{
						user: 'Ngonzo',
						text: 'Привет!'
					},
					{
						user: 'Monie',
						text: 'Привет!'
					},
					{
						user: 'Ngonzo',
						text: 'Когда в школу?!'
					},
					{
						user: 'Monie',
						text: 'Скоро приду!'
					},
				]
			},
			{
				name: 'Esnowbal',
				message: 'Hi',
				dialog: [
					{
						user: 'Esnowbal',
						text: 'Привет!'
					},
					{
						user: 'Monie',
						text: 'Привет!'
					},
					{
						user: 'Esnowbal',
						text: 'Все надаел ты мне уже!'
					}
				]
			},
			{
				name: 'Gwynthon',
				message: 'Hi',
				dialog: [
					{
						user: 'Monie',
						text: 'Привет!'
					},
					{
						user: 'Gwynton',
						text: 'Привет!'
					}
				]
			},
			{
				name: 'Hrewa',
				message: 'Hi',
				dialog: [
					{
						user: 'Monie',
						text: 'Привет! Опять с девченками тусишь?!'
					},
					{
						user: 'Hrewa',
						text: 'Привет! Нее!'
					}
				]
			},
		],

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
		},
		changeTheme: function() {
			if(this.theme) {
				this.theme = false;
				console.log(this.theme);
			} else {
				this.theme = true;
				console.log(this.theme);
			}
		},
		iconTheme: function() {
			if(this.theme) {
				return("icon/brightness_6_white_24dp.svg");
			} else {
				return("icon/brightness_6_black_24dp.svg");
			}
		},
		isActiveMain: function() {
			if(this.mainPage == true) {
				return("header_li_active");
			}
		},
		isActiveChat: function() {
			if(this.chatPage == true) {
				return("header_li_active");
			}
		},
		isActiveGame: function() {
			if(this.gamePage == true) {
				return("header_li_active");
			}
		},
		pageIntra: function() {
			return("https://profile.intra.42.fr/users/ + this.user"); // ERROR
		},
		setActiveChat: function(chat) {
			this.activeChat = chat.name;
		},
		getActiveChat: function(chat) {
			if(this.activeChat == chat) {
				return("chat_active");
			}
		},
		getClassDialog: function(user) {
			if(user == this.user) {
				return("dialog_my");
			} else {
				return("dialog_other");
			}
		},
		lastMessage: function() {
			for(text in this.chats) {
				console.log(text);
			}
		},
		getDialog: function(chats) {
			for(i = 0; i < chats.length; i++) {
				if(chats[i].name == this.activeChat) {
					this.tmpDialog = i;
					return(chats[i].dialog);
				}
			}
		},
		sendMessage: function() {
			let newMessage = {
				user: this.user,
				text: this.tmpMessage,
			};
			if(this.tmpMessage != '') {
				this.chats[this.tmpDialog].dialog.push(newMessage);

			}
			this.tmpMessage = '';
		}
	}
})