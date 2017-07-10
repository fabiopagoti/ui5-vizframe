sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"demoChart/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("demoChart.Component", {

		apiKey: '4buC3ahUiMXG2Bcgeyp6',

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// var oManifest = this.getManifest();
			// var sPath = oManifest["sap.ui5"].models[""].uri;
			
			var sPath = 'https://www.quandl.com/api/v3/datasets/COM/COFFEE_BRZL.json?api_key=4buC3ahUiMXG2Bcgeyp6';

			var oModel = new JSONModel();
			oModel.loadData(sPath);
			this.setModel(oModel);

		}
	});
});