"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeModal, openModal } from "@/redux/slices/modalSlice";
import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";

interface ModalContextType {
  openName: string | null;
  close: () => void;
  open: (name: string) => void;
}
const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const openName = useAppSelector((state) => state.modal.openModal);
  const close = () => dispatch(closeModal());
  const open = (name: string) => dispatch(openModal(name));
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens,
}: {
  children: React.ReactNode;
  opens: string;
}) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalContext cannot be null");
  }
  const { open } = context;

  return cloneElement(children as React.ReactElement<{ onClick: () => void }>, {
    onClick: () => open(opens),
  });
}

function Window({
  children,
  name,
  label,
}: {
  children: React.ReactNode;
  name: string;
  label: string;
}) {
  const { openName, close } = useContext(ModalContext)!;
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick([ref], () => {
    if (openName === name) {
      close();
    }
  });

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div
        className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white font-sans shadow-md transition-transform duration-300 ease-in-out"
        ref={ref}
      >
        <div className="flex justify-between px-8 pt-8">
          <h2 className="text-lg font-semibold">{label}</h2>
          <button onClick={close} className="text-2xl">
            <HiOutlineXMark />
          </button>
        </div>
        <div className="px-8">
          {isValidElement(children) &&
            cloneElement(
              children as React.ReactElement<{ onCloseModal: () => void }>,
              {
                onCloseModal: close,
                ...(typeof children.props === "object" ? children.props : {}),
              }
            )}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
