angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('UserService', ["$q", "$http",  function($q, $http) {
	return {
		login : function(user) {
            var q = $q.defer();
            console.log(user.username);
            var cbUser = new CB.CloudUser();
            cbUser.set('username', user.username);
            cbUser.set('password', user.password);
            cbUser.logIn({
            success: function(user) {
                console.log(CB.CloudUser.current);
                q.resolve(user);
                console.log('login successful');
            },
            error: function(err) {
                q.reject(err);
                console.log('error in login ' + err );
            }
            });
            
                return q.promise;
        },
        signup : function(user){
            console.log(user);
            var q = $q.defer();
            var roles = new CB.CloudRole("registered");
            var cbUser = new CB.CloudUser();
            cbUser.set('name', user.name);
            cbUser.set('username', user.username);
            cbUser.set('password', user.password);
            cbUser.set('email', user.email);
            cbUser.set('phoneNumber', user.phoneNumber);
            
            cbUser.signUp({
            success: function(user) {
                console.log("user signed up successfully");
                console.log(CB.CloudUser.current);
                q.resolve(user);
            },
            error: function(err) {
                 q.reject(err);
                console.log('error in signup ' + err );
            }
            });
            return q.promise;
        },
        logout :function(){
            var q = $q.defer();
            var user = CB.CloudUser.current;
            user.document = CB.CloudUser.current.document;
            user.logOut({
            success: function(user) {
                console.log("logout");
                q.resolve(user);
            },
            error: function(err) {
                q.reject(err);
            }
        });
            return q.promise;
        },
        currentUser : function() {
            var q = $q.defer();

            var currentUser = CB.CloudUser.current;
            if(currentUser != null){
                q.resolve(currentUser);
                
            }
            else{
                q.reject(false);
            }
            return q.promise;
           
        },

        isLoggedIn : function(){
            var currentUser = CB.CloudUser.current;
            if(currentUser != null){
                return true;
            }
            else{
                return false;
            }
        }
	}
}])

.service('PersonService', ["$q", "$http",  function($q, $http) {
	return {
		addPerson : function(person){
			var q = $q.defer();
			var personObj = new CB.CloudObject("person");
			personObj.set("name",person.name);
			personObj.set("requestors",person.requestors);
			personObj.save({
                success : function(person){
                    q.resolve(person);
                    console.log('person added');
                },
                error : function(err){
                    q.reject(err);
                    console.log(err);
                }
            });
            return q.promise;
		},

		addRequestor : function(personId, newRequestor){
			var q = $q.defer();
			var personObj = new CB.CloudQuery("person",personId);
			personObj.include("requestors");
			personObj.findOne({
				success : function(person){
					console.log(person);
                    q.resolve(person.document);
                },
                error : function(err){
                    q.reject(err);
                }
			})
			return q.promise;
		}
	}
}])

.service('MediListService', ["$q", "$http",  function($q, $http) {
	return {
		createMediList : function(mediList){
			var q = $q.defer();
			var mediListObj = new CB.CloudObject("medilist");
			mediListObj.set("medicine_name", mediList.name);
			mediListObj.set("quantity",mediList.quantity);
			mediListObj.set("quantity_unit",mediList.quantity_unit);
			mediListObj.set("person",mediList.person);
			mediListObj.save({
				success : function(mediList){
					console.log(mediList);
                    q.resolve(mediList);
                },
                error : function(err){
                    q.reject(err);
                }
			})
			return q.promise;
		},

		editMediList : function(mediList){
			var q = $q.defer();
			var mediListObj = new CB.CloudQuery("medilist",mediList.id);
			mediListObj.findOne({
				success : function(mediList){
					console.log(mediList);
                    q.resolve(mediList);
                },
                error : function(err){
                    q.reject(err);
                }
			})
			return q.promise;

		}
	}

}])