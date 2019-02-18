# busmall
This is where basic scaffolding is going to take place
What I need:
Give them a fun digital catalogue to navigate
Bus Mall wants to find out which items are most likely to sell, so they can feature only those
Think of this as marketing research to save Bus Mall resources
The app needs to display products to focus groups three at a time
    1. must be side by side
        i. should be selected randomly
        ii.
    2. should be uniform height
        a. will have to edit some of the images, can do via css
    3. group members will choose one product of three displayed
        a. app will store, calculate, display data (after their 25 clicks are up)
    4. Marketing team wants to know:
        a. total number of clicks (will max at 25)
        b. how many times each image was displayed
            i. this is to calculate the percentage of clicks each image gathered
            ii. will have to do calculates for this percentage
Styling:
    1. fully responsible for look and feel. Will need:
        a. custom font
        b. color palette
        c. nice layout
            i. looks like it's time to build a wireframe
App:
    1. display 3 random images from directory like so: [][][]
    2. when clicked:
        a. register clicks
        b. track clicks done on each image
        c. display new images
            i.must not duplicate images currently on page
                *. can I divvy them up equally between left, center, right?
            ii.must not duplicate images shown on most recent click
                *.make a constructor function that creates an object for each image
                    1.name of image
                    2.filepath
                    3.number of times shown
                    4.number of times clicked
                    5. create a property with a text string that functions as an HTML ID
    3. track how many times each image is displayed
        a. counters? ifs?
    4. After 25 clicks:
        a. turn off event listeners on images
        b. display list of products with vote number
            i."3 votes for dragon meat"
    
REMEMBER: treat this as a bunch of little problems
    
