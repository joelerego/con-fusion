import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish != null) {
            return(
                <div className="row">
                    <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>
                            {this.props.dish.name}
                        </CardTitle>
                        <CardText>
                            {this.props.dish.description}
                        </CardText>
                    </CardBody>
                    </Card>
                    <div className="col-12 col-md-5 m-1">
                        {this.props.dish.comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <h6>
                                        {comment.comment}
                                    </h6>
                                    <p>
                                        {comment.author}
                                    </p><p>
                                        {comment.date}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetailComponent
