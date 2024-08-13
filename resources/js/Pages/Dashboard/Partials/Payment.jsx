import Modal from "@/Components/Modal";
import { useState } from "react";
import {
    PaymentForm,
    CreditCard,
    GooglePay,
} from "react-square-web-payments-sdk";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
export default function Payment({ order, cards }) {
    const appId = import.meta.env.VITE_SQUARE_APPLICATION_ID;
    const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;

    const [isOpen, setIsOpen] = useState(false);

    const [paymentStatus, setPaymentStatus] = useState(null);
    const [error, setError] = useState(null);

    const [storeCard, setStoreCard] = useState(false);
    const [cardholderName, setCardholderName] = useState("");

    const [showCardComponents, setShowCardComponents] = useState(
        cards.length === 0
    );

    const closeModal = () => {
        setIsOpen(false);
    };

    const openPaymentForm = () => {
        setIsOpen(true);
    };

    const handleCardStorageChange = (e) => {
        setStoreCard(e.target.checked);
    };

    const handleCardholderNameChange = (e) => {
        setCardholderName(e.target.value);
    };

    const showCardComponentsButton = () => {
        setShowCardComponents(true);
    };

    const handlePaymentResponseNewCard = (token, verifiedBuyer) => {
        // console.log(token.status);
        // if (token.status === "OK") {
        //     console.log(token.token);
        //     router.post("/payment", {
        //         token: token.token,
        //         id: id,
        //         amount: amount,
        //         cardholder: cardholderName,
        //         storecard: storeCard,
        //     });
        // } else {
        // }
        // };
        if (token.status === "OK") {
            // console.log(token.token);

            const data = {
                token: token.token,
                id: order.id,
                amount: order.order_total,
                cardholder: cardholderName,
                storecard: storeCard,
            };

            axios
                .post("/payment", data)
                .then((response) => {
                    // console.log(response);
                    if (response.data.status == "success") {
                        setPaymentStatus("success");
                        setTimeout(() => {
                            window.location.href = "/dashboard";
                        }, 2000);
                    } else {
                        setError(response.data.error);
                        setPaymentStatus("error");
                        setTimeout(() => {
                            setPaymentStatus(null);
                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.error("Payment failed:", error);
                });
        } else {
        }
    };

    const handlePaymentResponseStoredCard = (id) => {
        const data = {
            token: id,
            id: order.id,
            amount: order.order_total,
            cardholder: cardholderName,
            storecard: storeCard,
        };

        axios
            .post("/payment", data)
            .then((response) => {
                console.log(response);
                if (response.data.status == "success") {
                    setPaymentStatus("success");
                    setTimeout(() => {
                        window.location.href = "/dashboard";
                    }, 2000);
                } else {
                    setError(response.data.error);
                    setPaymentStatus("error");
                    setTimeout(() => {
                        setPaymentStatus(null);
                    }, 3000);
                }
            })
            .catch((error) => {
                console.error("Payment failed:", error);
            });
    };

    return (
        <>
            <button
                onClick={openPaymentForm}
                className=" self-center inline-flex items-center max-w-fit px-10 py-4 mt-6 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-2xl text-white tracking-widest  hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150 "
            >
                checkout
            </button>
            <Modal show={isOpen} onClose={closeModal} className="max-w-2xl">
                <div className="p-6 h-full">
                    {paymentStatus === "success" ? (
                        <p>Payment Successful!</p>
                    ) : paymentStatus === "error" ? (
                        <p>
                            Payment Unsuccessful <br />
                            <br /> <strong>{error}</strong>
                        </p>
                    ) : (
                        <>
                            <PaymentForm
                                applicationId={appId}
                                cardTokenizeResponseReceived={
                                    handlePaymentResponseNewCard
                                }
                                locationId={locationId}
                                createPaymentRequest={() => ({
                                    countryCode: "AU",
                                    currencyCode: "AUD",
                                    total: {
                                        amount: order.order_total,
                                        label: "Total",
                                    },
                                })}
                            >
                                <GooglePay buttonColor="white" />
                                <div className="pt-10 flex flex-col gap-7">
                                    {cards.map((card) => {
                                        return (
                                            <button
                                                onClick={() =>
                                                    handlePaymentResponseStoredCard(
                                                        card.id
                                                    )
                                                }
                                                className="flex justify-between items-center border p-2 border-db-pink/20   shadow-db-pink "
                                            >
                                                <span className=" pr-2 tracking-widest text-lg text-db-pink  font-medium">
                                                    pay{" "}
                                                </span>
                                                <span className="pr-2 tracking-widest text-lg">
                                                    with{" "}
                                                </span>
                                                {card.brand === "VISA" ? (
                                                    <FontAwesomeIcon
                                                        icon={faCcVisa}
                                                        size="xl"
                                                        style={{
                                                            color: "#FF00F7",
                                                        }}
                                                    />
                                                ) : card.brand ===
                                                  "MASTERCARD" ? (
                                                    <FontAwesomeIcon
                                                        icon={faCcMastercard}
                                                        size="xl"
                                                        style={{
                                                            color: "#FF00F7",
                                                        }}
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faCreditCard}
                                                        size="xl"
                                                        style={{
                                                            color: "#FF00F7",
                                                        }}
                                                    />
                                                )}

                                                <span className="tracking-widest text-lg px-2">
                                                    ending in
                                                </span>
                                                <span className="tracking-widest text-lg text-db-pink font-medium">
                                                    {card.last_4}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                                {!showCardComponents && (
                                    <button
                                        onClick={showCardComponentsButton}
                                        className="text-lg tracking-widest border-b border-db-pink/20 pt-8 ml-2"
                                    >
                                        <span>use another</span>
                                        <span className="text-db-pink pl-2">
                                            card
                                        </span>
                                    </button>
                                )}

                                {showCardComponents && (
                                    <>
                                        <CardStorageCheckbox
                                            isChecked={storeCard}
                                            onChange={handleCardStorageChange}
                                            cardholderName={cardholderName}
                                            onCardholderNameChange={
                                                handleCardholderNameChange
                                            }
                                        />

                                        <CreditCard
                                            buttonProps={{
                                                css: {
                                                    backgroundColor: "#FF00F7",
                                                    fontSize: "20px",
                                                    color: "white",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "#FF80FF",
                                                    },
                                                    fontWeight: "normal",
                                                },
                                            }}
                                            style={{
                                                input: {
                                                    fontSize: "14px",
                                                },
                                                "input::placeholder": {
                                                    color: "#771520",
                                                },
                                            }}
                                        ></CreditCard>
                                    </>
                                )}
                            </PaymentForm>
                            <div className="flex justify-between w-full mt-10 border-b text-lg tracking-wider ">
                                <p className=" font-light tracking-widest">
                                    Subtotal{" "}
                                </p>
                                <p className=" font-medium text-db-pink ">
                                    ${order.order_total}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </>
    );
}

function CardStorageCheckbox({
    isChecked,
    onChange,
    cardholderName,
    onCardholderNameChange,
}) {
    return (
        <div className="grid grid-cols-2 grid-rows-2 pb-4 pt-10">
            <div className="col-span-2">
                <label
                    htmlFor="cardholderName"
                    className="block font-normal text-gray-700"
                ></label>
                <input
                    type="text"
                    id="cardholderName"
                    name="cardholderName"
                    value={cardholderName}
                    onChange={onCardholderNameChange}
                    placeholder="Cardholder's Name"
                    className="p-2 border border-slate-300 rounded-md w-full tracking-wider"
                />
            </div>

            <div className="col-span-1 "></div>

            <div className="col-span-1 place-self-end">
                <label className="flex gap-2 items-center">
                    Save Card
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChange}
                        className="form-checkbox text-db-pink h-5 w-5"
                    />
                </label>
            </div>
        </div>
    );
}
