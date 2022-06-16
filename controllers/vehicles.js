const express = require("express");
const vehicles = require("../data/vehicles");

const list = (req, res) => {

    return res.json(vehicles);
  
  };

const show = (req, res) => {

    const foundId = vehicles.find((item, index, arr) => item._id === +req.params.id);

    res.json(foundId);
  
  };

const create = (req, res) => {

    const length = vehicles.length;
    console.log(req.body);
    const newPerson = {
      id: length + 1,
      ...req.body,
    };
    // console.log(newPerson);
    vehicles.push(newPerson);
    res.json(vehicles);
  
  };

  module.exports = { list, show, create }