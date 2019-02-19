'use-strict';

//click number countdown
var total_clicks = 5;
//objects from constructor instances get moved into here
var all_mall_items = [];

//creates variables for each picture display, unassigned here because their input changes with the randomizer
var currently_displayed_right_product;
var currently_displayed_center_product;
var currently_displayed_left_product;

//creates elements for each image and its caption to live in
var product_container = document.getElementById('product_container');
var result_container = document.getElementById('bus_results');

var left_img = document.getElementById('left_img');
var center_img = document.getElementById('center_img');
var right_img = document.getElementById('right_img');

var left_h2 = document.getElementById('left_h2');
var center_h2 = document.getElementById('center_h2');
var right_h2 = document.getElementById('right_h2');

//start of constructor function
var Mall_item = function (item_name, filepath) {
  this.item_name = item_name;
  this.filepath = filepath;
  this.num_times_shown = 0;
  this.num_times_clicked = 0;

  //pushes instances into the global array
  all_mall_items.push(this);
};

//Makes images log to page
var render_products = function(product, target_img, target_h2){
  console.log(product);
  product.num_times_shown++;

  target_img.src = product.filepath;
  target_h2.textContent = product.item_name;
};

//Start of main function that runs the entire program
var handle_click_on_item = function(event) {
  console.log('click');

  //registers that the click happened on an image
  if(event.target.id === 'center_img' || event.target.id === 'left_img' || event.target.id === 'right_img'){
  //matches up the image at the index of the array it's in, so it can accurately count how many times it has 
  //been clicked on.
    if(event.target.id === 'left_img'){
      currently_displayed_left_product.num_times_clicked ++;
    } else if(event.target.id === 'center_img')
    {currently_displayed_center_product.num_times_clicked ++;
    } else if (event.target.id === 'right_img'){
      currently_displayed_right_product.num_times_clicked ++;
    }

    //decrements my click counter
    total_clicks --;

    //cycles through images once the clicking function begins
    var left_img_idx = Math.floor(Math.random() * all_mall_items.length);
    var center_img_idx = Math.floor(Math.random() * all_mall_items.length);
    var right_img_idx = Math.floor(Math.random() * all_mall_items.length);

    /*trying to splice the array being fed into all_mall_items, to start preventing duplicates
   I'm keeping this here but commented out. Whenever I try to splice the array, it breaks the program because
    suddenly "product" can't be defined anywhere in the document.
    var remove_right = all_mall_items.splice(right_img_idx, 1);
    var remove_center = all_mall_items.splice(center_img_idx, 1);
    var remove_left = all_mall_items.splice(left_img_idx, 1);*/

    //tells the randomizer which of my three potential spaces to put images in
    currently_displayed_right_product = all_mall_items[right_img_idx];
    currently_displayed_center_product = all_mall_items[center_img_idx];
    currently_displayed_left_product = all_mall_items[left_img_idx];

    //displays images from array at the three different spaces
    render_products(all_mall_items[left_img_idx], left_img, left_h2);
    render_products(all_mall_items[center_img_idx], center_img, center_h2);
    render_products(all_mall_items[right_img_idx], right_img, right_h2);

    //gives stop conditions - runs out once the user hits 25 clicks
    if (total_clicks <= 0){
      product_container.removeEventListener('click', handle_click_on_item);

      //prints item names, times clicked, times shown to page
      for(var i = 0; i < all_mall_items.length; i++){
        var li_el = document.createElement('li');
        li_el.textContent = `${all_mall_items[i].item_name}  ${all_mall_items[i].num_times_clicked}/${all_mall_items[i].num_times_shown}`;
        result_container.appendChild(li_el);
      }
      // remove_imgs_and_render_results();
    }
  }
};
//end of handle_click_on_item function

//instantiating area. Constructor function feeds these into my all_mall_items array

new Mall_item('R2D2 Bag', './img/bag.jpg');
new Mall_item('Banana Cutter', './img/banana.jpg');
new Mall_item('Bathroom iPad', './img/bathroom.jpg');
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

//Credit for putting a second Math.random down here goes to Ed. This causes the first images when you load the page
//to show up randomly. This solved a major bug we had, which had image indices hiding directly behind the pictures
//I previously had coded directly into the HTML, which impacted vote numbers.
var left_img_idx = Math.floor(Math.random() * all_mall_items.length);
var center_img_idx = Math.floor(Math.random() * all_mall_items.length);
var right_img_idx = Math.floor(Math.random() * all_mall_items.length);

currently_displayed_right_product = all_mall_items[right_img_idx];
currently_displayed_center_product = all_mall_items[center_img_idx];
currently_displayed_left_product = all_mall_items[left_img_idx];

render_products(all_mall_items[left_img_idx], left_img, left_h2);
render_products(all_mall_items[center_img_idx], center_img, center_h2);
render_products(all_mall_items[right_img_idx], right_img, right_h2);

//adds the event listener to my product container, allowing the handle_click_on_item function to begin working
product_container.addEventListener('click', handle_click_on_item);








