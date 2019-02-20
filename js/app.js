'use-strict';

//click number countdown
var total_clicks = 25;
//objects from constructor instances get moved into here
var all_mall_items = [];
var temp_mall_items = [];

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
  temp_mall_items.push(this);
};

//Makes images log to page
var render_products = function(product, target_img, target_h2){
  //console.log(product);
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

    //tells the randomizer which of my three potential spaces to put images in
    //code got buggy when I had this commented out, won't run when I let it back in, so I'm keeping it out for now
    //can't read num_times_clicked on currently_displayed_center_product, because it comes up as undefined when this
    //bit of code runs
    //currently_displayed_left_product = temp_mall_items[left_img_idx];
    //currently_displayed_center_product = temp_mall_items[center_img_idx];
    //currently_displayed_right_product = temp_mall_items[right_img_idx];

    //displays images from array at the three different spaces
    var left_img_idx = Math.floor(Math.random() * temp_mall_items.length);
    render_products(temp_mall_items[left_img_idx], left_img, left_h2);
    temp_mall_items.splice(left_img_idx, 1);

    var center_img_idx = Math.floor(Math.random() * temp_mall_items.length);
    render_products(temp_mall_items[center_img_idx], center_img, center_h2);
    temp_mall_items.splice(center_img_idx, 1);

    var right_img_idx = Math.floor(Math.random() * temp_mall_items.length);
    render_products(temp_mall_items[right_img_idx], right_img, right_h2);
    temp_mall_items.splice(right_img_idx, 1);

    //set up splice here
    //spread operator - feeds values into target array
    temp_mall_items = [...all_mall_items];

    temp_mall_items.splice(left_img_idx, 1);
    temp_mall_items.splice(center_img_idx, 1);
    temp_mall_items.splice(right_img_idx, 1);
    //console.log('heeey:', temp_mall_items);
    //console.log('alll:', all_mall_items);

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



/*==========================================BEGIN CHART================ ============================ */

//Is there a way to have it display all the mall items without manually typing them in?
//Not linked to data generated yet, because my click counter turned super buggy when I started splicing
//leaving in some random numbers in the data variable, since I don't know how to filter data into it, and I want
//to have working counters before I work on that. Keeping it as a pie chart for now, so you can see which array
//items don't get shown

var ctx = document.getElementById('myChart').getContext('2d');

var data = [1, 3, 10];

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: all_mall_items,
    datasets: [{
      label: 'Best Selling Bus Mall Items',
      data: data,
      backgroundColor: [
        'blue',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
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
    },
    animation: {
      easing: 'easeInCubic',
      duration: 1000
    }
  }
});


