import React from "react";
import Poll from 'react-polls';

class PollClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pollQuestion: "",
            pollAnswers: []
        }
        this.getPollData = this.getPollData.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.getPollData();
    }

    getPollData() {
        const url = "/poll"

        fetch(url).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Couldn't get the poll data.")
                return {
                    question: "No Poll Available",
                    answers: []
                }
            }
        }).then(json => {
            this.setState({
                pollQuestion: json.question,
                pollAnswers: json.answers
            })
        }).catch(error => {
            console.log(error)
        })
    }

    handleVote(voteAnswer) {
        const pollAnswers = this.state.pollAnswers;
        const newPollAnswers = pollAnswers.map((answer) => {
            if (answer.option === voteAnswer) {
                answer.votes = answer.votes + 1;
            }
            return answer
        })

        // Update Database
        // URL for request
        const url = '/poll';

        // Data sent to the request
        const pollData = [
            {"op": "replace", "path": "/answers", "value": newPollAnswers}
        ]

        // Create request constructor with parameters
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(pollData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        // Send Request
        fetch(request).then((res) => {
            if (res.status !== 200) {
                console.log("Couldn't update the database.")
            }
        }).catch(error => {
            console.log(error)
        })

        // Update State
        const newPollAnswersShortened = newPollAnswers.map((answer) => {
            if (answer.option.length > 18) {
                answer.option = answer.option.slice(0, 16) + '...';
            }
            return answer
        })
        this.setState({
            pollAnswers: newPollAnswers
        })
    };

    render() {

        const pollStyles = {
            questionSeparator: true,
            questionSeparatorWidth: 'poll',
            questionBold: true,
            align: 'center',
            theme: 'black'
        }

        return (
            <div>
                <Poll question={this.state.pollQuestion} answers={this.state.pollAnswers} onVote={this.handleVote} customStyles={pollStyles}/>
            </div>
        )
    }
}

export default PollClass