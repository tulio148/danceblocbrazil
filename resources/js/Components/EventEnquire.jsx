import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Modal from "@/Components/Modal";
import SelectInput from "@/Components/SelectInput";
import Textarea from "./Textarea";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";

export default function EventEnquire({}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        eventType: "",
        guests: "",
        location: "",
        otherInfo: "",
        questions: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.event"), {
            onSuccess: () => {
                setIsOpen(true);
                setTimeout(() => setIsOpen(false), 2000);
            },
        });
    };

    return (
        <>
            <Modal show={isOpen} className="max-w-2xl">
                <div className="p-6 h-full">
                    <h5 className="text-xl font-medium leading-6 text-center">
                        Success!
                    </h5>
                    <p className="mt-2 text-sm text-gray-500">
                        Your inquiry has been sent.
                    </p>
                </div>
            </Modal>
            <form
                onSubmit={submit}
                className="flex flex-col justify-center items-center gap-3 mb-[200px]  "
            >
                <div className="grid sm:grid-cols-2 gap-9 p-4 w-full">
                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Name"
                            className=" font-medium text-xl mb-3 tracking-wider"
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
                            className=" font-medium text-xl mb-3 tracking-wider"
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
                            className=" font-medium text-xl mb-3 tracking-wider"
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
                            value="Date"
                            className=" font-medium text-xl mb-3 tracking-wider "
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

                    <div className="sm:col-span-1">
                        <InputLabel
                            value="Time"
                            className=" font-medium text-xl mb-3 tracking-wider"
                        />
                        <TextInput
                            id="time"
                            name="time"
                            type="time"
                            value={data.time}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("time", e.target.value)}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Event Type"
                            className=" font-medium text-xl mb-3 tracking-wider"
                        />
                        <SelectInput
                            options={[
                                "",
                                "Corporate",
                                "Community",
                                "Wedding",
                                "Birthday",
                                "Other",
                            ]}
                            id="eventType"
                            name="eventType"
                            value={data.eventType}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("eventType", e.target.value)
                            }
                            required
                        ></SelectInput>
                    </div>

                    <div className="sm:col-span-2">
                        <InputLabel
                            value="No. of Guests"
                            className=" font-medium text-xl mb-3 tracking-wider"
                        />
                        <TextInput
                            id="guests"
                            name="guests"
                            type="number"
                            value={data.guests}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("guests", e.target.value)}
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Location"
                            className=" font-medium text-xl mb-3 tracking-wider"
                        />
                        <TextInput
                            id="location"
                            name="location"
                            value={data.location}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <InputLabel
                            value="Other information you’d like us to know"
                            className=" font-medium text-xl mb-3 tracking-wider"
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
                            className=" font-medium text-xl mb-3 tracking-wider"
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
                <PrimaryButton className="mt-1 text-xl" disabled={processing}>
                    Send
                </PrimaryButton>
            </form>
        </>
    );
}
