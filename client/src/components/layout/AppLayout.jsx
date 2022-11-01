import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";
import Sidebar from "../common/Sidebar";
import { Box } from "@mui/system";
const AppLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      // TODO: check if user is authenticated
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/");
      } else {
        //save user
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);
  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          width: "max-content",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
