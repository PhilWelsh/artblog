---
slug: 02-fireburst
title: 02-Fireburst
date: 2020-08-18T22:03:28.425Z
image: >-
  https://res.cloudinary.com/philwelsh/image/upload/q_auto/f_auto/v1597788271/projects/fireburst/pngtree-fire-logo-icon-design-template-vector-png-image_705401_t1df33.jpg
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

Thankfully Adobe Media encoder saves the day and allows you to render direct to gif and add a bunch of handy toys too... unfortunately i don't have access to that, so i found another answer in 

<https://graphicdesign.stackexchange.com/questions/91994/how-to-export-a-gif-from-after-effects>

> go to Menu>Composition>Pre-Render and render it out as an uncompressed MOV file. Then you can drag that file onto Photoshop and it will open in the video timeline. From there you can "Save for Web" as an animated GIF file

To do.

Next steps are to add glow and embers, as well as perhaps different styles.
