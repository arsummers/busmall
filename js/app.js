'use-strict';
//constructor function for images
var total_clicks = 11;
var all_mall_items = [];

var currently_displayed_right_product;
var currently_displayed_center_product;
var currently_displayed_left_product;

var product_container = document.getElementById('product_container');

var left_img = document.getElementById('left_img');
var center_img = document.getElementById('center_img');
var right_img = document.getElementById('right_img');

var left_h2 = document.getElementById('left_h2');
var center_h2 = document.getElementById('center_h2');
var right_h2 = document.getElementById('right_h2');


var Mall_item = function(item_name, filepath) {
  this.item_name = item_name;
  this.filepath = filepath;
  this.num_times_shown = 0;//I want to make these arrays instead, not sure if that's the right path
  this.num_times_clicked = 0;
  all_mall_items.push(this);
};

var render_products = function(product, target_img, target_h2){
  target_img.src = product.filepath;
  target_h2.textContent = product.item_name;
};

var handle_click_on_item = function(event) {
  console.log('click');
  if(event.target.tagName === 'IMG'){
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

    currently_displayed_right_product = all_mall_items[right_img_idx];
    currently_displayed_center_product = all_mall_items[center_img_idx];
    currently_displayed_left_product = all_mall_items[left_img_idx];

    render_products(all_mall_items[left_img_idx], left_img, left_h2);
    render_products(all_mall_items[center_img_idx], center_img, center_h2);
    render_products(all_mall_items[right_img_idx], right_img, right_h2);

    if (total_clicks <= 0){
      product_container.removeEventListener('click', handle_click_on_item);
    }
  }
};


//image object instantiating area
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

currently_displayed_right_product = all_mall_items[0];
currently_displayed_center_product = all_mall_items[1];
currently_displayed_left_product = all_mall_items[2];

product_container.addEventListener('click', handle_click_on_item);










