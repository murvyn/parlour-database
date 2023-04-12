import { useContext } from "react";
import MyResponsiveLine from "../chart/chart.component";
import "./dashboard.styles.scss";
import { Card, Row, Col, Table, ListGroup } from "react-bootstrap";
import { DataContext } from "../../context/chart.context";
import TopRow from "../top-row/top-row.component";
const Dashboard = () => {
  const { data } = useContext(DataContext);
  return (
    <>
      <div id="box" className="container me-5">
        
          <TopRow/>
      
        <Row className="mt-4">
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title className="py-3">Recent Sales</Card.Title>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          height="50px"
                          src={require("../../pexels-poyee-tsang-12139724.jpg")}
                          alt="pic"
                        />
                      </td>
                      <td>Bamboo Watch</td>
                      <td>$65.00</td>
                      <td>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          height="50px"
                          src={require("../../pexels-poyee-tsang-12139724.jpg")}
                          alt="pic"
                        />
                      </td>
                      <td>Black Watch</td>
                      <td>$72.00</td>
                      <td>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          height="50px"
                          src={require("../../pexels-poyee-tsang-12139724.jpg")}
                          alt="pic"
                        />
                      </td>
                      <td>Red Watch</td>
                      <td>$60.00</td>
                      <td>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          height="50px"
                          src={require("../../pexels-poyee-tsang-12139724.jpg")}
                          alt="pic"
                        />
                      </td>
                      <td>Red Watch</td>
                      <td>$60.00</td>
                      <td>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          height="50px"
                          src={require("../../pexels-poyee-tsang-12139724.jpg")}
                          alt="pic"
                        />
                      </td>
                      <td>Red Watch</td>
                      <td>$60.00</td>
                      <td>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <div
            className="chartBox"
            style={{
              background: "white",
              height: "26rem",
              borderRadius: "0.3rem",
              width: "39.5rem",
            }}
          >
            <MyResponsiveLine data={data} />
          </div>
        </Row>
        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body className="pb-5">
                <Card.Title>
                  <Row className="pt-3 pb-5">
                    <Col>Best Selling Products</Col>
                    <Col xs={1}>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </Col>
                  </Row>
                </Card.Title>
                <div className="mb-3">
                  <Row>
                    <h6 className="catHead">Space T-Shirt</h6>
                    <Col>
                      <Card.Text className="catText">Customer</Card.Text>
                    </Col>
                    <Col xs={4}>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: "0.5rem" }}
                      >
                        <div
                          class="progress-bar bg-warning"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mb-3">
                  <Row>
                    <h6 className="catHead">Portal Sticker</h6>
                    <Col>
                      <Card.Text className="catText">Accessories</Card.Text>
                    </Col>
                    <Col xs={4}>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="16"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: "0.5rem" }}
                      >
                        <div
                          class="progress-bar bg-info"
                          style={{ width: "16%" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mb-3">
                  <Row>
                    <h6 className="catHead">Supernova Sticker</h6>
                    <Col>
                      <Card.Text className="catText">Accessories</Card.Text>
                    </Col>
                    <Col xs={4}>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="67"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: "0.5rem" }}
                      >
                        <div
                          class="progress-bar"
                          style={{ width: "67%", background: "#a72c40" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mb-3">
                  <Row>
                    <h6 className="catHead">Wonders NoteBook</h6>
                    <Col>
                      <Card.Text className="catText">Office</Card.Text>
                    </Col>
                    <Col xs={4}>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: "0.5rem" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mb-3">
                  <Row>
                    <h6 className="catHead">Mat Black Case</h6>
                    <Col>
                      <Card.Text className="catText">Accessories</Card.Text>
                    </Col>
                    <Col xs={4}>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: "0.5rem" }}
                      >
                        <div
                          class="progress-bar bg-primary"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mb-3">
                  <Row>
                    <h6 className="catHead">Robots T-Shirt</h6>
                    <Col>
                      <Card.Text className="catText">Clothing</Card.Text>
                    </Col>
                    <Col xs={4}>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ height: "0.5rem" }}
                      >
                        <div
                          class="progress-bar bg-danger"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="endCard">
              <Card.Body className="p-4">
                <Card.Title>
                  <Row className="py-3">
                    <Col>Notification</Col>
                    <Col xs={1}>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </Col>
                  </Row>
                </Card.Title>
                <Row>
                  <p className="endTitle">Today</p>
                  <Col
                    xs={1}
                    id="five"
                    className="ms-2 d-flex align-items-center"
                  >
                    <i class="fa-solid fa-dollar-sign"></i>
                  </Col>
                  <Col className="align-self-center">
                    Richard Jones has purchased a blue t-shirt for{" "}
                    <span className="text-primary">79$</span>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col
                    xs={1}
                    id="six"
                    className="ms-2 d-flex align-items-center"
                  >
                    <i class="fa-solid fa-download"></i>
                  </Col>
                  <Col className="align-self-center">
                    Your request for withdrawal of{" "}
                    <span className="text-primary">2500$</span>has been
                    initiated.{" "}
                  </Col>
                </Row>
                <Row>
                  <p className="endTitle mt-3">Yesterday</p>
                  <Col
                    xs={1}
                    id="five"
                    className="ms-2 d-flex align-items-center"
                  >
                    <i class="fa-solid fa-dollar-sign"></i>
                  </Col>
                  <Col className="align-self-center">
                    Keyser Wick has purchased a black jacket for{" "}
                    <span className="text-primary">59$</span>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col
                    xs={1}
                    id="seven"
                    className="ms-2 d-flex align-items-center"
                  >
                    <i class="fa-solid fa-question"></i>
                  </Col>
                  <Col className="align-self-center">
                    Jane Davis has posted a new questions about your product.
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <footer>
          Done by <span> Marvin</span>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
