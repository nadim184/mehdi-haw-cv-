import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class About extends Component {

    

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const classes = makeStyles(theme => ({
  
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    
    }));
    
    
    const { values, handleChange } = this.props;
    return (
      
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter skills" />
          {/* <TextareaAutosize 
           rowsMax={4}
           aria-label="maximum height"
           placeholder="Maximum 4 rows"
            hintText="about you"
            floatingLabelText="about"
            onChange={handleChange('about')}
            defaultValue={values.about}
          /> */}
           <TextField
        
        placeholder="About you"
        id="standard-textarea"
        multiline
        className={classes.textField}
        margin="normal"
        onChange={handleChange('about')}
        defaultValue={values.about}
      />
          <br />
          <TextField
           id="standard-textarea"
           multiline
           className={classes.textField}
           margin="normal"
            placeholder="Enter Your skills"
            onChange={handleChange('skills')}
            defaultValue={values.skills}
          />
          <br />
          <TextField
           id="standard-textarea"
           multiline
           className={classes.textField}
           margin="normal"
           placeholder="your experience"
            onChange={handleChange('experience')}
            defaultValue={values.experience}
          />
          <br />
          <TextField
           id="standard-textarea"
           multiline
           className={classes.textField}
           margin="normal"
            placeholder="your education"
            onChange={handleChange('education')}
            defaultValue={values.eeducation}
          />
          <br/>
          <RaisedButton
            label="Continue"
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

export default About;