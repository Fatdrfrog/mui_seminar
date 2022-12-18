import { useParams, useNavigate } from "react-router-dom";

export const useLaunchURL = () => {
  const { launchID } = useParams();
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    navigate("/crew");
  };

  return { launchID, handleCloseDialog };
};
