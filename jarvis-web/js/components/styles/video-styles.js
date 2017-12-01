export default class VideoStyles {
  constructor() {
    this.styles = {
      video: {
        height: '400px'
      },
      videoContent: {
        right: '0',
        bottom: '0',
        minWidth: '100%',
        minHeight: '100%',
        width: '100%',
        height: '100%',
        zIndex: '-100'
      }
    }
  } 
  getStyle(name) {
    return(this.styles[name])
  }

}

