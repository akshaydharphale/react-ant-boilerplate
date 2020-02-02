import React from 'react'
import Main from './Main'
import Store from '../context/Store'
class Starter extends React.Component {
    public render() {
        return (<Store><Main /></Store>)
    }
}

export default Starter