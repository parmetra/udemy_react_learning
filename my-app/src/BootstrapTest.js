import { Container, Row, Col, Carousel, Button, Form } from 'react-bootstrap';

function ContainerExample() {
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Col>
		<Col>
			<Button variant="info" type="submit">
				Press me
			</Button>
		</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>
			<Carousel>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%82%D0%B5%D1%85%D0%BD%D0%BE-%D0%BE%D0%B3%D0%B8%D0%B8-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-selfie-84774572.jpg"
					alt="First slide"
					/>
					<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://is1-ssl.mzstatic.com/image/thumb/Purple2/v4/88/0d/6c/880d6cc1-6563-02c8-6d0f-e58b7117405e/AppIcon.png/1200x630bb.png"
					alt="Second slide"
					/>

					<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://thumbs.dreamstime.com/b/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%BF%D1%80%D0%B8%D0%B2%D0%BB%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B5-216322612.jpg"
					alt="Third slide"
					/>

					<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;