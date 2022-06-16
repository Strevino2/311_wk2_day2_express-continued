const express = require("express");
const contacts = require("../data/contacts");

const list = (req, res) => {

    return res.json(contacts);
  
  };

const show = (req, res) => {

    const foundId = contacts.find((item, index, arr) => item._id === +req.params.id);

    res.json(foundId);
  
  };

const create = (req, res) => {

    const length = contacts.length;
    console.log(req.body);
    const newPerson = {
      id: length + 1,
      ...req.body,
    };
    // console.log(newPerson);
    contacts.push(newPerson);
    res.json(contacts);
  
  };

  module.exports = { list, show, create }