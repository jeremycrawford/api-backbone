var Item = Backbone.Model.extend({});
var ItemsCollection = Backbone.Collection.extend({
  model: Item,
  url: "https://api.etsy.com/v2/listings/active.js?api_key=fgyvtmmnhmqv4ghy8bb5vtwd&includes=Images&keywords=boots&callback=?",
 
  parse: function(response) {
    return response.results;
  }
})