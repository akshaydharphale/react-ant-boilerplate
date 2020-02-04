import { Layout, Table, Avatar } from 'antd'
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

    const columns = [
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (avatar: any) => <Avatar src={avatar} />
      },
      {
        title: 'Name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      }, {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
      }, {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      }
    ]

    return (
      <Layout className="starter-container">
        <Layout>
          <Content>{this.context.state.data.length > 0 &&
            <Table dataSource={this.context.state.data} columns={columns} />
          }
          </Content>
        </Layout>
        {
          this.context.state.loader &&
          <div className='box'>
            <div className="loader" />
          </div>
        }
      </Layout >
    )
  }
}

export default Main