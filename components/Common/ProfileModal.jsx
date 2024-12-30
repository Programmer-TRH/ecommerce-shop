import Cancel from "@/Icons List/Cancel";
import { cn } from "@/lib/utils";
import React from "react";
import ProfileModalNavLink from "./ProfileModalNavLink";

export default function ProfileModal({ id, className="", type="pc" }) {

  return (
    <dialog popover="true"
      id={id}
      className={cn("bg-primary-white text-primary-black  left-[unset] top-[unset] border border-line opacity-0 open:opacity-100", className )}> 
     <button
        popoverTarget={id}
        popoverTargetAction="hide"
        className="absolute top-0 left-0 p-1 block md:hidden md:opacity-0"
      >
        <Cancel className="size-6 rounded-full bg-primary-black/10 hover:bg-line active:bg-line" />
      </button>

      <button
        popoverTarget={id}
        popoverTargetAction="hide"
        className="fixed top-0 right-0 size-full -z-1 mix-blend-lighten bg-primary-black/30 md:bg-primary-black/10"
      />
      <ProfileModalNavLink id={id} type={type} />
    </dialog>
  );
}
