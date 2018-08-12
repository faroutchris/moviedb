import React, {Component} from "react";
import {connect} from 'react-redux';
import {Row, Col} from '../components/Layout';
import {Heading1, Paragraph} from './../components/Typography';

class Discover extends Component {
    render() {
        const {isLoggedIn, user} = this.props.auth;
        return (
            <div>
                <Row>
                    <Col>
                        <Heading1>Discover</Heading1>
                        {isLoggedIn
                            ? <Paragraph>Welcome {user.email}</Paragraph>
                            : null
                        }
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere, turpis a
                            vestibulum rhoncus, lorem neque sollicitudin ligula, non tempus tortor purus a magna. Etiam
                            sagittis turpis ipsum, id scelerisque purus hendrerit vel. Curabitur sed lectus semper ipsum
                            scelerisque aliquam. Nulla facilisi. Fusce mattis nunc sit amet lacus finibus convallis. In
                            rhoncus nibh at nisi tempor semper. Morbi in cursus purus. Maecenas consectetur justo nec
                            eros sagittis ornare. Nunc vel molestie purus. Quisque eleifend tempus suscipit. In faucibus
                            elit eu dui accumsan, ac fermentum magna ultricies. Nam vulputate risus et ligula tempor
                            sollicitudin. Maecenas tristique lobortis diam at dignissim. Suspendisse semper ipsum justo,
                            ut ultrices nisi tempus nec. Ut nec elit pellentesque, suscipit lacus ac, imperdiet libero.
                            In quis arcu eget dui eleifend condimentum.</Paragraph>
                    </Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {})(Discover);
