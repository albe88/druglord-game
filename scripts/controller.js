/**** CONTROLLER ****/
var App = App || {};

//
App.controller = {
	createNewPlayer : function(type, name){
		App.model.createNewPlayer(type, name);
	},
	showPlayer: function(name){
		if(App.model.hasOwnProperty("players") && name in App.model.players){
			return App.model.players[name];
		}
	},
	buy: function(good, qty){

	},

	//observe
	observe: function(){
		amplify.subscribe("Player:submittedNewCharacter", function(data){
			App.controller.createNewPlayer(data.characterType, data.characterName);
		});
		amplify.subscribe("Player:created", function(data) {
			App.model.instanceEnvironments();
			App.view.renderCharacter(data.playerName);
		});
		amplify.subscribe("Environment:environmentChanged", function(data){
			App.view.renderEnvironment(data.environment);
		})
		amplify.subscribe("Player:buyGood", function(data){
			App.controller.buy(data.good, data.qty);
		})
	},

	//init
	init: function(){
        App.model.state = {};

        App.view.appendTemplate('insertCharacter');
        App.controller.observe();
    }

}
