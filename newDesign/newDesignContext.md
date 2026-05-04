Context for the new Studio blumenspiess website:

General things for the refactor / implementation of the new design

1. use the same techstack and folder structure which was previously used.
2. the new design files are in the same folder. we only use the desktop version now
3. there wont be an cms so everything regarding this you can remove (the cms project still exists but its not necessarry for this project. we do everything manually)

What to not implement in the design:

1. there is this yellow interactive element. forget it for now and dont think about implementing it, we will do it afterwards.

Notes for implementation:

1. for images use stock placeholder images.
2. in the header are 4 sections : Studio.Blumenspiess , About , +++ and Projects
3. depending which page you are on , the page is highlighted in the header and should supposed to be in the url for example /about
4. clicking projects opens up a minimenu with multiple numbers which represent the project numbers.
5. in the text there should be prehighlighted text as you can see in the mock desing. use a library or proper css so we can highlight text in this color.
6. hovering a project number in the expanded header menu, opens up a image in the middle of the screen, hovering to the next number shows a different image , related to the project number which is currently hovered over.
7. the ratio of the website should usually be 1/3 text on the left. and 2/3 space for images on the right. you can scroll both areas seperately.
8. images on the right side can be moved around, while moving the opacity is reduced. when dropped it lands always on top (high z-index than the other images on the site currently )
9. the images on the left side - especially for a specific project - should be placed in a "Architecture , project board" style as you can see in the mockdesign. meaning the images are layering around a bit scattered, not being in a clear grid (which is usually the case) - maybe there is some kind of library for this! if so recommend it to me so i can have a look at it
