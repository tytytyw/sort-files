import "./SortBar.css";
import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";

function SortBar({ sorting, typeSort }) {
	useEffect(() => {
		if (typeSort && typeSort[0] === "-") {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			typeSort = typeSort.substr(1);
			document.getElementById(`${typeSort}`).classList.add("reverse");
		}

		if (typeSort) {
			document.getElementById(`${typeSort}`).classList.add("active");
		}
	}, []);

	function classNameMod(e, field) {
		const el = e.target;

		if (el.className.includes("reverse")) {
			el.classList.remove("reverse");
			sorting(field);
		} else if (!el.className.includes("active")) {
			document.querySelectorAll(".sort__item").forEach((el) => {
				el.classList.remove("active");
				el.classList.remove("reverse");
				sorting(field);
			});
			el.classList.add("active");
		} else if (!el.className.includes("reverse")) {
			el.classList.add("reverse");
			sorting("-" + field);
		}
	}

	const containerStyle = {
		flexWrap: "nowrap",
	};
	const itemStyle = {
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		textAlign: "left",
		padding: "0 6px",
		borderRight: "1px solid gray",
	};

	return (
		<Grid
			className="sort"
			style={containerStyle}
			container
			direction="row"
			justify="flex-start"
			alignItems="stretch"
		>
			<Grid
				title="имя"
				id="name"
				className="sort__item"
				item
				xs={5}
				style={itemStyle}
				onClick={(e) => classNameMod(e, "name")}
			>
				имя
			</Grid>
			<Grid
				title="ext"
				id="ext"
				className="sort__item mobile-hidden"
				xs={1}
				item
				style={itemStyle}
				onClick={(e) => classNameMod(e, "ext")}
			>
				тип
			</Grid>
			<Grid
				title="размер"
				id="size"
				className="sort__item"
				item
				xs={2}
				style={itemStyle}
				onClick={(e) => classNameMod(e, "size")}
			>
				размер
			</Grid>
			<Grid
				title="дата изменения"
				id="mdate"
				className="sort__item"
				item
				xs={4}
				style={itemStyle}
				onClick={(e) => classNameMod(e, "mdate")}
			>
				дата изменения
			</Grid>
			<Grid
				title="дата создания"
				id="cdate"
				className="sort__item mobile-hidden"
				item
				xs={2}
				style={itemStyle}
				onClick={(e) => classNameMod(e, "cdate")}
			>
				дата создания
			</Grid>
		</Grid>
	);
}

export default SortBar;
