import React from 'react';

function withGaWrapper(WrappedComponent) {
    return class extends React.Component {
        componentWillMount() {
            const script = document.createElement("script");
            script.innerHTML = `\nwindow.dataLayer = [];\n`;
            document.body.appendChild(script);
        }

        sendGaEcommerce(products) {
            if (products.length > 0) {
                products.forEach((product) => {
                    window.dataLayer.push(product);
                }, this);
            }
        }

        render() {
            return <WrappedComponent sendGaEcommerce={this.sendGaEcommerce} {...this.props} />
        }
    }
}

export default withGaWrapper;