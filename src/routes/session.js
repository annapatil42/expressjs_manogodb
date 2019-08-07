const router = require('express').Router();
 
router.get('/session', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.context.me.id,
  );
  return res.send(user);
});
 

module.exports =  router;
