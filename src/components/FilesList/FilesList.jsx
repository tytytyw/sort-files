import "./FilesList.css";
import File from "../File/File";
import CircularProgress from '@material-ui/core/CircularProgress'

function FilesList({itemList}) {

	return (
		<div className="files-list">
			{itemList.length ? itemList.map(item =>
                <File fileData={item} key={item.file} />) :
					<CircularProgress className="circular-progress" />}
		</div>
	);
}

export default FilesList;
