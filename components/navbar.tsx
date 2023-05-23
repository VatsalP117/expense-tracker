import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Fade } from "@mui/material";
import { Slide, SlideProps } from "@mui/material";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";

function ResponsiveAppBar({ userImg, signOut }) {
  const router = useRouter();
  console.log(userImg);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);

    setModalOpen(false);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    setModalOpen(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
    setAnchorElNav(null);
    setAnchorElUser(null);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <AppBar position="static" className="my-bg-lighter">
      {/* modal code */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Set Budget</DialogTitle>
          </DialogHeader>
          <div>
            {/* This action cannot be undone. This will permanently delete your
              account and remove your data from our servers. */}
          </div>
        </DialogContent>
      </Dialog>

      {/* modal code ends */}

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              // TransitionComponent={Transition}
            >
              <MenuItem className="font-bold mb-6 flex flex-row justify-between">
                <span className="border-b-4 border-blue-500 my-font text-5xl ">
                  Welcome.
                </span>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setAnchorElNav(null);
                    setAnchorElUser(null);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="#ffffff"
                      stroke="#000000"
                      stroke-width="2"
                    />
                    <path
                      d="M15.29 8.29L12 11.59l-3.29-3.29c-0.39-0.39-1.02-0.39-1.41 0s-0.39 1.02 0 1.41l3.29 3.29-3.29 3.29c-0.39 0.39-0.39 1.02 0 1.41s1.02 0.39 1.41 0l3.29-3.29 3.29 3.29c0.39 0.39 1.02 0.39 1.41 0s0.39-1.02 0-1.41l-3.29-3.29 3.29-3.29c0.39-0.39 0.39-1.02 0-1.41s-1.02-0.39-1.41 0z"
                      fill="#000000"
                    />
                  </svg>
                </button>
              </MenuItem>
              <MenuItem>
                <Link href="#">Dashboard</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/addTransaction">Add Transaction</Link>
              </MenuItem>
              <MenuItem>
                {/* <p>Change Timeline</p> */}
                {/* <button onClick={handleModalOpen}>Set Budget</button> */}
                <Link href="/category-budgets">Set Budget</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/hey">Analytics</Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="md:flex md:flex-row md:gap-4 lg:gap-6 md:text-medium lg:text-base font-medium"
          >
            <Link href="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <Link href="/addTransaction">Add Transaction</Link>

            <Link href="/category-budgets">Set Budget</Link>
            <Link href="/hey">Analytics</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={userImg} alt="user" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => {
                    router.push("/");
                    signOut({ callbackUrl: "/" });
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
