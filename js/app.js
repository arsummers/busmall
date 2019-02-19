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

//
var render_products = function(product, target_img, target_h2){
  console.log(product);
  product.num_times_shown++;

  target_img.src = product.filepath;
  target_h2.textContent = product.item_name;
};

var handle_click_on_item = function(event) {
    console.log('click');
  if(event.target.textContent === 'Hi click me'){
  }

  if(event.target.id === 'center_img' || event.target.id === 'left_img' || event.target.id === 'right_img'){
    if(event.target.id === 'left_img'){
      currently_displayed_left_product.num_times_clicked ++;
    } else if(event.target.id === 'center_img')
    {currently_displayed_center_product.num_times_clicked ++;
    } else if (event.target.id === 'right_img'){
      currently_displayed_right_product.num_times_clicked ++;
    }

    total_clicks --;

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

    //gives stop conditions - doesn't stop clicks if user clicks in section but not on an image
    if (total_clicks <= 0){
      product_container.removeEventListener('click', handle_click_on_item);

      for(var i = 0; i < all_mall_items.length; i++){
        var li_el = document.createElement('li');


        li_el.textContent = `${all_mall_items[i].item_name}  ${all_mall_items[i].num_times_clicked}/${all_mall_items[i].num_times_shown}`;

        result_container.appendChild(li_el);

      }
      // remove_imgs_and_render_results();
    }

    //this tries to log position of clicks to console, but really just seems random
    // console.log(all_mall_items[left_img_idx].num_times_clicked);
    // console.log(all_mall_items[center_img_idx].num_times_clicked);
    // console.log(all_mall_items[right_img_idx].num_times_clicked);

    //I'm trying to get the console log to print to the page
    var click_count_section = document.createElement('article');
    var left_clicks = document.createElement('p');
    left_clicks.textContent = all_mall_items[left_img_idx].num_times_clicked;
    click_count_section.appendChild(left_clicks);

    var center_clicks = document.createElement('p');
    center_clicks.textContent = all_mall_items[center_img_idx].num_times_clicked;
    click_count_section.appendChild(center_clicks);

    var right_clicks = document.createElement('p');
    right_clicks.textContent = all_mall_items[right_img_idx].num_times_clicked;
    click_count_section.appendChild(right_clicks);
  }
};

//image object instantiating area
//how do I make property that adds an ID?



new Mall_item('R2D2 Bag', './img/bag.jpg');
new Mall_item('Banana Cutter', './img/banana.jpg');
new Mall_item('Bathroom iPad', './img/bathroom.jpg');
new Mall_item('Cthulhu', './img/cthulhu.jpg');
new Mall_item('Duck Bill', './img/dog-duck.jpg');
new Mall_item('Dragon Meat', './img/dragon.jpg');
// new Mall_item('Pen', './img/pen.jpg');
// new Mall_item('Pet Sweeper', './img/pet-sweep.jpg');
// new Mall_item('Scissors', './img/scissors.jpg');
// new Mall_item('Shark', './img/shark.jpg');
// new Mall_item('Baby Sweeper', './img/sweep.png');
// new Mall_item('Tauntaun', './img/tauntaun.jpg');
// new Mall_item('Unicorn', './img/unicorn.jpg');
// new Mall_item('USB Tentacle', './img/usb.gif');
// new Mall_item('Watering Can', './img/water-can.jpg');
// new Mall_item('Wine Glass', './img/wine-glass.jpg');


var left_img_idx = Math.floor(Math.random() * all_mall_items.length);
    var center_img_idx = Math.floor(Math.random() * all_mall_items.length);
    var right_img_idx = Math.floor(Math.random() * all_mall_items.length);

currently_displayed_right_product = all_mall_items[right_img_idx];
    currently_displayed_center_product = all_mall_items[center_img_idx];
    currently_displayed_left_product = all_mall_items[left_img_idx];

render_products(all_mall_items[left_img_idx], left_img, left_h2);
    render_products(all_mall_items[center_img_idx], center_img, center_h2);
    render_products(all_mall_items[right_img_idx], right_img, right_h2);


product_container.addEventListener('click', handle_click_on_item);

/*Tried to add an event listener for clicks on some indices of the array. This hasn't worked, since it thinks that
all_mall_items.addEventListener isn't a function. Not sure how to fix this.
all_mall_items[0].addEventListener('click', handle_click_on_item);
console.log('left: ');
all_mall_items[1].addEventListener('click', handle_click_on_item);
console.log('center: ');
all_mall_items[2].addEventListener('click', handle_click_on_item);
console.log('right: ');*/









