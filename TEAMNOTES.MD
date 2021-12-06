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
- implement the postmark, stamp, and post card images:
  ```
  <div class="foregroundElements">
    <div class="postage">
      <post-card-postmark></post-card-postmark>
    </div>
    <div class="image">
      <post-card-photo></post-card-photo>
    </div>
    <div class="stamp">
      <post-card-stamp></post-card-stamp>
    </div>
    <div class="tofrom">
      <h3>${this.t.to}</h3>
      <slot name="to"></slot>
      <h3>${this.t.from}</h3>
      <slot name="from"></slot>
    </div>
    <div class="message">
      <slot name="message"></slot>
    </div>
  </div>
  ```
- tilt the image and stamp:
  ```
  .cardImage {
    width: var(--img-width);
    height: calc(var(--img-width) * 0.7);
    z-index: 2;
    transform: rotate(-3deg);
   }
  ```
- start integrating I18N:
  ```
  this.t = {
      label: 'Post Card',
      to: 'To',
      from: 'From',
  };

  window.dispatchEvent(
    new CustomEvent('i18n-manager-register-element', {
      detail: {
        context: this,
        namespace: 'post-card',
        localesPath: `${decodeURIComponent(import.meta.url)}/../locales`,
        updateCallback: 'render',
        locales: ['en', 'es'],
      },
    })
  );
  ```
- update the background, stamp, and image detailing to better reflect the spec
  - tape pieces over image, shadow behind image:
    ```
    .cardShadow {
      width: calc(var(--img-width) * 1.05);
      height: calc(var(--img-width) * 0.75);
      z-index: 2;
      opacity: 0.5;
      transform: translate(1%, 2.5%) rotate(0.25deg);
    }

    .cardImage {
      width: var(--img-width);
      height: calc(var(--img-width) * 0.7);
      z-index: 2;
      transform: rotate(-3deg);
    }

    .cardTape {
      width: auto;
      height: calc(var(--img-width) * 0.8);
      z-index: 3;
    }
    ```
  - stamp image laid over a stamp background to make it look more realistic:
    ```
    .stampImage {
      width: var(--img-width);
      height: calc(var(--img-width) * 1.25);
      justify-self: center;
      padding-top: 10px;
      transform: rotate(1.5deg);
      z-index: 3;
    }

    .stampBackground {
      width: calc(var(--img-width) + 20px);
      height: calc(var(--img-width) * 1.25 + 20px);
      z-index: 2;
    }
    ```

Next week we plan to...
- work on overlapping postmark and title 
- continue to tweak CSS properties to improve the appearance of the card
- wire the card to hax
- remove all div borders

What insights you gained from the class activity to implement:
- We were able to implement some of the suggested changes, including tape over the image and (starting) the i18n integration.
- Going forward, we will be increasing font size and making some visual updates to the postcard's layout to better reflect.
- We'll also be wiring our card to hax and adding storybook details as we approach a final product.

**_Right now our card looks similar to the example card, but minor adjustments still need to be made including exact coloring, positioning, and font styles._**

### Check-in 4
**_This was a super busy week for the group, so we were unable to complete the assignment to fully match the Post Card spec. However, we have devloped a plan which we believe will allow us to remain on track and complete the project by the December 14 due date._**

#### What we completed this week:
- Fix label ("Post Card") so it's a variable rather than part of the background image
- Make CSS updates to allow for postmark overlap on label, centering of label on postcard regardless of I18N language
- Compeleted I18N setup, added six languages to the available options: German, Spanish, French, Italian, Japanese, Mandarin Chinese
- Fully wired the card to HAX
- Responsive resizing based on a proportionate scale transformation, including five different sizes

#### What's still left/when we plan to accomplish it by:
To be done by the mid-week:
- Create four fully documented variations of our Post Card (one per groupmate)
- Adjust the slots in the To and From sections of the card to further improve progressive enhancement

To be done prior to the weekend:
- Fix grid layout to ensure card better resembles spec
  - If this does not work the way we want it to, our plan is to create positioning using percentages 
- Once the layout is better set, font sizes will be updated to ensure consistency with the spec

To be done prior to the due date: 
- Remove div lines used for scaffolding, eliminate any unneccessary code 
