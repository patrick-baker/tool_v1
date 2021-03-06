import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LanguageIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import StepConnector from '@material-ui/core/StepConnector';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  connectorActive: {
    '& $connectorLine': {
      backgroundImage:
        'linear-gradient( 136deg, #5B63DA 0%, #9E8DF8 100%)'
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      backgroundImage:
        'linear-gradient( 136deg, #5B63DA 0%, #9E8DF8 100%)'
    },
  },
  connectorDisabled: {
    '& $connectorLine': {
      borderColor: 'white',
    },
  },
  connectorLine: {
    transition: theme.transitions.create('border-color'),
    height: 5,
    border: 2,
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'relative',
    top: '15px'
  }
});

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    zIndex: 1,
    color: '#5B63DA',
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, #422997 0%, #5B63DA 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: '#F3F3F3'
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #704AD6 0%, #5B63DA 100%)',
    color: '#F3F3F3'
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ThreeSixtyIcon />,
    2: <ThumbUpIcon />,
    3: <PeopleIcon />,
    4: <LanguageIcon />,
    5:<AssessmentIcon/>
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ['Integrations', 'Campaign Goals', 'Target Audience', 'Style and Tone', 'Analyze'];
}

class ProgressStepper extends React.Component {

  render() {
    const { classes } = this.props;
    const activeStep = this.props.step;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );

    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={connector}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

ProgressStepper.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(withStyles(styles)(ProgressStepper));