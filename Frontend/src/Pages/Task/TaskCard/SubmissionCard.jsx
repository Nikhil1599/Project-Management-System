/* eslint-disable no-constant-condition */
import { Check, Close } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, IconButton } from "@mui/material";

const SubmissionCard = () => {
  const handleAcceptDecline = (status) => {
    console.log(status);
  };

  return (
    <div className=" bg-[#f8f9fa] border border-2 rounded-md p-5 flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-[500]">GitHub: </span>
          <div className="flex items-center gap-2 text-primaryColor">
            <OpenInNewIcon />
            <a href="/" target="_blank" rel="noopener">
              Open Link
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-s">
          <p>Submission Time: </p>
          <p className="text-gray-900">2024-01-15T22:15:39</p>
        </div>
      </div>
      <div>
        {true ? (
          <div>
            <div className="flex gap-5">
              <div className="text-green-500">
                <IconButton
                  color="success"
                  onClick={() => handleAcceptDecline("ACCEPT")}
                >
                  <Check />
                </IconButton>
              </div>
              <div className="text-red-500">
                <IconButton
                  color="error"
                  onClick={() => handleAcceptDecline("DECLINED")}
                >
                  <Close />
                </IconButton>
              </div>
            </div>
          </div>
        ) : (
          <Button
            size="small"
            color={true ? "success" : "error"}
            variant="outline"
          >
            Accept
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubmissionCard;
