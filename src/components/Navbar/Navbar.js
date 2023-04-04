import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">FemIT</Link>
					</Typography>
					<Box sx={{ display: "flex", gap: 2 }}>
						<Link to="/ProfilePage">
							<Avatar />
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
