import Utils from '@/utils'
export default class Player {
  constructor (name, points, playing=true) {
    this.name = name
    this.points = points
    this.playing = playing
    this.uniqueId = Utils.uniqueId();
  }    
}
