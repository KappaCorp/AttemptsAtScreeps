module.exports = {
    getBotCount: function () {
    var creepCount = {};
    var allCreeps = Room.find(FIND_MY_CREEPS);
    for (i = 0; i < allCreeps; i++) {
      creepCount[allCreeps[i]] =+ 1; 
    }
    return creepCount;
  }	  
  checkDead: function () {
    var counts = this.getBotCount();
  }
}
