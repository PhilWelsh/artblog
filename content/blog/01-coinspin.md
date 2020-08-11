---
slug: 01-CoinSpin
title: 01-CoinSpin
date: 2020-08-10T17:37:06.861Z
image: assets/spincoin.gif
intro: Creating a Spinning 3d coin in CSS
---
So to start off, this is my first self set challenge for this site,

I noticed a gap in my hero image and thought about what i could fill it with, some kind of stylish flourish, a character, a vista or backdrop... but i wanted some form of movement, an animation... and just to slap in any old animated gif wouldn't be so interesting as an experiment, and from there the idea developed...

I had seen gifs or animated css being used to show 3d objects before, but hadn't really looked into it much, the same with any animation it is not really moving, it is just a series of images being swapped out quickly.\
I had on a previous incarnation of my website included spinning animations using CSS-animations, transform, or rotate3d as seen in the link below

<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d>

Apple and Samsung had caught my eye, as with a lot of stylish product pages, have a rotating animation as you scroll, the product will show itself off as though on a spinning podium on a display, (although i have some issues with their sites which might be something for another blog). The one that i noticed most was on [wealthsimple.com](https://www.wealthsimple.com), which is a beautiful and clean site, with a subtle blend of CSS animations, video and sprite sheets. So much that I had to inspect the elements on the page to be sure what was what.\
\
About halfway down the page is this beautiful 3d render of a coin, that spins as you scroll down. This was the goal for this week.\
\
So to break it into parts, i had to create the 3d image, render it to a 2d form and present it on a web page.

## 3d.

With a good knowledge of 3d programs (3ds max) this step was easy, but could be done in mutliple ways, actually my first thought was to create the symbol in photoshop, and in a 3d program trace around it and cut the image out of a cylinder (the coin). This had a lot of awkward issues around cutting exactly and fitting the 2 shapes together.

The second idea was to use a 'modifier', create the coin from a cylinder and apply a displacement modifier which would imprint an image in 3 dimensions using black and white as it's extreme depths. This raised problems because the amount of polygons (triangles) needed in the shape before the imprint would work correctly was too immense for my computer... it wasn't efficient and came off blocky.

![Blocky displacement modified coin](assets/coinspin-wip-2.jpg "Blocky displacement modified coin")

option 3 was the best, and also easiest. Creating the symbol in 3d using the 'text' feature, which uses the font of the users choice to create a path of vertices, creating a solid object from that, and creating a solid coin. 

![3d text spline](assets/coinspin-wip-1.jpg "3d text spline")

Then putting the 2 on top of one another and setting the pair to a 'boolean'. A boolean simply is a combo, where 2 shapes overlap like in a venn diagram, the result of the boolean can remove where the shapes overlap, only show the overlap or remove one from the other... as the coin is the main shape in this image I created the coin first and then after placing the symbols so they overlap the outside faces of the coin i set the boolean to remove them, creating an indent of where the shapes had overlapped onto the coin.\
\
Playing around with some other features i created a kind of coin-like imprint around the edges by creating a sphere and using the coin center as a pivot point, rotated and copied the sphere to exactly loop around it using the radial array function. Setting only 1 radial value to change it circled the coin perfectly creating an equal indent and then extrusion (one sphere in, one smaller sphere to push out) to give those little bumps.\
\
After having created the 3d model i then needed to light and render it. 

## Lighting.

I really didn't want to spend too long on lighting and textures, as that wasn't the main purpose of this task, but like all good learning exercises, there was more to it than just the primary goal.

I tried a few different textures, metal scratches and ambient reflection images, but these involved either mapping to one direction or unwrapping and applying the image specifically to this object which was a larger scope than this project needed, even the basic cylinder application that comes with 3ds max had some awkward stretching around certain area and in the end just set it to a basic colour with a lighter colour for it's reflection map... meaning that without light it would look a darker shade, but where the light hit brightest it would come off as a slightly lighter colour, in this case brown and yellow, giving it a real gold shine. boosting up it's shininess to a peak to mimic a metallic object that will reflect light strongest where it is most directly hit.

Looking into some basic lighting ideas as the 3d indent shadow was not showing up under my basic lighting setup.

![3d coin basic lighting](assets/coinspin-wip-3.jpg "3d coin basic lighting")

I saw some blogs explaining that just like photographers will set up lighting rigs, in 3d too i needed to create a strong light focused on my object, with a secondary source of light (effectively a lamp and a sun), for extra emphasis i added some small 'omni' lights which just brighten the whole scene. with nothing else in the scene to reflect or interfere with my 3d coin (which let's not forget needed to be added into a website)

## Rendering.

\
Choosing a flat camera angle makes a perfect loop easier, and these specific views are provided by 3ds max as in most 3d programs. Animation is simple, just selecting a rotation setting a keyframe at the beginning middle and end with a linear animation and rotating exactly halfway, then another 180 degrees at the end of the frame count. I chose 30 frames as it gave a smooth animation but not needlessly smooth, this would be being applied to a website so there's a balance between quality and weight, and this amount seemed appropriate.\
After getting a good aspect ratio and rendering as tightly to the object's width and height as i could (to avoid needing to crop later), the animation was rendered, not as a video format but as 30 separate images... (Actually 31, i'll get back to that later)

## Sprite Sheet.

Onto photoshop (finally), because of my tight camera work i could simply arrange the images in a row (or a grid to save space) 

**\[on writing this i assumed this was true and am going to look into this, i always assumed a grid is cleaner and easier to look at but also less memory for some reason]**

because i chose a nice number, 30 frames, i could split it evenly onto a 5x6 grid, the first mistake on this part was that in my animation i had made a perfect 30 frame rotation, with frames 1 and 30 being a full 360 degree twist, 1 and 30 were identical causing a freeze in the rotation. i re-animated and created a shorter 22 frame animation, so that the full twist could have a perfect halfway point of 11 steps, but with the last (duplicate) frame removed could fit into a 3x7 grid.\
One more thing i added on re-rendering was a 'green screen'. Because of the shadows on the coin at some places being very close to black, separating just the coin from the black background was difficult, so i changed the background in 3d to render as green as default, which would be far easier to separate from shades of gold no matter how light or dark.\
\
From here it was all up to the HTML/CSS\
I saved out the image file to a image hosting service, then called it in as a background image, creating keyframes to move the background-position in the x-axis for 7 frames, and repeat, then drop the y-position and repeat. (calculated on width of each frame). and Voila!!! \
according to caniuse.com background-image-x/y states that all modern browsers should have no trouble with this except for OperaMini and KaiOS (which i know very little about)

So there you go. My first challenge done, although i went a little over my 1 week time frame, i had delved into a bunch of different features and published my first challenge post. The coin spin by itself is available to see on my codepen

**\[additional: after this was created i uploaded the images to giphy to embed in this blog, but inserting multiple iframes was not only pointless but was cost-heavy for my laziness, and as they can't be saved as a gif file from render, i needed to create this gif in photoshop from the images. Effectively creating the animation my CSS was doing]**

<https://codepen.io/philwelsh/pen/dyMyKXq>

``

look forward to the next one, and have a great day.

## Take aways.

Break the task into more chunks, there were several elements that i underestimated in this project, meaning that each stage could not be completed to 100% satisfaction, although i am happy that i could put my perfectionism to the side to end a project (which is a weakness of mine) and i learned a lot, it is not a very polished piece and at some point i would like to return to fine tune certain things as stated before

* render quality (3ds max)
* Lighting and texturing (3ds max)
* Animation - i used a standard linear animation, where a smooth in and out (on the render) would be more captivating as the coin spins quicker then slows. (3ds max)
* More refined modelling, especially concerning some 'artifacts' like buggy smoothing around one of the coin bumps. Just requires some extra time, and also perhaps i overdid the detail on making an indent to have the bumps inside, which can't be seen and only adds to geometric problems. (3ds max)
* Blogging elements - the format and WYSIWYG elements used for this (Netlify's own) are a little lacking, and some styling and bugs are bothering me, awkward to render each bullet in this list and line breaks are inconsistent, sometimes starting a new line and other times spacing to a new paragraph. (Netlify)
