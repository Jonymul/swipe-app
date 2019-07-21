import * as React from 'react';
import * as classNames from 'classnames';
import { Profile } from '../services/ProfileService';
import { Button } from './Button';
import './ProfileCard.scss';

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
        <div className="profile-card__body">
          <h2>{ this.props.profile.nickname }</h2>
        </div>
        <div className="profile-card__footer">
          <Button className="profile-card__footer__button" color="negative" variant="filled" text="No" onClick={ this.props.onReject.bind(this, [this.props.profile.id]) } />
          <Button className="profile-card__footer__button" color="positive" variant="filled" text="Yes" onClick={ this.props.onLike.bind(this, [this.props.profile.id]) } />
        </div>
      </article>
    );
  }
}
