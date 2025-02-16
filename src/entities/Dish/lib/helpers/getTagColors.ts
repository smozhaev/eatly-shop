import { tagsColors } from "@shared/const";

export const getTagColors = (tag: string) => {
  return tagsColors[tag] || { color: "#000000", backgroundColor: "#CCCCCC" };
};