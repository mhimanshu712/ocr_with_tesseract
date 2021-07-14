const express = require('express')
const app = express()
const fs = requie('fs')
const multer = require('multer')
const {TesseractWorker} = require('tesseract.js')
const worker = new TesseractWorker();

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, "./uploads")
    }
})