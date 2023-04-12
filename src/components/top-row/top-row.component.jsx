import {Row, Col, Card} from 'react-bootstrap'

const TopRow = () => {
    return (
        <Row>
          <Col>
            <Card>
              <Card.Body className="py-4">
                <div className="card-box">
                  <Row>
                    <Col>
                      <Card.Text
                        className="cardTitle"
                        style={{ height: "2rem" }}
                      >
                        Orders
                      </Card.Text>
                    </Col>
                    <Col
                      id="1"
                      className="icon d-flex align-items-center"
                      xs={5}
                      style={{ width: "2.8rem" }}
                    >
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Col>
                  </Row>
                </div>
                <Card.Title className="py-1">152</Card.Title>
                <Card.Text className="cardText">
                  <span style={{ color: "green" }}>24 new</span> since last
                  visit
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="py-4">
                <div className="card-box">
                  <Row>
                    <Col>
                      <Card.Text
                        className="cardTitle"
                        style={{ height: "2rem" }}
                      >
                        Revenue
                      </Card.Text>
                    </Col>
                    <Col
                      id="two"
                      className="icon d-flex align-items-center"
                      xs={5}
                      style={{ width: "2.4rem" }}
                    >
                      <i class="fa-solid fa-location-dot"></i>
                    </Col>
                  </Row>
                </div>
                <Card.Title className="py-1">$2.100</Card.Title>
                <Card.Text className="cardText">
                  <span style={{ color: "green" }}>%52+</span> since last week
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="py-4">
                <div className="card-box">
                  <Row>
                    <Col>
                      <Card.Text
                        className="cardTitle"
                        style={{ height: "2rem" }}
                      >
                        Customer
                      </Card.Text>
                    </Col>
                    <Col
                      id="three"
                      className="icon d-flex align-items-center"
                      xs={5}
                      style={{ width: "2.4rem" }}
                    >
                      <i class="fa-solid fa-inbox"></i>
                    </Col>
                  </Row>
                </div>
                <Card.Title className="py-1">28441</Card.Title>
                <Card.Text className="cardText">
                  <span style={{ color: "green" }}>520</span> newly registered
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="py-4">
                <div className="card-box">
                  <Row>
                    <Col>
                      <Card.Text
                        className="cardTitle"
                        style={{ height: "2rem" }}
                      >
                        Comment
                      </Card.Text>
                    </Col>
                    <Col
                      id="four"
                      className="icon d-flex align-items-center"
                      xs={5}
                      style={{ width: "2.4rem" }}
                    >
                      <i class="fa-regular fa-comment"></i>
                    </Col>
                  </Row>
                </div>
                <Card.Title className="py-1">152 Unread</Card.Title>
                <Card.Text className="cardText">
                  <span style={{ color: "green" }}>85</span> responded
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    )
}

export default TopRow