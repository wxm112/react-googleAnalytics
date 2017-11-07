import React from 'react';
// import ReactGA from 'react-ga';


// ReactGA.initialize('UA-My-ID-2', { debug: true });
// ReactGA.plugin.require('ec');

// ga('create', 'UA-My-ID-2', 'auto');

function withGaWrapper(WrappedComponent) {
    return class extends React.Component {
        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         gadata: this.props.products
        //     };
        // }

        componentWillMount() {
            const script = document.createElement("script");            
            script.innerHTML = `\nwindow.dataLayer = [];\n`;
            document.body.appendChild(script);
        }

        sendGaEcommerce() {
            window.dataLayer.push({
                    'id': 'P12345',                   // Product ID (string).
                    'name': 'Android Warhol T-Shirt', // Product name (string).
                    'category': 'Apparel/T-Shirts',   // Product category (string).
                    'brand': 'Google',                // Product brand (string).
                    'variant': 'Black',               // Product variant (string).
                    'list': 'Search Results',         // Product list (string).
                    'position': 1,                    // Product position (number).
                    'dimension1': 'Member'            // Custom dimension (string).
                });
        }

        render() {
            return <WrappedComponent sendGaEcommerce={this.sendGaEcommerce} {...this.props} />
        }
    }
}

export default withGaWrapper;