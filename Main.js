// ==UserScript==
// @name        Amazon Toggle Sections
// @namespace   http://userstyles.org
// @include     http://amazon.com/*
// @include     https://amazon.com/*
// @include     http://*.amazon.com/*
// @include     https://*.amazon.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       none
// ==/UserScript==

//$(document).ready(function(){
  //$("h2").css("border","3px double red");
  
  //$("h2").addClass(function(index){
  //  return "header" + index;
  //});
  
  //$("h2")
  //  .attr("id",function(arr){
  //    return
  //  }
  
  $("h2").click(function(){
    //alert($(this).html());
    var gmHTMLstring = $(this).html();
    if (gmHTMLstring == "Frequently Bought Together"){
      gmToggleDisplay(".dp-feature-content");
    } else if (gmHTMLstring == "Customers Who Bought This Item Also Bought"){
      gmToggleDisplay(".a-row.a-carousel-controls");
      gmToggleDisplay(".a-carousel-pagination");
    } else if (gmHTMLstring == "Product Description"){
      gmToggleDisplay(".productDescriptionWrapper");
      $("#product-description-iframe").css("height","20px");
    } else if (gmHTMLstring == "Product Details"){
      gmToggleDisplay(".content");
    } else if (gmHTMLstring == "Product Ads from External Websites"){
      //gmToggleDisplay("#variant_ads_below_foldShovelerDiv");
      gmToggleDisplay(".shoveler");
    } else if (gmHTMLstring == "Customers viewing this page may be interested in these sponsored links"){
      gmToggleDisplay(".content");
    } else if (gmHTMLstring == "Customers Who Viewed This Item Also Viewed"){
      gmToggleDisplay(".content");
    } else if (gmHTMLstring == "Customer Questions & Answers "){
      gmToggleDisplay(".content");
    } else {
      alert("Unable to collapse header.");
    };
  });
  
  //$("div > h2").append('<button id="clickme" style="background-color: #333333; color: #FFFFFF; padding: 10px; width: 20px; cursor:pointer;">');

function gmToggleDisplay(gmClassToToggle){
  //$("h2").css("border","3px double green");
  $(gmClassToToggle).toggle();
  //$(gmClassToToggle).slideUp(500);
};
