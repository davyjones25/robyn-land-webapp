// Entry point for the build script in your package.json
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))

import "./controllers";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
