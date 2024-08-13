import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Textarea from "@/Components/Textarea";
import { useState } from "react";
import { TextPlugin } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Contact({ auth }) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.to("#header", {
            text: { value: "Contact Us", rtl: true },
            ease: "power1.inOut",
            duration: 0.5,
        });
    });
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        subject: "",
        content: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contact.contact"), {
            onSuccess: () => {
                setIsOpen(true);
                setTimeout(() => setIsOpen(false), 2000);
            },
        });
    };
    return (
        <Layout user={auth.user}>
            <Head title="Contact" />
            <Modal show={isOpen} className="max-w-2xl">
                <div className="p-6 h-full">
                    <h5 className="text-xl font-medium leading-6 text-center">
                        Success!
                    </h5>
                    <p className="mt-2 text-sm text-gray-500">
                        Your message has been sent.
                    </p>
                </div>
            </Modal>
            <div className="w-full max-w-lg mt-14">
                <h1
                    id="header"
                    className="tracking-widest text-5xl text-white/95  font-medium  p-5 my-16 text-right"
                ></h1>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 w-full max-w-lg p-4"
            >
                <TextInput
                    label="Name"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    placeholder="Name"
                />
                <TextInput
                    label="Email"
                    id="email"
                    name="email"
                    value={data.email}
                    type="email"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    placeholder="Email"
                />
                <TextInput
                    label="Subject"
                    id="subject"
                    name="subject"
                    value={data.subject}
                    onChange={(e) => setData("subject", e.target.value)}
                    required
                    placeholder="Subject"
                />
                <Textarea
                    label="Content"
                    id="content"
                    name="content"
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    required
                    className="h-40"
                />
                <PrimaryButton
                    className=" justify-center w-fit m-auto"
                    disabled={processing}
                >
                    Send Message
                </PrimaryButton>
                {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                )}
            </form>
        </Layout>
    );
}
