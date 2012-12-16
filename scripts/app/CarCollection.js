define(["underscore","backbone_amd"], function(_,Backbone) {
	/*_.each([1,2,3,4], function(num) {
        console.log(num);
    });
    return {
		color: 'a'
	}*/
    
    var carCollection = new Backbone.Collection;
    
    carCollection.add([
        {model: 'Ford', year: 2012, color: 'red'},
        {model: 'Honda', year: 2006, color: 'green'}
    ]);
    
    return carCollection;
});