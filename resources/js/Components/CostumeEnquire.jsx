import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Modal from "@/Components/Modal";
import Textarea from "./Textarea";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useState, useEffect } from "react";
import Spinner from "@/Components/Spinner";

export default function CostumeEnquire({ costume }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        otherInfo: "",
        questions: "",
        costume_name: costume.name,
    });
    const { success, error } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (success) {
            setIsOpen(true);
            setTimeout(() => setIsOpen(false), 2000);
        }
    }, [success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contact.costume"));
    };

    return (
        <>
            <Modal show={isOpen} className="max-w-2xl">
                <div className="p-6 h-full">
                    {success ? (
                        <>
                            <h5 className="text-xl text-db-pink font-medium leading-6 text-center">
                                Success!
                            </h5>
                            <p className="mt-2 text-sm text-db-pink text-center">
                                Your message has been sent.
                            </p>
                        </>
                    ) : (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                </div>
            </Modal>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-3  "
            >
                <div className="grid sm:grid-cols-2 gap-9 p-4 w-full">
                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Name*"
                            className=" font-medium text-md mb-3 tracking-wider"
                        />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Email*"
                            className=" font-medium text-md mb-3 tracking-wider"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>
                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Phone"
                            className=" font-medium text-md mb-3 tracking-wider"
                        />
                        <TextInput
                            id="phone"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            autoComplete="phone"
                        />

                        <InputError className="mt-2" message={errors.phone} />
                    </div>

                    <div className="sm:col-span-1">
                        <InputLabel
                            value="Hire Date"
                            className=" font-medium text-md mb-3 tracking-wider "
                        />
                        <TextInput
                            id="date"
                            name="date"
                            type="date"
                            value={data.date}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("date", e.target.value)}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Other information you’d like us to know"
                            className=" font-medium text-md mb-3 tracking-wider"
                        />
                        <Textarea
                            id="otherInfo"
                            name="otherInfo"
                            value={data.otherInfo}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("otherInfo", e.target.value)
                            }
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Questions you want to ask us"
                            className=" font-medium text-md mb-3 tracking-wider"
                        />
                        <Textarea
                            id="questions"
                            name="questions"
                            value={data.questions}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("questions", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    {processing ? (
                        <Spinner />
                    ) : (
                        <PrimaryButton
                            className="justify-center w-fit mb-8"
                            disabled={processing}
                        >
                            Send Message
                        </PrimaryButton>
                    )}
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </>
    );
}
