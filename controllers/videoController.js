import e from "express";

export const home = (req,res) =>{
    res.render("home");
}

export const search = (req,res) =>{
    res.render("search");
}

export const upload = (req,res) =>{
    res.render("upload");
}

export const videoDetail = (req,res) =>{
    res.render("videoDetail");
}

export const editVideo = (req,res) =>{
    res.render("editVideo");
}
