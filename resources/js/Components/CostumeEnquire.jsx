import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Modal from "@/Components/Modal";
import SelectInput from "@/Components/SelectInput";
import Textarea from "./Textarea";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";

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

    const [isOpen, setIsOpen] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.costume"), {
            onSuccess: () => {
                setIsOpen(true);
                setTimeout(() => setIsOpen(false), 2000);
            },
        });
    };

    return (
        <>
            <Modal show={isOpen} maxWidth="md">
                <div className="p-6 h-full">
                    <h5 className="text-md font-medium leading-6 text-center">
                        Success!
                    </h5>
                    <p className="mt-2 text-sm text-gray-500">
                        Your inquiry has been sent.
                    </p>
                </div>
            </Modal>
            <form
                onSubmit={submit}
                className="flex flex-col justify-center items-center gap-3  "
            >
                <div className="grid sm:grid-cols-2 gap-9 p-4 w-full">
                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Name"
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
                            value="Email"
                            className=" font-medium text-md mb-3 tracking-wider"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
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
                <PrimaryButton className="my-4 text-md" disabled={processing}>
                    Send
                </PrimaryButton>
            </form>
        </>
    );
}
