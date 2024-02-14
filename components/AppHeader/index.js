import {
	AppBar,
	Button,
	Fade,
	MenuItem,
	Paper,
	Popper,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import AppLink from "components/Common/AppLink";
import OutlinedButton from "components/Common/Buttons/OutlinedButton";
import MenuItemLink from "components/Common/Menus/MenuItemLink";
import linksData from "constant_data/navigation/linksData";
import React, { useState } from "react";
import { useEffect } from "react";
import {
	usePopupState,
	bindHover,
	bindPopper,
	bindTrigger,
} from "material-ui-popup-state/hooks";
import { useRouter } from "next/router";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import { FaChevronDown } from "react-icons/fa";

const AppHeader = ({ appHeaderBg, ...props }) => {
	const { window } = props;
	const [popperData, setPopperData] = useState([]);
	const [isPopperOpen, setIsPopperOpen] = useState(false);
	const popupState = usePopupState({
		variant: "popper",
		popupId: "menuPopper",
	});
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

	const handleClick =
		(newPlacement, data = []) =>
		(event) => {
			setAnchorEl(event.currentTarget);
			setOpen(true);
			setPlacement(newPlacement);
			setPopperData(data);
		};
	// console.log({ popupState, isOpen: popupState.isOpen });
	const router = useRouter();
	const handleMenuButtonClick = (link) => {
		// navigate(`${link}`);
		router.push(link);
	};
	const handlePopperOpen = (data) => {
		setIsPopperOpen(true);
		setPopperData(data);
	};
	const handlePopperClose = async (link) => {
		await router.push(link);
		setIsPopperOpen(false);
		// setPopperData([]);
		setOpen(false);
	};

	// console.log({ popperData });
	return (
		<>
			<AppBar
				elevation={0}
				sx={{
					bgcolor: appHeaderBg || "rgba(21, 50, 48, 1)",
					// "transparent",
					color: "white",
				}}
			>
				{/* <Popper
					open={open}
					anchorEl={anchorEl}
					placement={placement}
					transition
				>
					{({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}>
							<Paper
								sx={{
									boxShadow:
										"0px 0px 40px 0px rgba(0, 0, 0, 0.1)",
									padding: "16px",
									marginTop: "16px",
									borderRadius: "10px",
									// width: "100vw",
								}}
							>
								<Stack>
									{Array.isArray(popperData) &&
										popperData.length > 0 &&
										popperData.map((linkItem) => (
											<AppLink
												key={linkItem.id}
												href={linkItem.url}
												onClick={() =>
													handlePopperClose()
												}
												sx={{
													fontWeight: "700",
													marginTop: "8px",
													marginBottom: "8px",
												}}
											>
												{linkItem.title}
											</AppLink>
										))}
								</Stack>
							</Paper>
						</Fade>
					)}
				</Popper> */}

				<Toolbar>
					<Container
						sx={{ display: "flex", flex: 1, alignItems: "center" }}
					>
						{linksData.map((item, index) => {
							// if (Array.isArray(item.links) && item.links > 0) {
							// 	return (
							// 		<MenuItem
							// 			key={index}
							// 			{...bindHover(popupState)}
							// 		>
							// 			{item.title}
							// 		</MenuItem>
							// 	);
							// } else {
							return (
								<div key={index} style={{ flex: item.flex }}>
									{Array.isArray(item.links) &&
									item.links.length > 0 ? (
										<div key={index}>
											<MenuItem
												key={index}
												disableRipple
												// href={item.url}
												sx={{
													// marginRight:
													// 	index !==
													// 		linksData.length - 1 &&
													// 	"16px",
													flex: item.flex,
													marginLeft: "-16px",
												}}
												// onClick={handleMenuButtonClick(item.url)}

												onClick={handleClick(
													"bottom-start",
													item.links,
												)}
												// onMouseEnter={() =>
												// 	handlePopperOpen(item.links)
												// }
												// onMouseLeave={() =>
												// 	handlePopperClose()
												// }
												// {...bindTrigger(popupState)}
											>
												{item.title}{" "}
												<FaChevronDown
													style={{
														marginLeft: "4px",
													}}
												/>
											</MenuItem>
											<Popper
												open={open}
												anchorEl={anchorEl}
												placement={placement}
												transition
												onMouseLeave={() =>
													setOpen(false)
												}
											>
												{({ TransitionProps }) => (
													<Fade
														{...TransitionProps}
														timeout={350}
													>
														<Paper
															sx={{
																boxShadow:
																	"0px 0px 40px 0px rgba(0, 0, 0, 0.1)",
																padding: "16px",
																marginTop:
																	"16px",
																borderRadius:
																	"10px",
																// width: "100vw",
															}}
														>
															<Stack>
																{Array.isArray(
																	popperData,
																) &&
																	popperData.length >
																		0 &&
																	popperData.map(
																		(
																			linkItem,
																		) => (
																			<MenuItem
																				key={
																					linkItem.id
																				}
																				href={
																					linkItem.url
																				}
																				onClick={() =>
																					handlePopperClose(
																						linkItem.url,
																					)
																				}
																				sx={{
																					fontWeight:
																						"700",
																					// marginTop:
																					// 	"8px",
																					// marginBottom:
																					// 	"8px",
																				}}
																			>
																				{
																					linkItem.title
																				}
																			</MenuItem>
																		),
																	)}
															</Stack>
														</Paper>
													</Fade>
												)}
											</Popper>
										</div>
									) : (
										<AppLink
											key={index}
											disableRipple
											href={item.url}
											sx={{
												marginRight:
													index !==
														linksData.length - 1 &&
													"16px",
												flex: item.flex,
											}}
											// onClick={handleMenuButtonClick(item.url)}
											// {...bindHover(popupState)}
										>
											{item.title}
										</AppLink>
									)}
									{/* <MenuItem
										key={index}
										disableRipple
										href={item.url}
										sx={{
											marginRight:
												index !==
													linksData.length - 1 &&
												"16px",
											flex: item.flex,
										}}
										// onClick={handleMenuButtonClick(item.url)}
										{...bindHover(popupState)}
									>
										{item.title}
									</MenuItem> */}
								</div>
							);
						})}
						<div style={{ flex: 1 }} />
						{/* <MenuItemLink href={"/"}>Home </MenuItemLink> */}
						<OutlinedButton>Get a Quote</OutlinedButton>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default AppHeader;
