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