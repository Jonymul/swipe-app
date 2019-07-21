import * as React from 'react';
import * as classNames from 'classnames';
import { Profile } from '../services/ProfileService';
import { Button } from './Button';
import './ProfileCard.scss';
import './Profile.scss';

export interface ProfileCardProps {
  className?: string;
  onReject: (id: string) => void;
  onLike: (id: string) => void;
  profile: Profile;
}
export interface ProfileCardState {
  swipeState: number
}

export class ProfileCard extends React.Component<ProfileCardProps, ProfileCardState> {
  private cardRoot: React.RefObject<HTMLDivElement> = React.createRef();
  private touchOrigin = { x: 0, y: 0 };
  private lastTouchOrigin = { x: 0, y: 0 };
  private cardWidth: number;
  private isAnimating = false;
  public state = {
    swipeState: 0
  };

  componentDidMount () {
    this.cardRoot.current.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.cardRoot.current.addEventListener('touchmove', this.onTouchMove.bind(this));
    this.cardRoot.current.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  componentWillUnmount () {
    this.cardRoot.current.removeEventListener('touchstart', this.onTouchStart.bind(this));
    this.cardRoot.current.removeEventListener('touchmove', this.onTouchMove.bind(this));
    this.cardRoot.current.removeEventListener('touchend', this.onTouchEnd.bind(this));
    this.isAnimating = false;
  }

  onTouchStart (event: TouchEvent) {
    // Set the touch state
    this.cardWidth = this.cardRoot.current.clientWidth;
    this.touchOrigin.x = event.touches[0].clientX;
    this.touchOrigin.y = event.touches[0].clientY;
    this.lastTouchOrigin.x = event.touches[0].clientX;
    this.lastTouchOrigin.y = event.touches[0].clientY;
    
    // Start the animation loop
    this.isAnimating = true;
    this.onFrame();
  }

  onTouchMove (event: TouchEvent) {
    // Update the touch state
    this.lastTouchOrigin = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  }
  
  onTouchEnd () {
    // Stop the animation loop
    this.isAnimating = false;

    // Decide the swipe outcome or reset
    if (this.state.swipeState < -0.5) { this.props.onReject(this.props.profile.id); }
    else if (this.state.swipeState > 0.5) { this.props.onLike(this.props.profile.id); }
    else { this.setState({ swipeState: 0 }); }
  }
  
  onFrame () {
    if (!this.isAnimating) { return; } // Halt the loop

    this.setState({
      swipeState: (this.lastTouchOrigin.x - this.touchOrigin.x) / this.cardWidth
    });
    requestAnimationFrame(this.onFrame.bind(this));
  }


  render () {
    const classes = classNames({
      'profile-card': true,
      [this.props.className]: !!this.props.className
    });

    const style = this.state.swipeState === 0 ? {
      // Set default opacity with transition
      opacity: 1,
      transition: 'transform 0.2s linear, opacity 0.2s linear'
    } : {
      // Disable transitions and use dynamic opacity and transform
      opacity: (1 - Math.abs(this.state.swipeState)),
      transform: `translateX(${this.cardWidth * this.state.swipeState}px) rotate(${5 * this.state.swipeState}deg)`,
      transition: 'none'
    };

    return (
      <article className={classes} ref={this.cardRoot} style={style}>
        <div className="profile-card__photo" style={{ backgroundImage: `url("${ this.props.profile.photoURL }")` }} />
        <div className="profile-card__body profile">
          <div className="profile__headline">
            <h2 className="profile__headline__name">{ this.props.profile.nickname }</h2>
            <p className="profile__headline__age">{ this.props.profile.age }歳</p>
          </div>
          <div className="profile__summary">
            <p>Short summary</p>
          </div>
        </div>
        <div className="profile-card__footer">
          <Button className="profile-card__footer__button" color="negative" variant="filled" text="No" onClick={ this.props.onReject.bind(this, [this.props.profile.id]) } />
          <Button className="profile-card__footer__button" color="positive" variant="filled" text="Yes" onClick={ this.props.onLike.bind(this, [this.props.profile.id]) } />
        </div>
      </article>
    );
  }
}
