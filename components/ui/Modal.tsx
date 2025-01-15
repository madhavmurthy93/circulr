"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeModal } from "@/redux/slices/modalSlice";
import { useRef } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface ModalProps {
  name: string;
  children: React.ReactNode;
}

function Modal({ name, children }: ModalProps) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.openModal === name);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(
    [ref],
    () => {
      if (isOpen) {
        dispatch(closeModal());
      }
    },
    true,
    () => isOpen
  );

  const close = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div
        className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out"
        ref={ref}
      >
        <div className="flex justify-end px-4 pt-4">
          <button onClick={close} className="text-2xl">
            <HiOutlineXMark />
          </button>
        </div>
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
