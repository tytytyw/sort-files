import "./File.css";
import { Grid } from "@material-ui/core";
import GetIcon from "../GetIcon/GetIcon";

function File({ fileData }) {
	const containerStyle = {
		flexWrap: "nowrap",
	};
	const itemStyle = {
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		textAlign: "left",
		padding: "0 6px",
	};

	return (
		<Grid
			className="row"
			style={containerStyle}
			container
			direction="row"
			justify="flex-start"
			alignItems="stretch"
		>
			<Grid
				item
				xs={5}
				className="sort__item_name"
				style={itemStyle}
				title={fileData.fname}
			>
				<object
					className="file-icon"
					type="image/svg+xml"
					data={GetIcon(fileData.ext)}
					width="16"
					height="16"
				>
					Your browser does not support SVG
				</object>
				<span className="file-name">{fileData.fname}</span>
			</Grid>
			<Grid
				className="mobile-hidden"
				item
				xs={1}
				style={itemStyle}
				title={fileData.ext}
			>
				{fileData.ext}
			</Grid>
			<Grid
				item
				style={itemStyle}
				xs={2}
				title={fileData.size_now}
			>
				{fileData.size_now}
			</Grid>
			<Grid
				item
				xs={4}
				style={itemStyle}
				title={fileData.mtime}
			>
				{fileData.mtime}
			</Grid>
			<Grid
				className="mobile-hidden"
				item
				xs={2}
				style={itemStyle}
				title={fileData.ctime}
			>
				{fileData.ctime}
			</Grid>
		</Grid>
	);
}

export default File;
