import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CostumeEnquire from "./CostumeEnquire";
import Modal from "./Modal";

export default function CostumeDetails({ costume, handle }) {
    const [selectedImage, setSelectedImage] = useState(costume.images.cover);
    const [showForm, setShowForm] = useState(false);

    const closeModal = () => setShowForm(false);
    const handleImageClick = (image) => setSelectedImage(image);

    return (
        <div className="bg-white flex justify-center">
            <div className="max-w-7xl w-full">
                <button
                    onClick={() => handle(null)}
                    className="self-start ml-6 mt-8"
                >
                    <FontAwesomeIcon
                        icon={faArrowLeftLong}
                        size="3x"
                        style={{ color: "#FF00F7" }}
                    />
                </button>

                <h1 className="tracking-widest text-4xl sm:text-6xl text-db-pink font-normal mt-4 mb-16 px-4 text-right">
                    {costume.name}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <img
                            src={`/costumesImages/${costume.id}/${selectedImage}`}
                            alt={costume.name}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                        />
                        <div className="flex overflow-x-auto whitespace-nowrap max-w-full h-36">
                            {costume.images.others.map((image) => (
                                <img
                                    key={image}
                                    src={`/costumesImages/${costume.id}/${image}`}
                                    alt={`${costume.name} - Other view`}
                                    onClick={() => handleImageClick(image)}
                                    loading="lazy"
                                    className="inline-block border border-gray-300 hover:border-blue-500 object-cover cursor-pointer w-36 h-36"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full max-w-2xl px-4 lg:px-10">
                        <p className="text-justify font-medium tracking-wider text-slate-800 text-lg mb-8">
                            {costume.description}
                        </p>

                        <div className="font-semibold tracking-widest text-db-pink">
                            <ul className="flex flex-col gap-4  text-lg">
                                {[
                                    { label: "Color", value: costume.color },
                                    { label: "Size", value: costume.size },
                                    {
                                        label: "Material",
                                        value: costume.material,
                                    },
                                    {
                                        label: "Availability",
                                        value: costume.availability,
                                    },
                                    {
                                        label: "Price",
                                        value: `${costume.price}`,
                                    },
                                ].map(({ label, value }) => (
                                    <li key={label}>
                                        {label}:{" "}
                                        <span className="text-slate-700 font-normal">
                                            {value}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="inline-flex justify-center w-full items-center px-6 py-2 mt-16 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-normal text-md text-white tracking-widest hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                                onClick={() => setShowForm(true)}
                            >
                                Enquire
                            </button>
                            <button
                                onClick={() => handle(null)}
                                className="self-start my-8"
                            >
                                <FontAwesomeIcon
                                    icon={faArrowLeftLong}
                                    size="3x"
                                    style={{ color: "#FF00F7" }}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <Modal
                    show={showForm}
                    onClose={closeModal}
                    className="w-full max-w-5xl"
                >
                    <CostumeEnquire costume={costume} />
                </Modal>
            </div>
        </div>
    );
}
