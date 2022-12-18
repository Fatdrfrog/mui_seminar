import { useLaunchAPI } from "./useLaunchAPI";
import { useLaunchURL } from "./useLaunchURL";

export const useLaunch = () => {
  const { launchID, handleCloseDialog } = useLaunchURL();

  const { isLoading, isError, launch } = useLaunchAPI(launchID);

  return { isLoading, launch, isError, launchID, handleCloseDialog };
};
