# Vue Spline
A spline.design wrapper for VueJS to add 3D animations easily into your Vue projects

## Demo
# ![Vue Spline](https://i.imgur.com/G9b7po6.gif)

<!-- GETTING STARTED -->
<h2 id="getting-started"> :book: Getting Started</h2>

<p>Install the vue-spline package with npm</p>
<pre><code>$ npm install vue-spline</code></pre>

<p>Install the vue-spline package with yarn</p>
<pre><code>$ yarn add vue-spline</code></pre>


<!-- USAGE -->
<h2 id="usage"> :computer: Usage</h2>

Import the Spline component
```
import Spline from 'vue-spline';
Vue.component(Spline);
```

Using it inside a template
```
<spline :scene=YOUR_SCENE_OBJECT_HERE />
```

<!-- Properties -->
<h2 id="properties"> :pencil: Properties</h2>
- id (Id that you want to give the canvas)<br />
- scene (The JSON scene from spline.design, required)<br />
- className (Class name for the container element)<br />
- canvasStyle (Pass custom css to the canvas element)<br />
- containerStyle (Pass custom css to the container element)<br />


### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:
- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

:bug: ### Bug / Feature Request

If you find a bug kindly open an issue [here](https://github.com/YZYLAB/vue-spline/issues/new)

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/YZYLAB/vue-spline/issues/new).

Inspired [by](https://github.com/utkarshdubey/react-spline)