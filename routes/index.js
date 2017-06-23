var express = require('express');
var router = express.Router();;
var BillBoard = require('billboard-hot-100')

/* GET home page. */
router.get('/', function(req, res, next) {
     BillBoard.init().then(function(billboard){
      var songs = billboard.getAllSongs()
      var numberOneSong=[];
      for(var i=0;i<100;i++){
      numberOneSong[i] = billboard.getSongAt(i);
       
  }
  console.log(numberOneSong);
  res.render('index',{songs:numberOneSong});   
  }).catch(function(err){
      console.log(err)
  })
});


module.exports = router;
