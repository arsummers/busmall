# busmall
Sources:
Splicing function: https://www.developphp.com/video/JavaScript/Get-or-Remove-Random-Array-Elements-Tutorial
Heading font: https://fonts.google.com/specimen/Chau+Philomene+One?selection.family=Chau+Philomene+One
Chart source: https://cdnjs.com/libraries/Chart.js
Chart and local storage functions built from Nicholas Carignan's Codefellows 201 demos.
TAS Ed Abrahamsen and Jackie helped extensively with debugging.
--------------------------------------------------------------------
What I need:
Give them a fun digital catalogue to navigate
Bus Mall wants to find out which items are most likely to sell, so they can feature only those
Think of this as marketing research to save Bus Mall resources
The app needs to display products to focus groups three at a time
    1. must be side by side ---> done
        i. should be selected randomly
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
        ---done, consistent.
    2. when clicked:
        a. register clicks
        ---done
        b. track clicks done on each image
        --done
        c. display new images
        ---done
            i.must not duplicate images currently on page
            ---in progress
            ii.must not duplicate images shown on most recent click
            ---in progress
                *.make a constructor function that creates an object for each image
                -----done. They all cycle and render
                    1.name of image
                    2.filepath
                    3.number of times shown
                    4.number of times clicked
                    5. create a property with a text string that functions as an HTML ID
    3. track how many times each image is displayed
        a. counters? ifs?
    4. After 25 clicks:
        a. turn off event listeners on images
        --done
        b. display list of products with vote number
        ---done
            i."3 votes for dragon meat"
    
REMEMBER: treat this as a bunch of little problems
    
STEP 1:
Constructor function to get images on page - done
Step 2:
Added a set of three filler images at the top, so that the ones showing as default don't count to votes.
    1. Voting clicks will be clicks -1, don't make a variable though, that breaks it. Write it into table.
Step 3.
Handle image display
    1.Can't show duplicate image on click 
    2.All images must be different than the one previously shown
        a. Splicing randomizes it perfect, BUT messes my count up. - registers clicks twice?


 

