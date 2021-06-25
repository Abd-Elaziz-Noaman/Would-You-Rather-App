import React, { Fragment } from 'react'
import Question from './question'
import { connect } from 'react-redux'

function QuestionsList (props) {
    const {idList, emptyListNote} = props;
    // idList = Array.from(idList)
    console.log("idList", idList)
    return (
        <Fragment>
            {idList && idList.length ? (                                           //test
                Array.from(idList).map((id) => <Question key={id} id={id} />)
            ) : (
                    <p className="text-center">{emptyListNote}</p>
            )
        }
        </Fragment>
    )
}

export default connect()(QuestionsList);