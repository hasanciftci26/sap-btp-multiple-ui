sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ntt.test.hasanui.controller.View1", {
            onInit: function () {
                $.ajax({
                    method: "GET",
                    url: "/ntttesthasanui/v2/northwind/northwind.svc/Customers?$format=json",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    success: function (oResponse) {
                        var test = "x";
                    },
                    error: function (oError) {

                    }
                });
            }
        });
    });
