import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">FemIT</Link>
					</Typography>
					<Link to="/LoginPage">
						<Button variant={"contained"} color="primary">
							{"Iniciar Sesión"}
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
