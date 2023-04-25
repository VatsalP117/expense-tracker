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

      <Skeleton
        variant="text"
        width={160}
        height={60}
        className=" -mt-4"
        sx={{ bgcolor: "#23252b" }}
      />
      <Skeleton
        variant="text"
        width={220}
        height={80}
        className=" mr-auto md:ml-10"
        sx={{ bgcolor: "#23252b" }}
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
