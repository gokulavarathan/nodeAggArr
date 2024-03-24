var express = require('express');
var router = express.Router();
const controller = require("../controller/index")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/createUser",controller.createUser);

router.put("/updateArrayOfString",controller.updateArrayOfString);

router.put("/updateArrayOfObjects",controller.updateArrayOfObjects);



router.post("/addComments",controller.addComments);
router.post("/addReply",controller.addReply);

router.post("/editReply",controller.editReply);

router.get("/viewAllComRply",controller.viewCommentsAndReply);



module.exports = router;
