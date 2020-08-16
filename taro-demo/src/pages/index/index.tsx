import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
// const cloud = require('wx-server-sdk');
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    // console.log(cloud)
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
