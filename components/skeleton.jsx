import { Skeleton } from "@mui/material";
import Stack from "@mui/material/Stack";
export default function LoadUI() {
  return (
    <div
      className="max-w-screen-xl mx-auto
      flex flex-col gap-8 h-screen items-center p-8 md:p-20 md:pt-0"
    >
      <Skeleton
        variant="rectangular"
        width={210}
        height={55}
        sx={{ bgcolor: "#23252b" }}
      />
      {/* <h1 className="text-blue-500 text-4xl md:text-6xl font-bold text-left">
        Overview
      </h1> */}

      <Skeleton
        variant="rectangular"
        width={210}
        height={70}
        sx={{ bgcolor: "#23252b" }}
        className="transactions-skeleton flex-grow"
      />

      <Skeleton
        variant="rectangular"
        width={210}
        height={70}
        sx={{ bgcolor: "#23252b" }}
        className="transactions-skeleton flex-grow"
      />

      <Skeleton
        variant="rectangular"
        width={210}
        height={70}
        sx={{ bgcolor: "#23252b" }}
        className="transactions-skeleton flex-grow"
      />
    </div>
  );
}
