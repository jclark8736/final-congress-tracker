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



module.exports = router