import React, { Component } from 'react';

// Step 1: Define an interface for the state
interface CounterState {
  count: number; // 'count' is required and should be a number
}

// Step 2: Create the class component and specify state type
class Counter extends Component<{}, CounterState> {
  // Step 3: Define the initial state with proper type
  state: CounterState = {
    count: 0,
  };

  // Step 4: Type-safe increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 5: Export the component
export default Counter;
