// Setting icon drop down on click

var settingIconDropdown = $(".settings-icon.click");
var dropdownClick = $("#settings-icon-dropdown-click");
var settingIconHover = $(".settings-icon.hover");
var dropdownHover = $("#settings-icon-dropdown-hover");

settingIconDropdown.click(function(){
   dropdownClick.toggle();
})

settingIconHover.hover(function(){
	dropdownHover.toggle();
})


// Dashboard slide effect

var dashboard = $(".dashboard-content");
var leftCtrl = $(".dashboard-cntrl.left");
var rightCtrl = $(".dashboard-cntrl.right");

leftCtrl.click(function(){
	dashboard.addClass('slide');
})
rightCtrl.click(function(){
	dashboard.removeClass('slide');
})

// Graph popup

var dashboardShim = $(".dashboard-graph-shim");
var activeGraph = $('#dashboard-graph');
var bobToolTip = $(".dashboard-graph-user-container");

activeGraph.click(function(){

	dashboardShim.toggle();
	setTimeout(function(){
		bobToolTip.addClass("show");
	}, 1000);
	dashboardShim.click(function(e){		
		e.preventDefault();
		$(this).css('display','none');
	});
});

// Alerts animation

var alertBtn = $("#alert-btn");
var alertIcon = $(".alert-icon");

alertBtn.click(function(){
	if (alertIcon.hasClass("expand")) {
		alertIcon.removeClass("expand");
	} else {
		alertIcon.addClass("expand");
	}
});

// AJAX call on catalog dropdown

$(document).ready(function(){
	$("#catalog-dropdown-options").on("change", function(){
		if($(this).val() === "hospitality"){
			(function(){
				$.get("hospitality-apps.html", function(response){
					$("#catalog-container").children().remove();
					$("#catalog-container").html(response);
				});
			}());
		}
	})
});





