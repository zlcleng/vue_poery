import axios from 'axios'
//获取宋朝诗词
export function getSongPoetry (page,count){
  var url='https://api.apiopen.top/getSongPoetry';
  return axios.post(url,{
    params:{
      page:page,
      count:count
    }
  }).then((res)=>{
    return Promise.resolve(res.data)
  })
}
//获取唐朝诗词
export function getTangPoetry (page,count){
  var url='https://api.apiopen.top/getTangPoetry';
  return axios.post(url,{
    params:{
      page:page,
      count:count
    }
  }).then((res)=>{
    return Promise.resolve(res.data)
  })
}
