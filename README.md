# Blakenwite

##### A very, tiny plugin that changes the color of elements to their greyscale counterpart.

[Head on over to the main page for a quick tutorial and examples.](http://wimbletim.com/projects/bw.html)

With Black & White, all you need to do is call the function on an element and all the children in that element will have its colors converted to greyscale. The styles currently affected are:

* Background Color
* Text Color
* Border Color

It also takes opacity into consideration.

It **does not** add greyscale to the element the plugin is attached to, only the elements descendant of that element. 

### Images

Here's the deal with images being affected by this plugin. Images are **NOT** supported at this moment. I currently have a technique working that places every image onto its own canvas. Then, I map every pixel color, take the greyscale of that pixel, and place it back onto the canvas. The canvas is then absolutely positioned onto the image. Here's the issues with this technique:

1. If there a lot of images being affected or if the image is large, it takes a while to run through all the pixels of that image and map it out again.
2. Because the canvas is absolutely positioned on top of the image it is copying, if the page is resized, the canvas no longer sits on top image. 
3. If there is anything on top the image, such as text, the canvas will cover it up.

This technique is **NOT** included with this plugin, yet.

### Conclusion

I am constantly tweaking and adding new features. Keep checking back for updates.

*Requires jQuery v1.7.1+*