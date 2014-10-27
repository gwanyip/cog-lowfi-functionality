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