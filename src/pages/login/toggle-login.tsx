import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image,Button, Navigator} from '@tarojs/components'
import {loginApp} from './service'
import './toggleLogin.scss'

interface State {
  openId:string,
  readed:boolean
}
class Login extends Component{
  config: Config = {
    navigationBarTitleText: '登录'
  }
  state:State = {
    openId:'',
    readed:false,
  }
  wxAutoLogin= ()=>{

    loginApp()
    // loginApp()
    // Taro.showLoading({
    //   title:'一键登录中'
    // })
// console.log(param)
    // authBindPhone(param).then(res=>{
    //   Taro.hideLoading()
    //   if(res.code===0){
    //     Taro.reLaunch({
    //       url:'/pages/index/index'
    //     })
    //   }else{
    //     Taro.showToast({
    //       title:res.msg
    //     })
    //   }
    // })
  }
  toggleReaded = ()=>{
    this.setState((prevState:State)=>{
      return {
        readed:!prevState.readed
      }
    })
  }
  render(){
    return (<View className='page-content login-page'>
      <View className="icon-wrap">
        <View className="icon-title">欢迎，速达优服</View>
      </View>
        <View className='btn-wrap'>
          <Button open-type="getUserInfo" className='wx-login' onGetUserInfo={this.wxAutoLogin}>微信用户一键登录</Button>
          {/*<Navigator className='to-login' url='/pages/login/login'>手机号验证注册/登录</Navigator>*/}
        </View>
        <View className='protocal-wrap'>
          <View className='read-proto' onClick={this.toggleReaded}>
            {
              this.state.readed?
                (<Image className="radio" src={require("../../assets/imgs/tmp/login-check.png")} ></Image>)
                :
                (<Image className="radio" src={require("../../assets/imgs/tmp/login-check-none.png")}></Image>)
            }
          </View>
          <View className="login-protocal">
            我已阅读并同意
            <Navigator className="out-link" url="/pages/login/protocal?type=service">《服务协议》</Navigator>
          </View>
        </View>
    </View>)
  }
}

export default Login as ComponentType