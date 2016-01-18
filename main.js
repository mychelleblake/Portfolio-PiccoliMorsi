

$(document).ready (function() {

//var e = document.getElementbyID("favs");
//	e.onmouseover = function() {
//		document.getElementbyID("favs").style.display = "block";
//	}
//	e.onmouseout = function() {
//		document.getElementbyID("favs").style.display = "none";
//	}

var itemToImageMap = {
    25: 'assets/restaurantphotos/pizza2.jpg'
};

$(".nav-tabs > li > a").click(function(event) {
    event.preventDefault();

var active_tab_selector = $(".nav-tabs > li.active > a").attr("href");

var actived_nav = $(".nav-tabs > li.active");
actived_nav.removeClass("active");

$(this).parents("li").addClass("active");

$(active_tab_selector).removeClass("active");
$(active_tab_selector).addClass("hide");

var target_tab_selector = $(this).attr("href");
$(target_tab_selector).removeClass("hide");
$(target_tab_selector).addClass("active");

});
function rotateImages() {
	 var curDiv = $('#hero div.current');
	 var nextDiv = curDiv.next();
	 if (nextDiv.length === 0) {
		nextDiv = $('#hero div:first');
	}

	 curDiv.removeClass('current').addClass('previous');
	 nextDiv.css({ opacity: 0.0 });
	 nextDiv.addClass('current');
	 nextDiv.animate({ opacity: 1.0 },
	 					1000,
						 function() {
							curDiv.removeClass('previous');
						});
}

	 $(function() {
			 // create the image rotator
			 setInterval(rotateImages, 3000);
	 });





		// NEWS div content       ***************************************************************
		//****************************************************************************************

		var newsData = "https://json-data.herokuapp.com/restaurant/news/1";

		$.ajax({
			url: newsData,
			method: 'get',
			dataType: 'json'
		}).then(function (newsBoxData) {

			var newsDataPull = {
				data : newsBoxData
			};

		var newsFormTemplate = $("#newsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var formHTML = Mustache.render(newsFormTemplate, newsDataPull);
		$("#news").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});

	// SPECIALS data for content    **********[!!!MAIN MENU IS NESTED UNDER SPECIALS API CALL!!]***********
	//*********************************************************************************************
	var specialsData = "https://json-data.herokuapp.com/restaurant/special/1";

		$.ajax({
			url: specialsData,
			method: 'get',
			dataType: 'json'
		}).then(function (specialsBoxData) {

			var specialsDataPull = {
					specialsBoxData: specialsBoxData
				};

			var theSpecial = specialsBoxData.menu_item_id;
		// 	var specialFormTemplate = $("#specialFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		// 	var formHTML = Mustache.render(specialFormTemplate, specialsDataPull);
		// 	$("#special").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
		// });

//   MAIN (food) MENU HERE **********************************************************************
			var menuData = "https://json-data.herokuapp.com/restaurant/menu/2";

			$.ajax({
				url: menuData,
				method: 'get',
				dataType: 'json'
			}).then(function (menuBoxData) {

				var menuDataPull = {
					menuBoxData: menuBoxData
				};

				var breakfast = {
					breakfast: menuBoxData.breakfast
				};

				var sandwiches = {
					sandwiches: menuBoxData.sandwiches
				};

				var toppings =  {
					toppings: menuBoxData.toppings
				};

				var sides = {
					sides: menuBoxData.sides
				};

				var salads = {
					salads: menuBoxData.salads
				};

				var soups = {
					soups: menuBoxData.soups
				};

				var drinks = {
					drinks: menuBoxData.drinks
				};
				
				var desserts = {
					desserts: menuBoxData.desserts
				};

				var veraDesserts = {
					veraDesserts: menuBoxData.veraDesserts
				};

		var breakfastFormTemplate = $("#breakfastFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var breakfastHTML = Mustache.render(breakfastFormTemplate, breakfast);
		$("#breakfast").html(breakfastHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var sandwichesFormTemplate = $("#sandwichesFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var sandwichesHTML = Mustache.render(sandwichesFormTemplate, sandwiches);
		$("#sandwiches").html(sandwichesHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
		
		var toppingsFormTemplate = $("#toppingsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var toppingsHTML = Mustache.render(toppingsFormTemplate, toppings);
		$("#toppings").html(toppingsHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var sidesFormTemplate = $("#sidesFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var sidesHTML = Mustache.render(sidesFormTemplate, sides);
		$("#sides").html(sidesHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var saladsFormTemplate = $("#saladsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var saladsHTML = Mustache.render(saladsFormTemplate, salads);
		$("#salads").html(saladsHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var soupsFormTemplate = $("#soupsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var soupsHTML = Mustache.render(soupsFormTemplate, soups);
		$("#soups").html(soupsHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		// var mainFormTemplate = $("#mainFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		// var mainHTML = Mustache.render(mainFormTemplate, mains);
		// $("#mains").html(mainHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var drinksFormTemplate = $("#drinksFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var drinksHTML = Mustache.render(drinksFormTemplate, drinks);
		$("#drinks").html(drinksHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var dessertsFormTemplate = $("#dessertsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var dessertsHTML = Mustache.render(dessertsFormTemplate, desserts);
		$("#desserts").html(dessertsHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var veraDessertsFormTemplate = $("#dessertsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var veraDessertsHTML = Mustache.render(veraDessertsFormTemplate, veraDesserts);
		$("#veraDesserts").html(veraDessertsHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		// var dogFormTemplate = $("#dogFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		// var dogHTML = Mustache.render(dogFormTemplate, CaneCucina);
		// $("#dogs").html(dogHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML


// This generates the "Today's Specials" box in the middle of the 'api-panel' div ***********************
// ***[uses 'theSpecial' var from above]**************************************************************************************************
						var menuSpecial = menuBoxData.sides.filter(function(item){
							if (item.id === theSpecial) {
								return true;
							} else {
								return false;
							}
						});
						var td = menuSpecial[0];

						var todaysSpecial = {
							td: td,
                            "imgsrc": itemToImageMap[td.id]
						};

                        console.log(todaysSpecial);

						var specialsFormTemplate = $("#specialsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
						var formHTML = Mustache.render(specialsFormTemplate, todaysSpecial);
						$("#special").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

			});

		});
});
