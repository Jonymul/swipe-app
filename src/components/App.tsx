import * as React from 'react';
import { CardStack } from './CardStack';

export class App extends React.Component<{}, {}> {
  render () {
    // Router at this level. Lazy matching for card stack and strict matching for profile.
    return (
      <CardStack />
    );
  }
}
