import * as React from 'react';
import { CardStack } from './CardStack';
import { Logo } from '../images/Logo';
import './App.scss';

export class App extends React.Component<{}, {}> {
  render () {
    // Router at this level. Lazy matching for card stack and strict matching for profile.
    return (
      <div className="app">
        <Logo className="app__logo" />
        <CardStack className="app__stack" />
      </div>
    );
  }
}
