import "./App.css";
import SortBar from "../SortBar/SortBar";
import FilesList from "../FilesList/FilesList";
import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";

function App() {
    useEffect(() => {
		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	} , [])

	const [itemList, setItemList] = useState([]);
	const [typeSort, setTypeSort] = useState(localStorage.getItem('sort') || "")

	const getData = () =>
		fetch("https://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1")
			.then((response) => response.json())
			.then((data) => {setItemList(filterFilesList(typeSort, data));})
			.catch(err => console.log(err));

	function clickSortBar(field) {
		setTypeSort(field)
		localStorage.setItem('sort', field)
		setItemList(filterFilesList(field, itemList))
	}

	function filterFilesList (field, array) {
		let reverse = false;
		if (field[0] === "-") {
			reverse = true;
			field = field.substr(1)
		}
		const byField = () => {debugger
			switch(field) {
				case "ctime":
				case "mtime":  return (prev, next) => newDate(next[field]) - newDate(prev[field])
				case "size": return (prev, next) => next[field] - prev[field]
				case "ext":
				case "name":
				default: return (prev, next) => prev.name < next.name ?  -1 : 1;

				function newDate(value) {
					const [date, time] = value.split(" ");
					const dateArr = date.split(".");
					const day = dateArr[0];
					const month = dateArr[1];
					const year = dateArr[2]
					const fullDate = new Date(`${month}.${day}.${year} ${time}`);
					return fullDate
				}
				
		}}
		const [...newItemList] = array;

		return field ?
			reverse ?
				newItemList.sort(byField(field)).reverse() :
				newItemList.sort(byField(field))
			: array
	}

	return (
		<div className="App">
			<Grid>
				<SortBar sorting={clickSortBar} typeSort={typeSort}  />
			</Grid>
			<FilesList itemList={itemList} />
		</div>
	);
}

export default App;
