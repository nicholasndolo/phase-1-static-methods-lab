class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charArt(0).toUpperCase + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, "")
  }
  static titleize(sring){
    const words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let message = string.split("")
    for(const word of words){
      for(const item of message){
        if(word !== item){
          item.toUpperCase
        }
      }
    }
  }
}