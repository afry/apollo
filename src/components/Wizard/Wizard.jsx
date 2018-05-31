import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Wizard.css';

import Nav from '../Nav';
import Navbar from '../Navbar';
import NavItem from '../NavItem';
import NavLink from '../NavLink';

import Container from '../Container';

const propTypes = {
  activeStep: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  brand: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

const defaultProps = {
  activeStep: 0,
  brand: undefined,
  children: undefined,
  className: undefined,
  onCancel: undefined,
  onFinish: undefined,
  onNext: undefined,
  onPrevious: undefined,
};

const childContextTypes = {
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);

    this.renderNavbar = this.renderNavbar.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
  }

  getChildContext() {
    return {
      onCancel: this.props.onCancel,
      onFinish: this.props.onFinish,
      onNext: this.props.onNext,
      onPrevious: this.props.onPrevious,
    };
  }

  handleCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }

  handleFinish(e) {
    if (this.props.onFinish) {
      this.props.onFinish(e);
    }
  }

  handleNext(e) {
    if (this.props.onNext) {
      this.props.onNext(e);
    }
  }

  handlePrevious(e) {
    if (this.props.onPrevious) {
      this.props.onPrevious(e);
    }
  }

  renderNavbar(steps) {
    const { brand, activeStep } = this.props;
    return (
      <Navbar dark>
        <Container>
          {brand}
          <Nav horizontal="center" navbar>
            {
              steps.map((step, index) => {
                const isActive = (index === activeStep);
                return (
                  <NavItem key={step.props.label}>
                    <NavLink active={isActive}>{step.props.label}</NavLink>
                  </NavItem>
                );
              })
            }
          </Nav>
        </Container>
      </Navbar>
    );
  }

  renderSteps(steps, className) {
    const { activeStep } = this.props;
    return (
      <div className={className}>
        {
          steps.map((step, index) => (
            React.cloneElement(step, {
              active: (index === activeStep),
              key: step.props.label,
            })
          ))
        }
      </div>
    );
  }

  render() {
    const {
      children,
      className,
    } = this.props;

    if (!children || children.length === 0) {
      return null;
    }

    const outerClasses = classNames(
      className,
      styles.wizard,
    );

    const innerClasses = classNames(styles['wizard-body']);

    return (
      <div className={outerClasses}>
        {this.renderNavbar(children)}
        {this.renderSteps(children, innerClasses)}
      </div>
    );
  }
}

Wizard.propTypes = propTypes;
Wizard.defaultProps = defaultProps;
Wizard.childContextTypes = childContextTypes;

export default Wizard;
