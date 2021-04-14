import files from "../../icons/files.svg";
import xml from "../../icons/xml.svg";
import png from "../../icons/png.svg";
import pdf from "../../icons/pdf.svg";
import torrent from "../../icons/utorrent.svg";
import mp4 from "../../icons/mp4.svg";
import xls from "../../icons/xls.svg";
import xlsx from "../../icons/xlsx.svg";
import docx from "../../icons/docx.svg";

const GetIcon = (type) => {

        switch(type.toLowerCase()) {
            case 'xml':
                return xml;
            case 'png':
                return png;
            case 'pdf':
                return pdf;
            case 'torrent':
                return torrent;
            case 'mp4':
                return mp4;
            case 'xls':
                return xls;
            case 'xlsx':
                return xlsx;
            case 'docx':
                return docx;
            default:
                return files;
    }
}

export default GetIcon