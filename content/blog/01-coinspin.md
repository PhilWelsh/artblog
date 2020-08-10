---
slug: 01-CoinSpin
title: 01-CoinSpin
date: 2020-08-10T17:37:06.861Z
image: assets/w..jpg
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

3d\
With a good knowledge of 3d programs (3ds max) this step was easy, but could be done in mutliple ways, actually my first thought was to create the symbol in photoshop, and in a 3d program trace around it and cut the image out of a cylinder (the coin). This had a lot of awkward issues around cutting exactly and fitting the 2 shapes together.

The second idea was to use a 'modifier', create the coin from a cylinder and apply a displacement modifier which would imprint an image in 3 dimensions using black and white as it's extreme depths. This raised problems because the amount of polygons (triangles) needed in the shape before the imprint would work correctly was too immense for my computer... it wasn't efficient and came off blocky.

option 3 was the best, and also easiest. Creating the symbol in 3d using the 'text' feature, which uses the font of the users choice to create a path of vertices, creating a solid object from that, and creating a solid coin. Then putting the 2 on top of one another and setting the pair to a 'boolean'. A boolean simply is a combo, where 2 shapes overlap like in a venn diagram, the result of the boolean can remove where the shapes overlap, only show the overlap or remove one from the other... as the coin is the main shape in this image I created the coin first and then after placing the symbols so they overlap the outside faces of the coin i set the boolean to remove them, creating an indent of where the shapes had overlapped onto the coin.\
\
Playing around with some other features i created a kind of coin-like imprint around the edges by creating a sphere and using the coin center as a pivot point, rotated and copied the sphere to exactly loop around it using the radial array function. Setting only 1 radial value to change it circled the coin perfectly creating an equal indent and then extrusion (one sphere in, one smaller sphere to push out) to give those little bumps.\
\
After having created the 3d model i then needed to render it. Choosing a flat camera angle makes a perfect loop easier, and these specific views are provided by 3ds max as in most 3d programs. Animation is simple, just selecting a rotation setting a keyframe at the beginning middle and end with a linear animation and rotating exactly halfway, then another 180 degrees at the end of the frame count.
