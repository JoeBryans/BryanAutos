// api/analyze-car.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
// import { GoogleGenAI, Type } from "@google/genai";
// const prompt = `Extract all details about the car in this photo, including brand, model, year, interior color, transmission, fuel type, mileage, price, seats, body type, and features. The output should be in JSON format. If the car is not available, return "Not Available".
// Follow the Following schema and return JSON data
// [
//     {
//        model:"",
//        year:"",
//        interior_color:"",
//        transmission:"",
//        fuel_type:"",
//        mileage:"",
//        price:"",
//        seats:"",
//        body_type:"",
//        features:"",
//        external_color:"",
//        description:"",
//        make:"",
//        image:"",

//              }
//   ]

// `;
const prompt = `
  Analyze the car in this image and provide the following information in JSON format:
  {
    "make": "car make",
     mileage:"(e.g., 0, 100,000)",
    "model": "car model",
    "year": "year of the car",
    
       interior_color:"car interior color",
       transmission:" transmission",
        price:"car price in dollars ",
        seats:" total seats",
      fuel_type:"fuel type",
    "external_color": "car color",
    
    description:"short description of the car",
    "body_style": "car body style (e.g., sedan, SUV, truck)",
    "features": ["list", "of", "distinguishing", "features"]
  }
`;
const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_API_KEY);
export async function POST(req) {
  const { carImage, fileType } = await req.json();
  // console.log("carImage", carImage);
  // const prompt = `Extract all details about the car in this photo, including brand, model, year, interior color, transmission, fuel type, mileage, price, seats, body type, and features. The output should be in JSON format. If the car is not available, return "Not Available", Also, tell me if it's a new or old model.`;
  const imagePart = {
    inlineData: {
      data: carImage,
      mimeType: fileType,
    },
  };

  // const prompt=`Extract all details about the car in this photo, including brand, model,  and any visible customizations. Also, tell me if it's a new or old model.`
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  }); // Orgemini-1.5-pro 'gemini-1.5-flash'

  try {
    const result = await model.generateContent([prompt, imagePart]);
    console.log(result);
    const response = result.response;
    const text = response.text();
    const replaceText = text.replace(/```(?:json)?\n?/g, "").trim();
    // Parse the JSON response
    const carInfo = text;
    console.log("carInfo", replaceText);
    const res = JSON.parse(replaceText);
    return NextResponse.json(res);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: error });
  }
}
