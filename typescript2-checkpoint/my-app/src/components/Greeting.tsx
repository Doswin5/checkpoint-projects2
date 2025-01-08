import React from 'react';

// Step 1: Define an interface for the props
interface GreetingProps {
  name: string; // 'name' is required and should be a string
}

// Step 2: Add type annotation to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Step 3: Export the component
export default Greeting;
