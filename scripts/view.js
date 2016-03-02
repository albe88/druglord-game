/**** VIEW ****/
var App = App || {};

//
App.view = {
	// metodi d'appoggio
	appendTemplate: function(templateId, fatherSelector){
        var template = document.querySelector('#' + templateId);
        var clone = document.importNode(template.content, true);

        var host = (typeof(fatherSelector) === "undefined")? document.querySelector('body') : document.querySelector(fatherSelector);
        host.appendChild(clone);
    }, 

    //metodi
    renderCharacter: function(){
    	jQuery('#characterWindow').html('');
    	App.view.appendTemplate("character", "#characterWindow");
    },
    renderEnvironment: function(){
    	jQuery('#marketWindow').html('');
    	App.view.appendTemplate("market", "#marketWindow");
    },
    removeTemplate: function(fatherSelector){
        jQuery(fatherSelector).html('');
    }

}
