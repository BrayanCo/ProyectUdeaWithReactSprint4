import React, { useState } from 'react';
import { dataBase } from './Products';
import { Products } from './Products';

function ShoppingCart() {

    const [shoppingCart, setShoppingCart] = useState([]);
    const divisa = '$';

    const addProductToCart = (id) => {
        const productInCart = shoppingCart.includes(id);

        if (productInCart) {
            alert('Este producto ya está en el carrito.');
        } else {
            setShoppingCart([...shoppingCart, id]);
        }
    };

    const deleteItemCart = (id) => {
        const updatedCart = shoppingCart.filter((item) => item !== id);
        setShoppingCart(updatedCart);
    };

    const calculateTotal = () => {
        return shoppingCart.reduce((total, itemId) => {
            const product = dataBase.find((item) => item.id === itemId);
            return total + product.precio;
        }, 0).toFixed(2);
    };

    const acceptPurchase = () => {

        const total = calculateTotal();

        const productsInCart = shoppingCart.map((itemId) => {
            const product = dataBase.find((item) => item.id === itemId);
            return product;
        });
        let sell = {
            products: productsInCart,
            total: total,
        }
        fetch("/pay", {
            headers: {
                "Content-type": "Application/json",
            },
            method: "POST",
            body: JSON.stringify(sell),
        });
        setShoppingCart([]);
        alert('Su compra fue realizada con éxito');
    };

    const emptyCart = () => {
        setShoppingCart([]);
    };

    return (
        <div className="container">
            <div className="row">
                <main id="items" className="col-sm-10 row">
                    {dataBase.map((product) => (
                        <div key={product.id} className="card col-sm-3 my-2 mx-3">
                            <img className="card-img-top" src={product.imagen} width="60" height="300" alt={product.nombre} />
                            <h5 className="card-title text-center">{product.nombre}</h5>
                            <p className="card-description text-center">{product.descripcion}</p>
                            <div className="card-body">
                                <p className="card-text">{`${divisa} ${product.precio}`}</p>
                                <button className="btn btn-warning" onClick={() => addProductToCart(product.id)}>
                                    Agregar Al Carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
                <aside className="col-sm-2">
                    <h2>Carrito de Compras</h2>
                    <ul id="carrito" className="list-group">
                        {shoppingCart.map((id) => {
                            const product = dataBase.find((item) => item.id === id);
                            return (
                                <li key={product.id} className="list-group-item text-right mx-2">
                                    {`${product.nombre} - ${divisa}${product.precio}`}
                                    <button className="btn btn-danger mx-5" onClick={() => deleteItemCart(product.id)}>
                                        Eliminar
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <hr />
                    <p className="text-right">
                        Total: <span id="total">{divisa}{calculateTotal()}</span>
                    </p>
                    <button id="boton-comprar" className="btn btn-success" onClick={acceptPurchase}>
                        Comprar
                    </button>
                    <button id="boton-vaciar" className="btn btn-danger" onClick={emptyCart}>
                        Vaciar
                    </button>
                </aside>
            </div>
        </div>
    );
}

export { ShoppingCart };