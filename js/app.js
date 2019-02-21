'use-strict';

/*============================================GLOBAL VARIABLES====================================*/
//click number countdown
var total_clicks = 11;
//objects from constructor instances get moved into here. all_mall_items doesn't change.
//temp_mall_items has more fluid contents, and changes according to splicing function. Both start off the same.
var all_mall_items = [];
var temp_mall_items = [];

//creates variables for each picture display, unassigned here because their input changes with the randomizer
var currently_displayed_left_product;
var currently_displayed_center_product;
var currently_displayed_right_product;

//calls the product_container tags and space from index.html
var product_container = document.getElementById('product_container');
//creates elements for each image and its caption to live in
var left_img = document.getElementById('left_img');
var center_img = document.getElementById('center_img');
var right_img = document.getElementById('right_img');

var left_h2 = document.getElementById('left_h2');
var center_h2 = document.getElementById('center_h2');
var right_h2 = document.getElementById('right_h2');

/* ========================================Item Constructor==============================================*/

//start of constructor function
var Mall_item = function (item_name, filepath) {
  this.item_name = item_name;
  this.filepath = filepath;
  this.num_times_shown = 0;
  this.num_times_clicked = 0;

  //pushes instances into the global array
  all_mall_items.push(this);
  temp_mall_items.push(this);
};

/*============================================HELPER FUNCTIONS=============================================*/

//Makes images log to page
var render_products = function(product, target_img, target_h2){
  product.num_times_shown++;
  target_img.src = product.filepath;
  target_h2.textContent = product.item_name;
};

//builds chart function for clicked-on chart
var render_products_clicked_chart = function () {
  var canvas_el = document.getElementById('bus_results');
  var ctx = canvas_el.getContext('2d');

  var product_click_data = [];
  for (var j = 0; j < all_mall_items.length; j++){
    product_click_data.push(all_mall_items[j].num_times_clicked);
  }
  var product_click_labels = [];
  for(var k = 0; k < all_mall_items.length; k++){
    product_click_labels.push(all_mall_items[k].item_name);
  }
  render_chart(product_click_data, product_click_labels, 'Clicks Per Item', ctx);
};

var render_products_shown_chart = function (){
  var canvas_el = document.getElementById('items_shown_results');
  var ctx = canvas_el.getContext('2d');

  var product_shown_data = [];
  for (var j = 0; j < all_mall_items.length; j++){
    product_shown_data.push(all_mall_items[j].num_times_shown);
  }

  var product_click_labels = [];
  for(var k = 0; k < all_mall_items.length; k++){
    product_click_labels.push(all_mall_items[k].item_name);
  }
  render_chart(product_shown_data, product_click_labels, 'Number of Times Shown', ctx);
};

//begin chart
var render_chart = function(data, labels, title, ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};
  //end of chart

//displays new items
var pick_new_item = function () {
  //tells the randomizer which of my three potential spaces to put images in
  //renders the image picked from randomizer to page
  //starts splice to control randomization and keep duplicates from showing up on the page
  //repeats for each image space

  var left_img_idx = Math.floor(Math.random() * temp_mall_items.length);
  render_products(temp_mall_items[left_img_idx], left_img, left_h2);
  currently_displayed_left_product = temp_mall_items[left_img_idx];
  temp_mall_items.splice(left_img_idx, 1);
  console.log('displayed left: ', currently_displayed_left_product);

  var center_img_idx = Math.floor(Math.random() * temp_mall_items.length);
  render_products(temp_mall_items[center_img_idx], center_img, center_h2);
  currently_displayed_center_product = temp_mall_items[center_img_idx];
  temp_mall_items.splice(center_img_idx, 1);
  console.log('center left: ', currently_displayed_center_product);


  var right_img_idx = Math.floor(Math.random() * temp_mall_items.length);
  render_products(temp_mall_items[right_img_idx], right_img, right_h2);
  currently_displayed_right_product = temp_mall_items[right_img_idx];
  temp_mall_items.splice(right_img_idx, 1);
  console.log('displayed right: ', currently_displayed_right_product);

};

//Start of main function that runs the entire program
var handle_click_on_item = function(event) {
  // console.log('click');

  //registers that the click happened on an image
  if(event.target.id === 'center_img' || event.target.id === 'left_img' || event.target.id === 'right_img'){
  //matches up the image at the index of the array it's in, so it can accurately count how many times it has
  //been clicked on.
    if(event.target.id === 'left_img'){
      currently_displayed_left_product.num_times_clicked ++;
      console.log('you have clicked left', currently_displayed_left_product.item_name);
    } else if(event.target.id === 'center_img'){
      currently_displayed_center_product.num_times_clicked ++;
      console.log('you have clicked center', currently_displayed_center_product.item_name);
    } else if (event.target.id === 'right_img'){
      currently_displayed_right_product.num_times_clicked ++;
      console.log('you have clicked right', currently_displayed_right_product.item_name);
    }

    //checks to see if the total clicks is an even number. If it is, it refills the temp items array
    //if not, it moves on in the function. Meant to keep duplicate images from appearing between clicks, but is
    //not currently working at 100% accuracy. Still seems to be helping some.
    if(total_clicks % 2 === 0){
      temp_mall_items = [...all_mall_items];
      console.log('is even', temp_mall_items);
    }
    if(total_clicks % 2 !== 0){
      console.log('is odd,', temp_mall_items);
    }

    //decrements my click counter
    total_clicks --;

    pick_new_item ();

    //gives stop conditions - runs out once the user hits 25 clicks
    if (total_clicks <= 0){
      product_container.removeEventListener('click', handle_click_on_item);
      render_products_clicked_chart();
      render_products_shown_chart();
    }
  }
};
//end of handle_click_on_item function

//instantiating area. Constructor function feeds these into my all_mall_items array

new Mall_item('Click Me to Begin', './img/click-to-begin.jpg');
new Mall_item('R2D2 Bag', './img/bag.jpg');
new Mall_item('Banana Cutter', './img/banana.jpg');
new Mall_item('Bathroom iPad', './img/bathroom.jpg');
new Mall_item('Boots', './img/boots.jpg');
new Mall_item('Breakfast', './img/breakfast.jpg');
new Mall_item('Bubblegum', './img/bubblegum.jpg');
new Mall_item('Chair', './img/chair.jpg');
new Mall_item('Cthulhu', './img/cthulhu.jpg');
new Mall_item('Duck Bill', './img/dog-duck.jpg');
new Mall_item('Dragon Meat', './img/dragon.jpg');
new Mall_item('Pen', './img/pen.jpg');
new Mall_item('Pet Sweeper', './img/pet-sweep.jpg');
new Mall_item('Scissors', './img/scissors.jpg');
new Mall_item('Shark', './img/shark.jpg');
new Mall_item('Baby Sweeper', './img/sweep.png');
new Mall_item('Tauntaun', './img/tauntaun.jpg');
new Mall_item('Unicorn', './img/unicorn.jpg');
new Mall_item('USB Tentacle', './img/usb.gif');
new Mall_item('Watering Can', './img/water-can.jpg');
new Mall_item('Wine Glass', './img/wine-glass.jpg');

//Renders click to begin image to page, then takes it out of object array so it won't affect voting. Allows the
//first three votable objects to be completely random
var initial_images = function () {

  currently_displayed_left_product = all_mall_items[0];
  currently_displayed_center_product = all_mall_items[0];
  currently_displayed_right_product = all_mall_items[0];

  render_products(all_mall_items[0], left_img, left_h2);
  render_products(all_mall_items[0], center_img, center_h2);
  render_products(all_mall_items[0], right_img, right_h2);
};

//shows initial placeholder images once, then shifts it out of array. This is to prevent weird id and index mixups
//that happened the first images generated randomly
if(total_clicks === 11){
  initial_images();
  all_mall_items.shift();
  temp_mall_items.shift();
}

//adds the event listener to my product container, allowing the handle_click_on_item function to begin working
product_container.addEventListener('click', handle_click_on_item);

//look at goat lab for chart hookup


//var ctx = document.getElementById("myChart").getContext('2d');

