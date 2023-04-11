const express = require('express');
const router = express.Router();
const tinyurl = require("tinyurl-api");
const linkModel = require("../models/link.model");