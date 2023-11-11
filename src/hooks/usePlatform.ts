import useData from "./useData";

interface Platform {
  name: string;
  id: number;
  snug: string;
}
const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
