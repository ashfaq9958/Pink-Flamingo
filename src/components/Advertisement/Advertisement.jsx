import React, { useState } from "react";
import Advertisement_1 from "../../assets/Advertisement/advertisement_1.png";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useTheme, useMediaQuery, Tooltip } from "@mui/material";

const Advertisement = () => {
  const [isHidden, setIsHidden] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <div className={`${isHidden ? "hidden" : "relative"} w-full`}>
      <img src={Advertisement_1} alt="sale" className="w-full" />
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] lg:font-bold w-[90%] sm:w-auto ">
        QUICK BUY! Get up to 25% off on All Stones
      </h2>
      <Tooltip
        title="Hide sale offer"
        className="absolute right-4 top-0 md:top-0.5 lg:top-1 xl:top-3 sm:right-8 cursor-pointer"
        onClick={() => setIsHidden(true)}
      >
        <HighlightOffSharpIcon
          sx={{
            fontSize: isSmallScreen ? "9px" : isMediumScreen ? "16px" : "20px",
          }}
        />
      </Tooltip>
    </div>
  );
};

export default Advertisement;
