import React from 'react';

export default React.createContext({
    state: {
        token: '',
        loader: false,
        connectivity: true,
    },
    setApplicationState: (key: string, value: object) => { },
    getData: (token: string) => { },
    postData: (token: string, data: any) => { },
});