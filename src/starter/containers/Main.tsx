import { Layout, Icon } from 'antd'
import React from 'react'
import StarterContext from '../context/starter-context'
// import {  } from '../../components'
interface Props {
}

type LocalState = Readonly<{
}>

class Main extends React.PureComponent<Props, LocalState> {
  static contextType = StarterContext

  public readonly state = {
  }

  public componentDidMount() {
    const { setApplicationState } = this.context;
    window.addEventListener('online', () => {
      setApplicationState('connectivity', true)
    })
    window.addEventListener('offline', () => {
      setApplicationState('connectivity', false)
    })
  }
  public render() {
    const { Content } = Layout
    // const { connectivity } = state

    return (
      <Layout className="starter-container">
        <Layout>
          <Content>
              Starter Init
          </Content>
        </Layout>
        {
          this.context.state.loader &&
          <div className="loader">
            <Icon style={{ fontSize: '36px', color: '#fff' }} type="loading" />
          </div>
        }
      </Layout >
    )
  }
}

export default Main