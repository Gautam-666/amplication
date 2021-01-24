import { useEffect, useContext } from "react";
import NavigationTabsContext from "../Layout/NavigationTabsContext";

export default function useNavigationTabs(
  key: string,
  url: string,
  name?: string | null
) {
  const navigationTabsContext = useContext(NavigationTabsContext);

  useEffect(() => {
    navigationTabsContext.registerItem({
      key,
      name: name || "Loading...",
      url,
      active: true,
    });
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [key, name, url, navigationTabsContext.registerItem]);
}
