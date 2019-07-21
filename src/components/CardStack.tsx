import * as React from 'react';
import { ProfileService, Profile } from '../services/ProfileService';
import { ProfileCard } from './ProfileCard';
import './CardStack.scss';

export interface CardStackProps {
}

export interface CardStackState {
  profileQueue: Array<Profile>;
}

export class CardStack extends React.Component<CardStackProps, CardStackState> {
  profileService: ProfileService;

  constructor (props: CardStackProps) {
    super(props);
    this.profileService = new ProfileService();

    this.state = {
      profileQueue: []
    };

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
    return (
      <div className="card-stack">
        { this.state.profileQueue.slice(0,2).map((profile, index) => <ProfileCard key={`profilecard-${ profile.id }`} className={`card-stack__card card-stack__card--index${index}`} profile={profile} onReject={ this.onCardReject.bind(this, [profile.id]) } onLike={ this.onCardLike.bind(this, [profile.id]) } />) }
      </div>
    );
  }
}
