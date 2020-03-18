import React from 'react'

class Errorboundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong please check the console log</h2>
        }
        return this.props.children

    }
}

export default Errorboundary;