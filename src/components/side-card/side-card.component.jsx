import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import './side-card.style.css'


function SideCard() {

  return (
    <>
      <Container fluid className="side-box">
        <Card className="shadow" style={{width: '18rem', overflowY: 'scroll', overflowX: 'hidden', position: 'fixed'}}>
          <Card.Body className="card-container">
            <Card.Title>HOME</Card.Title>
            <Card.Text>
              <Button variant="light">
                <i class="fa-solid fa-house"></i> Dashboard
              </Button>
            </Card.Text>
            <Card.Title>UI COMPONENTS</Card.Title>
            <Card.Text>
              <Button variant="light">
                <i class="fa-solid fa-id-card"></i> Form Layout
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-square-check"></i> Input
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-bookmark"></i> Float Label
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-solid fa-table"></i> Table
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-list"></i> List
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-share-nodes"></i> Tree
              </Button>
            </Card.Text>
            <Card.Title>UTILITIES</Card.Title>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-eye"></i> Free Blocks
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-globe"></i> All Blocks
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-chart-line"></i> Chart
              </Button>
            </Card.Text>
            <Card.Title>HOME</Card.Title>
            <Card.Text>
              <Button variant="light">
                <i class="fa-solid fa-house"></i> Dashboard
              </Button>
            </Card.Text>
            <Card.Title>UI COMPONENTS</Card.Title>
            <Card.Text>
              <Button variant="light">
                <i class="fa-solid fa-id-card"></i> Form Layout
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-square-check"></i> Input
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-bookmark"></i> Float Label
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-solid fa-table"></i> Table
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-list"></i> List
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-share-nodes"></i> Tree
              </Button>
            </Card.Text>
            <Card.Title>UTILITIES</Card.Title>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-eye"></i> Free Blocks
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-globe"></i> All Blocks
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">
                <i class="fa-regular fa-chart-line"></i> Chart
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SideCard;
