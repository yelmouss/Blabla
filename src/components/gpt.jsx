
import React from "react";
import openai from 'openai';



class Gpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '7+7'
    };
  }

  componentDidMount() {
    openai.prompt("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")
      .then(response => {
        this.setState({ response: response.choices[0].text });
      });
  }

  render() {
    return (
      <div>
        {this.state.response}
      </div>
    );
  }
}

export default Gpt;