const router = require('express').Router();
 
const User = require('../models/user');

router.get('/users',  async(req, res) => {
  const users =  await User.find();
  return res.send(users);
});


router.post('/user/create', async (req, res) => {
  var usr = new User;
  usr.username = req.body.username;
  usr.save();
  return res.send(usr); 
});

router.get('/user/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId);
  return res.send(user);
});
 
router.delete('/user/:userId', async (req, res) => {
  const user = await User.deleteOne({_id:req.params.userId});
  return res.send(user);
});


router.put('/user/update',async(req, res)=>{
     const user = await User.findById(req.body.id);
     user.username = req.body.username;
     user.save();
     return res.send(user);
})

module.exports =  router;
