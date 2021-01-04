import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const { loading, error, product } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        dispatch(fetchProductDetails(match.params.id));
    }, [dispatch, match]);

    const qtyOptions = new Array(product.countInStock)
        .fill(0)
        .map((_, index) => (
            <option key={index + 1} value={index + 1}>
                {index + 1}
            </option>
        ));

    const addToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fluid
                        ></Image>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numberOfReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>
                                            {product.countInStock > 0
                                                ? 'In Stock'
                                                : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={(e) =>
                                                        setQty(e.target.value)
                                                    }
                                                >
                                                    {qtyOptions}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCart}
                                        className="btn-block"
                                        type="button"
                                        disabled={
                                            product.countInStock === 0 ||
                                            loading
                                        }
                                    >
                                        Add to cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
