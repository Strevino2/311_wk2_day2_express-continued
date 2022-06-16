const express = require("express");
const products = require("../data/products");

const list = (req, res) => {

    return res.json(products);
  
  };

const show = (req, res) => {

    const foundId = products.find((item, index, arr) => item._id === +req.params.id);

    res.json(foundId);
  
  };

const create = (req, res) => {

    const length = products.length;
    console.log(req.body);
    const newPerson = {
      id: length + 1,
      ...req.body,
    };
    // console.log(newPerson);
    products.push(newPerson);
    res.json(products);
  
  };

  module.exports = { list, show, create }