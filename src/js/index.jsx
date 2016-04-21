import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

// Main ideas taken from: http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/


// Import styles
//require("style!../css/fonts.css");
//require("!style!css!less!../less/main.less");
//require("!style!css!less!highlight.js/styles/solarized_light.css");

// Render sidebarA

/* Your application must contain a getState() function that returns the state of
all objects as a JSON string. The getState() function retrieves the state of
objects in the application, so each student experiences that application in its
initial or last saved state. The name of the getState() function must be the
value of the get_statefn attribute of the jsinput element for the problem. */

window.getState = () => {
    return {};
}

/* Your application must contain a setState() function. The setState() function
is executed when the student clicks Check. The function saves application’s
state so that the student can later return to the application and find it as he
or she left it. The name of the setState() function must be the value of the
set_statefn attribute of the jsinput element for the problem. */

window.setState = (s) => {
    return;
}

/* Your application must contain a getGrade() function. The getGrade() function
is executed when the student clicks Check. The getState() function must return
the state of objects on which grading is based as a JSON string. The JSON string
returned by getGrade() is used by the Python code in the problem to determine
the student’s results, as explained below. The name of the getGrade() function
must be the value of the gradefn attribute of the jsinput element for the
problem. */

window.getGrade = () => {
    return "ah?"
}

//render(<Sidebar />, document.getElementById('sidebar'))
//render(<Routes />, document.getElementById('content'))
