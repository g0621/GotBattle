import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {fetchAllBattle} from "../../actions/presentActions";
import CardDetailComponent from "../cardDetails/cardDetails.component";
import {Row,Col} from 'reactstrap';

const PresentComponent = (props) => {
    useEffect(() => {
        props.fetchAllBattle();
    }, [])

    const renderBattles = () => {
        return (
            <Row className={'row-ele'}>
                {props.filteredBattles.map((battle) => (
                <Col lg={'4'} md={'6'} sm={'12'} key={battle._id}>
                    <CardDetailComponent data={battle}/>
                </Col>
                ))}
            </Row>
        )
    }
    return (
        <React.Fragment>
            {renderBattles()}
        </React.Fragment>
    )
}

const mapStateToProps = combinedReducers => ({
    allBattles: combinedReducers.present_reducer.allBattles,
    filteredBattles: combinedReducers.present_reducer.filteredBattles,
})

export default connect(mapStateToProps, {fetchAllBattle})(PresentComponent);
