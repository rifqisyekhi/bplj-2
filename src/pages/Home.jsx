import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import HeaderComponent from "../Components/HeaderComponent";
import CardAtom from "../Components/Atoms/CardAtom";
import RunningTextComponent from "../Components/RunningTextComponent";
import FooterComponent from "../Components/FooterComponent";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { GiDiscussion } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { GrObjectUngroup } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <NavbarComponent />
      <HeaderComponent />
      <div className="mb-6">
        <img src="image.png" className="h-24 w-full md:h-auto" />
      </div>
      <div className="mt-auto mx-12 flex flex-wrap gap-12 uppercase mb-3">
        <CardAtom
          text={"NSPK"}
          icon={<MdOutlineDocumentScanner />}
          link="/nspk"
        />
        <CardAtom
          text={"Layanan Pengujian"}
          icon={<IoConstructOutline />}
          link="/layanan-pengujian"
        />
        <CardAtom
          text={"Layanan Advis Teknis"}
          icon={<TbUsersGroup />}
          link="layanan-advis-teknis"
        />
        <CardAtom text={"Duratek"} icon={<GrObjectUngroup />} link="duratek" />
      </div>
      <div className="mt-auto">
        <RunningTextComponent
          text={
            "This is an infinite running text. React is amazing! — This is an infinite running text. React is amazing!"
          }
        />
        <FooterComponent />
      </div>
    </div>
  );
}
