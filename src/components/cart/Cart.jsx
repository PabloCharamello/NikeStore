import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  setCloseCart,
  setClearCartItems,
  selectTotalQty,
  selectTotalAmount,
  setGetTotals,
} from "../../app/reducers/CartSlice.js";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQty);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount
            totalQty={totalQty}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] sroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="fixed buttom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold uppercase">
                    Subtotal
                  </h3>
                  <h3 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h3>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm gfont-medium text-center">
                    Taxes and shipping will calculate at shipping
                  </p>
                  <button className="buttom-theme bg-theme-cart text-white">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
