var DownloadButton = require('downloadbutton')
import Confirm from "./Confirm"

export default function makeFile() {
    // do some calculations
    return {
      mime: 'text/plain',
      filename: 'myexportedfile.pdf',
      contents: Confirm,
    }
  }
  