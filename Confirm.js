import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DownloadButton from "downloadbutton"
import RaisedButton from 'material-ui/RaisedButton';
function makeFile() {
  // do some calculations
  return {
    mime: 'text/plain',
    filename: 'myexportedfile.pdf',
    contents: Confirm,
  }
}
export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, profession, photo, adress, phone, email, about, skills, experience, education }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <div className="allof">
            <div className="first">
            <p >{firstName}</p>
            <p >{profession}</p>
            <img className="image" src={photo} alt='taswira'/>  
            <p >{adress}</p>
            <p >{phone}</p>
            <p >{email}</p>
            
            </div>
            <div className="sec">
            <p className >{about}</p>
            <p >{skills}</p>
            <p >{experience}</p>
            <p >{education}</p>
           </div>
                  
          </div>
          <br />
          <RaisedButton
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <DownloadButton
  // these classes come from materializecss
  className='waves-effect waves-light btn' 
  genFile={makeFile}/>

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;