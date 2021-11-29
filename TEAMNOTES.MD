# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date
- 11/7/2021

#### What we did:
- Went over check-in 1 questions

#### What we'll do next
- Got on the same page regarding the post card and discussed how we're going to manage contributions

## Status check ins
These are dedicated status check-ins as this is a multi-week project
### Check-in 1
**What project / issue you're picking (link to it)**
- [Make a remixable post card for hax (#879)](https://github.com/elmsln/issues/issues/879)
**A hand drawn / computer sketch / XD / some annotation visually of what needs to be done or what pieces get broken out. This could be drawn on over top of a screen shot of the item or a photo of whiteboard sketches. Whatever make the most sense to you.**

![hax-postcard](https://user-images.githubusercontent.com/48635853/140667410-4f35780d-c776-4aa2-b196-d68442262f92.jpg)


**Initial questions / unknowns**
- Are there any conventions that we need to be aware of based on location for the postcard? (ex. local vs. international)
  
**What elements do you expect are needed for this design?**
- The post card itself 
- The card's image
- The card's stamp
- The post mark (including stamp and slotted element with adjustable location)

**What properties do you expect these to have?**
- The post card itself 
  - To: slot
  - From: slot
  - The note under the image
  - POST CARD title
- The card's image
  - Alt text
  - Image itself
- The card's stamp
  - Image
  - Alt text
- The post mark (including stamp and slotted element with adjustable location)
  - Locations slot
  
**Slots?**
- To: slot
- From: slot
- The note under the image
- POST CARD title
- Slots for the image, post mark, stamp
  
**What CSS / Styling unknowns are there presently?**
- Opacity for the stamp/images
- Rotating images for the picture itself
- Border styling
  
**What states does it have? can you click / hover to engage with it?**
- Outside of editing mode, there is no hover or click state in the spec
- In editing mode, text can be edited as well as the images
  
**What properties need mapped to HAX / the storybook? What can the user interact with?**
- The post card itself 
  - To: slot
  - From: slot
  - The note under the image
- The card's image
  - Alt text
  - Image itself
- The card's stamp
  - Image
  - Alt text
- The post mark (including stamp and slotted element with adjustable location)
  - Locations slot
### Check-in 2
This week we where able to.... 
- sketch out our component using grid--this will allow us to overlap some elements and hopefully will make implementing responsive design easier in the future
- research some CSS methods to help us achieve a realistic postcard 
- extract correct colors, images, and other resources from the example post-card.
- Set up correct fonts
- Add the post card's background
- Separate the image, postmark, and stamp into their own components and import these atoms into the molecule that is our post card

Next week we plan to...
- have the card look as similar as possible to the example post-card
  - this includes the post card image which is tilted and has tape on the edges
  - the postmark
  - the stamp
  - all correct fonts 
- begin deciding how our element will need to be wired to hax
- ensuring all nessisary texts/elements are slots 

### Check-in 3
This week(s) we where able to...
- implement the postmark, stamp, and post card image
- tilt the image and postcard
- start integrating I18N

Next week we plan too...
- work on overlapping postmark and title 
- continue to tweak CSS properties to improve the look of the card
- wire the card to hax
- remove all div borders

Right now our card looks similar to the example card, but minor adjustments still need to be made including exact coloring, positioning, and font styles. 
### Check-in 4
- 
- 
