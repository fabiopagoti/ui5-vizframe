sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("demoChart.controller.S0", {

		_chart: {
			vizProperties: {
				title: {
					text: 'Valor do Café por período'
				},
				legend: {
					title: {
						text: 'Legenda',
						visible: true
					}
				},
				legendGroup: {
					layout: {
						position: 'top'
					}
				},
				categoryAxis: {
					title: {
						text: 'Período'
					}
				},
				valueAxis: {
					title: {
						text: 'R$ / Kg'
					}
				}
			},
			vizScales: {
				scales: {
					color: ["#00FF00", "#FF0000"],
					valueAxis: {
						max: 10000
					}

				}
			}
		},

		onInit: function() {
			var oViewModel = new JSONModel();

			oViewModel.setProperty('/chart/', this._chart);

			this.getView().setModel(oViewModel, "view");
		},

		onSelectData: function(oEvent) {
			debugger;
		}
	});
});