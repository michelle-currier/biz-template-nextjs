// import React from "react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    role: "Client",
    testimonial: "This service is fantastic! Highly recommend to anyone.",
  },
  {
    name: "Jane Smith",
    role: "xyz Construction",
    testimonial: "Exceptional experience, the team was incredibly helpful.",
  },
  {
    name: "Sam Wilson",
    role: "Client",
    testimonial: "A+ service and support. I will definitely use it again.",
  },
];

const Testimonials = () => (
  <div className="mx-auto justify-between max-w-7xl w-full">
    <hr className="border-teal-700 my-6 mx-auto w-full" />
    <h4 className="text-4xl font-bold text-center mb-8">Testimonials</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
      {testimonials.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-teal-800">
            {item.name} - <i>{item.role}</i>
          </h3>
          <p className="text-gray-700">{item.testimonial}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
