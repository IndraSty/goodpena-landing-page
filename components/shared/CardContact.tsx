import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi";

const CardContact = ({
  icon,
  title,
  desc,
  btn_title,
}: CardContactProops) => {
  return (
    <div className="card">
      <div className="flex items-center gap-4">
        <div className="icon-circle-ctc">
          <Image
            src={icon}
            width={30}
            height={30}
            objectFit="cover"
            alt="icon fitur"
          />
        </div>
        <h2>{title}</h2>
      </div>
      <p>{desc}</p>
      <Button className="flex gap-3 items-center">
        {btn_title} <HiArrowRight />
      </Button>
    </div>
  );
};

export default CardContact;
