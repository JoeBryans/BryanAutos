import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_GEMINI_API_KEY });
// const Schema = `Calculation of a solar system with total power is 6kw , total energy consumption is 5000wh, 24volt battery, peak sun hours is 5, panel is 300watt `;
const sample = `Okay, let's break down the solar system calculation and estimate. Please note that this is a simplified estimation, and actual requirements may vary based on specific site conditions, equipment efficiency, and other factors. It's always best to consult with a qualified solar installer for a detailed assessment and design.

1. Battery Sizing:

Usable Battery Capacity: 12V * 200Ah * 60% (Depth of Discharge) = 1440 Wh per battery
Total Usable Battery Capacity Needed for Autonomy: 7 kWh (daily energy consumption) * 3 days = 21 kWh = 21000Wh
Number of Batteries (12V): 21000 Wh / 1440 Wh/battery = approximately 14.58 batteries. Since we need a 24V system for the inverter, let's calculate based on 24V.
Batteries in Series: To get 24V from 12V batteries, you need 2 batteries in series.
Number of Parallel Strings: Since we need approximately 14.58 batteries total. So we need 15 batteries with 2 batteries in series which equal to 7 strings. 7*2 =14 batteries so we need 8 strings, which is 16 batteries in total, each string will provide 24v. So we are taking 8 batteries to meet the autonomy requirement.
Total Batteries Required: 16 ( 8 parallel strings of 2 batteries each)
2. Solar Panel Sizing:

Total Watt-peak Required: 7 kWh (daily energy consumption) / 5 peak sun hours = 1400W
Number of 500W Panels: 1400 W / 500 W/panel = 2.8 panels. Round up to 3 panels to ensure you meet the energy demand, especially on less sunny days.
3. Inverter Sizing:

Given: 24V input voltage.
Inverter Capacity: You need an inverter with a continuous power rating of at least 10 kW (your total power requirement). It's always a good idea to add a safety margin of 20-25%. Therefore, consider an inverter with around 12kW.
4. Charge Controller Sizing:

The charge controller needs to be compatible with the solar panel array voltage and current, and the battery bank voltage (24V). Calculate the maximum current from the solar panels (Panel Wattage / Battery Voltage).
In our case, 1500W / 24V = 62.5 Amps. Therefore, the charge controller should be at least 62.5 Amps. A 80-amp or larger MPPT charge controller is recommended.
5. System Components and Estimated Costs (Example):

Solar Panels (3 x 500W): $600 - $900 (depending on brand and efficiency)
Batteries (16 x 12V 200Ah): $3200 - $6400 (depending on type - AGM, Gel, Lithium)
Inverter (12kW, 24V): $1500 - $3000 (depending on features and brand)
Charge Controller (80A MPPT): $300 - $600
Wiring, Fuses, Disconnects, Mounting Hardware: $500 - $1000
Installation Costs: $1000 - $3000 (highly variable)
Total Estimated Cost: $7100 - $14900+

Important Considerations:

Local Regulations and Permits: Check with your local authorities for any required permits or regulations for solar installations.
Professional Installation: It's highly recommended to have a qualified solar installer design and install your system to ensure safety and optimal performance.
Warranty: Check the warranty terms for all components, especially batteries and the inverter.
Grid-Tie vs. Off-Grid: This calculation assumes an off-grid system. If you are grid-tied, the battery sizing and inverter requirements might be different.
Load Profile: The 7 kWh daily energy consumption is an average. Consider your peak loads and adjust the inverter size accordingly.
Summary of Components:

Solar Panels: 3 x 500W
Batteries: 16 x 12V 200Ah (configured as 8 strings of 2 in series for 24V)
Inverter: 12kW, 24V input
Charge Controller: 80A MPPT
This provides a detailed breakdown. Remember to consult with solar professionals for a tailored system design!`;

const sample1 = `
battery:results
panel:results
inverter:results
charge controller:results
total:results
estimate:results
 

`;
export async function POST(req) {
  //   const body = await req.json();
  const { carImage } = await req.json();
  const prompt = `Extract all details about the car in this photo, including brand, model, year, interior color, transmission, fuel type, mileage, price, seats, body type, and features. The output should be in JSON format. If the car is not available, return "Not Available", Also, tell me if it's a new or old model.
  Follow the Following schema and return JSON data 
 [
      {
         model:"",  
         year:"",
         interior_color:"",
         transmission:"",
         fuel_type:"",
         mileage:"",
         price:"",
         seats:"",
         body_type:"",
         features:"",
         external_color:"",
         description:"",
         make:"",
         image:"",

               }
    ]  
  `;
  // const prompt = `Well detailed  Calculation on a solar system with total power:${totalPower} , total energy consumption is ${totalEnergy}, battery size is ${batterySize}, depth of discharge is ${DOD}, the  autonomy is ${autonomy} peak sun hours is ${peakSunHours}, panel is ${panelWattage},inverter input voltage is${inverterInput}, ensuring recommendation for the system. and also give the estimate of the solar system  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    // model: "gemini-2.5-flash-preview-04-17",
    contents: [prompt, carImage],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            model: {
              type: Type.STRING,
              description: "Model",
              nullable: false,
            },
            year: {
              type: Type.STRING,
              description: "Year",
              nullable: false,
            },
            interior_color: {
              type: Type.STRING,
              description: "Interior Color",
              nullable: false,
            },
            transmission: {
              type: Type.STRING,
              description: "Transmission",
              nullable: false,
            },
            fuel_type: {
              type: Type.STRING,
              description: "Fuel Type",
              nullable: false,
            },
            mileage: {
              type: Type.STRING,
              description: "Mileage",
              nullable: false,
            },
            price: {
              type: Type.STRING,
              description: "Price",
              nullable: false,
            },
            seats: {
              type: Type.STRING,
              description: "Seats",
              nullable: false,
            },
            body_type: {
              type: Type.STRING,
              description: "Body Type",
              nullable: false,
            },
            features: {
              type: Type.STRING,
              description: "Features",
              nullable: false,
            },
            external_color: {
              type: Type.STRING,
              description: "External Color",
              nullable: false,
            },
            description: {
              type: Type.STRING,
              description: "Description",
              nullable: false,
            },
            make: {
              type: Type.STRING,
              description: "Make",
              nullable: false,
            },
            image: {
              type: Type.STRING,
              description: "Image",
              nullable: false,
            },
            required: [
              "model",
              "year",
              "interior_color",
              "transmission",
              "fuel_type",
              "mileage",
              "price",
              "seats",
              "body_type",
              "features",
              "external_color",
              "description",
              "make",
              "image",
            ],
          },
        },
      },
    },
  });

  const data = JSON.parse(response.text);
  console.log(data);
  return NextResponse.json(data);
}
