# Next.js 15 Image Component Error: Missing 'src' attribute

This repository demonstrates a common runtime error in Next.js 15 applications when using the `Image` component from `next/image`.

## Problem

Forgetting to specify the `src` attribute when importing an image within a component results in a runtime error: `Error: Image failed to load`.

## Solution

Always ensure that the `src` attribute is correctly specified when using the `next/image` component.  This attribute tells the component which image to display.

## How to reproduce the error

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser's console.

## How to fix the error

Refer to the `bugSolution.js` file for a corrected version of the code.