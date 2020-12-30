const person = {
    age: 31,
    name: 'Stas',
    job: 'Frontend',
    displayInfo: function(ms) {
        console.log(this);
        var self = this;
        setTimeout(function(){ // lol i was hearing lesson and wrote setTimeout(() => { instead of setTimeout(function() => {
            // and everything worked for me
            console.log(this);
            // debugger
            console.log('Name: ', this.name)
            console.log('Age: ', this.age)
            console.log('Job: ', this.job)      
            
            console.log('Name: ', self.name)
            console.log('Age: ', self.age)
            console.log('Job: ', self.job)
        }, ms)
    },
    displayInfoWithBind: function(ms) {
        console.log('displayInfoWithBind', this);
        setTimeout(function(){
            console.log('displayInfoWithBind', this);
            console.log('Name: ', this.name)
            console.log('Age: ', this.age)
            console.log('Job: ', this.job)      
        }.bind(person), ms) // Lol... author passes 'this' in example. Nice that I've tried by myself 
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    }
}

// person.displayInfo(2000);
person.displayInfoWithBind(2000);

// When function creates with word 'function' it creates its own scope. 
// There 3 methods to save context -> pass it via _self
// Bind()
// And seems like () => instead of function () {}