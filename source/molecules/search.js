/**
*   Search Form - Test Case
**/

var molecule = {
    name     : "SearchForm",
    selector : "form"
};

casper.test.begin(molecule.name, 3, function(test){

    casper.start(nuclear.options.url, function() {
        if(this.exists(molecule.selector)){
            test.assertExists(molecule.selector + " input[type='text']", "Search Input");
            test.assertExists(molecule.selector + " button[type='submit']", "Search button");
        }else{
            this.echo(molecule.selector + " not found!", "INFO");
        }
    })

    .then(function(){
        // screenshot
        if( this.exists(molecule.selector) && nuclear.options.screenshot === true ){
            this.captureSelector(nuclear.path.screenshots + molecule.name + ".jpg", molecule.selector);
        }
        
        // your tests here
    })

    .run(function(){
        test.done();
    });

});