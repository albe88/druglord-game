var App = App || {};
//
App.model = {
	// classi
	_player : function(type, name){
		this.stats = App.config.characters[type];
		this.name = name;
		this.type = type;
		this.money = this.stats.denaroInPartenza	
	},
	_environment: function(type){
		this.stats = App.config.environments[type];
		this.name = type;
		this.type = type;
		this.traffic = this.stats.traffico;
		this.goods = this.stats.goods;
	}

	//metodi
	createNewPlayer : function(type, name){
		if(App.config.characters.hasOwnProperty(type) && name !== ""){
			if(!App.model.hasOwnProperty("players")){
				App.model.players = new Array();
				App.model.players[name] = new App.model._player(type, name);
				App.model.setCurrentCharacter(name);
				App.model.setCurrentEnvironment(App.model.players[name].startingEnvironment);	
				amplify.publish("Player:created", {playerName: name});
			} else {
				App.model.players[name] = new App.model._player(type, name);
				App.model.setCurrentCharacter(name);
				App.model.setCurrentEnvironment(App.model.players[name].startingEnvironment);	
				amplify.publish("Player:created", {playerName: name});
			}
		} else {
			if(!App.config.characters.hasOwnProperty(type)){
				var pers = "";
				for(var p in App.config.characters) {
					pers += p + " ";
				}
				alert("il tipo di personaggio da te specificato non esiste. Scegli tra: " + pers);
			}
			if(name === ""){
				alert("inserisci un nome valido, ismito");
			}
		}
	},
	setCurrentCharacter: function(name){
		App.model.state.currentCharacter = name;
	},
	setCurrentEnvironment: function(environment){
		App.model.state.currentEnvironment = environment;
	}
}

