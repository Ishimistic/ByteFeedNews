require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.urlencoded({extended:true}));

const API_KEY = process.env.API_KEY;

function fetchNews(url, res){
    axios.get(url)
    .then(response =>{
        if(response.data.totalResults > 0){
            res.json({
                status:200, 
                success: true,
                message: "Data has been successfully fetched",
                data: response.data
            });
        }else{
            res.json({
                status:200,
                success:true,
                message:"No data is present to show",
            });
        }
    })
    .catch(error => {
        res.json({
            status:500,
            success:false,
            message:"Failed to fetched data from api",
            error:error.message
        });
    })
}

//Route to get all news
app.get("/all-news", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    // let searchQuery = req.query.q || ''; // Default to an empty string if no query is provided

    let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
});

//Route for top-headlines
app.options("/top-headlines", cors());
app.get("/top-headlines", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || "business";

    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
})

//Country specific news
app.options("/country/:iso", cors());
app.get("/country/:iso", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    const country = req.params.iso;

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
})

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running");
});