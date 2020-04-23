import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text} from '@tarojs/components'
import {AtButton,AtInput, AtTabsPane } from 'taro-ui'
import {setPricePlan, orderDetail} from './staff-apis'
import './order.scss'


interface State {
  id:string|undefined
  staffPrice:number
  servicePrice:number|string
  materialsPrice:number|string
  type:string
  doorFee:number|string
  nightFee:number|string
  totalAmount:number
  repairOrderOfferPlanVoList:Array<object>
  dispatchId:string
}
class Quote extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报价清单',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      staffPrice:0,
      id:'',
      type:'',
      doorFee:'',
      nightFee:'',
      servicePrice:'',
      materialsPrice:'',
      totalAmount:0,
      repairOrderOfferPlanVoList:[],
      dispatchId:'',
    }
  }
  componentWillMount(){
    let {id, type, dispatchId} = this.$router.params
    console.log(dispatchId)
    this.setState({
      id,
      type,
      dispatchId
    },()=>{
      this.getFee()
    })
  }
  getFee=()=>{
    orderDetail(this.state.id).then(res=>{
      if(res.data.code===0){
        let totalAmount=0
        let data = res.data.data.repairOrderOfferPlanVoList.filter(item=>{
          if(item.planType==='MATERIAL_PROJECT'||item.planType==='SERVICE_PROJECT'){
            return false
          }else{
            totalAmount+=item.amount
            return true
          }
        })
        this.setState({
          repairOrderOfferPlanVoList:data,
          totalAmount:totalAmount
        })
      }
    })
  }
  submitPlan = ()=>{
    if(this.state.servicePrice<=0){
      Taro.showToast({
        title:'请填写服务费',
        icon:'none'
      })
      return
    }
    Taro.showLoading({title:'提交中'})
    let params = [
        {
          "planType":"SERVICE_PROJECT",
          "serviceCost":this.state.servicePrice
        },
        {
          "planType":"MATERIAL_PROJECT",
          "serviceCost":this.state.materialsPrice
        }
      ]
    setPricePlan(this.state.dispatchId, params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({
          title:'报价方案提交成功',
        }).then(()=>{
          Taro.navigateBack()
        })
      }else{
        Taro.showToast({title:res.data.msg,icon:'none'})
      }
    })
  }
  handlePriceChange=(value,prop)=>{
    this.setState({[prop]:value*1})
  }
  render(){
    return (<View className='page quote-page'>
      {
        this.state.repairOrderOfferPlanVoList.map(item=>{
          return (<View className='top-price' key={item.id}>
            <View className='price-left'>{item.planName}</View>
            <View className='price-right'>￥ {item.amount}</View>
          </View>)
        })
      }
      <View className='other-price'>
        <View className='other-title'>人工服务费</View>
        <View className='other-row'>
          <AtInput
            name='servicePrice'
            type='number'
            placeholder='请输入人工服务费'
            value={this.state.servicePrice}
            onChange={(e)=>this.handlePriceChange(e,'servicePrice')}
          ></AtInput>
        </View>
      </View>
      <View className='other-price'>
        <View className='other-title'>材料费</View>
        <View className='other-row'>
          <AtInput
            name='materialsPrice'
            placeholder='请输入材料费'
            value={this.state.materialsPrice}
            onChange={(e)=>this.handlePriceChange(e,'materialsPrice')}
          ></AtInput>
        </View>
      </View>

      <View className='page-foot'>
        <View className='price-total'>
          <Text>总计：</Text>
          <Text className='text-warm'>￥{this.state.totalAmount+this.state.servicePrice+this.state.materialsPrice}</Text>
        </View>
        <Button onClick={this.submitPlan} className='btn submit-btn' >确认</Button>
      </View>
    </View>)
  }
}
export default Quote as ComponentType
