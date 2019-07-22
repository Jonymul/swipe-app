import * as React from 'react';
import * as classNames from 'classnames';
import { ProfileService, Profile } from '../services/ProfileService';
import { ProfileCard } from './ProfileCard';
import './CardStack.scss';

export interface CardStackProps {
  className?: string;
}

export interface CardStackState {
  profileQueue: Array<Profile>;
}

export class CardStack extends React.Component<CardStackProps, CardStackState> {
  private profileService = new ProfileService();
  public state: CardStackState = {
    profileQueue: []
  };
  
  componentDidMount () {
    this.replenishProfileQueue();
  }

  replenishProfileQueue () {
    console.log('Replenishing queue...');
    return this.profileService.getProfiles({ limit: 5 })
      .then(profiles => {
        console.log('Queue replenished!');
        const newQueue = this.state.profileQueue.concat(profiles);
        this.setState({
          profileQueue: newQueue
        });
      });
  }

  shiftCards () {
    this.state.profileQueue.shift();
    this.setState({
      profileQueue: this.state.profileQueue
    });

    if (this.state.profileQueue.length < 3) {
      this.replenishProfileQueue();
    }
  }

  onCardReject (id: string) {
    console.log(`Rejected: ${id}`);
    this.shiftCards();
  }

  onCardLike (id: string) {
    console.log(`Liked: ${id}`);
    this.shiftCards();
  }

  render () {
    const classes = classNames({
      'card-stack': true,
      [this.props.className]: !!this.props.className
    });

    return (
      <div className={classes}>
        { this.state.profileQueue.slice(0,2).map((profile, index) => <ProfileCard key={`profilecard-${ profile.id }`} active={index === 0} className={`card-stack__card card-stack__card--index${index}`} profile={profile} onReject={ this.onCardReject.bind(this, [profile.id]) } onLike={ this.onCardLike.bind(this, [profile.id]) } />) }
      </div>
    );
  }
}
