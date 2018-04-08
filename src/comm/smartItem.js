const ImgItem= {
  props: ['data'],
  render(createElement) {
    return createElement('div', [
      createElement('p', '图片组件'),
      createElement('img', {
        attrs: {
          src: this.data.url
        }
      })
    ])
  }
}

const VideoItem={
  props:['data'],
  render(createElement){
    return createElement('div',[
      createElement('p','视频组件'),
      createElement('video',{
        attrs:{
          src:this.data.url,
          controls:'controls',
          autoplay:'autoplay',
        }
      })
    ])
  }
}

const TextItem={
  props:['data'],
  render(createElement){
    return createElement('div',[
      createElement('p','纯文本组件'),
      createElement('p',this.data.text)
    ])
  }
}

export {ImgItem,VideoItem,TextItem}
