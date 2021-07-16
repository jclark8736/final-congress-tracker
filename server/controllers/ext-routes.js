const axios = require('axios')

const router = require('express').Router();

router.post("/zip", async (req, res) => {
    console.log(req.body)
    console.log("GET /ext/zip");
  
    try {
        console.log("THE URL: " + req.body.url);
        const apiData = await axios.get(req.body.url);
        // const apiData = await axios.get(
        //     "url": "https://whoismyrepresentative.com/getall_mems.php?zip=31023&output=json",
        console.log("DATA.DATA")
        console.log(apiData.data);
        res.status(200).json(apiData.data);
    } catch (err) {
        console.error(err);
        res.status(401).json(err);
    }
  });

  router.get("/sponsor", async (req, res) => {
      console.log(req.body)
      try {
          const sponsorData = await axios.get(
            `https://api.propublica.org/congress/v1/members/${req.body}.json`, apiKey
          );
          res.status(200).json()
      } catch (err) {
          console.error(err)
          res.status(401).json(err)
      }
  })



module.exports = router