// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$(".chip.projects").on('click', function(event){
		event.preventDefault();
		console.log("project");
    // you have the selected chip here
    $(".pins").hide();
    $(".chip.skills").removeClass("active");
    $(".chip.education").removeClass("active");
    $(".chip.experience").removeClass("active");
    $(".chip.projects").addClass("active");

  });

	$(".chip.experience").on('click', function(event){
		event.preventDefault();
		console.log("experience");
		$(".chip.skills").removeClass("active");
		$(".chip.education").removeClass("active");
		$(".chip.projects").removeClass("active");
		$(".chip.experience").addClass("active");
    // you have the selected chip here

  });

	$(".chip.skills").on('click', function(event){
		event.preventDefault();
		console.log("skills");
		$(".chip.projects").removeClass("active");
		$(".chip.education").removeClass("active");
		$(".chip.experience").removeClass("active");
		$(".chip.skills").addClass("active");
    // you have the selected chip here

  });

	$(".chip.education").on('click', function(event){
		event.preventDefault();
		console.log("education");
		$(".chip.skills").removeClass("active");
		$(".chip.experience").removeClass("active");
		$(".chip.projects").removeClass("active");
		$(".chip.education").addClass("active");
    // you have the selected chip here

  });

	$(".button-collapse").sideNav();

});
