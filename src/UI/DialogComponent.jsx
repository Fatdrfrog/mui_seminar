import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ErrorPage } from "../ErrorPage";

import { useLaunch } from "../hooks/useLaunch";

export const DialogComponent = () => {
  const { isLoading, launch, isError, launchID, handleCloseDialog } =
    useLaunch();

  if (isLoading || !launch) return <>Spinner</>;

  if (isError) return <ErrorPage />;

  return (
    <Dialog open={launchID} onClose={handleCloseDialog}>
      <DialogTitle>{launch.name}</DialogTitle>
      <DialogContent>{launch.details}</DialogContent>
    </Dialog>
  );
};
