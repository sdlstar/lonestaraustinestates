"use client";

import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";


function CarouselComponent() {
  return (
    <div className="relative h-[60vh] mx-[1vw]">
      <Carousel slideInterval={4000} className="shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        />
      </Carousel>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button className="bg-white opacity-90 text-black">Book now!</Button>
      </div>
    </div>
  );
}

export default CarouselComponent;