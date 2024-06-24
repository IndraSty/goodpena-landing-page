import Image from "next/image";
import React from "react";

const CardFitur = ({icon, title, desc}: CardFiturProops) => {
  return (
    <div className="card">
      <div className="icon-circle">
        <Image
          src={icon}
          width={40}
          height={40}
          objectFit="cover"
          alt="icon fitur"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CardFitur;
