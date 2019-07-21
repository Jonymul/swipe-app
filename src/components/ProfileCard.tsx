import * as React from 'react';
import * as classNames from 'classnames';
import { Profile } from '../services/ProfileService';
import { Button } from './Button';
import './ProfileCard.scss';
import './Profile.scss';

export interface ProfileCardProps {
  className?: string;
  onReject: () => void;
  onLike: () => void;
  profile: Profile;
}

export class ProfileCard extends React.Component<ProfileCardProps, {}> {
  constructor (props: ProfileCardProps) {
    super(props);
  }

  render () {
    const classes = classNames({
      'profile-card': true,
      [this.props.className]: !!this.props.className
    });

    return (
      <article className={classes}>
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
