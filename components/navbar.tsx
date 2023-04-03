import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Fade } from "@mui/material";
import { Slide, SlideProps } from "@mui/material";

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
import { UserButton } from "@clerk/clerk-react";
function ResponsiveAppBar(props) {
  const user = props.user;
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
    console.log("open nav menu triggered");
    setModalOpen(false);
    console.log(modalOpen);
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
    console.log(anchorElNav, anchorElUser);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const Transition = React.forwardRef<HTMLDivElement, SlideProps>(
    function Transition(props, ref) {
      return <Slide direction="right" ref={ref} {...props} />;
    }
  );

  const [newTimeline, setNewTimeline] = React.useState<string>("This week");
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(false);
    props.setTimeline(newTimeline);
  };
  const handleChange = (event) => {
    setNewTimeline(event.target.value);
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
            <form
              className=" p-8 rounded-lg shadow-lg flex flex-col items-start justify-start w-xl gap-3 text-lg bg-slate-800"
              onSubmit={handleSubmit}
            >
              <select
                onChange={handleChange}
                name="type"
                value={newTimeline}
                className="my-select"
              >
                <option value="This week">This week</option>
                <option value="This month">This month</option>
                <option value="Last month">Last month</option>
                <option value="This year">This year</option>
                <option value="Alltime">Alltime</option>
              </select>
              <button
                type="submit"
                className="bg-blue-600 shadow-xl hover:bg-blue-500 text-white font-bold rounded-2xl p-3 w-42 text-base"
              >
                Submit
              </button>
            </form>
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
              TransitionComponent={Transition}
            >
              <MenuItem className="font-bold mb-6">Welcome.</MenuItem>
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
            className="md:flex md:flex-row md:gap-4"
          >
            <Link href="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <Link href="/addTransaction">Add Transaction</Link>
            {/* <p>Change Timeline</p> */}
            {/* <button onClick={handleModalOpen}>Set Budget</button> */}
            <Link href="/category-budgets">Set Budget</Link>
            <Link href="/hey">Analytics</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <UserButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
