import axios from 'axios'

//随机一首诗词推荐：
export function recommendPoetry (){
   var url = 'https://api.apiopen.top/recommendPoetry';
   return axios.get(url,{
     params:{}
   }).then((res) => {
      return Promise.resolve(res.data)
   })
}
//随机单句诗词推荐
export function recommendSinglePoetry (){
  var url = 'https://api.apiopen.top/singlePoetry';
  return axios.get(url,{
    params:{}
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}








