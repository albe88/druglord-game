var App = App || {};
//
App.model = {
	// classi
	_player : function(type, name){
		this.stats = App.config.characters[type];
		this.name = name;
		this.type = type;
		this.money = this.stats.denaroInPartenza;
		this.startingEnvironment = this.stats.startingEnvironment;
		this.inventory = {}
		
		this.updateMoney = function(q){
			money += q;
		}
		this.addItem = function(item, qty){
			if(!item in inventory){
				inventory[item] = qty;
			} else {
				inventory[item] += qty;
			}
		}
		this.removeItem = function(item, qty){
			if(item in inventory){
				if(inventory[item] - qty > 0){
					inventory[item] = inventory[item] - qty;
				} else {
					delete inventory[item];
				}
			}
		}
	},
	_environment: function(type){
		this.stats = App.config.environments[type];
		this.name = type;
		this.type = type;
		this.traffic = this.stats.traffico;
		this.goods = this.stats.goods;
	},

	/**
	*	metodi iniziali : usati per istanziare giocatore e luoghi in partenza
	**/
	createNewPlayer : function(type, name){
		if(App.config.characters.hasOwnProperty(type) && name !== ""){
			if(!App.model.hasOwnProperty("players")){
				App.model.players = new Array();
				App.model.players[name] = new App.model._player(type, name);
				App.model.setCurrentCharacter(name);
				App.model.setCurrentEnvironment(App.model.players[name].startingEnvironment);	
				amplify.publish("Player:created", {playerName: name});
				amplify.publish("Environment:environmentChanged", {environment: App.model.state.currentEnvironment });
			} else {
				App.model.players[name] = new App.model._player(type, name);
				App.model.setCurrentCharacter(name);
				App.model.setCurrentEnvironment(App.model.players[name].startingEnvironment);	
				amplify.publish("Player:created", {playerName: name});
				amplify.publish("Environment:environmentChanged", {environment: App.model.state.currentEnvironment });
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
	instanceEnvironments : function(){
		var keys = Object.keys(App.config.environments),
			i = 0;
		for(var env in App.config.environments){
			if(!App.model.hasOwnProperty("environments")){
				App.model.environments = new Array();
				App.model.environments[keys[i]] = new App.model._environment(keys[i]);
				amplify.publish("Environment:created", {environmentName: keys[i]});
				i += 1;
			} else {
				App.model.environments[keys[i]] = new App.model._environment(keys[i]);	
				amplify.publish("Environment:created", {environmentName: keys[i]});
				i += 1;
			}
		}
	},
	//change current status
	/***
	*
	* App.model.players
	* App.model.environments
	*
	**/
	setCurrentCharacter: function(name){
		App.model.state.currentCharacter = name;
	},
	setCurrentEnvironment: function(environment){
		App.model.state.currentEnvironment = environment;
	}

}

