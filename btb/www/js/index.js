
function redirectTo(location) {
	window.open = cordova.InAppBrowser.open;
	//showPleasewait('Redirecting','Please wait');
	var d = setInterval(function () {
		window.open(location, '_self',
			'location=no,zoom=no,toolbar=no');
		clearInterval(d);
	}, 1500);
}

var app = {
		// Application Constructor
		initialize: function () {
			document.addEventListener('deviceready',
				this.onDeviceReady.bind(this), false);
		},
		// deviceready Event Handler
		//
		// Bind any cordova events here. Common events are:
		// 'pause', 'resume', etc.
		onDeviceReady: function () {
			
			this.receivedEvent('deviceready');
			window.FirebasePlugin.onTokenRefresh(function(token) {
				// save this server-side and use it to push notifications to this device
				 console.log("OAP:",token);
				 
				//  alert("OAP:",token);
				}, function(error) {
				 console.error(error);
				});
		},
		// Update DOM on a Received Event
		receivedEvent: function (id) {
			if (navigator.connection.type == Connection.NONE) {
				navigator.notification.alert('An internet connection is required to continue ');
				}
				else {
					redirectTo("https://ae17e1e6trial.launchpad.cfapps.us10.hana.ondemand.com/site?siteId=828b3025-3756-43bb-8c35-24f37a3774cb#btbsem-btbact?sap-ui-app-id-hint=saas_approuter_com.btb.btb&/?sap-iapp-state--history=TASMS0R0TEZ9U2PHGC008024B1A2LYC47BBEI7F24&sap-iapp-state=ASHHYM2Z1DTOAOYORAQ0LNZA4Z5MS742QHLWKH31");
					//Replce URL with your website URL
				}
			}
		};
		app.initialize();