import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Table,Button} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import axios from "axios";

function Req_test(props) {
    const user_id = props.match.params.id
    const [completed,setCompleted] = useState([])
    useEffect(()=>{
        axios.get(`/patient/${user_id}/request_test`)
        .then(resp=>{console.log(resp);setCompleted(resp.data)})
        .catch(error=>{console.log(error);})
},[])
    return (
        <div>
             <br/><br/><br/>
            <br/><br/><h2>All Your Test Requests</h2><br/>
            <Row style={{minHeight:"60vh"}}>
                <Col>
                <Table striped bordered hover responsive>
                <thead style={{color:"#fff",backgroundColor:"#2029a4"}}>
                        <tr>
                        <th>Request ID</th>
                        <th>Doctor's Name</th>
                        <th>Test Name</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completed.map((obj,index)=>{
                            return(
                                <tr>
                                    <td>{obj.req_id}</td>
                                    <td>{obj.d_id}</td>
                                    <td>{obj.test_id}</td>
                                    <td>{obj.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </Col>
            </Row>
            <br/>
            <div style={{textAlign:"end"}}> 
            <Link to={`/patient/${user_id}/services/test/request`}>
            <Button style={{backgroundColor:"#300a35",borderRadius:"35px"}} size="lg">
                Request Test &gt;
            </Button>
            </Link>
            </div>
            <br/>
        </div>
    )
}

export default Req_test
