var React = require('react');

var Name = React.createClass({
    render: function() {
      var sentence = "Hi, my name's June Lara, and I'm a Full Stack ";
        return (
            <header className='main'>
                <h1 className='cursor'>
                    {sentence}
                    <span className='type'>
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                    </span>
                </h1>
            </header>

        );
    }
});

module.exports = Name;
