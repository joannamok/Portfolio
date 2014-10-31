angular.module("MyApp").service("dataService", function(){
	//adds empty array to hold names
	var namesArray =[{
		city:"Huntsville",
		state:"AL",
		address: "14021 Camden Cr., 35803",
		date:"Alabama",
		about: "35802",
		},]
	//method will get the names from nameArray and return them
	this.getNames = function(){
		//this will make local storage into a string
		var str = localStorage.getItem("NameLS");
		//this uses JSON to store strings in names Array OR if there is nothing to store, uses namesArray as set before info is typed
		namesArray = JSON.parse(str) || namesArray;
		//returns names array
		return namesArray;
	}
	//this will push the new name to the namesArray and put in storage
	this.addName = function(pName){
		namesArray.push(pName);
		//this is var where it will be stored in JSON
		var str = JSON.stringify(namesArray);
		//uses var and palces in storage
		localStorage.setItem("NameLS",str);
	}
	//this will remove the name
	this.removeName = function(pName){
		namesArray.splice(namesArray.indexOf(pName),1);
		//this will modify so removed items stay in local storage too
		var str = JSON.stringify(namesArray);
		//uses var and palces in storage
		localStorage.setItem("NameLS",str);
	}
    
    this.updateName = function(pName,idx){
        namesArray.splice(idx,1,pName);
        
        //this will modify so removed items stay in local storage too
		var str = JSON.stringify(namesArray);
		//uses var and palces in storage
		localStorage.setItem("NameLS",str);
    }
});//end dataService 