const express = require('express');
const router = express.Router();
const tinyurl = require("tinyurl-api");
const linkModel = require("../models/link.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/*POST home page  */

router.post('/', async (req, res) => {
    const link = req.body.link;
    if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
      const data = await tinyurl(`${req.body.link}`)
      const linksData = {
        arr: {
          originalLink: req.body.link,
          shortLink: data
        }
      }
      const addData = await linkModel.create({originalLink: linksData.arr.originalLink,shortLink: linksData.arr.shortLink});
      const getData = await linkModel.findById(addData._id);
      const dataUrl = {
        data: {
          originalLink: getData.originalLink,
          shortLink: getData.shortLink,
        }
      }
      res.render('index',{getData: dataUrl});
    }else{
      res.render("index")
    }
  })
module.exports = router;