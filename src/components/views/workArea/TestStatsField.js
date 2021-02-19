export default function TestStatsField () {
      return (
    <React.fragment className="summary-field">
      <p>{this.props.name}:</p>
      <p>Right Answers: {this.props.rightAnswers}</p>
      <p> falseAnswers: {this.props.falseAnswers}</p>
    </React.fragment>
  )
}

