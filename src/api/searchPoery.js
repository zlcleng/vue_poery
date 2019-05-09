import axios from 'axios';

export function search(text){
  var url = 'https://api.apiopen.top/likePoetry'
  return axios.get(url,{
    params:{
      name:text
    }
  }).then((res)=>{
    return Promise.resolve(res.data)
  })

}
