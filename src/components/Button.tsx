import * as React from 'react';
import * as classNames from 'classnames';
import './Button.scss';


export interface ButtonProps {
  className?: string;
  color?: string;
  icon?: React.ReactChild;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  variant?: string;
  title?: string;
}

export class Button extends React.Component<ButtonProps, {}> {
  static defaultProps: ButtonProps = {
    color: 'positive',
    variant: 'filled'
  }

  render () {
    const classes = classNames({
      'button': true,
      'button--positive': this.props.color   === 'positive',
      'button--negative': this.props.color   === 'negative',
      'button--filled'  : this.props.variant === 'filled',
      'button--text'    : this.props.variant === 'text',
      [this.props.className]: !!this.props.className
    });

    return (
      <button className={classes} onClick={ this.props.onClick } title={ this.props.title }>
        { this.props.icon && <div className="button__icon">{ this.props.icon }</div> }
        { this.props.text && <div className="button__text">{ this.props.text }</div> }
      </button>
    );
  }
}
