---
slug: 02-fireburst
title: 02-Fireburst
date: 2020-08-18T22:03:28.425Z
image: >-
  https://res.cloudinary.com/philwelsh/image/upload/q_auto/f_auto/v1599081234/philwelsh.com/blog-images/compiled-fire1_bmps3r.gif
intro: Creating an animated flame in AE
---
Learning from my last project i refined my process a little, starting with a simple task that i could expand upon, so that the first draft would look rough but then i could learn and add iterations and show improvements on a basic setup

**Netlify-CMS, Gatsby, Cloudinary Setup**

I also updated the CMS to save drafts and integrate better with Cloudinary, I also improved the layout of both the preview (that i can see as i am writing) and the finished blog. On top of this i added automatic transformations, on my cloudinary (image hosting) setup i set the quality and file-type to be reduced to the lowest file size without losing data (lossless compression).

Another key change was to blog each day i made changes, so that i could type up results of each day and both feel satisfied with work done and record things learned chronologically and whilst i could more easily remember and record them. Unfortunately during my adjustments the data for my post was lost.\
\
**Animation**

Creating the basic fire animation i needed to first learn more about After Effects as it had been some time since i had used it. After getting the basic shapes created and colouring and applying effects and viewing timelines, i created a simple flame shape with a wave warp effect, i then adjusted the animation to the affect i wanted a subtle horizontal wave that would be slow and not too strong.\
I then placed smaller copies of this animation onto lighter coloured flame shapes within (labelling correctly of course) representing the hotter centre of the fire, where the combustion would be emitting from.

Now i had a nice flame animation, but it is a bit uncontrollable (much like a real fire!) but i want to take hold of this animation and perfect a loop cycle, with keyframes this would be easy but the effects don't show a start or end.

**Looping**

After the basics were done i looked into timelines, render outputs and such. Looping the wave effect was painfully easy and obvious at second glance, just looking at the wave speed on each layer was in fact repetitions per number of seconds, with one set to 1.5 and the others set to 2, the smallest number available was 6. My first animation was over 1.5gb... looking into this there are a heap of settings to adjust, that my tiny little flickering fire did not need such high fidelity audio or blending between frames. \
I also considered the burdon any even slightly large render would take on my image hosting provider and thought ... yes... another animated gif... I mean, it makes sense for the cheapest hosted image, but doing this process for every animation i host is going to be annoying. 

Thankfully Adobe Media encoder saves the day and allows you to render direct to gif and add a bunch of handy toys too... unfortunately i don't have access to that, so i found a number of other answers.

I spent days trying to make AirBnB's lottie/bodymovin to work (which i will definitely come back to as i have a major interest in it.) but using particle effects and a plugin not supported fully with my current version of AE, I returned to photoshop, but this time imported 'image as sequence' which automatically compiles all files in selected folder in sequence. making rendering out to gif a lot faster... though still inconvenient... and with Bodymovin the animation could have been compiled into vectors low in size enough to use in a web application with little slow-down

**Particle effects for embers**

Using a particle effect as triangles and setting gravity to negative to make embers fly upwards... before i realised there was a fire setting with a fluttering wind style effect.

Looped animation of particle effects by adding a duplicated truncated version of the beginning at the end to fade in as animation fades out

Added Glow, to firebase layers and embers

Additionally could set the polygons on the embers to fit a shape, using another layer as the texture. but triangles or squares that fit the motion direction seemed just as good as any other shape for embers, just keeping them small with random sizing and glows.

Thoughts - particle effects have always been easier to perform with more variables more easily accessible however maybe just because of my larger knowledge in 3d. Animation timelines, looping and 2d shapes are easy and nice but rendering either comes out ridiculously large or super compressed.

**Take Aways.**

I'm happy with the things i learned and definitely a good starting off point in seeing the cool things you can easily do with AE. I'm looking forward to seeing what else i can add or do with this program, though the large render file sizes and reliance on plugins make me a little more hesitant to use this and not the 3d effects in a program like 3ds max which has a myriad of built in particle and environment effects.
