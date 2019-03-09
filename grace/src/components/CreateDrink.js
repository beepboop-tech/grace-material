import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  stickToBottom: {
    width: '96%',
    position: 'fixed',
    left: 0,
    bottom: 60,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});


class CreatePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {
          "location": "/api/ingredients/e3d4552b-cc2a-470b-a67f-15c83d0b7154",
          "ref": "e3d4552b-cc2a-470b-a57f-15c83d0b7154",
          "name": "water",
          "alcoholic": false,
          "abs": null
        },
      ],

      "e3d4552b-cc2a-470b-a57f-15c83d0b7154": 0,
    };
  }

  increase = (choice) => () => {
    this.setState({[choice]: this.state[[choice]] + 1})
  };

  decrease = (choice) => () => {
    if (this.state[[choice]] !== 0){
          this.setState({[choice]: this.state[[choice]] - 1})
    }
  };

  render() {

    const { classes } = this.props;


    return (
        <Fragment>

          {this.state["e3d4552b-cc2a-470b-a57f-15c83d0b7154"]}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={this.increase("e3d4552b-cc2a-470b-a57f-15c83d0b7154")}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={this.decrease("e3d4552b-cc2a-470b-a57f-15c83d0b7154")}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.stickToBottom}
          >
          Create
        </Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreatePage)
