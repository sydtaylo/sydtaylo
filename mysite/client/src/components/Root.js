import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import AboutMe from './AboutMe/AboutMe'
import Art from './Art/Art'
import Coding from './Coding/Coding'
import DIY from './DIY/DIY'
import Electronics from './Electronics/Electronics'
import GraphicNovel from './GraphicNovel/GraphicNovel'
import Recipes from './Recipes/Recipes'
import Resume from './Resume/Resume'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
      	<Route path="/about-me" component={AboutMe} />
      	<Route path="/art" component={Art} />
      	<Route path="/coding" component={Coding} />
      	<Route path="/diy" component={DIY} />
      	<Route path="/electronics" component={Electronics} />
      	<Route path="/graphic-novel" component={GraphicNovel} />
      	<Route path="/recipes" component={Recipes} />
      	<Route path="/resume" component={Resume} />
      	<Route path="/:filter?" component={App} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root