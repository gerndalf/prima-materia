# Prima Materia Portfolio
### OpenLayers + Vite

This example demonstrates how the `ol` package can be used with [Vite](https://vitejs.dev/).

To get started, run the following (requires Node 14+):

    npm install

Then change into your new `prima-materia` directory and start a development server (available at http://localhost:5173):

    cd prima-materia
    npm start

### Dev Process
I largely utilized a few specific resources when creating this page:
    - OpenLayers wiki feature examples
    - OpenLayers API documentation
    - Prior experience using OpenLayers

Node has a default create ol function that supplied me with the basic HTML/CSS structure and provides a convenient map to start with. I then created my points of interest objects and looked up particular features I wanted introduced (gif icons and panning functionality).

Based on my proposal, I already had a very strong concept in mind so executing the design was very straightforward. I spent most of the time actually working on the page content, I wanted it to be literal and also a bit symbolic to capture my journey.

I didn't run into too many majour difficulties besides typical unpredictable JS execution. The map can introduce some odd behaviour regarding synchronous code. Whenever I bumped into something odd, I just simplified the feature as much as possible to root out the behaviour. I feel my current codebase is rather streamlined, but only rather. OpenLayers requires some pretty verbose definitions to get everything working which inherently decreases code comprehension.
