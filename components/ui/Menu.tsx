import { useOutsideClick } from "@/hooks/useOutsideClick";
import { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface MenuContextType {
  openId: number | null;
  close: () => void;
  open: (id: number) => void;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
}

const MenuContext = createContext<MenuContextType | null>(null);

function Menu({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const close = () => setOpenId(null);
  const open = (id: number) => setOpenId(id);

  return (
    <MenuContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      <div>{children}</div>
    </MenuContext.Provider>
  );
}

function Toggle({ id, children }: { id: number; children: React.ReactNode }) {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuContext cannot be null");
  }
  const { openId, open, close, setPosition } = context;

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    const rect = (e.target as Element)
      .closest("button")!
      .getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height,
    });
    if (openId === id) {
      close();
    } else {
      open(id);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-md p-3 hover:bg-primary-50"
    >
      {children}
    </button>
  );
}

function List({ id, children }: { id: number; children: React.ReactNode }) {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuContext cannot be null");
  }
  const { openId, close, position } = context;
  const ref = useRef<HTMLUListElement | null>(null);
  useOutsideClick([ref], () => {
    if (openId === id) {
      close();
    }
  });

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="fixed overflow-hidden rounded-md border border-gray-300 bg-white shadow-md"
      style={{ top: position.y, right: position.x }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuContext cannot be null");
  }
  const { close } = context;
  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full flex-row items-center gap-2 border-b px-4 py-3 text-sm hover:bg-primary-50"
      >
        {children}
      </button>
    </li>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
