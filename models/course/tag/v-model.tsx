import Colors from "@/constants/Colors";
import { useEffect, useState } from "react";
import { Tag, useTagStore } from "./model";

export default function useTagViewModel(item: Tag) {
  const bg = {
    default: Colors.milk,
    active: Colors.blue.sky,
  };

  const [color, setColor] = useState(bg.default);

  const { tag, setTag, toString } = useTagStore();

  const onClick = () => {
    if (color === bg.active) setColor(bg.default);
    else setColor(bg.active);

    setTag(item);
  };

  return { onClick, color, tag };
}
