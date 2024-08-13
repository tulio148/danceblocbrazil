import Payment from "./Partials/Payment";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import {
    faCreditCard,
    faTrashCan,
    faAngleDown,
    faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { router } from "@inertiajs/react";
import { Disclosure } from "@headlessui/react";
import { formatDate } from "@/Lib/dateformatter";

export default function Cart({ orders, classes, terms, cards }) {
    return (
        <div className="sm:pt-52 pt-20 px-5 w-full max-w-2xl flex flex-col items-center">
            {cards?.length > 0 && (
                <>
                    <h1 className="w-full tracking-widest text-4xl text-white font-extralight text-right py-10 ">
                        saved cards
                    </h1>
                    <div className="p-4 sm:p-8 w-full border-b bg-gradient-to-br from-white from-50% shadow rounded-xl">
                        {cards.map((card) => {
                            return (
                                <div
                                    className="flex justify-between"
                                    key={card.id}
                                >
                                    <div className="flex justify-between items-end">
                                        {card.brand === "VISA" ? (
                                            <FontAwesomeIcon
                                                icon={faCcVisa}
                                                size="2xl"
                                                style={{
                                                    color: "#FF00F7",
                                                }}
                                            />
                                        ) : card.brand === "MASTERCARD" ? (
                                            <FontAwesomeIcon
                                                icon={faCcMastercard}
                                                size="2xl"
                                                style={{
                                                    color: "#FF00F7",
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faCreditCard}
                                                size="2xl"
                                                style={{
                                                    color: "#FF00F7",
                                                }}
                                            />
                                        )}
                                        <span className="tracking-widest text-lg px-2 ">
                                            ending in
                                        </span>
                                        <span className="tracking-widest text-lg text-db-pink font-medium">
                                            {card.last_4}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() =>
                                            router.delete(`/cards/${card.id}`, {
                                                onBefore: () =>
                                                    confirm(
                                                        "Are you sure you want to delete this card?"
                                                    ),
                                            })
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrashCan}
                                            size="xl"
                                            style={{
                                                color: "#f32013",
                                            }}
                                        />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
            <h1 className="w-full tracking-widest text-4xl text-white font-extralight text-right py-10 ">
                open orders
            </h1>
            {orders?.some((order) => order.state === "OPEN") ? (
                orders.map((order) => {
                    if (order.state === "OPEN") {
                        return (
                            <div
                                key={order.id}
                                className="flex flex-col gap-4 justify-end w-full bg-white border-b px-6 py-6 rounded-xl shadow font-light text-xl text-slate-500"
                            >
                                <div className="flex flex-col gap-5">
                                    {JSON.parse(order.items_ids)?.map(
                                        (id, index, array) => {
                                            let item = null;
                                            const isTerm = terms.some(
                                                (term) => term.id === id
                                            );
                                            if (isTerm) {
                                                item = terms.find(
                                                    (term) => term.id === id
                                                );
                                            } else {
                                                item = classes.find(
                                                    (classItem) =>
                                                        classItem.id === id
                                                );
                                            }
                                            const isLastItem =
                                                index === array.length - 1;
                                            const borderClass = isLastItem
                                                ? "flex flex-wrap gap-4 justify-between w-full items-start pb-1"
                                                : "flex flex-wrap gap-4 justify-between w-full items-start border-b pb-3 border-db-pink/30";
                                            return (
                                                <div
                                                    key={item?.id}
                                                    className={borderClass}
                                                >
                                                    <div className="flex flex-col gap-1 items-start">
                                                        <p className=" tracking-wider">
                                                            {item?.name}
                                                        </p>
                                                        <Link
                                                            href={route(
                                                                "order.delete_class"
                                                            )}
                                                            method="post"
                                                            as="button"
                                                            type="button"
                                                            data={{
                                                                uid: JSON.parse(
                                                                    order.items_uid
                                                                )[index],
                                                                order_id:
                                                                    order.id,
                                                            }}
                                                            className="text-sm font-light tracking-wider underline  decoration-db-pink/30 underline-offset-4"
                                                        >
                                                            remove
                                                        </Link>
                                                    </div>

                                                    <p>${item?.price}</p>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <div className="flex flex-col border-t-2 border-db-pink/40 pt-4 mt-10">
                                    {order.discount_total != null && (
                                        <>
                                            <div className="flex justify-between">
                                                <p>Total</p>
                                                <p>
                                                    $
                                                    {(
                                                        parseFloat(
                                                            order.discount_total
                                                        ) +
                                                        parseFloat(
                                                            order.order_total
                                                        )
                                                    ).toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="flex justify-between border-b mb-4">
                                                <p>Discount</p>
                                                <p>- ${order.discount_total}</p>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex justify-between">
                                        <p>Subtotal</p>
                                        <p>${order.order_total}</p>
                                    </div>
                                </div>
                                <Payment order={order} cards={cards} />
                            </div>
                        );
                    }
                })
            ) : (
                <div className="flex flex-col gap-4 justify-end w-full p-4 sm:p-8 border-b bg-gradient-to-br from-white from-50% rounded-xl shadow font-light tracking-widest text-xl text-slate-500">
                    No open orders.
                </div>
            )}
            {orders?.some((order) => order.state === "COMPLETED") && (
                <>
                    <h1 className="w-full tracking-widest text-4xl text-white font-extralight text-right py-10 ">
                        closed orders
                    </h1>
                    {orders.map((order) => {
                        if (order.state === "COMPLETED") {
                            return (
                                <div
                                    key={order.id}
                                    className="flex flex-col gap-4 justify-end w-full bg-white p-6 mb-10 rounded-xl shadow font-light text-xl text-slate-500 "
                                >
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full text-left flex justify-between">
                                                    <span>
                                                        {formatDate(
                                                            order.updated_at
                                                        )}
                                                    </span>
                                                    <div className="flex gap-4">
                                                        <span>
                                                            ${order.order_total}
                                                        </span>
                                                        {open ? (
                                                            <FontAwesomeIcon
                                                                icon={faAngleUp}
                                                                size="lg"
                                                                style={{
                                                                    color: "#FF00F7",
                                                                }}
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faAngleDown
                                                                }
                                                                size="lg"
                                                                style={{
                                                                    color: "#FF00F7",
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                </Disclosure.Button>

                                                <Disclosure.Panel className="border-t pt-4">
                                                    <div className="flex flex-col gap-5">
                                                        {JSON.parse(
                                                            order.items_ids
                                                        )?.map(
                                                            (
                                                                id,
                                                                index,
                                                                array
                                                            ) => {
                                                                let item = null;
                                                                const isTerm =
                                                                    terms.some(
                                                                        (
                                                                            term
                                                                        ) =>
                                                                            term.id ===
                                                                            id
                                                                    );
                                                                if (isTerm) {
                                                                    item =
                                                                        terms.find(
                                                                            (
                                                                                term
                                                                            ) =>
                                                                                term.id ===
                                                                                id
                                                                        );
                                                                } else {
                                                                    item =
                                                                        classes.find(
                                                                            (
                                                                                classItem
                                                                            ) =>
                                                                                classItem.id ===
                                                                                id
                                                                        );
                                                                }
                                                                const isLastItem =
                                                                    index ===
                                                                    array.length -
                                                                        1;
                                                                const borderClass =
                                                                    isLastItem
                                                                        ? "flex flex-wrap gap-4 justify-between w-full items-start pb-1"
                                                                        : "flex flex-wrap gap-4 justify-between w-full items-start border-b pb-3 border-db-pink/30";
                                                                return (
                                                                    <div
                                                                        key={
                                                                            item?.id
                                                                        }
                                                                        className={
                                                                            borderClass
                                                                        }
                                                                    >
                                                                        <div className="flex flex-col gap-1 items-start">
                                                                            <p className=" tracking-wider">
                                                                                {
                                                                                    item?.name
                                                                                }
                                                                            </p>
                                                                        </div>

                                                                        <p>
                                                                            $
                                                                            {
                                                                                item?.price
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                    <div className="flex justify-between border-t-2 border-db-pink/40 pt-4 mt-10">
                                                        <p>Subtotal</p>
                                                        <p>
                                                            ${order.order_total}
                                                        </p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            );
                        }
                    })}
                </>
            )}
        </div>
    );
}
