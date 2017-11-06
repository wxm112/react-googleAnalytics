import React from 'react';

function withGaWrapper(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                gadata: props.prducts
            };
        }

        sendGaEcommerce(products) {
            console.log(products);
        }

        render() {
            return <WrappedComponent sendGaEcommerce={this.sendGaEcommerce} {...this.props} />
        }
    }
}

export default withGaWrapper;