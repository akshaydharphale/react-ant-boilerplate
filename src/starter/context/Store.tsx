import React, { Component } from 'react'
import StarterContext from './starter-context'
import { getData, postData } from '../Api'

import {
    ApiError,
} from '../starter'
// import {} from '../../helper'
// import {  } from '../../utils'

class Store extends Component {
    state = {
        token: typeof Storage !== 'undefined' ? localStorage.token : '',
        loader: false,
        connectivity: true,
        user: {
            id: '',
            name: ''
        },
        data: {}
    }
    setApplicationState = (key: string, value: any) => {
        this.setState({ [key]: value })
    }

    getData(token: string) {
        getData(token)
            .then((response: any) => {
                this.setApplicationState('data', response.data)
            })
            .catch((error: ApiError) => {
                return error
            })
    }



    postData = (data: any) => {
        postData(this.state.token, data)
            .then((response: any) => {
                if (response.status == 200) {
                    console.log("response:", response.data)
                }
            })
            .catch((error: ApiError) => {
                return error
            })
    }


    public componentDidMount() {
        const { token } = this.state
        this.getData(token)
    }


    render() {
        return <StarterContext.Provider
            value={{
                state: this.state,
                setApplicationState: this.setApplicationState,
                getData: this.getData,
                postData: this.postData
            }}>
            {this.props.children}
        </StarterContext.Provider>
    }
}

export default Store