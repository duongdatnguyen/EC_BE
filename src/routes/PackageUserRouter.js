const express=require('express');
const router=express.Router();


const PackagerUsed=require("../controllers/PackageUsedController");
const { route } = require('./UserRoute');


router.get('/listPackageUse',PackagerUsed.ListPackagerUsed);
router.post('/addPackageUse',PackagerUsed.AddPackagerUsed);
//router.put('/updatePackageUse/:orderId',PackagerUsed.);
router.delete('/deletePackageUse/:packusedID',PackagerUsed.DeletePackageUsed);
router.get("/listPackageUsedByPackage/:packusedId",PackagerUsed.ListPackagerUsedByIDPackage);
router.get("/listPackageUsed",PackagerUsed.ListPackagerUsed);
router.get("/listPackageUsedByName/:NameUsed",PackagerUsed.ListPackagerUsedByName);

module.exports=router;   