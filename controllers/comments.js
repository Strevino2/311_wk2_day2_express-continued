const express = require("express");
const comments = require("../data/comments");

// Get all People
const list = (req, res) => {

    return res.json(comments);
  
  };


// Get one Person
const show = (req, res) => {

    const foundId = comments.find((item, index, arr) => item._id === +req.params.id);

    res.json(foundId);
  
  };

// Create ONE person
const create = (req, res) => {

    const length = comments.length;
    console.log(req.body);
    const newPerson = {
      id: length + 1,
      ...req.body,
    };
    // console.log(newPerson);
    comments.push(newPerson);
    res.json(comments);
  
  };

  module.exports = { list, show, create }