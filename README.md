# Swipe App

This app is a demonstration of a React/TypeScript/Webpack 'Matching App'.

Profiles are displayed one at a time where they can be 'liked' or 'rejected' by either clicking buttons or on touch devices, swiping left or right.

Currently, detailled profiles are not available but I may add this soon.


## Overview
The `CardStack` component loads profiles from the `ProfileService` where they are displayed as `ProfileCard` components. The `CardStack` component is responsible for proactively enqueuing profiles when they run low, and handling which profiles are 'liked' or 'rejected'.

In addition to displaying the profile and 'like' or 'reject' buttons, the `ProfileCard` component also handles touch events, allowing the card to be either swiped left or right. 

## Performance
- All automatic animations use CSS transitions on [compositor-only CSS properties](https://csstriggers.com/transform) (opacity and transform).
- Touch events for card swiping run in 'passive mode' which prevents the events from blocking rendering.
- Style updates for card swiping run only once per frame, scheduled by calls to `requestAnimationFrame()`. This reduces the strain on low-end devices.
- Newer browsers will also benefit from the use of the (`will-change` CSS property)[https://developer.mozilla.org/en-US/docs/Web/CSS/will-change] which helps the browser optimise for specific style changes.

## Accessibility
- Whilst I have not made specific accessiblity efforts, all elements are appropriately labelled.
- As the active card changes the app will automatically set focus to the new card.

## Improvements
- The `ProfileCard` component currently handles a bit too much. Ideally, this component would be visual rendering only and the touch event and animation handlers would be handled elsewhere. Perhaps a [Higher-Order-Component](https://reactjs.org/docs/higher-order-components.html).
