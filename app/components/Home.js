var Name = require("./Name");
var Nav = require("./Nav");
//include react
var React = require("react");

//create home page component
//will contain background

var Home = React.createClass({
    render: function() {
        return (
          <div>
            <Nav />
            <div className="masthead segment">

                <div className="ui page grid">
                    <div className="column">
                        <div className="introduction">
                            <Name />
                            <div className="ui hidden divider"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }

});

module.exports = Home;
